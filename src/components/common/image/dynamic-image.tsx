import { getCustomCloudflareUrl } from '@/lib';
import { twMerge } from 'tailwind-merge';

interface IDynamicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
}

function DynamicImage(props: IDynamicImageProps) {
  const { src, alt, width, height, className, imageClassName, onClick } = props;

  const url = getCustomCloudflareUrl(src, { width, height });
  const blurUrl = getCustomCloudflareUrl(src, { width, height, blur: 250 });

  return (
    <div
      onClick={onClick}
      className={twMerge('w-full h-full', className)}
      style={{
        backgroundImage: `url(${blurUrl})`,
      }}
    >
      <img
        loading="lazy"
        width={width}
        height={height}
        alt={alt}
        src={url}
        className={twMerge('w-full h-full object-cover', imageClassName)}
      />
    </div>
  );
}

export default DynamicImage;
