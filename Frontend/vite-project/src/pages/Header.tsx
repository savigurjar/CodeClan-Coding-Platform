import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-indigo-400 dark:text-indigo-400">⚔️ CodeClan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Problems</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contests</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Discuss</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Leaderboard</a>
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
        <div className="md:hidden border-t bg-white dark:bg-gray-900">
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
