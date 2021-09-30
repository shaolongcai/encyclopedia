import mockjs from 'mockjs'

export default {
    'GET /api/informationList':
        mockjs.mock({
            "array|4-8": [
                {
                    "object": {
                        "id":mockjs.mock('@id'),
                        "title": "如何购买店铺装修服务？",
                        "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                        "view":1,
                        "ceartTime":'2021-09-30 14:00'
                    }
                }
            ]
        })
    ,
}