export function hxthrottle(
  callbackFn: any,
  interval = 250,
  { leading = true, trailing = true } = {}
) {
  let startTime = 0
  let timer: any = null
  const _throttle = function (...args: any[]) {
    return new Promise((resolve, reject) => {
      try {
        // 1.获取当前时间
        const nowTime = new Date().getTime()
        // 对立即执行进行控制
        if (!leading && startTime === 0) startTime = nowTime
        // 2.计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          if (timer) clearTimeout(timer)
          const res = callbackFn.apply(_throttle, args)
          resolve(res)
          startTime = nowTime
          timer = null
          return
        }
        // 3.判断是否需要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            const res = callbackFn.apply(_throttle, args)
            resolve(res)
            startTime = new Date().getTime()
            timer = null
          }, waitTime)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  // 取消功能
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }
  return _throttle
}
