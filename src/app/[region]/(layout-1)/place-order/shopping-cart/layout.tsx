import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "View and manage items in your shopping cart.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
