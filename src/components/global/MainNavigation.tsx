"use client"

import Link from "next/link"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import EMDLogo from "@/components/global/emd_logo.svg"

export default function MainNavigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="sticky top-0 z-50 bg-primary shadow-md w-full max-w-7xl mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium font-heading">
                        <EMDLogo className="h-10 w-auto emd-gold" />
                        <span className="pt-1">Eric M. Dullavin</span>
                    </Link>
                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-4">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium">
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/pro" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium">
                                            Professional Work
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/work" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium">
                                            Personal Projects
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/contact" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium">
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <button
                        className="md:hidden flex flex-col space-y-1 p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                    </button>
                </div>
            </div>
            <div className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden overflow-hidden transition-all duration-300 ease-in-out z-40 border-t ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col space-y-2 p-4">
                    <Link href="/" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/projects" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/contact" className="block px-3 py-2 hover:bg-primary-100 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </nav>
            </div>
        </>
    )
}