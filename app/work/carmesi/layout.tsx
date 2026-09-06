import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carmesi — Not Her Job · Social Campaign",
  description:
    "An interactive Instagram takeover concept for Carmesi's #NotHerJob campaign — nine posts imagined post by post, built to pull men into a conversation the brand has never had with them.",
};

export default function CarmesiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
