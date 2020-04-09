// import React, { Component } from 'react'
// import Axios from 'axios';
// import Getdomdata from './Getdomdata';
// import Getdominput from './Getdominput';
// import '../App.css';

// export class India extends Component {
//     state={
//         rajya:'',
//         items:[],
//         confirmed:'',
//         recovered:'',
//         deaths:''


//     }
   

//     componentDidMount(){
//         // this.getdomdata(dominput);

//             fetch('https://api.covid19india.org/v2/state_district_wise.json')
//             .then(res=>res.json())
//             .then(json=>{
//              this.setState({
//                  confirmed:res.data.confirmed.value,
//                  recovered:res.data.recovered.value,
//                  deaths:res.data.deaths.value,
//                  items:json
//                })
//             });
     

//       }

// //       async getdomdata(dominput)
// //    {
// //     const res= await Axios.get('https://api.covid19india.org/v2/state_district_wise.json')

      
// //        });
          
           
// //   };
     
//       inputdomHandler=(e)=>{
//        var dominput=e.target.value;
//        this.setState({
//         rajya:dominput
//        });
     
//         if(dominput===''){
//             dominput='Kerala';
//         }
//         else{
//          this.componentDidMount(dominput)
//         }
//     }
     
//     render() 
//     {

//         const loop=items.map(item =>(
//            <div> {item.rajya.districtData.district}</div>
//         ))

//         return (
//             <div className="App">

//       <Getdominput handle={this.inputdomHandler}/>
//             <div className="country">showing stats of:{this.state.rajya}</div>
//           <Getdomdata 
//           conf={this.state.confirmed} recov={this.state.recovered} death={this.state.deaths} />

//         {loop}
//     </div>
//         );
//     }
// }


// export default India
