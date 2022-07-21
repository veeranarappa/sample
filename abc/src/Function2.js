import React, {useState} from 'react'

function Function2(){
    const [user, setUser] = useState(0);

    const handleClick = (name, age)=> {
        console.log('abcdef...', name, age)
    }

    const handleClick1 =(e) => {
        handleClick('siva', 20)
    }

    return(
        <div>
                <button onClick={handleClick1}> Handle Click </button>
        </div>
    )

}

export default Function2;