/**
 * 功能说明：通用方法封装类
 * 作者：王宜
 * 邮箱：wangyi1@boco.com.cn
 */

/**
 * 判断对象中的对象都有空值
 * @param data 需要进行判断的对象
 * @param except
 * @returns {boolean} 返回是否里面有空值（true有）
 */
let isObjectEmpity = (data, except) => {
  let arr = Object.keys(data)
  // console.log('arr', arr)
  let arrExcept = []
  let isExcept = false
  arr.forEach(
    (arrItem) => {
      if (except) {
        for (let i = 0; i < except.length; i++) {
          if (arrItem === except[i]) {
            isExcept = true
            break
          }
        }
      }
      if (isExcept === false) {
        arrExcept.push(arrItem)
      }
      isExcept = false
    }
  )
  for (let i = 0; i < arrExcept.length; i++) {
    if (!data[arrExcept[i]] && data[arrExcept[i]] !== 0) {
      isExcept = true
      break
    }
  }
  return isExcept
}
/**
 * 删除对象中不用的值
 * @param data
 * @param list
 */
let deleteOther = (data, list) => {
  let returned = {}
  list.forEach((item) => {
    returned[item] = data[item]
  })
  return returned
}

/**
 * 对象数组去重
 * @param arr 需要进行去重的数组
 * @param key 需要去重的对象的键值
 * @returns {Array}
 */
let filterArr = (arr, key) => {
  let result = []
  let obj = {}
  arr.forEach(
    (item) => {
      if (!obj[item[key]]) {
        result.push(item)
        obj[item[key]] = true
      }
    }
  )
  return result
}

export default {
  isObjectEmpity: isObjectEmpity,
  deleteOther: deleteOther,
  filterArr: filterArr
}
