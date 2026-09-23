import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const WorkoutCard = ({ workout }) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-[#1a1a1a]">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Group Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups?.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-2 text-sm text-[#858585]">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#262626] pt-4 text-xs text-[#858585]">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <Clock3 size={14} />
                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <Flame size={14} />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star size={14} />
                        <span>{workout.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;