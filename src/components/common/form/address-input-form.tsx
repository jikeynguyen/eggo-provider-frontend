import { FormDescription } from '@/components/ui/form';
import { InputProps } from '@/components/ui/input';
import { MAP_ZOOM, MapID, SaiGonCoords } from '@/constant';
import MemoizedPlaygroundMap, {
  LatLng,
} from '@/features/playground/create-playground/playground-map';
import { useFormTranslation } from '@/hooks';
import { useAddressFromCorsLazyQuery } from '@/hooks/query/address-from-cors-query.hook';
import { createGoogleMapURLFromCoords } from '@/lib/map.helper';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Select } from 'antd';
import { debounce } from 'lodash';
import { MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { BaseForm, IControlledFormProps } from './base-form';

interface AddressInputFormProps
  extends InputProps,
    Omit<IControlledFormProps, 'control'> {
  name: string;
  methods: UseFormReturn<any>;
  showMap?: boolean;
}

interface IAutoCompleteResult {
  place_id: string;
  description: string;
}

interface IAddressMapLatLng extends LatLng {
  bypass?: boolean;
}

export const AddressInputForm = (props: AddressInputFormProps) => {
  const {
    label,
    description,
    name,
    optional,
    methods,
    showMap = false,
  } = props;

  const [fetchAddress] = useAddressFromCorsLazyQuery();

  const [results, setResults] = useState<IAutoCompleteResult[]>([]);
  const [mode, setMode] = useState<'search' | 'pick'>('search');
  const [loading, setLoading] = useState(false);
  const placesLib = useMapsLibrary('places');
  const formTrans = useFormTranslation();
  const map = useMap(MapID.CREATE_PLAYGROUND);

  const watchLocation = methods.watch('location');

  const onValueChange = debounce((value: string) => {
    if (!placesLib) return;
    setMode('search');
    map?.setZoom(MAP_ZOOM.BASE);

    setLoading(true);
    const svc = new placesLib.AutocompleteService();
    svc.getPlacePredictions(
      { input: value, locationBias: SaiGonCoords, region: 'vn' },
      (response, status) => {
        if (status === 'OK') {
          setResults(response || []);
        }
        setLoading(false);
      }
    );
  }, 500);

  const onSelected = (
    result: IAutoCompleteResult,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    if (!placesLib || !map) return;
    const svc = new placesLib.PlacesService(map);

    svc.getDetails({ placeId: result.place_id }, (place, status) => {
      if (status === 'OK' && place) {
        const location = place.geometry?.location;

        if (location) {
          const latitude = location.lat();
          const longitude = location.lng();

          field.onChange({
            latitude,
            longitude,
            address: place.formatted_address,
          });
          map?.setZoom(MAP_ZOOM.DETAIL);
          setMode('pick');
        }
      }
    });
  };

  const onMapClick = (center: IAddressMapLatLng) => {
    if (center.bypass) {
      setMode('search');
      return;
    }

    const latitude = center.lat;
    const longitude = center.lng;

    fetchAddress(latitude, longitude)
      .then((res) => {
        const data = res.data;
        const address = data.results.find((result) =>
          result.types.includes('premise')
        )?.formatted_address;

        methods.setValue('location', {
          latitude,
          longitude,
          address,
        });
      })
      .catch(() => {
        methods.setValue('location', {
          latitude,
          longitude,
          address: '',
        });
      })
      .finally(() => {
        setMode('pick');
      });
  };

  const options = useMemo(() => {
    return results?.map((result) => ({
      value: result.place_id,
      label: result.description,
    }));
  }, [results]);

  return (
    <>
      <BaseForm
        control={methods.control}
        name={name}
        label={label}
        description={description}
        optional={optional}
        render={(field) => (
          <div className="relative">
            <Select
              size="large"
              value={field.value.address}
              filterOption={false}
              loading={loading}
              className="w-full"
              showSearch
              onSearch={onValueChange}
              options={options}
              onChange={(value) => {
                const result = results.find((r) => r.place_id === value);
                if (result) {
                  onSelected(result, field);
                }
              }}
              optionRender={(option) => (
                <div className="text-sm flex gap-2 py-2">
                  <MapPin size={20} className="stroke-primary min-w-[20px]" />
                  <span>{option.label}</span>
                </div>
              )}
            />
            <FormDescription className="mt-2">
              {mode === 'search'
                ? results === null || results?.length === 0
                  ? formTrans('Playground.AddressInputMode.Search')
                  : formTrans('Playground.AddressInputMode.Select')
                : formTrans('Playground.AddressInputMode.Confirm')}
            </FormDescription>
          </div>
        )}
      />
      {showMap && (
        <MemoizedPlaygroundMap
          className="mt-4"
          map={map}
          mapId={MapID.CREATE_PLAYGROUND}
          center={{
            lat: watchLocation.latitude,
            lng: watchLocation.longitude,
          }}
          onMapClick={onMapClick}
          disabled={mode === 'search'}
          focus={mode === 'pick'}
        />
      )}
      {mode === 'pick' && (
        <div className="mt-4">
          <a
            className="text-primary font-light hover:underline cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={createGoogleMapURLFromCoords({
              lat: watchLocation.latitude,
              lng: watchLocation.longitude,
            })}
          >
            {formTrans('Playground.AddressInputMode.SeeOnMap')}
          </a>
        </div>
      )}
    </>
  );
};
