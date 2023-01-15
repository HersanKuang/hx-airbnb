import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from '@/components/area-header/style'

interface IProps {
  children?: ReactNode
  title?: string
  subtitle?: string
}

const AreaHeader: FC<IProps> = (props) => {
  const { title, subtitle } = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
}

export default memo(AreaHeader)
