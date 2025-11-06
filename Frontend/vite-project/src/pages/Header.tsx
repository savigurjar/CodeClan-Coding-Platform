import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        background:
          "conic-gradient(from 0deg, rgba(2, 22, 15, 0.705), rgba(0, 255, 255, 0.05), transparent, rgba(0, 255, 200, 0.1))",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-shadow-indigo-100 dark:text-white-400">CodeClan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#" className="hover:text-gray-900 dark:hover:text-green-900">Problems</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-green-900">Contests</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-green-900">Discuss</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-green-900">Leaderboard</a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-white/80 dark:bg-gray-900/80">
          <nav className="flex flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Problems</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contests</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Discuss</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Leaderboard</a>
            <div className="flex items-center gap-2 pt-2">
              <ModeToggle />
              <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;



