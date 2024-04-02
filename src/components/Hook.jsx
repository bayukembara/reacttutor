import React, { useState } from "react";

const Hook = (props) => {
  const [originalState, methodSet] = useState({
    fruits: [
      { name: "Manggo", weight: "120gr" },
      { name: "Apple", weight: "120gr" },
      { name: "Orage", weight: "120gr" },
    ],
  });

  const clickHandler = () => {
    methodSet({
      fruits: [
        { name: "Xiaomi", weight: "120gr" },
        { name: "Samsung", weight: "120gr" },
        { name: "Oppo", weight: "120gr" },
      ],
    });
  };

  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
      <h1>Hello World {originalState.fruits[0].name}</h1>
      <h1>Hello World {originalState.fruits[1].name}</h1>
      <h1>Hello World {originalState.fruits[2].name}</h1>
    </>
  );
};

export default Hook;

// constructor(props) {
//     super(props);
//     this.state = {
// fruits: [
//     { name: "Manggo", weight: "120gr" },
//     { name: "Apple", weight: "120gr" },
//     { name: "Orage", weight: "120gr" },
//   ],
//     };
//   }

//   clickHandler = () => {
//     //! this change nothing in the state
//     // this.state.fruits[0].name = "Samsung";
//     //! this is state manipulation
//     this.setState({
//       fruits: [
//         { name: "Nokia", weight: "120gr" },
//         { name: "Xiaomi", weight: "120gr" },
//         { name: "Vivo", weight: "120gr" },
//       ],
//     });
//   };
