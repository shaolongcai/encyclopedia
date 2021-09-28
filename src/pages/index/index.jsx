import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import Search from '../../../component/Search/index'
import banner from '../../../image/942.png'
import Filter from '../../../component/Filter/index'
import InformationCard from '../../../component/InformationCard/index'


export default class Index extends Component {

  componentWillMount() {
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
        <Filter />
        <InformationCard />
        <InformationCard />
      </View>
    )
  }
}
