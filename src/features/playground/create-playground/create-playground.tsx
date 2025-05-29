import { Button } from '@/components/ui/button';
import { AppRoute, SaiGonCoords, TimeSlotUnit } from '@/constant';
import { useCreatePlaygroundMutation } from '@/generated';
import { useCommonTranslation, useMapControl } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PlaygroundFormSchema, {
  TPlaygroundFormSchema,
} from '../playground-schema.zod';
import { PlaygroundForm } from '../playground.form';

export const CreatePlayground = () => {
  const navigate = useNavigate();
  const methods = useForm<TPlaygroundFormSchema>({
    resolver: zodResolver(PlaygroundFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      openDates: [],
      openHour: 0,
      closeHour: 0,
      timeSlotUnit: TimeSlotUnit.DURATION_30,
      type: undefined,
      location: {
        address: '',
        latitude: SaiGonCoords.lat,
        longitude: SaiGonCoords.lng,
      },
    },
  });
  const commonTrans = useCommonTranslation();
  const [createPlayground, { loading, error }] = useCreatePlaygroundMutation();
  const onSubmit = (data: TPlaygroundFormSchema) => {
    const { location, image, ...rest } = data;
    createPlayground({
      variables: {
        input: {
          ...rest,
          ...location,
          timeSlotUnit: Number(data.timeSlotUnit),
          coverImageId: Number(image?.uid),
        },
      },
      onCompleted: (data) => {
        navigate(`${AppRoute.PLAYGROUND}/${data.createPlayground.id}`);
      },
    });
  };
  const mapControls = useMapControl();

  useEffect(() => {
    if (!mapControls.detectedLocation) return;

    methods.setValue('location', {
      latitude: mapControls.detectedLocation.latitude,
      longitude: mapControls.detectedLocation.longitude,
      address: mapControls.detectedLocation.address || '',
    });
  }, [mapControls.detectedLocation]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <div className="flex justify-center max-w-md mx-auto flex-col gap-8 md:max-w-full items-center">
        <PlaygroundForm methods={methods} />
        {error && <span className="text-red-500">{error.message}</span>}
        <Button
          onClick={methods.handleSubmit(onSubmit)}
          loading={loading}
          className="max-w-md w-full"
        >
          {commonTrans('Create')}
        </Button>
      </div>
    </APIProvider>
  );
};
