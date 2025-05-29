import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { FormField, FormLabel } from '@/components/ui/form';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { HourCode } from '@/constant';
import { useDisclosure } from '@/hooks';
import { getDisplayHour, getKey } from '@/lib';
import { cn } from '@/lib/utils';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

const HourInput = (props: {
  control: UseFormReturn<any>['control'];
  name: string;
  placeholder?: string;
  label: string;
}) => {
  const { control, name, placeholder, label } = props;
  const popoverDisclosure = useDisclosure();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-4 w-full">
          <FormLabel>{label}</FormLabel>
          <Popover
            open={popoverDisclosure.isOpen}
            onOpenChange={(isOpen) => {
              if (isOpen) {
                popoverDisclosure.open();
              } else {
                popoverDisclosure.close();
              }
            }}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={popoverDisclosure.isOpen}
                className="w-full justify-between"
              >
                {field.value ? (
                  getDisplayHour(field.value as string)
                ) : (
                  <span className="text-zinc-300">{placeholder}</span>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[180px] p-0">
              <Command>
                <CommandInput placeholder="Search Time" />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {HourCode.map((hour) => {
                      const stringHour = String(hour);
                      return (
                        <CommandItem
                          key={getKey('hour-code', hour)}
                          value={stringHour}
                          onSelect={(currentValue) => {
                            field.onChange(Number(currentValue));
                            popoverDisclosure.close();
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              field.value === stringHour
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {getDisplayHour(stringHour)}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

export default HourInput;
