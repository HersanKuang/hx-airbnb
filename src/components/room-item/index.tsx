import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Rating } from '@mui/material'
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
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            precision={0.5}
            size="small"
            sx={{
              fontSize: '12px',
              color: '#00848a'
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">· {itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
}

export default memo(RoomItem)
