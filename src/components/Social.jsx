import { Tooltip } from "react-tooltip";
function Social({ href, place, content, children }) {
  return (
    <a
      data-tooltip-id="my-tooltip"
      data-tooltip-variant="dark"
      data-tooltip-content={content}
      data-tooltip-place={place}
      className="cursor-pointer rounded-md border border-slate-200 px-3 py-2  text-slate-500 duration-300 hover:text-slate-700 "
      href={href}
    >
      <Tooltip
        opacity="0.5"
        id="my-tooltip"
        style={{ background: "#1e293b", color: "#fff" }}
      />
      {children}
    </a>
  );
}

export default Social;
