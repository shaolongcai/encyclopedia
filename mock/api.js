import mockjs from 'mockjs'

export default {
    'GET /api/informationList':
        mockjs.mock({
            "array": [
                {
                        "id":'123',
                        "title": "如何购买店铺装修服务？",
                        "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                        "view":1,
                        "ceartTime":'2021-09-30 14:00'
                    
                    
                },

                {
                    "id":'124',
                    "title": "如何购买店铺装修服务？",
                    "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                    "view":1,
                    "ceartTime":'2021-09-30 14:00'
                
                
            },
            {
                "id":'125',
                "title": "如何购买店铺装修服务？",
                "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                "view":1,
                "ceartTime":'2021-09-30 14:00'
            
            
        },
            ]
        }),
    'GET /api/informationDetail':(req,res)=>{
        // console.log(req.query['id'])
        res.json({
            "id": req.query['id'],
            "title": "如何购买店铺装修服务？",
            "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
            "author":'姐姐',
            "image":'',
            "view":1,
            "creatTime":'2021-09-30 14:00',
            "like":123,
            "unlike":2

        })
           
    },
    'GET /api/informationSearch':(req,res)=>{
        const keyworld = req.query['keyworld']
        if(keyworld == '1'){
            res.json([
                {
                    "keyworld": req.query['keyworld'],
                    "title": "如何购买店铺装修服务？",
                    "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                    "author":'姐姐',
                    "image":'',
                    "view":1,
                    "creatTime":'2021-09-30 14:00',
                    "like":123,
                    "unlike":2
        
                },
                {
                    "keyworld": req.query['keyworld'],
                    "title": "如何使用？",
                    "content": "在电脑端购买：登录小商店后台https://mp.weixin.qq.com→【服务市场】→【装修与营销】→点击【云店+店铺装修】；进入后选择所需周期购买。",
                    "author":'蔡包',
                    "image":'',
                    "view":1,
                    "creatTime":'2021-10-10 14:00',
                    "like":120,
                    "unlike":2 
                }
            ]
                
            )
           
        }
        else{
           res.json([])
        }
    }

    
}