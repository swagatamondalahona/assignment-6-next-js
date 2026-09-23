"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="border-b border-zinc-800 bg-[#0b0d0d] text-white">
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

                {/* Navigation */}
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

                {/* Plan + Saved */}
                <div className="flex items-center gap-4 text-[11px]">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-zinc-300"
                    >
                        <span>Plan</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
                            0
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-zinc-300"
                    >
                        <span>Saved</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-zinc-700 px-1 text-[9px] text-zinc-400">
                            0
                        </span>
                    </Link>

                </div>

            </nav>
        </header>
    );
}