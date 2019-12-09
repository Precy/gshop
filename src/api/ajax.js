/*
ajax请求函数模块
返回值：promise对象
 */
import axios from 'axios'
export default function ajax(url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if(type == 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== '') {
        //最后一个参数会多一个&，所以要去掉。
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
