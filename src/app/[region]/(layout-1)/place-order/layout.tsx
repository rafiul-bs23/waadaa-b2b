import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place Order",
  description: "Place an order for your products.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
