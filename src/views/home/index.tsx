import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hxRequest from '@/services'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const [highScore, setHighScore] = useState<any>({})
  useEffect(() => {
    hxRequest.get({ url: '/home/highscore' }).then((res) => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore.list?.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Home)
