"use client";

import React from "react";
import { motion } from "framer-motion";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BannerSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-zinc-950">
      <GooeyFilter id="banner-goo" strength={20} />
      
      {/* Liquid Blobs Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 md:opacity-60"
        style={{ filter: "url(#banner-goo)" }}
      >
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-lime-400/80 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full bg-white/60 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 80, -100, 0],
            y: [0, 120, -40, 0],
            scale: [1.2, 1, 0.7, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/3 w-56 h-56 rounded-full bg-zinc-400/50 blur-xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Ready to Forge the <span className="text-lime-400 italic">Future?</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400"
          >
            Join the decentralized revolution. Our edge-native infrastructure is scaling global intelligence, one node at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <Button 
              size="lg" 
              className="group h-14 px-8 bg-white text-black hover:bg-zinc-200 text-lg font-bold rounded-full overflow-hidden transition-all shadow-xl shadow-lime-400/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle border accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
