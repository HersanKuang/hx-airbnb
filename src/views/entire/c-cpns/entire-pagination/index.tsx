import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PaginationWrapper } from '@/views/entire/c-cpns/entire-pagination/style'

interface IProps {
  children?: ReactNode
}

const EntirePagination: FC<IProps> = () => {
  return <PaginationWrapper>EntirePagination</PaginationWrapper>
}

export default memo(EntirePagination)
