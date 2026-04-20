"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface EdgeTask {
  id: string
  title: string
  node: string
  priority: "Low" | "Medium" | "High"
  status: "Online" | "Syncing" | "Maintenance" | "Offline"
  timestamp: string
}

interface TaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (task: Omit<EdgeTask, "id" | "timestamp"> & { id?: string }) => void
  task?: EdgeTask
}

export function TaskDialog({ open, onOpenChange, onSave, task }: TaskDialogProps) {
  const [formData, setFormData] = React.useState<Omit<EdgeTask, "id" | "timestamp">>({
    title: "",
    node: "Node-US-East",
    priority: "Medium",
    status: "Online",
  })

  React.useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        node: task.node,
        priority: task.priority,
        status: task.status,
      })
    } else {
      setFormData({
        title: "",
        node: "Node-US-East",
        priority: "Medium",
        status: "Online",
      })
    }
  }, [task, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ ...formData, id: task?.id })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-white/10 text-white">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{task ? "Edit Deployment Task" : "Provision New Task"}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              {task 
                ? "Modify the parameters for this active edge node deployment." 
                : "Enter the details to broadcast a new task across the Aurora network."
              }
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title" className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Task Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Latent Compute Sync"
                className="bg-white/5 border-white/10 focus:border-lime-400/50"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="node" className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Target Node</Label>
                <Select 
                  value={formData.node} 
                  onValueChange={(val: any) => setFormData({ ...formData, node: val })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select node" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="Node-US-East">US-EAST-1</SelectItem>
                    <SelectItem value="Node-EU-West">EU-WEST-2</SelectItem>
                    <SelectItem value="Node-APAC-South">APAC-SOUTH-1</SelectItem>
                    <SelectItem value="Node-GLOBAL-M">GLOBAL-MESH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="priority" className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Priority</Label>
                <Select 
                  value={formData.priority} 
                  onValueChange={(val: any) => setFormData({ ...formData, priority: val })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Set priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white">
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status" className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Initial Status</Label>
              <Select 
                value={formData.status} 
                onValueChange={(val: any) => setFormData({ ...formData, status: val })}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Syncing">Syncing</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button 
               type="submit" 
               className="w-full bg-lime-400 text-black hover:bg-lime-500 font-bold"
               nativeButton={true}
            >
              {task ? "Save Changes" : "Broadcast Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
