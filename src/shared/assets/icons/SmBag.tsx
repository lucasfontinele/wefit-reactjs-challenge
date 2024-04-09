import { SVGProps } from "react"

const SmBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M6.933 6h1.134V4.3h1.7V3.167h-1.7v-1.7H6.933v1.7h-1.7V4.3h1.7V6Zm-2.266 5.1c-.624 0-1.128.51-1.128 1.133 0 .624.504 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133Zm5.666 0c-.623 0-1.127.51-1.127 1.133 0 .624.504 1.134 1.127 1.134.624 0 1.134-.51 1.134-1.134 0-.623-.51-1.133-1.134-1.133Zm-5.57-1.842.017-.068.51-.923h4.222c.425 0 .799-.233.991-.584l2.188-3.972-.986-.544h-.006L11.076 4.3 9.512 7.133H5.534L5.46 6.98 4.19 4.3l-.538-1.133-.532-1.134H1.267v1.134H2.4l2.04 4.3-.765 1.389c-.09.159-.142.346-.142.544 0 .623.51 1.133 1.134 1.133h6.8V9.4H4.905a.144.144 0 0 1-.142-.142Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.7.9h13.6v13.6H.7z" />
      </clipPath>
    </defs>
  </svg>
)

export default SmBag
