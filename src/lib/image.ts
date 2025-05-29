import { NotFoundImage } from '@/constant';
import { RcFile, UploadFile } from 'antd/es/upload';
import Resizer from 'react-image-file-resizer';
import { Image } from '../generated';

const FLEXIBLE_IMAGE_VARIANT = 'public';

interface IFlexibleImageVariantOptions {
  width: number;
  height: number;
  blur?: number;
}

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const getPublicVariant = (variants?: string[] | null) => {
  const publicVariant = variants?.find((variant) => variant.includes('public'));
  return publicVariant || NotFoundImage;
};

export const convertImageToUploadFile = (image?: Image): UploadFile => {
  if (!image) {
    return undefined as unknown as UploadFile;
  }

  const publicVariant = getPublicVariant(image.variants);
  return {
    uid: String(image.id),
    name: image.filename,
    status: 'done',
    url: publicVariant,
    thumbUrl: publicVariant,
  };
};

export const getCustomCloudflareUrl = (
  url: string,
  options: IFlexibleImageVariantOptions
) => {
  const { width, height, blur } = options;
  const query = [];

  if (width) {
    query.push(`w=${width}`);
  }
  if (height) {
    query.push(`h=${height}`);
  }

  if (blur) {
    query.push(`blur=${blur}`);
  }
  return url.replace(FLEXIBLE_IMAGE_VARIANT, query.join(','));
};

export function resizeImage(file: File, maxWidth: number, maxHeight: number) {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'blob'
    );
  });
}
