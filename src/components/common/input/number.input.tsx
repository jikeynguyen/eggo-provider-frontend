import * as React from 'react';

import { cn } from '@/lib/utils';

export interface NumberInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightAddOn?: string;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, rightAddOn, ...props }, ref) => {
    return (
      <div className={cn('relative')}>
        <input
          type="text"
          ref={ref}
          {...props}
          className={cn(
            'flex h-10 w-full pr-14 rounded-md border border-input bg-transparent pl-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
        />
        {rightAddOn && (
          <span className="text-zinc-500 rounded-tr-md rounded-br-md bg-input bg-zinc-100 h-full flex items-center px-2 absolute right-0 top-0">
            {rightAddOn}
          </span>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'Input';

export { NumberInput };
