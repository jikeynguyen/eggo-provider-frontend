import { AdvancedMarker } from '@vis.gl/react-google-maps';

interface IRadarMarkerProps {
  position: google.maps.LatLngLiteral;
}

export const RadarMarker = ({ position }: IRadarMarkerProps) => {
  return (
    <AdvancedMarker position={position}>
      <span className='relative flex h-3 w-'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75' />
        <span className='relative inline-flex rounded-full h-3 w-3 bg-primary' />
      </span>
    </AdvancedMarker>
  );
};
