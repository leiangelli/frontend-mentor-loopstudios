import { useState, useEffect } from 'react'

interface Info {
  width: number | undefined,
  height: number | undefined,
  os?: object,
  browser?: object,
  type?: string
}

const header = [
  navigator?.userAgent,
  navigator?.vendor
].join(' ')

const osList = [
  { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
  { name: 'Windows', value: 'Win', version: 'NT' },
  { name: 'iPhone', value: 'iPhone', version: 'OS' },
  { name: 'iPad', value: 'iPad', version: 'OS' },
  { name: 'Kindle', value: 'Silk', version: 'Silk' },
  { name: 'Android', value: 'Android', version: 'Android' },
  { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
  { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
  { name: 'Macintosh', value: 'Mac', version: 'OS X' },
  { name: 'Linux', value: 'Linux', version: 'rv' },
  { name: 'Palm', value: 'Palm', version: 'PalmOS' },
]
const browserList = [
  { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
  { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
  { name: 'Safari', value: 'Safari', version: 'Version' },
  { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
  { name: 'Opera', value: 'Opera', version: 'Opera' },
  { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
  { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' },
]

function generateDeviceInfo (header: any, list: any) {
  let version = ''

  for (const item of list) {
    const regex = new RegExp(item.value, 'i')
    const match = regex.test(header)

    if (match) {
      const regexv = new RegExp(item.version + '[- /:;]([\\d._]+)', 'i')
      let matches = header.match(regexv)

      if (matches && matches[1]) {
        matches = matches[1]
      }

      if (matches) {
        matches = matches.split(/[._]+/)

        for (const [index, value] of matches.entries()) {
          version += !index ? value + '.' : value
        }
      } 

      return {
        name: item.name.toLowerCase(),
        version: Number(version)
      }
    }
  }

  return {
    name: '',
    version: 0
  }
}

function deviceType () {
  const userAgent = navigator.userAgent

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tab'
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    return 'mb'
  }
  return 'pc'
}

function deviceInfo (): Info {
  const [info, setInfo] = useState<Info>({
    width: undefined,
    height: undefined
  })

  useEffect(() => { 
    function generateDimensions () {
      setInfo({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', generateDimensions)
    generateDimensions()
    
    return () => window.removeEventListener('resize', generateDimensions)
  }, [])

  const os = generateDeviceInfo(header, osList)
  const browser = generateDeviceInfo(header, browserList)

  return {
    ...info,
    os,
    browser,
    type: deviceType()
  }
}

export default deviceInfo