import React from "react";

/*function Greet() {
  return <h1>Hello Racheal</h1>;
}
*/

// Using arrow function syntax
const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Greet;
