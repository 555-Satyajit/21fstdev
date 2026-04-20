"use client"

import { motion } from "framer-motion"
import { 
  Activity, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight, 
  Layers
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const stats = [
    {
      title: "Active Edge Nodes",
      value: "1,284",
      change: "+12.5%",
      icon: Cpu,
      color: "text-lime-400",
    },
    {
      title: "Global Traffic",
      value: "42.8 TB",
      change: "+24.2%",
      icon: Zap,
      color: "text-amber-400",
    },
    {
      title: "Network Latency",
      value: "14ms",
      change: "-2.4%",
      icon: Activity,
      color: "text-emerald-400",
    },
    {
      title: "Security Shield",
      value: "Active",
      change: "100%",
      icon: ShieldCheck,
      color: "text-blue-400",
    },
  ]

  return (
    <div className="p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase italic">
            Network Overview
          </h1>
          <p className="text-zinc-400 mt-1">
            Real-time diagnostics from the Aurora decentralized edge.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
          <button className="px-3 py-1.5 text-xs font-semibold bg-lime-400 text-black rounded-md">
            24 Hours
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white">
            7 Days
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white">
            30 Days
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-zinc-900 border-white/5 hover:border-lime-400/30 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <stat.icon className="size-24 scale-150" />
              </div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`size-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`text-[10px] font-bold ${stat.change.startsWith('+') || stat.change === '100%' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stat.change}
                  </span>
                  <span className="text-[10px] text-zinc-600 uppercase tracking-tighter">vs last period</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Charts area placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-zinc-900 border-white/5 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Globe className="size-4 text-lime-400" />
                Global Infrastructure Density
              </CardTitle>
              <ArrowUpRight className="size-4 text-zinc-600" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-full h-full relative group">
              {/* Simulated Map / Grid visualization */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border border-white/10 rounded-sm"></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="size-32 bg-lime-400/20 rounded-full blur-3xl absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    />
                    <Layers className="size-20 text-lime-400/40 relative z-10" />
                    <div className="absolute -top-4 -right-4 bg-zinc-800 border border-white/10 px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap">
                      US-EAST-1: ACTIVE
                    </div>
                 </div>
              </div>
              <div className="absolute bottom-0 w-full text-center pb-4">
                 <p className="text-[10px] font-mono text-zinc-600 animate-pulse">
                    RECEIVING HANDSHAKES FROM 14 GLOBAL ZONES...
                 </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Activity className="size-4 text-lime-400" />
              Live Neural Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 font-mono text-[11px]">
               {[
                 { time: "16:26:01", msg: "SHARD_ALLOCATION_SUCCESSFUL", zone: "EU-WEST" },
                 { time: "16:25:58", msg: "NEURAL_SYNAPSE_RECALIBRATED", zone: "APAC" },
                 { time: "16:25:42", msg: "DDoS_DEFENSE_ENGAGED", zone: "GLOBAL" },
                 { time: "16:25:31", msg: "LATENCY_OPTIMIZATION_RUN", zone: "US-WEST" },
                 { time: "16:25:10", msg: "NEW_NODE_JOINED_CLUSTER", zone: "AFRICA" },
               ].map((log, i) => (
                 <div key={i} className="flex items-start gap-3 text-zinc-500 border-l border-white/5 pl-3 py-1">
                    <span className="text-lime-400 opacity-50">{log.time}</span>
                    <div className="flex flex-col">
                       <span className="text-zinc-300">{log.msg}</span>
                       <span className="text-[9px] opacity-30">{log.zone}</span>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-6 py-2 border border-white/5 rounded text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors">
              View All Logs
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
