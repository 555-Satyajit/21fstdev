"use client"

import * as React from "react"
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Activity, Grid2x2PlusIcon } from "lucide-react"

export default function FinishLoginPage() {
  const router = useRouter()
  const [status, setStatus] = React.useState("Verifying network credentials...")

  const hasAttempted = React.useRef(false)

  React.useEffect(() => {
    const handleSignIn = async () => {
      if (hasAttempted.current) return
      
      // Confirm the link is a sign-in with email link.
      if (isSignInWithEmailLink(auth, window.location.href)) {
        hasAttempted.current = true
        let email = window.localStorage.getItem("emailForSignIn")
        
        // If email is missing, we must ask the user for it
        if (!email) {
          email = window.prompt("Please provide your email for confirmation")
        }

        if (email) {
          try {
            setStatus("Synchronizing neural session...")
            await signInWithEmailLink(auth, email, window.location.href)
            window.localStorage.removeItem("emailForSignIn")
            toast.success("Identity Verified", { 
              description: "Welcome to the Aurora network." 
            })
            router.push("/dashboard")
          } catch (error: any) {
            console.error("Sign-in error:", error)
            
            // Handle common Firebase errors gracefully
            if (error.code === 'auth/email-already-in-use') {
              toast.info("Already Logged In", { description: "You are already authenticated with this email." })
              router.push("/dashboard")
            } else {
              toast.error("Verification Failed", { 
                description: error.message || "The access link is invalid or has expired." 
              })
              router.push("/login")
            }
          }
        } else {
          router.push("/login")
        }
      } else {
        router.push("/login")
      }
    }

    handleSignIn()
  }, [router])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 space-y-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Grid2x2PlusIcon className="size-8 text-lime-400" />
          <p className="text-3xl font-bold tracking-tighter uppercase italic text-white">Aurora</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Activity className="size-5 text-lime-400 animate-pulse" />
          <p className="text-zinc-400 font-mono tracking-widest text-sm uppercase">
            {status}
          </p>
        </div>

        <div className="max-w-xs mx-auto pt-8">
           <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-1 bg-lime-400 w-1/2 animate-[shimmer_2s_infinite] rounded-full" />
           </div>
        </div>
      </div>
    </div>
  )
}

// Add CSS keyframes for the shimmer if needed (can be put in globals.css as well)
