import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import Taro, { offWindowResize } from '@tarojs/taro'
import Filter from '../../../component/Filter/index'
import InformationCard from '../../../component/InformationCard/index'
import Empty from '../../../component/Empty'
import './index.scss'



export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchData: [],
      empty:false
    }
  }

  onLoad() {

  }

  onConfirm(e) {
    const keyworld = e.detail.value
    Taro.request({
      url: 'http://127.0.0.1:9527/api/informationSearch',
      data: {
        keyworld: keyworld
      },
      success: res => {
        console.log(res)
        if(res.data == 0){
          this.setState({
            searchData: res.data,
            empty:true
          })
        }
        else{
          this.setState({
            searchData: res.data,
            empty:false
          })
        }
      }
    })
  }

  render() {
    const searchData = this.state.searchData
    const qaList = searchData.map(item => {
      return <InformationCard title={item.title} content={item.content} id={item.id} />
    })
    return (
      <View className='index'>
        <View className='search_bg'>
          <View className='search'>
            <Input className='search_input' placeholder='请输入问题' focus='true' autoFocus='true' onConfirm={this.onConfirm.bind(this)} />
          </View>
        </View>
        {this.state.empty ?
          <View className='empty'>
            <Empty text='没有搜索结果' btn_text='联系客服' openType='contact' />
          </View>
          :
          <View className='content'>
            {searchData.length == 0? '': <Filter />}
            {qaList}
          </View>
        }
      </View>
    )
  }
}
