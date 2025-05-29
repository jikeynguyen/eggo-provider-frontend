import { AddressInputForm } from '@/components/common/form/address-input-form';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCommonTranslation, useFormTranslation } from '@/hooks';
import { UseFormReturn } from 'react-hook-form';
import { TPlaygroundFormSchema } from '../playground-schema.zod';

interface IAddressDrawerProps {
  methods: UseFormReturn<TPlaygroundFormSchema>;
}

export default function AddressDrawer(props: IAddressDrawerProps) {
  const { methods } = props;
  const formTrans = useFormTranslation();
  const commonTrans = useCommonTranslation();
  const address = methods.watch('location.address');

  return (
    <Drawer>
      <DrawerTrigger className="outline-none h-fit w-full">
        <div className="flex flex-col gap-2 items-start">
          <FormLabel>{formTrans('Playground.Address.Label')}</FormLabel>
          <Input
            placeholder={commonTrans('Address')}
            value={address}
            className="cursor-pointer hover:bg-zinc-100"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className="outline-none h-full rounded-none p-4 md:p-8">
        <DrawerHeader>
          <DrawerTitle className="text-center">
            {formTrans('Playground.PickLocation')}
          </DrawerTitle>
          <DrawerDescription className="text-center">
            {formTrans('Playground.PickLocationDescription')}
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-w-xl mx-auto md:mt-8 h-[40svh]">
          <AddressInputForm
            methods={methods}
            name="location"
            label={formTrans('Playground.Address.Label')}
            placeholder={formTrans('Playground.Address.Placeholder')}
            showMap
          />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full max-w-md">
              {commonTrans('Close')}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
