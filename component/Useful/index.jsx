import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { AtToast, AtIcon, AtButton } from 'taro-ui';
import './index.scss';
import like from '../../image/like.png';
import like_onclick from '../../image/like_onclick.png';
import unlike from '../../image/unlike.png';
import unlike_onclick from '../../image/unlike_onclick.png';

class Useful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChoose: '',
      isOpened: false
    };

    this.chooseLike = this.chooseLike.bind(this);
    this.chooseUnlike = this.chooseUnlike.bind(this);
    this.shareArticle = this.shareArticle.bind(this);
  }

  chooseLike() {
    const onChoose = this.state.onChoose;
    if (onChoose != 'like') {
      this.setState({
        onChoose: 'like',
        isOpened: false
      });
      //调接口：判断是否需要将赞成/反对 - 1
    } else {
      this.setState({
        isOpened: true
      });
    }
  }

  chooseUnlike() {
    const onChoose = this.state.onChoose;
    if (onChoose != 'unlike') {
      this.setState({
        onChoose: 'unlike',
        isOpened: false
      });
    } else {
      this.setState({
        isOpened: true
      });
    }
  }

  shareArticle() {
    Taro.showShareMenu({
      withShareTicket: true
    });
  }

  render() {
    return (
      <>
        <View className='useful_con'>
          {this.props.name}
          <AtToast
            isOpened={this.state.isOpened}
            text='最多只可以投一次'
          ></AtToast>
          <Text className='userful_text'>文本是否有用？</Text>
          <View
            className='like'
            onClick={this.chooseLike}
            hoverClass='df-hover-class'
          >
            <Image
              className='like_img'
              src={this.state.onChoose == 'like' ? like_onclick : like}
            />
          </View>
          <View
            className='unlike'
            onClick={this.chooseUnlike}
            hoverClass='df-hover-class'
          >
            <Image
              className='unlike_img'
              src={this.state.onChoose == 'unlike' ? unlike_onclick : unlike}
            />
          </View>
          <AtButton
            openType='share'
            className='share'
            hoverClass='df-hover-class'
          >
            <AtIcon value='share' size='18' color='#020202' />
            <Text className='text'>分享转发</Text>
          </AtButton>
        </View>
        {/* fix safeheight */}
        {this.props.safeHeight ? (
          <View
            style={{ height: this.props.safeHeight + 'px', background: '#fff' }}
          />
        ) : null}
      </>
    );
  }
}

export default Useful;
