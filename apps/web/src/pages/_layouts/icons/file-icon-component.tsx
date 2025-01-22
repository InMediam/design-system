interface FileIconProps extends React.SVGProps<SVGSVGElement> { }

export function FileIconComponent({ ...rest }: FileIconProps) {


  return (
    <svg {...rest} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="file-06">
        <path id="Icon" d="M9.33334 1.51302V4.26671C9.33334 4.64008 9.33334 4.82676 9.406 4.96937C9.46992 5.09481 9.5719 5.1968 9.69734 5.26071C9.83995 5.33338 10.0266 5.33338 10.4 5.33338H13.1537M10.6667 8.66666H5.33334M10.6667 11.3333H5.33334M6.66667 6H5.33334M9.33334 1.33333H5.86667C4.74657 1.33333 4.18651 1.33333 3.75869 1.55132C3.38237 1.74306 3.07641 2.04902 2.88466 2.42535C2.66667 2.85317 2.66667 3.41322 2.66667 4.53333V11.4667C2.66667 12.5868 2.66667 13.1468 2.88466 13.5746C3.07641 13.951 3.38237 14.2569 3.75869 14.4487C4.18651 14.6667 4.74657 14.6667 5.86667 14.6667H10.1333C11.2534 14.6667 11.8135 14.6667 12.2413 14.4487C12.6176 14.2569 12.9236 13.951 13.1154 13.5746C13.3333 13.1468 13.3333 12.5868 13.3333 11.4667V5.33333L9.33334 1.33333Z" stroke="#6C737F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}