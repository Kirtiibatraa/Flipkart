"use client";

const categories = [
  { name: "Mobiles", icon: "/mobile.webp" },
  { name: "Fashion", icon: "/fashion.jpeg" },
  { name: "Electronics", icon: "/electronics.webp" },
  { name: "Home", icon: "/home.webp" },
  { name: "Appliances", icon: "/appliances.png" },
  { name: "Flight Bookings", icon: "/flight.png" },
  { name: "Beauty", icon: "/beauty.png" },
  { name: "Grocery", icon: "/grocery.png" },
];

export default function Categories() {
  return (
    <div
      className="bg-white flex items-center  shadow-sm py-6 px-8 mt-10 h-28"
      style={{ margin: "10px", padding: "5px" }}
    >
      <div className="w-full flex justify-around">
        <div className="flex items-center justify-between gap-26 overflow-x-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center space-y-1 hover:text-blue-600 transition min-w-fit"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
