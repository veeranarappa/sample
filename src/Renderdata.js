import React, {useState, useEffect} from 'react'

function Renderdata(props){

    const [userdata, setUserdata] = useState(null);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setUserdata(json))
})

    return(
        <React.Fragment>
            {props.data(userdata)}

            
        </React.Fragment>
    ) 
}
export default Renderdata;