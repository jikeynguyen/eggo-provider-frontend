import './image-library.scss';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  useCommonTranslation,
  useDisclosure,
  useFormTranslation,
} from '@/hooks';
import { Image as ReviewImage, UploadFile } from 'antd';
import { Image as ImageIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useCheckboxControl } from './checkbox-control';
import ImageLibrary from './image-library';
import { useUploadImageControl } from './upload-image-library-control.hook';

interface IUploadImageLibraryProps {
  onChange?: (value: UploadFile | null) => void;
}

export default function UploadImageLibrary(props: IUploadImageLibraryProps) {
  const commonTrans = useCommonTranslation();
  const formTrans = useFormTranslation();

  const uploadControl = useUploadImageControl();
  const checkboxControl = useCheckboxControl();
  const dialogDisclosure = useDisclosure();

  const onConfirm = () => {
    uploadControl.handleSelectFile(checkboxControl.selectedValue);
    dialogDisclosure.close();
  };

  const onCancel = () => {
    checkboxControl.onChange(uploadControl.selectedFile?.uid || '');
    dialogDisclosure.close();
  };

  useEffect(() => {
    props?.onChange?.(uploadControl.selectedFile);
  }, [uploadControl.selectedFile]);

  return (
    <Dialog
      open={dialogDisclosure.isOpen}
      onOpenChange={(open) => {
        if (open) {
          dialogDisclosure.open();
        } else {
          dialogDisclosure.close();
        }
      }}
    >
      <DialogTrigger className="w-full">
        <Button variant="outline" className="w-full">
          <div className="flex gap-4 justify-center items-center text-zinc-00">
            <p>{commonTrans('SelectImage')}</p>
            <ImageIcon size={24} />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen full-screen md:w-[calc(100vw-200px)] md:h-[calc(100svh-200px)] flex flex-col justify-between">
        <DialogHeader className="h-fit">
          <DialogTitle>{formTrans('UploadImageLibrary.Title')}</DialogTitle>
          <DialogDescription>
            {formTrans('UploadImageLibrary.Description')}
          </DialogDescription>
        </DialogHeader>

        {/* Image library here */}
        {uploadControl.previewImage && (
          <ReviewImage
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: uploadControl.previewOpen,
              onVisibleChange: (visible) =>
                uploadControl.setPreviewOpen(visible),
              afterOpenChange: (visible) =>
                !visible && uploadControl.setPreviewImage(''),
            }}
            src={uploadControl.previewImage}
          />
        )}

        <ImageLibrary
          className="flex-1"
          uploadControl={uploadControl}
          checkboxControl={checkboxControl}
        />

        <DialogFooter className="">
          <Button variant="outline" className="w-full  mt-2" onClick={onCancel}>
            {commonTrans('Cancel')}
          </Button>
          <Button
            className="w-full mt-2"
            onClick={onConfirm}
            disabled={
              uploadControl.selectedFile?.uid === checkboxControl.selectedValue
            }
          >
            {commonTrans('Confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
