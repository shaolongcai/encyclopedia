import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import empty_box from '../../image/empty-box.png'

class Empty extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View className='empty_container'>
                <View className='empty_img'>
                    <Image className='empty_box' mode='aspectFit' src={empty_box} />
                </View>
                <View className='empty_text'>
                    <Text>{this.props.text}</Text>
                </View>
                <View className='empty_btn'>
                    <AtButton type='primary' size='normal' openType={this.props.openType} >{this.props.btn_text}</AtButton>
                </View>
                

            </View>
        )
    }
}


export default Empty