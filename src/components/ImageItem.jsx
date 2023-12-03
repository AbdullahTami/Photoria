import { useState } from "react";
import { Link } from "react-router-dom";

function ImageItem({ image, index }) {
  const [mouseIn, setMouseIn] = useState(false);
  const isColSpan = index % 3 === 0;

  function handleMouseHover(command) {
    setMouseIn(command);
  }
  console.log(mouseIn);
  return (
    <div
      onClick={() => scrollTo(0, 0)}
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
      className={`w-50 relative z-0 overflow-hidden ${
        isColSpan ? "col-span-2" : ""
      } ${index === 9 && "col-span-4"} `}
    >
      <img
        className="z-0 block h-80 w-full object-cover 
        duration-[8s] ease-linear hover:scale-150
        "
        src={image.urls.regular}
        alt={image.alt_description}
      />

      {mouseIn && (
        <Link
          to={`/image/${image.id}`}
          alt={image.alt_description}
          className=" absolute left-[50%] top-[90%] z-[1000px] translate-x-[-50%] translate-y-[-50%]   bg-slate-600 px-6 py-1  text-slate-100 opacity-60 duration-300  hover:opacity-80 "
        >
          More
        </Link>
      )}
    </div>
  );
}

export default ImageItem;
