import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from '@/components/area-footer/style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  name?: string
}

const AreaFooter: FC<IProps> = (props) => {
  const { name } = props
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">
          {name ? `查看更多${name}房源` : '显示全部'}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
}

export default memo(AreaFooter)
