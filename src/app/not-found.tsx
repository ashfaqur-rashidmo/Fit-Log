import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold uppercase text-white">
        Page Not Found
      </h2>

      <p className="mt-2 text-sm text-[#9CA3AF]">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#C2F800] px-5 py-2.5 text-sm font-semibold text-[#0F1115] transition hover:bg-[#B8E600]"
      >
        Go to workouts
      </Link>
    </main>
  );
};

export default NotFound;