import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EntireWrapper } from '@/views/entire/style'
import EntireFilter from '@/views/entire/c-cpns/entire-filter'
import EntireRooms from '@/views/entire/c-cpns/entire-rooms'
import EntirePagination from '@/views/entire/c-cpns/entire-pagination'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
}

export default memo(Entire)
