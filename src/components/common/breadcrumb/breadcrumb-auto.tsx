import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useCommonTranslation } from '@/hooks';
import { getKey } from '@/lib';
import React from 'react';

interface IBreadcrumbAutoProps {
  lastItemName?: string;
  rightAddon?: React.ReactNode;
}
export const BreadcrumbAuto = (props: IBreadcrumbAutoProps) => {
  const path = window.location.pathname;
  const pathArray = path.split('/').filter((item) => item);
  const { lastItemName, rightAddon } = props;
  const commonTrans = useCommonTranslation();

  return (
    <div className="w-full flex items-center justify-between mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">EGGO</BreadcrumbLink>
          </BreadcrumbItem>

          {pathArray.map((item, index) => {
            const isLastItem = index === pathArray.length - 1;
            const name =
              isLastItem && lastItemName
                ? lastItemName
                : item.replace(/^\w/, (c) => c.toUpperCase());
            const translated = commonTrans(name);

            return (
              <React.Fragment key={getKey('breadcrumb', item, index)}>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={index}>
                  {isLastItem ? (
                    translated
                  ) : (
                    <BreadcrumbLink href={`/${item}`}>
                      {translated}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      {rightAddon}
    </div>
  );
};
