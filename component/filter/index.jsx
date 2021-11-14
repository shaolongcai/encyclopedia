import { Component } from 'react';
import { View } from '@tarojs/components';
import { AtTag } from 'taro-ui';
import Gap from '../Gap/index';
import './index.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'hot'
    };
  }

  // 点击 按热度排序
  AtHot() {
    const filter = this.state.filter;
    if (filter != 'hot') {
      this.props.handleChildrendData('hot');
      this.setState({
        filter: 'hot'
      });
    }
  }

  // 点击 按时间排序
  AtTime() {
    const filter = this.state.filter;
    if (filter != 'createTime') {
      this.props.handleChildrendData('createTime');
      this.setState({
        filter: 'createTime'
      });
    }
  }

  render() {
    return (
      <View>
        <View className='filter_container'>
          <View className='tagChild'>
            <AtTag
              className='tagA'
              active={!(this.state.filter == 'createTime') ? true : false}
              onClick={this.AtHot.bind(this)}
            >
              按照热度排序
            </AtTag>
            <AtTag
              className='tagB'
              active={this.state.filter == 'createTime' ? true : false}
              onClick={this.AtTime.bind(this)}
            >
              按照时间排序
            </AtTag>
          </View>
        </View>
        <Gap size='normal' />
      </View>
    );
  }
}

export default Filter;
