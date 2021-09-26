import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'
import { AtIcon } from 'taro-ui'


class Search extends Component {

    render() {
        return (
            <View className='container'>
                <View className='at-row'>
                    <View className='at-col at-col__offset-2'>
                        标签A
                    </View>
                    <View className='at-col at-col__offset-3'>
                        标签B
                    </View>
                    <View className='at-col'>C</View>
                </View>
            </View>
        )
    }
}


export default Search