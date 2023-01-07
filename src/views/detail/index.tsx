import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = () => {
  return <div>Detail</div>
}

export default memo(Detail)
