import Image from "next/image";
import WorkoutActions from "../../components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
    const { id } = await params;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitlog/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    const workout = await response.json();

    return (
        <main className="min-h-screen bg-[#0b0d0d] px-5 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Image + Details */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl border border-[#262626] bg-[#111111]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={740}
                            height={500}
                            className="h-[400px] w-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-3xl font-extrabold uppercase md:text-4xl">
                            {workout.name}
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-[#858585]">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {workout.muscleGroups?.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-extrabold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Key Specs */}
                        <div className="mt-7 overflow-hidden rounded-xl border border-[#262626] bg-[#111111]">

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    EQUIPMENT
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    DIFFICULTY
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    SETS
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    REPS
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    DURATION
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#262626] px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    CALORIES
                                </span>
                                <span className="text-sm font-semibold">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3">
                                <span className="text-xs text-[#858585]">
                                    RATING
                                </span>
                                <span className="text-sm font-semibold">
                                    ⭐ {workout.rating}
                                </span>
                            </div>

                        </div>

                        {/* Buttons */}
                        <WorkoutActions workout={workout} />

                    </div>
                </div>

                {/* Instructions */}
                <section className="mt-12">
                    <h2 className="text-2xl font-extrabold uppercase">
                        Instructions
                    </h2>

                    <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-6 text-[#b0b0b0]">
                        {workout.instructions?.map((instruction, index) => (
                            <li key={index}>
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </section>

            </div>
        </main>
    );
}