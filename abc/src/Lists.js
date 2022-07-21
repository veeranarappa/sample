import React from "react";

function Lists(props){
    return(
        <div>
           <img className="img-list" src={props.data.image}/>
          <h3>{props.data.city} </h3>
          <h3>{props.data.name} </h3>
          <button> Read More </button>
        </div>
    )
}
export default Lists;