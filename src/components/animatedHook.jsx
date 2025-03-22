import { useEffect, useState } from "react";


function useAnimatedTitle(title, speed = 100){
    const [displayedTitle, setDisplayedTitle] = useState('')

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

export default useAnimatedTitle;