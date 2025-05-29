import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to access your business dashboard.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
