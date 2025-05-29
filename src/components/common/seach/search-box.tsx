import { Spinner } from '@/components/common/spinner/spinner';
import { Command, CommandInput, CommandList } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useFormTranslation } from '@/hooks/i18n';
import { debounce } from 'lodash';
import React, { useState } from 'react';

interface ISearchBoxProps {
  loading: boolean;
  trigger: React.ReactNode;
  content: (close?: () => void) => React.ReactNode;
  onValueChange: (value: string) => void;
  debounceTime?: number;
}

export default function SearchBox(props: ISearchBoxProps) {
  const { loading, trigger, content, debounceTime = 700 } = props;
  const [open, setOpen] = useState(false);
  const formTrans = useFormTranslation();

  const debounceSearch = debounce((value: string) => {
    if (!value) return;
    props?.onValueChange(value);
  }, debounceTime);

  const close = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="cursor-pointer">
        {trigger}
      </PopoverTrigger>
      <PopoverContent className="w-80 min-w-full p-0">
        <Command>
          <CommandInput
            placeholder={formTrans('SuggestPlayground.SearchExisting')}
            onValueChange={(value) => debounceSearch(value)}
          />
          {loading && (
            <Spinner className="relative flex cursor-default select-none items-center rounded-sm px-2 py-4 text-sm outline-none" />
          )}
          <CommandList>{content(close)}</CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
