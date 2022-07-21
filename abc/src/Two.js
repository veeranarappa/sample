import React from 'react'
import img from "./images/img1.jpg"
import img1 from './images/img2.jpg'

class Two extends React.Component{ 

    constructor(props){
        super(props)
        this.state ={
            name : 'veera',
            city :'anantapur',
            mobile : 8546921996
        }
    }

    update(){
        this.setState({
            name:'Ravi'
        })
    }


    render(){
        return(
            <div>
                <h2> This is Heading 2 </h2>
                <img className="img" src={img}/>
                <img  className="img" src={img1}/>
                <h1> {this.state.name}</h1>
                <h1> {this.state.city}</h1>
                <h1> {this.state.mobile}</h1>

                <button onClick={() => this.update()}> Click </button>

                <h1> {this.props.gender}</h1>
            </div>
        )
    }
}

export default Two;