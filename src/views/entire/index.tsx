import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EntireWrapper } from '@/views/entire/style'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  return (
    <EntireWrapper>
      <div className="filter">filter-section</div>
      <div className="rooms">rooms-section</div>
      <div className="pagination">pagination-section</div>
    </EntireWrapper>
  )
}

export default memo(Entire)
