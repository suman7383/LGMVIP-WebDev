import './App.css';
import UserCard from './Components/UserCard';
import { useState } from 'react';
import Loading from './Components/Loading';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  const url=["https://reqres.in/api/users?page=1",
  "https://reqres.in/api/users?page=2"]


function App() {
  const [data,setData]=useState([]);
  const [count,setCount]=useState(0);
  let users=[];
  const [loading, setLoading]=useState(false);

  
  const getUsers =(link)=>{ 
        axios.get(link).then((res)=>{

          res.data.data.map((item)=>{
            return users.push(item)
            
          })
        }) 

       const timeout= setTimeout(()=>{
          setData(users);
          setLoading(false)
        },1500)
           
        return()=>clearTimeout(timeout)
  }

  const onClickHandler=()=>{
    
    if(count>=1){
      
      return;
    }
    setCount(count+1);

    setLoading(true)
  
 
      url.map((link)=>{
        return getUsers(link);       
    })
  }

  return (
    <div className="App ">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-10">
              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-6 col-xl-5 col-6 d-flex justify-content-start align-items-center">
                  <object data="logo.svg" width="140" height="70" aria-labelledby="image"/>
                </div>
                <div className="col-md-5 col-lg-6 col-xl-6 col-6 d-flex justify-content-end my-auto">
                    <button className="button" onClick={onClickHandler}>Get Users</button>
                </div>

              </div>

          </div>
          
        </div>

        
      </div>
    <div className="container">
      <div className="row justify-content-center">
        {loading?<Loading className="col-md-12 col-12 mt-5"/>:<div className="col-md-12 col-12">
          <div className="row justify-content-center">
            {data?.map((user)=>{
            return (
              <UserCard {...user} key={data.id}/>
            )
          })
          }
          </div>
        </div>}
      </div> 
    </div>
    </div>
  );
}

export default App;
