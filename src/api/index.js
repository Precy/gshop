/*
包含n个接口函数
 */
import ajax from './ajax'
const BASE_URL = '/api'
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/positon/${geohash}`)
//获取食品分类列表
export const reqFoodType = () => ajax(BASE_URL+'/index_category')
//根据经纬度获取商品列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
