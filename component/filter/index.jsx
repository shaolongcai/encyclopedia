import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import Gap from '../Gap/index'
import './index.scss'

class Filter extends Component {

    render() {
        return (
            <View>
                <View className='filter_container'>
                    <View className='tagChild'>
                        <AtTag className='tagA' active='true'>按照热度排序</AtTag>
                        <AtTag className='tagB'>按照时间排序</AtTag>
                    </View>

                </View>
                <Gap size='normal' />
            </View>
        )
    }
}


export default Filter