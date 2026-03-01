import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Coffee House
        </h1>
        <p className="mb-6 text-lg">
          Место, где кофе - это искусство
        </p>
        <Link
          href="/menu"
          className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800"
        >
          Перейти в меню
        </Link>
      </div>

      <img
        src="/coffee.jpg"
        alt="Кофе"
        className="rounded-xl shadow-lg"
      />
    </section>
  );
}