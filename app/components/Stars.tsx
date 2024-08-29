import React from "react";

const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Stars = ({
  color = "#fcc419",
  maxRating = "5",
  defaultRating = "3",
  size = "42",
  onSetRating,
}) => {
  return (
    <div>
      {Arr?.map((number) => (
        <>
          <h2> {number} </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 20 20"
            fill={color}
            stroke={color}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </>
      ))}
    </div>
  );
};

export default Stars;
