import React from "react";
import useMaskedText from "@/hooks/useMaskedText";

const MaskedTextWrapper = ({ children }) => {
  const { ref, isUnmasked } = useMaskedText();

  return (
    <div className="relative mx-auto grid h-40 w-96 place-content-center top-1/3">
      <div ref={ref} className="relative">
        <h1 className="relative z-0 text-3xl uppercase">{children}</h1>
        <div
          className={`bg-red-200 absolute top-0 right-0 h-full transition-all duration-1000 ${
            isUnmasked ? "w-0" : "w-full"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MaskedTextWrapper;
