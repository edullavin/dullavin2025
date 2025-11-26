"use client";

import Link from "next/link";
import PageTransition from "@/components/global/PageTransition";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [clicked, setClicked] = useState<"pro" | "work" | null>(null);

  const handleClick = (path: "pro" | "work", href: string) => {
    setClicked(path);
    setTimeout(() => {
      router.push(href);
    }, 600); // Wait for animation to complete
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen p-4">
        <div className="pathOptions flex h-auto md:h-[80vh] m-auto rounded-3xl overflow-hidden bg-white">

          <motion.div 
            className="pathOption cursor-pointer"
            animate={{
              x: clicked ? -400 : 0, // Move immediately
              opacity: clicked ? [1, 1, 0] : 1, // Stay at 1 for first 50%, then fade to 0
            }}
            transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] }}
          >
            <div onClick={() => handleClick("pro", "/pro")}>
              <img src="/path-pro.png" alt="" className="w-auto h-full" />
              <p className="absolute bottom-0">Professional Work</p>
            </div>
          </motion.div>


          <motion.div 
            className="pathOption cursor-pointer"
            animate={{
              x: clicked ? 400 : 0, // Move immediately
              opacity: clicked ? [1, 1, 0] : 1, // Stay at 1 for first 50%, then fade to 0
            }}
            transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] }}
          >
            <div onClick={() => handleClick("work", "/work")}>
              <img src="/path-work.png" alt="" className="w-auto h-full" />
              <p>Personal Projects</p>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
