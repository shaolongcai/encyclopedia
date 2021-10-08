import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { AtToast } from "taro-ui"
import like from '../../image/like.png'
import like_onclick from '../../image/like_onclick.png'
import unlike from '../../image/unlike.png'
import unlike_onclick from '../../image/unlike_onclick.png'



class Useful extends Component {
    constructor(props){
        super(props)
        this.state = {
            onChoose :'',
            isOpened:false
        }
    }

    chooseLike(){
        const onChoose = this.state.onChoose
        if(onChoose != 'like') {
            this.setState({
                onChoose:'like',
                isOpened:false
            })

            //调接口：判断是否需要将赞成/反对 - 1
        }
        else{
            this.setState({
                isOpened:true
            })
        }
    }

    chooseUnlike(){
        const onChoose = this.state.onChoose
        if(onChoose != 'unlike') {
            this.setState({
                onChoose:'unlike',
                isOpened:false
            })
        }
        else{
            this.setState({
                isOpened:true
            })
        }
    }

  render() {
    return (
       <View className='useful_con'>
           <AtToast isOpened={this.state.isOpened} text="最多只可以投一次" ></AtToast>
           <Text className='userful_text'>文本是否有用？</Text>
           <View className='like' onClick={this.chooseLike.bind(this)}>
               <Image className='like_img' src={this.state.onChoose == 'like'? like_onclick : like} />
           </View>
           <View className='unlike' onClick={this.chooseUnlike.bind(this)}>
               <Image className='unlike_img' src={this.state.onChoose == 'unlike'? unlike_onclick : unlike} />
           </View>
       </View>

    )
  }
}


export default Useful