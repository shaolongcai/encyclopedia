import Taro from '@tarojs/taro'

// 获取qalist的函数，入参：页数、项目数、类型
function getQaList(page, size, type) {
    Taro.showLoading({
        title: '加载中'
    })
    return new Promise(async (resolve, reject) => {
        Taro.request({
            url: 'https://segment-4gezmw2c75430e48-1255646301.ap-shanghai.app.tcloudbase.com/get_info_list',
            data: {
                page: page,
                size: size,
                type: type
            },
            success: res => {
                if (res.data.length == 0) {
                    reject('已无更多数据')
                }
                else {
                    resolve(res.data)
                }
                Taro.hideLoading()
            }
        })
    })
}

export default{
    getQaList
}

// module.exports = {
//     getQaList: getQaList
// }