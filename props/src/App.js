import React from "react";
import StudentClass from './StudentClass';
import './index.css';


var students = [
  {id:1,name:"Sirojiddin1",status:'Student'},
  {id:2,name:"Sirojiddin2",status:'Student'},
  {id:3,name:"Sirojiddin3",status:'Student'},
  {id:4,name:"Sirojiddin4",status:'Student'},
  {id:5,name:"Sirojiddin5",status:'Student'},
  {id:6,name:"Sirojiddin6",status:'Student'},
]

class App extends React.Component{

  render(){
    return(

      <div>
        {
          students.map((value,index)=>{
            return(
              <StudentClass data={students} />
            )
          })
        }

      </div>
    )
  }

}

export default App;