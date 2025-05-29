import { bffClient } from '@/bff-client';
import { ImageSize } from '@/constant';
import { UploadImageDocument } from '@/generated';
import { getBase64, resizeImage } from '@/lib';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

interface IUploadAvatarProps {
  onChange?: (file: UploadFile) => void;
  value?: UploadFile;
}

type UploadAvatarRef = {
  onSubmit: () => Promise<void>;
};

export const UploadAvatar = forwardRef(
  (props: IUploadAvatarProps, ref: Ref<UploadAvatarRef>) => {
    const { value } = props;
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

    useImperativeHandle(ref, () => {
      return {
        onSubmit,
      };
    }, [onSubmit]);
    useEffect(() => {
      if (value) {
        setFile(value);
      }
    }, [value]);

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

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
      const newFile = newFileList[0] || null;

      if (props.onChange) {
        props.onChange(newFile);
      }
      setFile(newFile);
    };
    const uploadButton = <p>Add</p>;

    return (
      <div className="[&>*]:m-0">
        <Upload
          accept="image/*"
          multiple={false}
          listType="picture-circle"
          fileList={file ? [file] : []}
          onPreview={handlePreview}
          onChange={onChange}
          beforeUpload={() => false}
          className="text-gray-200 opacity-1"
        >
          {file ? null : uploadButton}
        </Upload>
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
            width={400}
            height={400}
          />
        </Modal>
      </div>
    );
  }
);

UploadAvatar.displayName = 'UploadAvatar';
