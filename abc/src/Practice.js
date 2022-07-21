
import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Practice(){
    const [user, setUser] = useState(null)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
         setUser(res.data)
        })
     })

    return(
        <div>
            <h1> Axios Data</h1>

            {user?.map(x=> {
             return <React.Fragment>
                 <div> {x.name}</div>

             </React.Fragment>
         })
         
         }
        </div>
    )
}
export default Practice;