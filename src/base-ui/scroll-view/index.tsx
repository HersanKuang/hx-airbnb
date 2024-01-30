import type { FC, ReactNode } from 'react'
import React, { memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ScrollViewWrapper } from '@/base-ui/scroll-view/style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

interface IProps {
  children?: ReactNode
  isShowCover?: boolean
}

const ScrollView: FC<IProps> = ({ isShowCover, children }) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const posIndex = useRef(0)
  const totalDistance = useRef(0)
  /** 组件渲染完毕，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef<HTMLDivElement>(null)

  function controlClickHandle(isRight: boolean) {
    const newIndex = isRight ? posIndex.current + 1 : posIndex.current - 1
    const itemsEl = scrollContentRef.current!.children[0] as HTMLElement
    const newEl = itemsEl.children[newIndex] as HTMLElement
    const newElOffsetLeft = newEl.offsetLeft
    itemsEl.style.transform = `translate(-${newElOffsetLeft}px)`
    posIndex.current = newIndex
    setShowRight(totalDistance.current > newElOffsetLeft)
    setShowLeft(newElOffsetLeft > 0)
  }

  useEffect(() => {
    const scrollWidth = scrollContentRef.current!.scrollWidth // 一共可以滚动的距离
    const clientWidth = scrollContentRef.current!.clientWidth // 本身占据的宽度
    totalDistance.current = scrollWidth - clientWidth // 剩余可滚动的距离
    setShowRight(totalDistance.current > 0)
  }, [children])

  return (
    <ScrollViewWrapper>
      {isShowCover && (
        <div className={classNames('cover', { 'cover-left': showLeft })}></div>
      )}
      {showLeft && (
        <button
          onClick={() => controlClickHandle(false)}
          className="control left"
        >
          <IconArrowLeft />
        </button>
      )}
      {isShowCover && (
        <div
          className={classNames('cover', { 'cover-right': showRight })}
        ></div>
      )}
      {showRight && (
        <button
          onClick={() => controlClickHandle(true)}
          className="control right"
        >
          <IconArrowRight />
        </button>
      )}
      <div className="scroll-content" ref={scrollContentRef}>
        {children}
      </div>
    </ScrollViewWrapper>
  )
}

export default memo(ScrollView)
