"use client";

export default function WorkoutActions({ workout }) {
    const handleAddPlan = () => {
        const oldPlan = JSON.parse(
            localStorage.getItem("fitlog-plan") || "[]"
        );

        const alreadyAdded = oldPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            alert("Already added to today's plan");
            return;
        }

        const newPlan = [...oldPlan, workout];

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(newPlan)
        );

        alert("Added to today's plan");
    };

    const handleSave = () => {
        const oldSaved = JSON.parse(
            localStorage.getItem("fitlog-saved") || "[]"
        );

        const alreadySaved = oldSaved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            alert("Already saved");
            return;
        }

        const newSaved = [...oldSaved, workout];

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(newSaved)
        );

        alert("Saved for later");
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">

            <button
                onClick={handleAddPlan}
                className="rounded-md bg-[#ccff00] px-5 py-3 text-xs font-extrabold uppercase text-black"
            >
                Add to today's plan
            </button>

            <button
                onClick={handleSave}
                className="rounded-md border border-[#444] px-5 py-3 text-xs font-extrabold uppercase text-white"
            >
                Save for later
            </button>

        </div>
    );
}