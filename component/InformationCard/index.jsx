import { Component } from 'react'
import { AtCard } from "taro-ui"
import { View, Text, } from '@tarojs/components'
import './index.scss'
import Gap from '../Gap/index'
import Taro from '@tarojs/taro'



class InformationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extraStyle: {
                'color': '#1890FF'
            }
        }
    }

 


    toDetail(e){
        const id = e.mpEvent.currentTarget.id
        Taro.navigateTo({
            url:'../detail/index?id='+ id
        })
    }

    render() {
       
        return (
            <View className='info_container'  onClick={this.toDetail.bind(this)} id={this.props.id}>
                <AtCard
                    extra='详情'
                    isFull=''
                    extraStyle={this.state.extraStyle}
                    title={this.props.title}
                    className = 'AtCard'
                >
                    {this.props.content}
                </AtCard>
                <Gap size='mini' />
            </View>
        )
    }
}


export default InformationCard