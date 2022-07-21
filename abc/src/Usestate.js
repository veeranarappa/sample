import React, {useState} from 'react'

function Usestate(){
    let [user, setUser] = useState({ name: 'veera', age: '27', city: 'anathapuram', gender : 'male' })

    const handleChange = () => {
        setUser((preState) => {
            return {
                ...preState,
                city: 'Hyd'
            }
        })
    }

    return(
        <div>
            <hr/>
            <h1> {user.name}</h1>
            <h1> {user.age}</h1>
            <h1> {user.city}</h1>
            <h1> {user.gender}</h1>

               <button onClick={handleChange}> Click Here </button>
        </div>
    )
}
export default Usestate;