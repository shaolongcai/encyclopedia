import { Component } from 'react'
import { AtCard } from "taro-ui"
import { View, Text, } from '@tarojs/components'
import './index.scss'
import Gap from '../Gap/index'


class InformationCard extends Component {
    constructor(props){
    
            super(props)
            this.state={
                extraStyle:{
                    'color':'#1890FF'
                }
            }
    }
        

    render() {
        

        return (
            <View className='info_container'>
                <AtCard
                    extra='详情'
                    isFull=''
                    extraStyle={this.state.extraStyle}
                    title='这是个标题'
                >
                    这也是内容区 可以随意定义功能
                </AtCard>
                <Gap size='mini'/>
            </View>
        )
    }
}


export default InformationCard