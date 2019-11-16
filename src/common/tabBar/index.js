import React,{Component} from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
 class TabBarExample extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'home',
        hidden: false,
        fullScreen: true,
      };
      //console.log(this.props)
    }
       
   render() {
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#FF464E"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home',
                });
                this.props.history.push("/home");
                document.title = "首页";
              }}
              data-seed="logId"
            >
             
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://goods5.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="分类"
              key="classify"
              selected={this.state.selectedTab === 'classify'}
              onPress={() => {
                this.setState({
                  selectedTab: 'classify',
                });
                this.props.history.push("/classify");
                document.title = "分类";
              }}
              data-seed="logId1"
            >
              分类
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="购物车"
              key="shopCar"
             
              selected={this.state.selectedTab === 'shopcar'}
              onPress={() => {
                this.setState({
                  selectedTab: 'shopcar',
                });
                this.props.history.push("/shopcar");
                document.title = "购物车";
              }}
            >
             购物车
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png' }}
              selectedIcon={{ uri: 'https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png' }}
              title="我的卷皮"
              key="me"
              selected={this.state.selectedTab === 'me'}
              onPress={() => {
                this.setState({
                  selectedTab: 'me',
                });
                this.props.history.push("/me");
                document.title = "我的卷皮";
              }}
            >
             我的卷皮
            </TabBar.Item>
          </TabBar>
        </div>
      );
    }
  }
  

  export default withRouter(TabBarExample)
