// 入参：
//  状态：加载更多、加载中、没有更多了
// 'more', 'loading', 'noMore'

import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './index.scss'

class GetMore extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const status = this.props.status
        if (status == 'more') {
            var getmore = <Text>--上滑加载更多--</Text>
        }
        else if (status == 'loading') {
            var getmore = 
            <View style='position: relative;margin-top:10px'>
                  <AtActivityIndicator content='加载中...' mode='center' />
            </View>
        }
        else {
            var getmore = <Text>已没有更多了</Text>
        }
        return (
            <View className='getmore_con'>
                {getmore}
            </View>
        )
    }
}


export default GetMore