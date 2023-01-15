import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styleStrToObj from '@/assets/svg/utils'

interface IProps {
  children?: ReactNode
}

const IconMoreArrow: FC<IProps> = () => {
  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleStrToObj('height: 10px; width: 10px; fill: currentcolor;')}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

export default memo(IconMoreArrow)
