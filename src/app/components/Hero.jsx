import Image from "next/image";

export default function Hero() {
    return (
        <section className="mx-auto mt-7 w-full max-w-7xl overflow-hidden rounded-lg border border-[#25272d] bg-[#15171c]">
            <div className="flex min-h-[400px] flex-col justify-between px-6 py-7 sm:px-8 md:flex-row md:items-center md:px-9 md:py-6 lg:px-9">

                {/* Left Content */}
                <div className="relative z-10 max-w-xl">
                    {/* Eyebrow */}
                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#b6ff00] sm:text-[9px]">
                        Workout Library
                    </p>

                    {/* Heading */}
                    <h1 className="mt-3 max-w-[470px] text-[34px] font-black uppercase leading-[0.91] tracking-[-1.5px] text-white sm:text-[38px] md:text-[40px] lg:text-[42px]">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    {/* Description */}
                    <p className="mt-4 max-w-[390px] text-[9px] leading-[1.55] text-[#858891] sm:text-[10px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA */}
                    <a
                        href="#library"
                        className="mt-4 inline-flex items-center gap-2 rounded-[4px] bg-[#b6ff00] px-4 py-2 text-[8px] font-extrabold uppercase tracking-wide text-black transition duration-200 hover:bg-[#c7ff33] active:scale-95 sm:px-5 sm:py-2.5 sm:text-[9px]"
                    >
                        <span>Browse workouts</span>

                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </a>
                </div>

                {/* Hero Image */}
                <div className="relative mx-auto mt-6 h-[220px] w-[280px] shrink-0 sm:h-[240px] sm:w-[320px] md:mx-0 md:mt-0 md:h-[270px] md:w-[350px] lg:h-[290px] lg:w-[390px]">
                    <Image
                        src="/banner.png"
                        alt="Workout illustration"
                        fill
                        priority
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 390px"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}