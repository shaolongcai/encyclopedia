import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import Useful from '../../../component/Useful'
import Gap from '../../../component/Gap'
 
export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      detail:{}
    }
  }
     
  onLoad(e){
    console.log(e)
    const id = e.id 
    Taro.request({
      url:'http://127.0.0.1:9527/api/informationDetail',
      data:{
        id:id
      },   
      success:res=>{
        console.log(res)
        this.setState({
          detail:res.data
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
    const detail = this.state.detail
    return (
     
     
        <View className='at-article'>
        <View className='at-article__h1'>
            {detail.title}
        </View>
        <View className='at-article__info'>
          {detail.creatTime}&nbsp;&nbsp;&nbsp;{detail.author}
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__p'>
              {detail.content}asdsadkdkasljkdkalsdklsakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdajakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdajakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdajakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdajakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdajakdakldasklslkadjklslkadjkasksdljkldjksjkdajkdjkskdaj
            </View>
            <Image 
              className='at-article__img' 
              src={detail.image? detail.image : 'https://jdc.jd.com/img/400x400'} 
              mode='widthFix' />
          </View>
        </View>
        <Gap size='huge'/>
        <View className='useful' >
          <Useful />
        </View>
      </View>
    )
  }
}
