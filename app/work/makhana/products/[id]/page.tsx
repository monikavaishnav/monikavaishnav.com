import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { PRODUCT_IDS, getProduct } from "@/lib/products";
import ProductView from "./ProductView";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export async function generateStaticParams() {
  return PRODUCT_IDS.map((id) => ({ id }));
}

// Static export requires every path to be known at build time — no on-demand
// fallback rendering for ids outside PRODUCT_IDS.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  return { title: product ? `मaka — ${product.name}` : "मaka — Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className={spaceMono.variable}>
      <ProductView product={product} />
    </div>
  );
}
