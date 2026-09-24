"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const updateCounts = () => {
        const plan = JSON.parse(
            localStorage.getItem("fitlog-plan") || "[]"
        );

        const saved = JSON.parse(
            localStorage.getItem("fitlog-saved") || "[]"
        );

        setPlanCount(plan.length);
        setSavedCount(saved.length);
    };

    useEffect(() => {
        updateCounts();

        window.addEventListener("storage", updateCounts);

        window.addEventListener("fitlog-update", updateCounts);

        return () => {
            window.removeEventListener("storage", updateCounts);
            window.removeEventListener("fitlog-update", updateCounts);
        };
    }, []);

    return (
        <header className="relative border-b border-zinc-800 bg-[#0b0d0d] text-white">

            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="FitLog logo"
                        className="h-6 w-6 object-contain"
                    />

                    <span className="text-sm font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">

                    <Link
                        href="/"
                        className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${pathname === "/"
                                ? "bg-[#1b2700] text-[#ccff00]"
                                : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${pathname === "/my-plan"
                                ? "bg-[#1b2700] text-[#ccff00]"
                                : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4 text-[11px]">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-zinc-300"
                    >
                        <span>Plan</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
                            {planCount}
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-zinc-300"
                    >
                        <span>Saved</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-zinc-700 px-1 text-[9px] text-zinc-400">
                            {savedCount}
                        </span>
                    </Link>

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center justify-center text-white md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>

                </div>

            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute right-0 top-full z-50 w-40 overflow-hidden rounded-bl-xl rounded-br-xl border border-[#292d2d] bg-[#111313] shadow-xl md:hidden">

                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 text-xs font-semibold ${pathname === "/"
                                ? "bg-[#1b2700] text-[#ccff00]"
                                : "text-zinc-300 hover:bg-[#1b1d1d] hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 text-xs font-semibold ${pathname === "/my-plan"
                                ? "bg-[#1b2700] text-[#ccff00]"
                                : "text-zinc-300 hover:bg-[#1b1d1d] hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </div>
            )}

        </header>
    );
}