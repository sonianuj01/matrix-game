import { useState } from "react";
import "./Matrix.css";

export default function Matrix() {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === null) {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      
      if (index === 8) {
        let delay = 0;
        newClickOrder.forEach((idx) => {
          setTimeout(() => {
            setMatrix((prevMatrix) => {
              const updatedMatrix = [...prevMatrix];
              updatedMatrix[idx] = "orange";
              return updatedMatrix;
            });
          }, delay);
          delay += 300;
        });
      }
    }
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
