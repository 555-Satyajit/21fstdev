import { SessionNavBar } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <SessionNavBar />
      <main className="flex-1 overflow-y-auto pl-[3.05rem] md:pl-[3.05rem]">
        <div className="h-full w-full bg-zinc-950/50 backdrop-blur-3xl border-l border-white/5">
          {children}
        </div>
      </main>
    </div>
  )
}
