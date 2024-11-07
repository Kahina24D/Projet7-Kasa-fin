import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Starrating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <FaStar
              size={24}
              color={currentRate <= (hover || rating) ? "#ff6060" : "gray"}
              onClick={() => setRating(currentRate)}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setRating(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
