import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICES } from "@/data/services";

const VALID_IDS = ["repair", "clean", "massage", "errand", "market", "jobs"] as const;
type ServiceId = typeof VALID_IDS[number];

export function generateStaticParams() {
  return VALID_IDS.map((id) => ({ id }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!VALID_IDS.includes(id as ServiceId)) notFound();
  return <ServiceDetailPage id={id as ServiceId} />;
}
