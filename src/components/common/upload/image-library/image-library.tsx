import { Checkbox } from '@/components/ui/checkbox';
import { Image } from '@/generated';
import { useCommonTranslation } from '@/hooks';
import { getKey } from '@/lib';
import { Pagination, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../../spinner/spinner';
import { ICheckboxControl } from './checkbox-control';
import { usePaginateImageControl } from './paginate-image-control';
import { IUploadImageControl } from './upload-image-library-control.hook';

interface IImageLibraryProps {
  uploadControl: IUploadImageControl;
  className?: string;
  checkboxControl: ICheckboxControl;
}
export default function ImageLibrary(props: IImageLibraryProps) {
  const { uploadControl, className, checkboxControl } = props;
  const commonTrans = useCommonTranslation();
  const paginateControl = usePaginateImageControl({
    pageSize: 20,
  });

  useEffect(() => {
    uploadControl.handleLoadImages(paginateControl.items as Image[]);
  }, [paginateControl.items]);

  return (
    <>
      <div className="h-full flex flex-col overflow-auto">
        {paginateControl?.loading ? (
          <Spinner />
        ) : (
          <div className={twMerge(className, 'flex-1')}>
            <ImgCrop showGrid showReset rotationSlider aspect={1.8}>
              <Upload
                accept="image/*"
                multiple={false}
                listType="picture-card"
                className="text-gray-200 opacity-1 w-full h-full"
                itemRender={(item, file) => {
                  return (
                    <div className="h-full w-full relative p-1 rounded-lg border-[1px] border-gray-200">
                      <Checkbox
                        key={getKey('image-library-checkbox', file.uid)}
                        checked={checkboxControl.selectedValue === file.uid}
                        onClick={() => checkboxControl.onChange(file.uid)}
                        className="absolute top-2 right-2 z-10 bg-white"
                      />
                      {item}
                    </div>
                  );
                }}
                customRequest={uploadControl.customRequest}
                fileList={uploadControl.fileList}
                onPreview={uploadControl.handlePreview}
                onChange={uploadControl.onChange}
              >
                {
                  <p className="text-zinc-400 px-1">
                    {commonTrans('ClickToUpload')}
                  </p>
                }
              </Upload>
            </ImgCrop>
          </div>
        )}
      </div>
      <Pagination
        className="mt-auto w-full flex justify-center"
        showSizeChanger
        {...paginateControl}
      />
    </>
  );
}
