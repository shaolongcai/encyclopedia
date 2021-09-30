import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import './index.scss'
import Filter from '../../../component/Filter/index'
import InformationCard from '../../../component/InformationCard/index'
import Empty from '../../../component/Empty'
import { isEmpty } from 'lodash'


export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      isEmpty:'true'
    }
  }

  componentWillMount() {
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(this.state.isEmpty)
    const isEmpty = this.state.isEmpty
    return (
      <View className='index'>
        {isEmpty ?
        <View className='empty'>
          <Empty  text='没有搜索结果' btn_text='重置搜索' />
        </View>
          :
          <View className='content'>
            <View className='search_bg'>
              <View className='search'>
                <Input className='search_input' placeholder='请输入问题' focus='true' />
              </View>
            </View>
            <Filter />
            <InformationCard />
            <InformationCard />
            <InformationCard />
            <InformationCard />
          </View>
        }
      </View>
    )
  }
}
