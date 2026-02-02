import Insights from "@/components/Insights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspectives - One Path Solutions Blog",
  description: "Explore the latest trends, insights, and expert perspectives on technology, design, and business innovation from our team of industry professionals.",
  openGraph: {
    title: "Insights & Perspectives - One Path Solutions Blog",
    description: "Explore the latest trends, insights, and expert perspectives on technology, design, and business innovation from our team of industry professionals.",
    type: "website",
  },
};

export default function InsightsPage() {
  return <Insights />;
}