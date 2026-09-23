
import Hero from "./components/Hero";
import WorkoutList from "./components/WorkoutList";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d0d]">

      <Hero />
      <WorkoutList />
    </main>
  );
}