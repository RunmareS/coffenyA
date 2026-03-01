import Link from "next/link";
import { menu } from "../data/menu";

export default function MenuPage() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Меню</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg mb-3"
            />

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>

            <p className="font-bold mt-2">{item.price} ₽</p>

            <Link
              href={`/menu/${item.id}`}
              className="text-amber-700 mt-3 inline-block"
            >
              Подробнее →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}