"use client";

import React from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Rocket, Cpu, Activity, Globe, Zap, Shield } from "lucide-react";

/**
 * Interface TimelineItem {
 *   id: number;
 *   title: string;
 *   date: string;
 *   content: string;
 *   category: string;
 *   icon: React.ElementType;
 *   relatedIds: number[];
 *   status: "completed" | "in-progress" | "pending";
 *   energy: number;
 * }
 */

const ROADMAP_DATA: any[] = [
  {
    id: 1,
    title: "Foundations",
    date: "Q4 2024",
    content: "Initial research and core systems architecture design for a decentralized edge network.",
    category: "Architecture",
    icon: Rocket,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Core Protocol",
    date: "Q1 2025",
    content: "Implementation of the low-latency communication protocol and alpha testing.",
    category: "Development",
    icon: Cpu,
    relatedIds: [1, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 3,
    title: "Scale Benchmarking",
    date: "Q2 2025",
    content: "Subjecting the prototype to high-throughput stress tests and scaling simulations.",
    category: "Testing",
    icon: Activity,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 65,
  },
  {
    id: 4,
    title: "Global Node Edge",
    date: "Q3 2025",
    content: "Deploying the first wave of global edge nodes to optimize regional performance.",
    category: "Infrastructure",
    icon: Globe,
    relatedIds: [3, 5],
    status: "pending",
    energy: 20,
  },
  {
    id: 5,
    title: "Neural Integration",
    date: "Q4 2025",
    content: "Deep integration of machine learning pipelines for real-time edge intelligence.",
    category: "Intelligence",
    icon: Zap,
    relatedIds: [4, 6],
    status: "pending",
    energy: 10,
  },
  {
    id: 6,
    title: "Universal Shield",
    date: "Q1 2026",
    content: "Hardening security protocols and official worldwide public availability.",
    category: "Security",
    icon: Shield,
    relatedIds: [5],
    status: "pending",
    energy: 5,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-black py-24">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Product Roadmap</h2>
        <p className="mt-4 text-lg text-zinc-400">
          Our journey toward the future of edge-native intelligence.
        </p>
      </div>
      <div className="h-[800px] w-full border-y border-white/5">
        <RadialOrbitalTimeline timelineData={ROADMAP_DATA} />
      </div>
    </section>
  );
}
