import { RadarMarker } from '@/components/common/map/radar-marker';
import { MAP_ZOOM, SaiGonCoords } from '@/constant/map.constant';
import { Map } from '@vis.gl/react-google-maps';
import { LocateFixedIcon } from 'lucide-react';
import { memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export type LatLng = {
  lat: number;
  lng: number;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  center: LatLng;
  mapId: string;
  onMapClick?: (latLng: LatLng) => void;
  disabled?: boolean;
  focus?: boolean;
  map: google.maps.Map | null;
}

function PlaygroundMap({
  className,
  center,
  mapId,
  onMapClick,
  disabled = false,
  focus = false,
  map,
  ...rest
}: Props) {
  const userPosition = { ...center };

  const onCurrentPosition = () => {
    map?.panTo(userPosition);
  };

  useEffect(() => {
    onCurrentPosition();
  }, [userPosition]);

  return (
    <div
      className={twMerge(
        'h-full relative rounded-xl',
        focus ? 'ring-4 ring-primary' : 'ring-0 ring-white',
        className
      )}
      {...rest}
    >
      <Map
        mapId="b5387d230c6cf22f"
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '0.75rem',
          border: 'none',
          outline: 'none',
        }}
        defaultCenter={center}
        id={mapId}
        disableDefaultUI
        defaultZoom={MAP_ZOOM.BASE}
        gestureHandling={'greedy'}
        onClick={(e) => {
          if (disabled) return;
          const newCenter = {
            lat: e.detail.latLng?.lat || SaiGonCoords.lat,
            lng: e.detail.latLng?.lng || SaiGonCoords.lng,
          };
          map?.panTo(newCenter);
          onMapClick?.(newCenter);
        }}
      >
        <RadarMarker position={userPosition} />
      </Map>
      <span
        className="absolute top-2 right-2 glassmorphism cursor-pointer"
        onClick={onCurrentPosition}
      >
        <LocateFixedIcon
          strokeWidth={1.5}
          size={22}
          className="stroke-primary"
        />
      </span>
    </div>
  );
}

const MemoizedPlaygroundMap = memo(PlaygroundMap, (prev, next) => {
  return (
    prev.center.lat === next.center.lat &&
    prev.center.lng === next.center.lng &&
    prev.map === next.map
  );
});

export default MemoizedPlaygroundMap;
