import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import AreaHeader from '@/components/area-header'
import RoomItem from '@/components/room-item'
import { Button } from '@mui/material'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqualApp
  )

  /** 派发异步事件：发送网络请求 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <AreaHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo.list?.slice(0, 8).map((item: any) => (
              <RoomItem itemData={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </HomeWrapper>
  )
}

export default memo(Home)
