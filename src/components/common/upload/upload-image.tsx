import './upload.scss';

import { bffClient } from '@/bff-client';
import { ImageSize } from '@/constant';
import { UploadImageDocument } from '@/generated';
import { getBase64, resizeImage } from '@/lib';
import { Modal, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface IUploadCoverImageProps {
  className?: string;
  useShadow?: boolean;
  previewWidth?: number;
  previewHeight?: number;
  onChange?: (file: UploadFile) => void;
  value?: UploadFile;
}

type UploadImageRef = {
  onSubmit: () => Promise<void>;
};

export const UploadImage = forwardRef(
  (props: IUploadCoverImageProps, ref: Ref<UploadImageRef>) => {
    const {
      className,
      useShadow,
      previewWidth = 400,
      previewHeight = 400,
      value,
    } = props;

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [file, setFile] = useState<UploadFile>();
    const client = bffClient.getInstance();

    const onSubmit = useCallback(async () => {
      if (!file) return;
      try {
        const resizedFile = await resizeImage(
          file.originFileObj as RcFile,
          ImageSize.COVER_WIDTH,
          ImageSize.COVER_HEIGHT
        );
        await client.mutate({
          mutation: UploadImageDocument,
          variables: {
            file: resizedFile,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }, [file, client]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as RcFile);
      }

      setPreviewImage(file.url || (file.preview as string));
      setPreviewOpen(true);
      setPreviewTitle(
        file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
      );
    };

    const beforeUpload = (file: RcFile) => {
      const newFile: UploadFile<RcFile> =
        {
          uid: file.uid,
          name: file.name,
          status: 'done',
          originFileObj: file,
        } || null;

      if (props?.onChange) {
        props.onChange(newFile);
      }
      setFile(newFile);

      return false;
    };

    const handleRemove = () => {
      const newFile = null as unknown as UploadFile<RcFile>;
      if (props?.onChange) {
        props.onChange(newFile);
      }
      setFile(newFile);
    };

    useImperativeHandle(ref, () => {
      return {
        onSubmit,
      };
    }, [onSubmit]);

    useEffect(() => {
      setFile(value);
    }, [value]);

    return (
      <div
        className={twMerge(
          '[&>*]:m-0 w-full upload-cover-image relative overflow-hidden',
          !file && 'border-2 border-gray-200 border-dashed',
          className
        )}
      >
        {useShadow && file && (
          <div className="bg-gradient-to-t from-black to-transparent absolute w-full h-full z-10 opacity-60 transition" />
        )}
        <ImgCrop showGrid showReset rotationSlider aspect={1.8}>
          <Upload
            accept="image/*"
            multiple={false}
            listType="picture-card"
            onPreview={handlePreview}
            onRemove={handleRemove}
            fileList={file ? [file] : []}
            previewFile={async (file) => await getBase64(file as RcFile)}
            className="text-gray-200 opacity-1 w-full h-full"
            beforeUpload={beforeUpload}
          >
            {file ? null : <p className="text-zinc-400">Click to Upload</p>}
          </Upload>
        </ImgCrop>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="Menu Avatar"
            style={{ width: '100%' }}
            src={previewImage}
            width={previewWidth}
            height={previewHeight}
          />
        </Modal>
      </div>
    );
  }
);

UploadImage.displayName = 'UploadCoverImage';
