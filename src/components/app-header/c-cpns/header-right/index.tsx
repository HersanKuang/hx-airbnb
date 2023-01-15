import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RightWrapper } from '@/components/app-header/c-cpns/header-right/style'
import IconMenu from '@/assets/svg/icon_menu'
import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'

interface IProps {
  children?: ReactNode
}

const HeaderRight: FC<IProps> = () => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile">
        <IconMenu />
        <IconAvatar />

        <div className="panel">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>
      </div>
    </RightWrapper>
  )
}

export default memo(HeaderRight)
