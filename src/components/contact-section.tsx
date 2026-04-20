"use client";

import React from "react";
import { Contact2 } from "@/components/contact-2";

export default function ContactSection() {
  return (
    <Contact2 
      title="Scale with Aurora"
      description="Ready to elevate your infrastructure? Our team of edge-native architects is ready to help you deploy at global scale."
      phone="+1 (555) AURORA-EDGE"
      email="hello@aurora.network"
      web={{ label: "aurora.network", url: "https://aurora.network" }}
    />
  );
}
