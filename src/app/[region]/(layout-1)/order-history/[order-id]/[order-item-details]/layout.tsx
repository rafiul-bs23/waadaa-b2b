import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Item Details",
  description: "View the details of your order item.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
