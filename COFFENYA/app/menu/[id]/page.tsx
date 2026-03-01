import Link from "next/link";
import { notFound } from "next/navigation";
import { menu } from "../../data/menu";

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dish = menu.find((item) => item.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <div className="max-w-xl">
      <img
        src={dish.image}
        alt={dish.name}
        className="rounded-xl mb-4"
      />

      <h2 className="text-3xl font-bold">{dish.name}</h2>

      <p className="mt-2 text-gray-700">
        {dish.description}
      </p>

      <p className="font-bold mt-4">
        Цена: {dish.price} ₽
      </p>

      <Link
        href="/menu"
        className="text-amber-700 mt-6 inline-block"
      >
        ← Назад в меню
      </Link>
    </div>
  );
}