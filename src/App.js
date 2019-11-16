import React,{Component} from 'react';
import TabBarExample from './common/tabBar';
import {
       Home,
       Classify,
       ShopCar,
       Me
      } from '@views';

import  {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";


class App extends Component {
  render(){
  return (
     <Router>
          <Switch>
            <Redirect from="/" to="/home" exact/>
            <Route path="/home" component={Home}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/shopcar" component={ShopCar}/>
            <Route path="/me" component={Me}/>
          </Switch>
       <TabBarExample/>
     </Router>
  )
    }
}
export default App;
