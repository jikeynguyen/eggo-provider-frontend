import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  styleType?: 'default' | 'glassmorphism';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, styleType = 'default', ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            styleType === 'glassmorphism' && 'glassmorphism',
            styleType === 'default' &&
              'bg-background border-input placeholder:text-muted-foreground',
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };
