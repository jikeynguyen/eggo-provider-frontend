import { useAddressFromCorsLazyQuery } from '@/hooks/query/address-from-cors-query.hook';
import { useEffect, useState } from 'react';

interface ICoordinates {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface IMapControl {
  detectedLocation: ICoordinates | null;
}

export const useMapControl = (): IMapControl => {
  const [detectedLocation, setDetectedLocation] = useState<ICoordinates | null>(
    null
  );

  const [fetch] = useAddressFromCorsLazyQuery();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator?.geolocation?.getCurrentPosition(function (detected) {
        const position: ICoordinates = {
          latitude: detected.coords.latitude,
          longitude: detected.coords.longitude,
        };

        fetch(position.latitude, position.longitude)
          .then((res) => {
            const data = res.data;
            const address = data.results.find((result) =>
              result.types.includes('premise')
            )?.formatted_address;

            setDetectedLocation({
              ...position,
              address,
            });
          })
          .catch(() => {
            setDetectedLocation(position);
          });
      });
    }
  }, []);

  return {
    detectedLocation,
  };
};
