// import React, { Component } from "react";
// import { render } from "react-dom";
// import classes from '../../App.css';


// class Loop extends Component {
//     state = {
//         color: "#ffc600",
//         width: 400,
//         height: 400,
//         brushRadius: 10,
//         lazyRadius: 12,
//         backgroundImg: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
//         imgs: [
//             "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
//             "https://i.imgur.com/a0CGGVC.jpg"
//         ]
//     };

//     componentDidMount() {
//         // let's change the color randomly every 2 seconds. fun!
//         window.setInterval(() => {
//             this.setState({
//                 color: "#" + Math.floor(Math.random() * 16777215).toString(16)
//             });
//         }, 2000);
//     }
// }

// render(<Loop />, document.querySelector("#demo"));

// export default Loop;