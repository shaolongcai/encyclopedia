import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import './index.scss' 
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
        <View className='search_bg'>
            <View className='search'>
                <Input className='search_input' placeholder='请输入问题' focus='true'  />
            </View>
        </View>
        <Filter />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
      </View>
    )
  }
}
