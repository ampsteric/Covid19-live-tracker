import React, { Component } from 'react';
import Axios from 'axios';
import Getdata from './Components/Getdata';
import Getinput from './Components/Getinput';

import './App.css';

class App extends Component {
  state={
    confirmed:0,
    recovered:0,
    deaths:0,
    country:''
  }
 componentDidMount(input){
   this.getdata(input);
 }
 async getdata(input){
   const res= await Axios.get(`https://covid19.mathdro.id/api/countries/${input}`);

   this.setState({
        confirmed:res.data.confirmed.value,
        recovered:res.data.recovered.value,
        deaths:res.data.deaths.value
      });
 }

 inputHandler=(e)=>{
  var input=e.target.value;
  this.setState({
   country:input
  });

   if(input===''){
     input='china';
   }
   else{
    this.componentDidMount(input)
   }
   
 }
  render(){
  return (
    <div className="App">

      <Getinput handle={this.inputHandler}/>
      <div className="country">showing stats of:{this.state.country}</div>
    <Getdata 
    conf={this.state.confirmed} recov={this.state.recovered} death={this.state.deaths} />

    </div>
  );
}
}

export default App;
