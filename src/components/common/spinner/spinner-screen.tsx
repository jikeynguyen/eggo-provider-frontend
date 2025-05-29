import { Spinner } from '@/components/common/spinner/spinner';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  boxClassName?: string;
  type?: 'primary' | 'secondary';
}

export default function SpinnerScreen({
  className,
  boxClassName,
  type,
  ...rest
}: Props) {
  return (
    <div className={twMerge('w-full h-[100vh]', boxClassName)} {...rest}>
      <Spinner spinnerClassName={twMerge('size-12', className)} type={type} />
    </div>
  );
}
