import { PlaygroundType } from '@/generated';

export const getPlaygroundTypeIcon = (type?: PlaygroundType): string => {
  switch (type) {
    case PlaygroundType.Basketball:
      return '🏀';
    case PlaygroundType.Soccer:
      return '⚽';
    case PlaygroundType.Badminton:
      return '🏸';
    case PlaygroundType.Tennis:
      return '🎾';
    case PlaygroundType.Pickleball:
      return '🏓';
    case PlaygroundType.Billiard:
      return '🎱';
    case PlaygroundType.TableTennis:
      return '🏓';
    case PlaygroundType.Volleyball:
      return '🏐';
    default:
      return '';
  }
};
