"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyPlanPage() {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [activeTab, setActiveTab] = useState("plan");
    const [sort, setSort] = useState("newest");
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const savedPlan = JSON.parse(
            localStorage.getItem("fitlog-plan") || "[]"
        );

        const savedWorkouts = JSON.parse(
            localStorage.getItem("fitlog-saved") || "[]"
        );

        const completedWorkouts = JSON.parse(
            localStorage.getItem("fitlog-completed") || "[]"
        );

        setPlan(savedPlan);
        setSaved(savedWorkouts);
        setCompleted(completedWorkouts);
    }, []);

    const currentList = activeTab === "plan" ? plan : saved;

    const sortedList = [...currentList].sort((a, b) => {
        if (sort === "oldest") {
            return a.id - b.id;
        }

        return b.id - a.id;
    });

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const handleRemove = (id) => {
        const updatedPlan = plan.filter(
            (workout) => workout.id !== id
        );

        setPlan(updatedPlan);

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(updatedPlan)
        );
    };

    const handleDone = (id) => {
        const updatedCompleted = completed.includes(id)
            ? completed.filter((item) => item !== id)
            : [...completed, id];

        setCompleted(updatedCompleted);

        localStorage.setItem(
            "fitlog-completed",
            JSON.stringify(updatedCompleted)
        );
    };

    const handleRemoveSaved = (id) => {
        const updatedSaved = saved.filter(
            (workout) => workout.id !== id
        );

        setSaved(updatedSaved);

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(updatedSaved)
        );
    };

    return (
        <main className="min-h-screen bg-[#0b0d0d] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                        MY PLAN
                    </h1>

                    <p className="mt-2 text-xs text-[#777] sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">

                    {/* Exercises */}
                    <div className="rounded-xl border border-[#242727] bg-[#111313] p-4 sm:p-5">
                        <p className="text-[9px] font-medium uppercase tracking-wide text-[#777] sm:text-xs">
                            Exercises
                        </p>

                        <p className="mt-2 text-2xl font-extrabold sm:text-3xl">
                            {plan.length}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="rounded-xl border border-[#242727] bg-[#111313] p-4 sm:p-5">
                        <p className="text-[9px] font-medium uppercase tracking-wide text-[#777] sm:text-xs">
                            Minutes
                        </p>

                        <p className="mt-2 text-2xl font-extrabold sm:text-3xl">
                            {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="rounded-xl border border-[#242727] bg-[#111313] p-4 sm:p-5">
                        <p className="text-[9px] font-medium uppercase tracking-wide text-[#777] sm:text-xs">
                            Calories
                        </p>

                        <p className="mt-2 text-2xl font-extrabold sm:text-3xl">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs + Sort */}
                <div className="mt-6 flex items-center justify-between">

                    {/* Tabs */}
                    <div className="flex rounded-md border border-[#252828] bg-[#111313] p-1">

                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded px-4 py-1.5 text-[10px] font-semibold transition sm:text-xs ${activeTab === "plan"
                                ? "bg-[#252727] text-white"
                                : "text-[#777] hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded px-4 py-1.5 text-[10px] font-semibold transition sm:text-xs ${activeTab === "saved"
                                ? "bg-[#252727] text-white"
                                : "text-[#777] hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">

                        <span className="hidden text-[10px] text-[#666] sm:block">
                            Sort by
                        </span>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="rounded-md border border-[#252828] bg-[#111313] px-2 py-1.5 text-[10px] text-[#aaa] outline-none sm:text-xs"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>

                    </div>

                </div>

                {/* Workout List */}
                <div className="mt-5">

                    {sortedList.length === 0 ? (
                        <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-[#202323] bg-[#0d0f0f] px-4 text-center">

                            <h2 className="text-xs font-extrabold uppercase sm:text-sm">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 max-w-sm text-[9px] leading-4 text-[#666] sm:text-xs">
                                {activeTab === "plan"
                                    ? "Browse the library and add your first workout to your plan."
                                    : "Save a workout for later and it will appear here."}
                            </p>

                            <Link
                                href="/"
                                className="mt-4 rounded-full bg-[#dfff00] px-4 py-2 text-[9px] font-extrabold uppercase tracking-wide text-black transition hover:bg-[#ccef00] sm:px-5 sm:text-[10px]"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {sortedList.map((workout) => {
                                const isDone = completed.includes(workout.id);

                                return (
                                    <div
                                        key={workout.id}
                                        className={`overflow-hidden rounded-xl border bg-[#111313] transition ${isDone
                                            ? "border-[#ccff00]"
                                            : "border-[#242727]"
                                            }`}
                                    >

                                        {/* Image */}
                                        <img
                                            src={workout.image}
                                            alt={workout.name}
                                            className="h-48 w-full object-cover"
                                        />

                                        {/* Content */}
                                        <div className="p-4">

                                            <div className="flex items-start justify-between gap-3">

                                                <h2
                                                    className={`text-sm font-extrabold uppercase ${isDone
                                                        ? "text-[#ccff00]"
                                                        : "text-white"
                                                        }`}
                                                >
                                                    {workout.name}
                                                </h2>

                                                {isDone && (
                                                    <span className="rounded-full bg-[#ccff00] px-2 py-1 text-[8px] font-extrabold text-black">
                                                        DONE
                                                    </span>
                                                )}

                                            </div>

                                            <p className="mt-2 text-xs text-[#777]">
                                                {workout.duration} min •{" "}
                                                {workout.caloriesBurned} kcal
                                            </p>

                                            {/* Buttons */}
                                            <div className="mt-4 flex flex-wrap gap-2">

                                                <Link
                                                    href={`/workouts/${workout.id}`}
                                                    className="rounded-md border border-[#444] px-3 py-2 text-[9px] font-bold uppercase text-white transition hover:border-[#ccff00]"
                                                >
                                                    View Details
                                                </Link>

                                                {activeTab === "plan" ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                handleDone(workout.id)
                                                            }
                                                            className="rounded-md bg-[#ccff00] px-3 py-2 text-[9px] font-extrabold uppercase text-black"
                                                        >
                                                            {isDone
                                                                ? "Undo Done"
                                                                : "Mark as Done"}
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                handleRemove(workout.id)
                                                            }
                                                            className="rounded-md border border-red-900 px-3 py-2 text-[9px] font-bold uppercase text-red-400"
                                                        >
                                                            Remove
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            handleRemoveSaved(
                                                                workout.id
                                                            )
                                                        }
                                                        className="rounded-md border border-red-900 px-3 py-2 text-[9px] font-bold uppercase text-red-400"
                                                    >
                                                        Remove
                                                    </button>
                                                )}

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    )}

                </div>

            </div>
        </main>
    );
}