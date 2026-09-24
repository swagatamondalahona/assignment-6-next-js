export default function Loading() {
    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-[#0b0d0d] text-white">
            <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#333] border-t-[#ccff00]"></div>

                <p className="mt-4 text-sm font-semibold text-[#888]">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
}