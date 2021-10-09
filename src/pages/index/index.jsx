import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import Search from '../../../component/Search/index'
import Filter from '../../../component/Filter/index'
import InformationCard from '../../../component/InformationCard/index'
import { AtCurtain } from 'taro-ui'
//图片资源
import banner from '../../../image/942.png'
import fixturesCode from '../../../image/fixturesCode.png'
  

export default class Index extends Component {
  constructor(props){
    super(props) 
    this.state = {
      qaList:[],
      isOpened:false 
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
    Taro.navigateTo({
      url:'../search/index'
    })
  }

  //点击图片
  showCode(){
    //点击后直接跳转到小程序
  }

  onClose(){
    this.setState({
      isOpened:false
    })
  }

  render() {
    // 渲染QA的列表卡片
    const qalist = this.state.qaList.map((item)=>{
      return <InformationCard title={item.title}  content={item.content} id={item.id}  />
    })
    return (
      <View className='index'>
         <AtCurtain
        isOpened={this.state.isOpened}
        onClose={this.onClose.bind(this)}
      >
        <Image
          style='width:100%;height:250px'
          src={fixturesCode}
        />
      </AtCurtain>
        <View style="margin-top:10px" onClick={this.toSearch.bind(this)}>
          <Search />
        </View>
        <Image className='banner' mode='aspectFill' src={banner} onClick={this.showCode.bind(this)} />
        <Filter />
        {qalist}
      </View>
    )
  }
}
