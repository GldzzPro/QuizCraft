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
import { removeUselessChars } from "@/helpers/formatData";


const Breadcrumbs = () => {
  const paths: string = usePathname();
  const pathnames: string[] = paths.split("/").filter((path) => path);
  const filteredPathnames = removeUselessChars(pathnames)
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {filteredPathnames.map((link: string, index: number) => {
          const href: string = `/${filteredPathnames
            .slice(0, index + 1)
            .join("/")}`;
          const linkName: string =
            link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath: boolean = filteredPathnames.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem key={index} className="cursor-pointer">
                {isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {filteredPathnames.length !== index + 1 && (
                <BreadcrumbSeparator />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
