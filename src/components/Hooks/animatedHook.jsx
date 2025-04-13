import { useEffect, useRef, useState } from "react";


function useAnimatedTitle(title, speed = 100){
    const [displayedTitle, setDisplayedTitle] = useState("")

    useEffect(() => {
        let index = 0;
        setDisplayedTitle(''); //Reinicia titulo al montar el componente

        const interval = setInterval(() => {
            setDisplayedTitle(title.slice(0, index + 1)); // Muestra solo hasta el índice actual
            index++;

            if (index === title.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar

    }, [title, speed]); // Se ejecuta cuando `title` o `speed` cambian

    return displayedTitle;
}

export {useAnimatedTitle} ;

function useCrosswordAnimation(speed = 100, delayBeforeFade = 2000) {
    const [letters, setLetters] = useState([]);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const fullText = [
            { letter: "L", row: 0, col: 3 },
            { letter: "I", row: 1, col: 3 },
            { letter: "D", row: 1, col: 4 },
            { letter: "E", row: 1, col: 5 },
            { letter: "S", row: 1, col: 6 },
            { letter: "I", row: 1, col: 7 },
            { letter: "G", row: 1, col: 8 },
            { letter: "N", row: 1, col: 9 },
            { letter: "O", row: 2, col: 3 },
            { letter: "T", row: 3, col: 3 },
            { letter: "T", row: 4, col: 3 },
            { letter: "A", row: 5, col: 3 },
            { letter: "N", row: 5, col: 4 },
            { letter: "A", row: 5, col: 5 },
        ];

        let index = 0;
        const interval = setInterval(() => {
            setLetters(fullText.slice(0, index + 1));
            index++;

            if (index >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setLetters([]); // Borra el texto
                    setShowLogo(true); // Muestra el logo
                }, delayBeforeFade);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [speed, delayBeforeFade]);

    return { letters, showLogo };
}

export { useCrosswordAnimation };

/* Funcion para scroll de pagina */

function RevealOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIsVisible(entry.isIntersecting), delay);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
}

export {RevealOnScroll};