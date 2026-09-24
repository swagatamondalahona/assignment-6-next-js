import WorkoutCard from "./WorkoutCard";

async function getWorkouts() {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_SERVER_BASE_URL
        );

        if (!res.ok) {
            throw new Error("Failed to fetch workouts");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
}

const WorkoutList = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="px-5 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-2 text-3xl font-extrabold text-white">
                    THE LIBRARY
                </h2>

                <p className="mb-8 text-[#858585]">
                    Twelve lifts covering every major muscle group.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkoutList;