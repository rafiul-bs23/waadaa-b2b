import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Out",
  description: "Complete your purchase and check out.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
