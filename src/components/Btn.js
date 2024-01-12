import React from "react";
// export function Btn(){
//     let counter=0;
//     const clickHandler=
//     ()=>{
//         counter++;
//         if (counter===1)
//         alert(`clicked ${counter} time`)
//         else alert(`clicked ${counter} times`)
//     }
//     return(
//         <button onClick={ clickHandler }>
//             Click me
//         </button>
//     );
// }

export function Btn(props){
    // message=props.message
    const mouserHandler=
    ()=>{
        alert(`${props.message}`)
    }
    return(
        <button onMouseOver={mouserHandler}>
            Click me
        </button>
    );
}


// export function Btn() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
