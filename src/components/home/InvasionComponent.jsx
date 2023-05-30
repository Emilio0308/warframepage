// import React, { useEffect, useRef, useState } from 'react';
// import { axiosWarframe } from "../../utils/configAxios";
// import InvasionCard from "../invasions/InvasionCard";

// function InvasionComponent() {
//   const [ivasionas, setIvasionas] = useState([]);
//   const [carouselPosition, setCarouselPosition] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const handleMouseDown = (event) => {
//       console.log("down")
//       isDragging = true;
//       startPosition = event.clientX;
//     };

//     const handleMouseUp = () => {
//       console.log("move")
//       isDragging = false;
//     };

//     const handleMouseMove = (event) => {
//       if (!isDragging) return;
//       console.log("move")
//       const currentPosition = event.clientX;
//       const distance = currentPosition - startPosition;

//       setCarouselPosition((prevPosition) => prevPosition + distance);

//       startPosition = currentPosition;
//     };

//     let isDragging = false;
//     let startPosition = 0;

//     if (carouselRef.current) {
//       carouselRef.current.addEventListener('mousedown', handleMouseDown);
//       document.addEventListener('mouseup', handleMouseUp);
//       document.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (carouselRef.current) {
//         carouselRef.current.removeEventListener('mousedown', handleMouseDown);
//       }
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

  // useEffect(() => {
  //   axiosWarframe
  //     .get("pc/en/invasions/")
  //     .then((res) => {
  //       setIvasionas(res.data);
  //     })
  //     .catch(() => console.log());
  // }, []);

//   return (
//     <section className="w-full max-w-[1200px] mx-auto grid grid-rows-[auto,_1fr]">
//       <h3 className="uppercase py-5">invasions</h3>
//       <section className="w-full border-8 relative h-[240px] overflow-hidden">
//         <div
//           className="grid gap-4 grid-rows-1 grid-flow-col-dense absolute"
//           style={{ left: `${carouselPosition}px` }}
//           ref={carouselRef}
//         >
//           {ivasionas.map((invasion) => (
//             <InvasionCard key={invasion.id} invasion={invasion} />
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }

// export default InvasionComponent;

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
      <h3 className="uppercase py-5">invasions</h3>
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
