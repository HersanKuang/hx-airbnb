import type { FC, ReactNode } from 'react'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from '@/base-ui/indicator/style'

interface IProps {
  children?: ReactNode
  selectIndex: number
}

const Indicator: FC<IProps> = ({ selectIndex, children }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    /** 获取selectIndex对应的item */
    const selectItemEl = contentRef.current!.children[
      selectIndex
    ] as HTMLElement
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    /** 获取i-content的宽度 */
    const contentWidth = contentRef.current!.clientWidth
    const contentScroll = contentRef.current!.scrollWidth
    /** 获取selectIndex要滚动的距离 */
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    /** 特殊情况处理 */
    if (distance < 0) distance = 0 // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理
    /** 改变位置 */
    contentRef.current!.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  )
}

export default memo(Indicator)
