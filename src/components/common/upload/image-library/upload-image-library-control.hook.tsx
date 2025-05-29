import { ImageSize } from '@/constant';
import { Image, useUploadImageMutation } from '@/generated';
import {
  getBase64,
  getCustomCloudflareUrl,
  getPublicVariant,
  resizeImage,
} from '@/lib';
import { GetProp } from 'antd';
import type { RcFile } from 'antd/es/upload';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';

// interface IUploadImageControlProps {}

export interface IUploadImageControl {
  previewOpen: boolean;
  previewImage: string;
  fileList: UploadFile[];
  handleClosePreview: () => void;
  handlePreview: (file: UploadFile) => void;
  onChange: UploadProps['onChange'];
  customRequest: UploadProps['customRequest'];
  handleLoadImages: (images: Image[]) => void;
  setPreviewOpen: (open: boolean) => void;
  setPreviewImage: (image: string) => void;
  selectedFile: UploadFile | null;
  handleSelectFile: (id: string) => void;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const useUploadImageControl = (): IUploadImageControl => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<UploadFile | null>(null);

  const [uploadImage] = useUploadImageMutation();

  const customRequest: UploadProps['customRequest'] = async (options) => {
    const { file } = options;

    options.onProgress?.({ percent: 0 });
    const resizedFile = (await resizeImage(
      file as RcFile,
      ImageSize.COVER_WIDTH,
      ImageSize.COVER_HEIGHT
    )) as any;

    // Don't delete this line
    resizedFile.name = (file as RcFile).name;

    options.onProgress?.({ percent: 50 });
    uploadImage({
      variables: {
        file: resizedFile,
      },
      onCompleted: (data) => {
        const publicUrl = getPublicVariant(data?.uploadSingle?.variants);
        const url = getCustomCloudflareUrl(publicUrl, {
          width: ImageSize.AVATAR,
          height: ImageSize.AVATAR,
        });
        options.onProgress?.({ percent: 100 });
        options.onSuccess?.(url);

        // Change uid to the id from the server
        setFileList((prev) =>
          prev.map((item) => {
            const stringId = String(data.uploadSingle.id);
            if (item.uid === (file as RcFile).uid) {
              const newItem = item;
              newItem.uid = stringId;
              newItem.url = publicUrl;
              newItem.thumbUrl = url;
              return newItem;
            }
            return item;
          })
        );
      },
      onError: (error) => {
        console.error(error);
        options.onError?.(error);
      },
    });
  };

  const handleClosePreview = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleLoadImages = (images: Image[]) => {
    const newFileList: UploadFile[] = images.map((image) => {
      const url = getPublicVariant(image.variants);
      return {
        uid: String(image.id),
        name: image.filename,
        status: 'done',
        url,
        thumbUrl: getCustomCloudflareUrl(url, {
          width: ImageSize.AVATAR,
          height: ImageSize.AVATAR,
        }),
      };
    });
    setFileList(newFileList);
  };

  const handleSelectFile = (id: string) => {
    const file = fileList.find((item) => item.uid === id);
    setSelectedFile(file || null);
  };

  return {
    previewOpen,
    previewImage,
    fileList,
    handleClosePreview,
    handlePreview,
    onChange,
    customRequest,
    handleLoadImages,
    setPreviewImage,
    setPreviewOpen,
    selectedFile,
    handleSelectFile,
  };
};
