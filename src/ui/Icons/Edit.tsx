import * as React from "react";
import { SVGProps } from "react";

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g data-name="Layer 2">
      <path d="M4 29a1 1 0 0 1-.89-1.45l4-8a1 1 0 0 1 .73-.55 1 1 0 0 1 .87.28l4 4a1 1 0 0 1 .28.87 1 1 0 0 1-.54.73l-8 4A.91.91 0 0 1 4 29Zm4.27-7.31-2 4.07 4.07-2Z" />
      <path d="M12 25a1 1 0 0 1-.71-.29l-4-4a1 1 0 0 1 0-1.42L22.59 4a3.5 3.5 0 0 1 4.83 0l.58.58a3.43 3.43 0 0 1 0 4.84L12.71 24.71A1 1 0 0 1 12 25Zm-2.59-5L12 22.59 26.59 8a1.41 1.41 0 0 0 0-2L26 5.42a1.44 1.44 0 0 0-2 0Z" />
      <path d="M25 12a1 1 0 0 1-.71-.29l-5.58-5.59a1 1 0 0 0-1.42 0l-4.58 4.59a1 1 0 0 1-1.42-1.42l4.59-4.58a3.06 3.06 0 0 1 4.24 0l5.59 5.58a1 1 0 0 1 0 1.42A1 1 0 0 1 25 12Z" />
    </g>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);

export default SvgEdit;
