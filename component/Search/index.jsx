import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

class Search extends Component {
  render() {
    return (
      <View className='at-row'>
        <View className='at-col at-col-0.5'></View>
        <View className='container'>
          <AtIcon value='search' size='20' color='#BABABA'></AtIcon>
          <Text className='search_text'>搜索</Text>
        </View>
        <View className='at-col at-col-0.5'></View>
      </View>
    );
  }
}

export default Search;
