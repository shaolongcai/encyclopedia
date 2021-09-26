import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import Search from '../../../component/Search/index'
import { Swiper, SwiperItem } from '@tarojs/components'
import banner from '../../../image/942.png'


export default class Index extends Component {

  componentWillMount() {
    console.log('1')
   }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View style="margin-top:10px">
          <Search />
        </View>
        <Image className='banner' mode='aspectFill' src={banner} />
      </View>
    )
  }
}
