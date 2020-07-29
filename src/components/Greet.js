import React from 'react';

// props
// const Greet = props => {
//     console.log(props)
//     return (
//     <div>
//         <h1>
//             Hello {props.name}, a.k.a {props.heroName} 
//         </h1>
//         {props.children}
//     </div>
//     )
// }

// destructuring props in parameter
// const Greet = ({name, heroName}) => {
//     return (
//     <div>
//         <h1>
//             Hello {name}, a.k.a {heroName} 
//         </h1>
//     </div>
//     )
// }

// destructuring props in function body
const Greet = props => {
    const {name, heroName} = props
    return (
    <div>
        <h1>
            Hello {name}, a.k.a {heroName} 
        </h1>
    </div>
    )
}

export default Greet

