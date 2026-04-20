"use client";

import React from "react";
import Image from "next/image";
import { 
  GalleryGrid, 
  GalleryGridCell, 
  ContainerStagger, 
  ContainerAnimated 
} from "@/components/cta-section-with-gallery";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  "/about_us_gallery_1_1776665007724.png",
  "/about_us_gallery_2_1776665034050.png",
  "/about_us_gallery_3_1776665060128.png",
  "/about_us_gallery_4_1776665085700.png",
];

export default function AboutUsSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <ContainerStagger className="space-y-8">
            <ContainerAnimated>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                About Our Vision
              </div>
            </ContainerAnimated>
            
            <ContainerAnimated>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                Bridging the Gap Between <br />
                <span className="text-zinc-500">Design & Engineering</span>
              </h2>
            </ContainerAnimated>
            
            <ContainerAnimated>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                We believe that the best digital products are born at the intersection of aesthetic excellence and technical precision. Our mission is to empower developers with tools that look as good as they perform.
              </p>
            </ContainerAnimated>
            
            <ContainerAnimated className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Immaculate Detail</h4>
                    <p className="text-sm text-zinc-500">Every pixel is curated for perfection.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">High Performance</h4>
                    <p className="text-sm text-zinc-500">Optimized for speed and fluid interactions.</p>
                  </div>
                </div>
              </div>
            </ContainerAnimated>

            <ContainerAnimated className="pt-6">
              <button className="inline-flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors group">
                Learn more about our process
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </ContainerAnimated>
          </ContainerStagger>

          {/* Image Gallery */}
          <div className="relative">
            <GalleryGrid className="lg:scale-110">
              {IMAGES.map((src, i) => (
                <GalleryGridCell key={i} index={i} className="border border-white/10 bg-zinc-900 shadow-2xl">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                </GalleryGridCell>
              ))}
            </GalleryGrid>
            
            {/* Glass Card Overlay */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hidden sm:block max-w-[200px]">
              <p className="text-xs text-white/60 font-medium mb-1 uppercase tracking-tighter">Established</p>
              <p className="text-2xl font-bold text-white tracking-widest">2024</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
