import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RoomItemWrapper } from '@/components/room-item/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const RoomItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RoomItemWrapper verifyColor={itemData?.verify_info?.text || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
    </RoomItemWrapper>
  )
}

export default memo(RoomItem)
