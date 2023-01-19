import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LongforItemWrapper } from '@/components/longfor-item/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const LongforItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <LongforItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="longfor-cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LongforItemWrapper>
  )
}

export default memo(LongforItem)
