import { AppRoute, LocalStorageKey } from '@/constant';

export const setLastHref = (href: string) => {
  if (href.includes(AppRoute.LOGIN) || href.includes(AppRoute.REGISTER)) {
    return;
  }

  localStorage.setItem(LocalStorageKey.LAST_HREF, href);
};
export const removeLastHref = () => {
  localStorage.removeItem(LocalStorageKey.LAST_HREF);
};

export const getLastHref = () => {
  try {
    return localStorage.getItem(LocalStorageKey.LAST_HREF);
  } catch {
    return;
  }
};
