import { twMerge } from 'tailwind-merge';
import { ShadowCoverImage } from '../image/shadow-cover-image';
interface IShadowImageCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
  className?: string;
}

export const ShadowImageCard = (props: IShadowImageCardProps) => {
  const { src, alt, title, subTitle, className, ...rest } = props;
  return (
    <a
      {...rest}
      className={twMerge(
        'relative rounded-xl overflow-hidden hover:opacity-90 cursor-pointer',
        className
      )}
    >
      <ShadowCoverImage
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 w-full h-full flex flex-col justify-end">
        <h1 className="text-white text-xl font-bold">{title}</h1>
        <p className="text-zinc-300 text-sm truncate">{subTitle}</p>
      </div>
    </a>
  );
};
