import { LatLng } from '@/features/playground/create-playground/playground-map';

export function createGoogleMapURLFromCoords(coords: LatLng) {
  return `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`;
}
