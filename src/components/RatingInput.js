import React, { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

const RatingInput = ({ name, value, onChange }) => {
    const [rating, setRating] = useState();

    const handleSelect = (nextValue) => onChange(name, nextValue);

    const handleMouseOut = () => setRating(value);

    return (
        <Rating
            className="RatingInput"
            value={rating}
            onSelect={handleSelect}
            onHover={setRating}
            onMouseOut={handleMouseOut}
        />
    );
};

export default RatingInput;
