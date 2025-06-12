import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retailer Information",
  description: "View and manage your retailer information.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
