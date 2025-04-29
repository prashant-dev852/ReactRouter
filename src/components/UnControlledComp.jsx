import React, { useRef, useEffect } from "react";

export default function () {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // one time call at intialil level
  //input is focused on page load

  return (
    <div>
      <h2>auto focus input</h2>
      <input ref={inputRef} type="text" placeholder="type something..." />
    </div>
  );
}
