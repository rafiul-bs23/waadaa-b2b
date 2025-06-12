import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outlet Information",
  description: "View your outlet information and settings.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
