import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailWrapper } from '@/views/detail/style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import DetailPictures from '@/views/detail/c-cpns/detail-pictures'
import DetailInfos from '@/views/detail/c-cpns/detail-infos'
import { changeHeaderConfigAction } from '@/store/modules/main'

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  const { detailInfo } = useAppSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqualApp
  )
  return (
    <DetailWrapper>
      {detailInfo && <DetailPictures itemData={detailInfo} />}
      {detailInfo && <DetailInfos itemData={detailInfo} />}
    </DetailWrapper>
  )
}

export default memo(Detail)
