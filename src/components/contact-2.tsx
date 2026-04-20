import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-bold lg:mb-1 lg:text-7xl text-white">
                {title}
              </h1>
              <p className="text-zinc-400 text-lg">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-white">
                Contact Details
              </h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-white">Phone: </span>
                  {phone}
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-white">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-white">Web: </span>
                  <a href={web.url} target="_blank" className="underline hover:text-white transition-colors">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full h-12 bg-white text-black hover:bg-zinc-200 text-base font-bold transition-all">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
