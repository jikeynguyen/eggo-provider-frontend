import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getKey } from '@/lib';
import React from 'react';

interface ICustomBreadcrumbProps {
  lastItemName?: string;
  rightAddon?: React.ReactNode;
  items: {
    name: string;
    href: string;
  }[];
}

export const CustomBreadcrumb = (props: ICustomBreadcrumbProps) => {
  const { lastItemName, rightAddon, items } = props;

  return (
    <div className="w-full flex items-center justify-between mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">EGGO</BreadcrumbLink>
          </BreadcrumbItem>

          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            const name = isLastItem && lastItemName ? lastItemName : item.name;

            return (
              <React.Fragment key={getKey('breadcrumb', item.name, index)}>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={index}>
                  {isLastItem ? (
                    name
                  ) : (
                    <BreadcrumbLink href={item.href}>{name}</BreadcrumbLink>
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
