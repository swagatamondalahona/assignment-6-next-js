"use client";

import { toast } from "react-toastify";
import { Plus, Bookmark } from "lucide-react";

export default function WorkoutActions({ workout }) {
    const handleAddPlan = () => {
        const oldPlan = JSON.parse(
            localStorage.getItem("fitlog-plan") || "[]"
        );

        const alreadyAdded = oldPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error("Already added to today's plan");
            return;
        }

        if (oldPlan.length >= 5) {
            toast.error(
                "You can add maximum 5 workouts to today's plan"
            );
            return;
        }

        const newPlan = [...oldPlan, workout];

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(newPlan)
        );

        // Navbar counter update
        window.dispatchEvent(new Event("fitlog-update"));

        toast.success("Added to today's plan");
    };

    const handleSave = () => {
        const oldSaved = JSON.parse(
            localStorage.getItem("fitlog-saved") || "[]"
        );

        const alreadySaved = oldSaved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.error("Already saved");
            return;
        }

        const newSaved = [...oldSaved, workout];

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(newSaved)
        );

        // Navbar counter update
        window.dispatchEvent(new Event("fitlog-update"));

        toast.success("Saved for later");
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">

            <button
                onClick={handleAddPlan}
                className="rounded-md bg-[#ccff00] px-5 py-3 text-xs font-extrabold uppercase text-black"
            >
                <span className="flex items-center gap-2">
                    <Plus size={14} />
                    Add to today's plan
                </span>
            </button>

            <button
                onClick={handleSave}
                className="rounded-md border border-[#444] px-5 py-3 text-xs font-extrabold uppercase text-white"
            >
                <span className="flex items-center gap-2">
                    <Bookmark size={14} />
                    Save for later
                </span>
            </button>

        </div>
    );
}