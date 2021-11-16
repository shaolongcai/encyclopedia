import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss';
import Useful from '../../../component/Useful';
import Gap from '../../../component/Gap';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      safeHeight: null
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  onLoad(e) {
    const sysInfo = Taro.getSystemInfoSync();
    const safeHeight = sysInfo.screenHeight - sysInfo.safeArea.bottom;
    this.setState({ safeHeight });

    const id = e.id;
    Taro.request({
      url: 'http://127.0.0.1:9527/api/informationDetail',
      data: {
        id: id
      },
      success: res => {
        // console.log(res);
        this.setState({
          detail: res.data
        });
      }
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const detail = this.state.detail;
    return (
      <View className='at-article'>
        <View className='at-article__h1'>{detail.title}</View>
        <View className='at-article__info'>
          {detail.creatTime}&nbsp;&nbsp;&nbsp;{detail.author}
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__p'>{detail.content}</View>
            {/* <Image
              className='at-article__img'
              src={
                detail.image ? detail.image : 'https://jdc.jd.com/img/400x400'
              }
              mode='widthFix'
            /> */}
          </View>
        </View>
        <Gap size='huge' />
        <View className='useful'>
          <Useful safeHeight={this.state.safeHeight} />
        </View>
      </View>
    );
  }
}
