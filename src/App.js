import React, { Component} from "react";

import './App.css';



class App extends  Component{
  
  
  constructor(probs){
    super(probs);
    this.state={
      items:[],
      isLoaded:false,
    }
  }
  componentDidMount(){
    fetch('http://timeapi.kaaylabs.com/api/v1/project_view/')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
      isLoaded:true,
      items:json,

      })
    });
  }
  render(){
    var{isLoaded,items}=this.state;
  
    if(!isLoaded){
      return<div>Loading..</div>
    }else
     return(
        <div  >
        <div >
        {/* <pre className="folder">The below Dropbox displays the values of status present in the API data</pre> */}
  
         {/* <select className="class">list={this.state.items.data.map(user=><option value="user.value" placeholder="status">{user.status}</option>)}</select> */}

       
        </div>
        <br></br>
      <table  class="table   table-hover class " >
             <tbody className="class" >
                   <td  class="table-dark" >CName</td>
                    <td class="table-dark">Project id </td>
                    <td class="table-dark">Project  code</td>
                    <td class="table-dark">Start date</td>
                    <td class="table-dark">End date</td>
                     <td  class="table-dark">Status</td>
              </tbody>  
      </table>
          <table   class="table   table-hover class ">
                    {items.data.map(item=>(
            <tr  >
            <td class="table-dark">{item.company_name}</td>
            <td class="table-dark">{item.project_id}</td>
            <td class="table-dark">{item.project_code}</td>
            <td  class="table-dark">{item.start_date}</td>
            <td class="table-dark">{item.end_date}</td>
            <td class="table-dark">{item.status}</td>
            </tr>
          
            ))}
            </table>
          
        </div>
  );
    }
   
  }

  



export default App;