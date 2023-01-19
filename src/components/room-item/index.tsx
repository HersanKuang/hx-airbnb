import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Rating } from '@mui/material'
import { RoomItemWrapper } from '@/components/room-item/style'

interface IProps {
  children?: ReactNode
  itemData: any
  itemWidth?: string
}

const RoomItem: FC<IProps> = (props) => {
  const { itemData, itemWidth = '25%' } = props
  console.log(itemData?.verify_info)
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} />
        </div>
        <div className="desc">
          {itemData?.verify_info?.kicker_badge && (
            <span className="tag">
              {itemData.verify_info.kicker_badge.label}
            </span>
          )}
          <span>{itemData.verify_info.messages.join(' · ')}</span>
        </div>
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
