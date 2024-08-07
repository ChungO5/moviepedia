import React, { useEffect, useRef } from "react";

const FileInput = ({ name, value, onChange }) => {
    const inputRef = useRef();

    const handleChange = (e) => {
        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    };

    useEffect(() => {
        if (inputRef.current) {
            console.log(inputRef);
        }
    }, []);

    return <input type="file" onChange={handleChange} ref={inputRef} />;
};

export default FileInput;
