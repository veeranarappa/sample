import React from 'react'
import Lists from './Lists'

function List(){

    //var x =[1,2,3,4,5,6,7]

    // let list = x.map((val, ind, arr)=>{
    //         return <li> {val}</li>
    // })

    let list = [
        {
            image : 'https://media-cdn.tripadvisor.com/media/photo-s/01/85/33/7e/charminar-the-brand-of.jpg',
            city : 'Hyderabd',
            name : 'Charminar'
        },
        {
            image : 'https://i.ytimg.com/vi/UPRKkSU5_40/maxresdefault.jpg',
            city : 'Hyderabd',
            name : 'Hitech City'
        },
        {
            image : 'https://cdn.gulte.com/wp-content/uploads/2021/08/E-BDmq9VkAUXS4T.jpg',
            city : 'Hyderabd',
            name : 'Tank Bund'
        },
        {
            image : 'https://lh3.googleusercontent.com/nheWOvoX4f6Nhevh-iwVm1DE_OSPyPe8HW2RAOf3PzlucVdk_MgQw4VY4mCUqDDuDg=s1200',
            city : 'Hyderabd',
            name : 'Hussain Sagar'
        }
    ]
    return(
        <div>
            <h1> List Tag </h1>
            <div className="d-flex">
            {list.map((val, ind, arr)=>{
             return (
             <div className="m-20">
             <div className="card w-33">
            <Lists data={val} ></Lists>
            </div>
             </div>
             )
     })}
     </div>

        </div>
    ) 
}

export default List;