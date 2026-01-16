import UXContainer from "../components/UXContainer"
import { useAnimatedTitle } from '../components/hooks/animatedHook'
import '../globals.css'
import ReturnButton from "../components/buttons/ReturnButton";
import { useState } from "react";

function UXPortfolio () {
  const [active, setActive] = useState("Todos"); // valor inicial
  const items = ["Todos", "Ux/Ui", "Ui", "Ux"];

  const animatedTitle = useAnimatedTitle('UX/UI Portfolio', 150);

  return (
    <section id="works" className="bg-blackbg min-h-screen w-full pt-10 flex flex-col gap-3 items-center overflow-hidden">
      <ReturnButton/>

      <div className="block text-center h-[80%]">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline">
          {animatedTitle}
        </h2>
        <p className="text-white/70">Explora mis últimos proyectos</p>
      </div>

      <ul className="flex gap-10">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-1 rounded-md cursor-pointer transition-all duration-200
              ${active === item
                ? "bg-violet-600 text-white"
                : "text-white hover:border-white hover:outline-2 hover:outline"
              }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Pasamos el filtro actual */}
      <UXContainer filter={active}/>
    </section>
  );
}

export { UXPortfolio };