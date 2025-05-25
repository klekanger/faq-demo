export default function ChevronIcon({
  className,
  color = "#6bffff",
}: {
  className?: string;
  color?: string;
}) {
  let strokeColor = color;

  // check if color is a valid color
  if (!color.match(/^#([0-9a-fA-F]{6})$/)) {
    console.error("Color must be a valid 6-digit hex color.");
    strokeColor = "#6bffff";
  }

  return (
    <svg
      /*    width="24"
      height="24" */
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-[1rem] h-[1rem]"}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
