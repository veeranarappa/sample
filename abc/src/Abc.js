import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Abc(){
    const [user , setUser] = useState(null);

useEffect(() =>{
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(res=> {
    setUser(res.data)
   })
})

 return(
     <div>
         <h1> Axious Data</h1>
            {user?.map(x=> {
             return <>
                 <div> {x.name}</div>
                 <div> {x.username}</div>
                 <hr/>

             </>
         })
         
         }
     </div>
 )
}

export default Abc;