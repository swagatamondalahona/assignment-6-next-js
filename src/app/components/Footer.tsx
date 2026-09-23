import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-[#080a0a] border-t border-[#1b1e1e]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div
                    className="
            min-h-[100px]
            flex flex-col
            items-center
            justify-center
            gap-5

            sm:flex-row
            sm:justify-between
            sm:gap-0
          "
                >
                    {/* Left: Logo + FITLOG */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="FitLog logo"
                            width={28}
                            height={28}
                            className="object-contain"
                        />

                        <span className="text-white text-sm font-bold tracking-wider">
                            FITLOG
                        </span>
                    </div>

                    {/* Right: Copyright */}
                    <p
                        className="
              text-[#5d6363]
              text-[10px]
              sm:text-xs
              text-center
              sm:text-right
            "
                    >
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;