import { SVGProps } from 'react'
import { Direction } from '~/types'

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  direction?: Direction
}

const directionsPaths: { [key in Direction]: string } = {
  RIGHT: 'M5 13.364h16m0 0L14 7m7 6.364-7 6.363',
  UP_RIGHT: 'M18.314 7 7 18.314M18.314 7v9.9m0-9.9h-9.9',
  UP_LEFT: 'M6.69 7 18 18.31M6.69 7v9.896M6.69 7h9.896',
}

export const ArrowIcon = ({
  direction = 'RIGHT',
  ...props
}: ArrowIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={26}
    height={26}
    viewBox='0 0 26 26'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d={directionsPaths[direction]}
    />
  </svg>
)
