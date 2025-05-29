import { twMerge } from 'tailwind-merge';
import DynamicImage from './dynamic-image';

interface IShadowCoverImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const ShadowCoverImage = (props: IShadowCoverImageProps) => {
  const { src, alt, width, height, className } = props;
  return (
    <div className={twMerge('relative', className)}>
      <div className="bg-gradient-to-t from-black to-transparent absolute top-0 bottom-0 left-0 right-0" />
      <DynamicImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </div>
  );
};
