import React, { useCallback, useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export const Test = ({ page, text }: any) => {
  const [className, setClassName] = useState(STATUS.NORMAL);
  const onMouseEnter = useCallback(() => {
    setClassName(STATUS.HOVERED);
  }, [className]);
  const onMouseLeave = useCallback(() => {
    setClassName(STATUS.NORMAL);
  }, [className]);
  return (
    <>
      <a
        className={className}
        href={page || "#"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => console.log("hello")}
      >
        {text || "No props"}
      </a>
    </>
  );
};
