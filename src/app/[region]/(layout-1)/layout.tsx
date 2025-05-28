import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand",
  description: "Sign in or sign up to access your business dashboard.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
