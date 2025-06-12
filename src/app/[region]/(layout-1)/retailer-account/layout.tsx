import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retailer Account",
  description: "Manage your retailer account and settings.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
