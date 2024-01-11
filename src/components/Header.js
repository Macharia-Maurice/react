import React from 'react';
export function Header(props){
    console.log(props);
  return (<h1>Hello React!!, {props.name}, {props.color}</h1>);
}

//export default Header;