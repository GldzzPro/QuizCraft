"use client";
import React, { Fragment, useEffect } from "react";
import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Breadcrumb,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Breadcrumbs = () => {
  const paths: string = usePathname();
  const pathnames: string[] = paths.split("/").filter((path) => path);
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
       
        {pathnames.map((link: string, index: number) => {
          const href: string = `/dashboard/${pathnames
            .slice(0, index + 1)
            .join("/")}`;
          const linkName: string = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath: boolean = pathnames.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem key={index} className="cursor-pointer">
                {isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href} >{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathnames.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
