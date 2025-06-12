import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password",
  description: "Change your account password securely.",
};

export default function Layout1({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
