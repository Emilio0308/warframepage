import React, { useEffect, useRef, useState } from 'react';
import { axiosWarframe } from "../../utils/configAxios";
import InvasionCard from "../invasions/InvasionCard";

function InvasionComponent() {
  const [ivasionas, setIvasionas] = useState([]);
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDown = (event) => {
    setIsDragging(true);
    setStartX(getClientX(event));
  };

  const handleMove = (event) => {
    if (!isDragging) return;

    const currentX = getClientX(event);
    const difference = currentX - startX;

    carouselRef.current.scrollLeft -= difference;
    setStartX(currentX);
  };

  const handleUp = () => {
    setIsDragging(false);
  };

  const getClientX = (event) => {
    if (event.touches) {
      return event.touches[0].clientX; // Evento táctil
    }
    return event.clientX; // Evento de ratón
  };
  useEffect(() => {
    axiosWarframe
      .get("pc/en/invasions/")
      .then((res) => {
        setIvasionas(res.data);
      })
      .catch(() => console.log());
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto grid grid-rows-[auto,_1fr]">
      <h2 className="uppercase py-5 font-bold tracking-[5px] text-red-600">invasions</h2>
      <section
        className="w-full border-8 relative h-[240px] overflow-hidden"
        onTouchStart={handleDown}
        onTouchMove={handleMove}
        onTouchEnd={handleUp}
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={handleUp}
        ref={carouselRef}
      >
        <div className="grid gap-4 grid-rows-1 grid-flow-col-dense absolute left-[00%]">
          {ivasionas.map((invasion) => (
            <InvasionCard key={invasion.id} invasion={invasion} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default InvasionComponent;
