import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0d0d] px-5 text-white">
            <div className="text-center">

                <p className="text-6xl font-extrabold text-[#ccff00]">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-extrabold uppercase">
                    Workout Not Found
                </h1>

                <p className="mt-3 text-sm text-[#777]">
                    Sorry, the workout you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-xs font-extrabold uppercase text-black transition hover:bg-[#b9e600]"
                >
                    Back to Workouts
                </Link>

            </div>
        </main>
    );
}