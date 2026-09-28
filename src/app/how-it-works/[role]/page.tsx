import { notFound } from "next/navigation";
import HowItWorksPage from "@/components/HowItWorksPage";

type Role = "customer" | "merchant" | "technician";
const VALID: Role[] = ["customer", "merchant", "technician"];

export function generateStaticParams() {
  return VALID.map((role) => ({ role }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!VALID.includes(role as Role)) notFound();
  return <HowItWorksPage role={role as Role} />;
}
