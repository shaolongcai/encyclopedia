import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  onLoad(e){
    console.log(e)
  }

  componentWillMount() {
   }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
        <View className='at-article'>
        <View className='at-article__h1'>
            在支付时提示：“NO_AUTH此商家的付款功能已被限制，暂无法支付”，如何解决？
        </View>
        <View className='at-article__info'>
          2021-09-29&nbsp;&nbsp;&nbsp;姐姐
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__p'>
            请前往【电脑端】微信支付商户平台 网址：Pay.weixin.qq.com，请务必使用超级管理员微信扫码登录哦。（账户中心-违规记录）或【手机端】微信 - 微信支付商户助手小程序（风险处理记录-申诉中心）提交申诉材料，申诉成功后即可解除保护模式。
            </View>
            <Image 
              className='at-article__img' 
              src='https://jdc.jd.com/img/400x400' 
              mode='widthFix' />
          </View>
        </View>
      </View>
    )
  }
}
