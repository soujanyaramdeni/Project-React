// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import "../src/App.css"
import React from 'react';
import VideoPlayer from "./VideoPlayer/video player";

///react project..........................

const App = () => {
  const videoList = [
    { title: 'Video 1', url:require("../src/VideoPlayer/bird.mp4") },
    { title: 'Video 2', url:require("../src/VideoPlayer/butterfly.mp4")},
    { title: 'video 3', url:require("../src/VideoPlayer/nature.mp4")},

    // Add more videos as needed
  ];
  return (
    <div>
      <h1>React Video Player with List</h1>
      <VideoPlayer videoList={videoList} />
    </div>
  );
};
export default App;