import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order History",
  description: "View your order history here.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
