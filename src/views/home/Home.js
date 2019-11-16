import React,{Component} from 'react'
import {Homeheader,Homebanner} from './styledcomponents'
import {Icon} from 'antd-mobile';
import {connect} from 'react-redux'//引入redux
import{mapStateToProps,mapDispatchToProps}from './mapprops';
class Home extends Component{
    render(){
        return(
            <div>
             <Homeheader>
              <div>
              <Icon type="search" size="xxs"/>
              <span>卷皮</span>
              <p>搜索</p>
              </div>
              <a><img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png"/></a>
             </Homeheader>
            </div>
        )
    };
    componentDidMount(){
        this.props.getSlideList();
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)