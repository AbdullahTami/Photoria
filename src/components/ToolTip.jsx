import { useRef } from "react";

function ToolTip({ children, tooltip }) {
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !containerRef.current) return;
        const { left } = containerRef.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - 100 - left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip && (
        <span
          ref={tooltipRef}
          className="absolute z-30 mt-2 hidden whitespace-nowrap  rounded bg-slate-400 p-1 text-sm text-white opacity-10 transition group-hover:block group-hover:opacity-100 "
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}

export default ToolTip;
