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
        console.log(typeof(res.data.array)) 
        this.setState({
          qaList:res.data.array
        })
      } 
    })
  }

  componentWillMount() {
   } 

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    // 渲染QA的列表卡片
    const qalist = this.state.qaList.map((item)=>{
      return <InformationCard />
    })
    return (
      <View className='index'>
        <View style="margin-top:10px">
          <Search />
        </View>
        <Image className='banner' mode='aspectFill' src={banner} />
        <Filter />
        {qalist}
      </View>
    )
  }
}
