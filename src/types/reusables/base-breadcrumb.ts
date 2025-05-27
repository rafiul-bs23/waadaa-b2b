export interface BreadcrumbItem {
  label: string;
  url: string;
}

export interface BaseBreadCrumbProps {
  items: BreadcrumbItem[];
}
