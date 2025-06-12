import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
  description: "View your order details here.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
