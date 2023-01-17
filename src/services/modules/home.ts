import hxRequest from '@/services'

export function getHomeGoodPriceData() {
  return hxRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return hxRequest.get({
    url: '/home/highscore'
  })
}
