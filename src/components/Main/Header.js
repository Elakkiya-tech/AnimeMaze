import React, { Component } from 'react';
import './Style.css';
import axios from 'axios';
import Chart from './Chart';
import Picture from './Picture';
import {Link} from 'react-router-dom';

class Header extends Component {
        state={
         imageurl:'https://api.jikan.moe/v3/search/anime',
         image: [],
         category : ""
          };
   onHandleChange = (event)=> {
     const values =event.target.value;
   
    
     this.setState({[event.target.name]:values},() =>{
   if (values==="")
   {
     this.setState({img:[]});
   }
   else{
     axios.get(`${this.state.imageurl}/?&q=${
       this.state.category
     }`)
     .then(res=> this.setState({image:res.data.imgurl}))
     .catch(err=>console.log(err));
     console.log(this.state.category)
   }
 });
};
  render(){
    return(
        <div className="head">
            <h1>ANIME MAZE</h1>
            <div className="search">
           
            <form>
               <label for="name" >Select Anime  </label>
             
               <select  value={this.state.category} onChange={this.onHandleChange}>
               
                   <option> </option>
                  
                   <option value = "title">Kimi no Na wa</option>
                   <option value ="title">Fruits Basket: The Final</option>
                   <option value ="title">Koe no Katachi </option>
                   <option value ="title">Hunter x Hunter</option>
                  
               </select>
  
              
            </form>
             </div>
             <div className="link">
            <Link to="/Animedetails" >🆗</Link>
            </div>
            <Picture />
     <Chart />
        </div>
    );
  }
}
export default Header;