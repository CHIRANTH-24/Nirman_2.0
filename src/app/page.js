"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <header className="flex items-center justify-between px-8 py-6 shadow-md bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="hover:underline">
                Services
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#project-management">Project Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#resource-planning">Resource Planning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#data-analytics">Data Analytics</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#solutions" className="hover:underline">
            Solutions
          </Link>
          <Link href="#about" className="hover:underline">
            About Us
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <span className="sr-only">Toggle theme</span>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-yellow-500 dark:bg-blue-500"></div>
                Theme
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 dark:bg-gray-800 py-20 text-center">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Empowering Projects with Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Streamline your project management with cutting-edge technology and expertise.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard/create">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3">
                Get Started
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="px-6 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div id="project-management" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project Management</h3>
              <p>
                Comprehensive tools to manage your projects efficiently, ensuring
                success every step of the way.
              </p>
            </div>
            <div id="resource-planning" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Resource Planning</h3>
              <p>
                Optimize resource allocation to maximize efficiency and
                productivity.
              </p>
            </div>
            <div id="data-analytics" className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p>
                Leverage powerful analytics to make informed decisions and drive
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-8 text-center">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

}








