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
        <motion.div
          className="pathOptions flex h-auto md:h-[80vh] m-auto rounded-3xl overflow-hidden bg-white"
          animate={{ opacity: clicked ? 0 : 1 }}
          transition={{ delay: 0.6, duration: 0.50, ease: "easeOut" }}
        >

          <motion.div 
            className="pathOption cursor-pointer"
            animate={{
              transform: clicked ? "translateX(-100%)" : "translateX(0%)",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div onClick={() => handleClick("pro", "/pro")}>
              <img src="/path-pro.png" alt="" className="w-auto h-full" />
              <p className="absolute bottom-0">Professional Work</p>
            </div>
          </motion.div>


          <motion.div 
            className="pathOption cursor-pointer"
            animate={{
              transform: clicked ? "translateX(100%)" : "translateX(0%)",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div onClick={() => handleClick("work", "/work")}>
              <img src="/path-work.png" alt="" className="w-auto h-full" />
              <p>Personal Projects</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </PageTransition>
  );
}
