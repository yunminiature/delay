import * as React from "react";
import { SVGProps } from "react";

const SvgNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 25a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l7.3-7.29-7.3-7.29a1 1 0 1 1 1.42-1.42l8 8a1 1 0 0 1 0 1.42l-8 8A1 1 0 0 1 12 25Z"
      data-name="Layer 2"
    />
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);

export default SvgNext;
