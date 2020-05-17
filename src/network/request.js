import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    //在此处拦截的请求
    return config;//拦截完之后需返回
  }, err => { })

  instance.interceptors.response.use(res => {
    //在此处理拦截的响应
    return res.data;//拦截完之后需返回
  }, err => { })

  //2.发送真正的网络请求
  return instance(config);
}



