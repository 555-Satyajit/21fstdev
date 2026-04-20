"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Pencil, 
  Trash2, 
  Server, 
  Activity,
  History,
  ShieldAlert
} from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { TaskDialog, type EdgeTask } from "@/components/task-dialog"
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const INITIAL_TASKS: EdgeTask[] = [
  {
    id: "1",
    title: "Latent Compute Sync",
    node: "Node-US-East",
    priority: "High",
    status: "Online",
    timestamp: "2026-04-20 14:32",
  },
  {
    id: "2",
    title: "Neural Mesh Calibration",
    node: "Node-EU-West",
    priority: "Medium",
    status: "Syncing",
    timestamp: "2026-04-20 15:10",
  },
  {
    id: "3",
    title: "Edge Storage Scrub",
    node: "Node-APAC-South",
    priority: "Low",
    status: "Maintenance",
    timestamp: "2026-04-20 12:45",
  },
]

export default function EdgeNodesPage() {
  const [tasks, setTasks] = React.useState<EdgeTask[]>([])
  const [loading, setLoading] = React.useState(true)
  const [search, setSearch] = React.useState("")
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [editingTask, setEditingTask] = React.useState<EdgeTask | undefined>()

  React.useEffect(() => {
    const q = query(collection(db, "edge_tasks"), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Format timestamp if it exists
        timestamp: doc.data().createdAt?.toDate()?.toISOString().slice(0, 16).replace('T', ' ') || 'Syncing...'
      })) as EdgeTask[]
      setTasks(taskList)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const filteredTasks = tasks.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) || 
    t.node.toLowerCase().includes(search.toLowerCase())
  )

  const handleSaveTask = async (data: Omit<EdgeTask, "id" | "timestamp"> & { id?: string }) => {
    try {
      if (data.id) {
        // Edit
        const taskRef = doc(db, "edge_tasks", data.id)
        await updateDoc(taskRef, {
          title: data.title,
          node: data.node,
          priority: data.priority,
          status: data.status,
          updatedAt: serverTimestamp()
        })
        toast.success("Task Synchronized", {
          description: `Operational parameters updated for ${data.title}.`
        })
      } else {
        // Add
        await addDoc(collection(db, "edge_tasks"), {
          title: data.title,
          node: data.node,
          priority: data.priority,
          status: data.status,
          createdAt: serverTimestamp()
        })
        toast.success("Task Provisioned", {
          description: `New task ${data.title} has been broadcast to the edge.`
        })
      }
    } catch (error: any) {
      toast.error("Database Error", { description: error.message })
    }
    setEditingTask(undefined)
  }

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteDoc(doc(db, "edge_tasks", id))
      toast.error("Task Revoked", {
        description: `Deployment was terminated from the cloud.`
      })
    } catch (error: any) {
      toast.error("Deletion Failed", { description: error.message })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online": return "bg-emerald-400/10 text-emerald-400 border-emerald-400/20";
      case "Syncing": return "bg-lime-400/10 text-lime-400 border-lime-400/20 animate-pulse";
      case "Maintenance": return "bg-amber-400/10 text-amber-400 border-amber-400/20";
      case "Offline": return "bg-rose-400/10 text-rose-400 border-rose-400/20";
      default: return "";
    }
  }

  return (
    <div className="p-6 md:p-10 space-y-8">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2">
              <Server className="size-3" />
              <span>DASHBOARD</span>
              <span>/</span>
              <span className="text-lime-400">EDGE NODES</span>
           </div>
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase italic">
            Deployment Matrix
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage provisioned tasks across your decentralized infrastructure.
          </p>
        </div>
        
        <Button 
          onClick={() => {
            setEditingTask(undefined)
            setDialogOpen(true)
          }}
          className="bg-lime-400 text-black hover:bg-lime-500 font-bold px-6 h-11"
          nativeButton={true}
        >
          <Plus className="size-4 mr-2" />
          Provision New Task
        </Button>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-lime-400 transition-colors" />
          <Input 
            placeholder="Search tasks, nodes, or status code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-zinc-900 border-white/5 focus:border-lime-400/30 h-11"
          />
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="border-white/5 text-zinc-400 hover:text-white h-11 px-4">
              <Activity className="size-4 mr-2" />
              Diagnostics
           </Button>
           <Button variant="outline" className="border-white/5 text-zinc-400 hover:text-white h-11 px-4">
              <History className="size-4 mr-2" />
              History
           </Button>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-zinc-900/50 rounded-xl border border-white/5 overflow-hidden backdrop-blur-md">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="hover:bg-transparent border-white/5">
              <TableHead className="text-xs uppercase font-bold tracking-wider py-4">Task Vision</TableHead>
              <TableHead className="text-xs uppercase font-bold tracking-wider py-4">Status</TableHead>
              <TableHead className="text-xs uppercase font-bold tracking-wider py-4">Node Affinity</TableHead>
              <TableHead className="text-xs uppercase font-bold tracking-wider py-4">Priority</TableHead>
              <TableHead className="text-xs uppercase font-bold tracking-wider py-4">Last Sync</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="popLayout">
              {loading ? (
                <TableRow>
                   <TableCell colSpan={6} className="h-64 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                         <Activity className="size-12 text-lime-400 animate-pulse" />
                         <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Retrieving Neural Matrix...</div>
                      </div>
                   </TableCell>
                </TableRow>
              ) : filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <motion.tr
                    key={task.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="border-white/5 hover:bg-white/[0.02] group"
                  >
                    <TableCell className="py-5">
                      <div className="font-semibold text-white group-hover:text-lime-400 transition-colors">
                        {task.title}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
                        ID: {task.id.slice(0, 8)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`font-mono text-[10px] border px-2 py-0.5 rounded-sm ${getStatusColor(task.status)}`}>
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <Server className="size-3 opacity-50" />
                        {task.node}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={`text-xs font-bold ${
                        task.priority === 'High' ? 'text-amber-500' :
                        task.priority === 'Medium' ? 'text-zinc-300' :
                        'text-zinc-500'
                      }`}>
                        {task.priority}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-zinc-500 font-mono italic">
                      {task.timestamp}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="hover:bg-white/10">
                            <MoreVertical className="size-4 text-zinc-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-zinc-900 border-white/10 text-white">
                          <DropdownMenuItem 
                            onClick={() => {
                              setEditingTask(task)
                              setDialogOpen(true)
                            }}
                            className="gap-2 cursor-pointer focus:bg-lime-400 focus:text-black"
                          >
                            <Pencil className="size-3" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteTask(task.id)}
                            className="gap-2 cursor-pointer focus:bg-rose-500 text-rose-500 focus:text-white"
                          >
                            <Trash2 className="size-3" /> Terminate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                       <ShieldAlert className="size-12 text-zinc-700" />
                       <div className="text-zinc-500 font-medium">No deployment tasks found mapping to your search criteria.</div>
                       <Button 
                         variant="link" 
                         className="text-lime-400"
                         onClick={() => setSearch("")}
                       >
                         Reset Network Filters
                       </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      <TaskDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSaveTask}
        task={editingTask}
      />
    </div>
  )
}
