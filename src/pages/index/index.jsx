import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image, ScrollView } from '@tarojs/components';
import { AtCurtain } from 'taro-ui';
import './index.scss';
import Search from '../../../component/Search/index';
import Filter from '../../../component/Filter/index';
import InformationCard from '../../../component/InformationCard/index';
import GetMore from '../../../component/GetMore';
//图片资源
import banner from '../../../image/942.png';
import fixturesCode from '../../../image/fixturesCode.png';
//公共函数
import utiliy from '../../utiliy/utiliy';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qaList: [],
      isOpened: false,
      page: 0,
      size: 2,
      type: 'hot',
      moreStatus: 'more'
    };
  }

  onLoad() {
    const page = this.state.page;
    const size = this.state.size;
    const type = this.state.type;
    const qaList = this.state.qaList;
    utiliy.getQaList(page, size, type).then(res => {
      this.setState({
        qaList: qaList.concat(res)
      });
    });
  }

  // 前往搜索页面
  toSearch() {
    Taro.navigateTo({
      url: '../search/index'
    });
  }

  //点击图片
  showCode() {
    //点击后直接跳转到小程序
  }

  onClose() {
    this.setState({
      isOpened: false
    });
  }

  // 向上滑动加载更多
  onScrollToLower() {
    //若没有更多则不需要请求
    const moreStatus = this.state.moreStatus;
    if (moreStatus == 'more') {
      this.setState({
        moreStatus: 'loading'
      });
      const page = this.state.page + 1;
      const size = this.state.size;
      const qaList = this.state.qaList;
      const type = this.state.type;
      utiliy
        .getQaList(page, size, type)
        .then(res => {
          this.setState({
            qaList: qaList.concat(res),
            page: page,
            moreStatus: 'more'
          });
        })
        .catch(res => {
          console.log('error:', res);
          this.setState({
            moreStatus: 'nomore'
          });
        });
    }
  }

  // 处理子组件的数据流;接受一个数组,一个类型
  handleChildrendData(type) {
    const page = this.state.page;
    const size = this.state.size;
    const number = (page + 1) * size;
    utiliy.getQaList(0, number, type).then(res => {
      this.setState({
        qaList: res
      });
    });
  }

  render() {
    // 渲染QA的列表卡片
    const qalist = this.state.qaList.map(item => {
      return (
        <InformationCard
          title={item.title}
          content={item.content}
          id={item.id}
          key={item.id}
        />
      );
    });
    return (
      <ScrollView
        scrollY
        onScrollToLower={this.onScrollToLower.bind(this)}
        style='height:95vh'
      >
        <View className='index'>
          <AtCurtain
            isOpened={this.state.isOpened}
            onClose={this.onClose.bind(this)}
          >
            <Image style='width:100%;height:250px' src={fixturesCode} />
          </AtCurtain>
          <View style='margin-top:10px' onClick={this.toSearch.bind(this)}>
            <Search />
          </View>
          <Image
            className='banner'
            mode='aspectFill'
            src={banner}
            onClick={this.showCode.bind(this)}
          />
          <Filter handleChildrendData={this.handleChildrendData.bind(this)} />
          {qalist}
          <GetMore status={this.state.moreStatus} />
        </View>
      </ScrollView>
    );
  }
}
