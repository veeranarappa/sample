import React, {useState} from 'react'

function Funstate(){
    const [user, setUser] = useState('veera');

   function handleOrangeClick(){
    setUser('ravi')
   }
   
    return(
        <div>
            <h1> {user}</h1> 
                <button onClick={handleOrangeClick}> Handle Click </button>
        </div>
    )

}

export default Funstate;