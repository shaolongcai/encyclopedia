import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import Search from '../../../component/Search/index'
import banner from '../../../image/942.png'
import Filter from '../../../component/Filter/index'
import InformationCard from '../../../component/InformationCard/index'
  

export default class Index extends Component {
  constructor(props){
    super(props) 
    this.state = {
      qaList:[] 
    }
} 

  onLoad(){
    Taro.request({
      url:'http://127.0.0.1:9527/api/informationList',
      success:res=>{
        this.setState({
          qaList:res.data.array
        })
      } 
    })
  }

  // 前往搜索页面
  toSearch(){
    
  }

  render() {
    // 渲染QA的列表卡片
    const qalist = this.state.qaList.map((item)=>{
      console.log(item)
      return <InformationCard title={item.title}  content={item.content} id={item.id}  />
    })
    return (
      <View className='index'>
        <View style="margin-top:10px" onClick={this.toSearch.bind(this)}>
          <Search />
        </View>
        <Image className='banner' mode='aspectFill' src={banner} />
        <Filter />
        {qalist}
      </View>
    )
  }
}
