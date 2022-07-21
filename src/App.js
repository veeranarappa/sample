
import './App.css';
import {About} from './About'
import Services from "./Services"
import One from './One'
import Two from './Two'
import Usestate from './Usestate';
import Function1 from './Function1';
import Function2 from './Function2';

import Events from './Events'

import List from './List'
import Forms from './Forms'
import Practice from './Practice'
import Counter from './Counter'
import FunComponent from './FunComponent';
import UseEffect from './UseEffect';
import Count from './Count'
import FunCounter from './FunCounter';
import Contexta from './Contexta';
import Useref from './Useref'
import Renderdata from './Renderdata';
import React from 'react';
import Funstate from './Funstate';
import Axiousdata from './Axiousdata';
import Classupdate from './Classupdate';
import Functionupdate from './Functionupdate';
import Todolist from './Todolist';
import ComponentRedux from './ComponentRedux';
import practice from './Practice';
import Abc from './Abc'

function App(props) { 
  var x = true
   
  return (
    <div className="App">
       <Forms></Forms>
       
      <h1> This is My First Project</h1>
   <hr/>
 <Practice></Practice>
 
   {/* 
   <ComponentRedux></ComponentRedux>
   <Abc></Abc>
   <Practice></Practice> */}
      {/* <Todolist></Todolist> */}
      {/* <Practice/>
      

      <Classupdate/>
      <Functionupdate/>
      <Practice/>
      <Axiousdata/> */}

      {/* <Function2></Function2>

      <Events></Events>
       <FunComponent></FunComponent>
        <Funstate/>
      <About name={x} age={27} /> 
      <Services></Services>
      <One></One>
      <Two  gender="Male"></Two>
      {x === true ?  <Usestate/> : <Function1/>}
      <hr/>
     
      <Count></Count>
      <FunCounter></FunCounter>
      <Forms></Forms>

      <List></List> */}

      
{/* 
      <Counter></Counter>

      <FunComponent></FunComponent>

      <UseEffect></UseEffect>

      <Useref></Useref>
      <Contexta></Contexta>

      <Renderdata data={(userdata)=> {
          return userdata?.map(x => {
            return <React.Fragment>
              <div> {x.id}</div>
              <div> {x.title}</div>
      </React.Fragment>
          })
      }}
      /> */}
    </div>
  );
}   
export default App; 
//json-server --watch db.json
// npm install -g json-server


// veera 