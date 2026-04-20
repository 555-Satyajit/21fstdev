"use client";

import React from "react";
import { Gallery4, Gallery4Item } from "@/components/gallery4";

const SERVICE_ITEMS: Gallery4Item[] = [
  {
    id: "discovery",
    title: "Strategic Discovery",
    description: "Deep research and user analysis to define a robust product roadmap and market strategy.",
    href: "#",
    image: "/services/service_discovery_1_1776665762713.png",
  },
  {
    id: "design",
    title: "Premium Design",
    description: "High-end UI/UX design that combines aesthetic excellence with intuitive user experiences.",
    href: "#",
    image: "/services/service_design_1_1776665822704.png",
  },
  {
    id: "engineering",
    title: "Modern Engineering",
    description: "Scalable web applications built with the latest cloud-native technologies and frameworks.",
    href: "#",
    image: "/services/service_engineering_1_1776665879326.png",
  },
  {
    id: "deployment",
    title: "Global Deployment",
    description: "Seamless orchestration and automated CI/CD pipelines to ship your products at scale.",
    href: "#",
    image: "/services/service_deployment_1_1776665906705.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <Gallery4 
          title="Our Services" 
          description="We provide comprehensive digital solutions from initial discovery to global deployment, ensuring your product is built for success."
          items={SERVICE_ITEMS}
        />
      </div>
    </section>
  );
}
