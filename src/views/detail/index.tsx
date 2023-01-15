import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailWrapper } from '@/views/detail/style'

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = () => {
  return <DetailWrapper>Detail</DetailWrapper>
}

export default memo(Detail)
