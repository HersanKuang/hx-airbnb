import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from '@/components/area-footer/style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

interface IProps {
  children?: ReactNode
  name?: string
}

const AreaFooter: FC<IProps> = (props) => {
  const { name } = props
  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info">
        <span className="text">
          {name ? `查看更多${name}房源` : '显示全部'}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
}

export default memo(AreaFooter)
