import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRAND",
  description: "Sign in or sign up to access your business dashboard.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>H&M</h1>
    </>
  );
}
