import hxRequest from '@/services'

export function getEntireRoomList(offset = 0, size = 20) {
  return hxRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
