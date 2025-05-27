"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { defaultPath } from "@/middleware";

import { useSiteSettingsStore } from "@/stores";

import { decode, kebabToTitleCase } from "@/utils/helper";

import { BaseBreadCrumbProps } from "@/types/reusables/base-breadcrumb";

const BaseBreadCrumb = ({ items = [] }: Partial<BaseBreadCrumbProps>) => {
  const pathname = usePathname();
  const { region } = useSiteSettingsStore();
  items = items.length
    ? items
    : pathname
        .split("/")
        .filter(Boolean)
        .map((value, index, array) => {
          const decodedValue = decode(value);
          const label = decodedValue.includes("-")
            ? kebabToTitleCase(decodedValue)
            : decodedValue;

          return {
            label,
            url: "/" + array.slice(0, index + 1).join("/"),
          };
        });
  items?.shift();
  items.unshift({ label: "Home", url: `/${region}/${defaultPath}` });

  return <BreadCrumb items={items} />;
};

const BreadCrumb = ({ items }: BaseBreadCrumbProps) => {
  const breadcrumbListRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!breadcrumbListRef?.current) return;

    breadcrumbListRef.current.scrollTo({
      left: breadcrumbListRef.current.scrollWidth,
      behavior: "smooth",
    });
  }, [items]);

  return (
    <nav aria-label="breadcrumb" className={`base-breadcrumb`}>
      <ol className="base-breadcrumb-list" ref={breadcrumbListRef}>
        {items.map((item, index) => (
          <li key={index} className="base-breadcrumb-item">
            {item.label === "Item Details" ? (
              <span className="base-breadcrumb-item-title">{item.label}</span>
            ) : index === items.length - 1 ? (
              <span className="base-breadcrumb-item-title">{item.label}</span>
            ) : (
              <Link href={item.url} className="base-breadcrumb-item-link">
                <span className="base-breadcrumb-item-title">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BaseBreadCrumb;
