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
      empty:false,
      page: 0,
      size: 2,
      type: 'hot',
      moreStatus: 'more',
      keyworld:''
    }
  }

  onLoad() {

  }

  onConfirm(e) {
    const keyworld = e.detail.value
    const page = this.state.page
    const size = this.state.size
    const type = this.state.type
    Taro.request({
      url: 'https://segment-4gezmw2c75430e48-1255646301.ap-shanghai.app.tcloudbase.com/search_info_list',
      data: {
        keyworld: keyworld,
        page:page,
        size:size,
        type:type
      },
      success: res => {
        console.log(res)
        if(res.data == 0){
          this.setState({
            searchData: res.data,
            empty:true,
            keyworld:keyworld
          })
        }
        else{
          this.setState({
            searchData: res.data,
            empty:false,
            keyworld:keyworld
          })
        }
      }
    })
  }

   // 处理子组件的数据流;接受一个数组,一个类型
   handleChildrendData(type){
    const page = this.state.page
    const size = this.state.size
    const keyworld = this.state.keyworld
    const number = (page+1)*size
    Taro.request({
      url: 'https://segment-4gezmw2c75430e48-1255646301.ap-shanghai.app.tcloudbase.com/search_info_list',
      data: {
        keyworld: keyworld,
        page:0,
        size:number,
        type:type
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
            {searchData.length == 0? '': <Filter handleChildrendData={this.handleChildrendData.bind(this)}/>}
            {qaList}
          </View>
        }
      </View>
    )
  }
}
