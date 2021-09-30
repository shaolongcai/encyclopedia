  /**
   * 每一个组件的间距都用此组件来控制，如antd的 8px 16px 24px
   * 此处有3个选项，小、中、大；分别为10px、20px、30px
   * 参数 size:mini/normal/big
   */

import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

class Gap extends Component {
    constructor(props){
            super(props)
            if(this.props.size == 'big' ){
                var size= 'height:30px'
                
            
            }
            else if(this.props.size == 'normal'){
                var size = 'height:20px'      
               
            }
            else if(this.props.size == 'mini'){
                var size = 'height:10px'
               
            }
            this.state={
                size
            }
    }
        

    render() {

        return (
            <View style={this.state.size} >
            </View>
        )
    }
}


export default Gap