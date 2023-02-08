import React, { ElementRef, memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import { RoomItemWrapper } from '@/components/room-item/style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  itemData: any
  itemWidth?: string
  itemClick?: (item: any) => void
}

const RoomItem: FC<IProps> = (props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const [contentWidth, setContentWidth] = useState(16.67)
  const sliderRef = useRef<ElementRef<typeof Carousel>>(null)
  const dotMore = useRef(4)
  let isNavDetail = true

  function controlClickHandle(isRight = true) {
    isNavDetail = false
    isRight ? sliderRef.current!.next() : sliderRef.current!.prev()
    /** 更新dot的索引 */
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex > length - 1) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
    setSelectIndex(newIndex)

    /** 改变dot的显示 */
    if (isRight && selectIndex === 2) {
      setContentWidth(14.29)
    } else if (!isRight && selectIndex === 3) {
      setContentWidth(16.67)
    }
    if (isRight && selectIndex === length - 4) {
      setContentWidth(16.67)
    } else if (!isRight && selectIndex === length - 3) {
      setContentWidth(14.29)
    }

    if (
      (isRight && selectIndex === 0) ||
      (isRight && selectIndex === length - 3) ||
      (!isRight && selectIndex === 2) ||
      (!isRight && selectIndex === length - 1)
    ) {
      dotMore.current = 3
    } else if (
      (isRight && selectIndex === 1) ||
      (!isRight && selectIndex === length - 2)
    ) {
      dotMore.current = 2
    } else if (
      (isRight && selectIndex === length - 2) ||
      (isRight && selectIndex === length - 1) ||
      (!isRight && selectIndex === 1)
    ) {
      dotMore.current = 4
    }
  }

  function itemClickHandle() {
    if (itemClick && isNavDetail) itemClick(itemData)
  }

  const pictureElement = (
    <div className="room-item-cover">
      <img src={itemData.picture_url} />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn prev" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft width={24} height={24} />
        </div>
        <div className="btn next" onClick={() => controlClickHandle()}>
          <IconArrowRight width={24} height={24} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item: string, index: number) => (
            <div className="item" key={item}>
              <span
                className={classNames('dot', {
                  more:
                    index > selectIndex + dotMore.current ||
                    index < selectIndex - dotMore.current,
                  active: selectIndex === index
                })}
              ></span>
            </div>
          ))}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item: string) => (
          <div className="room-item-cover" key={item}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      contentWidth={contentWidth}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : sliderElement}
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
