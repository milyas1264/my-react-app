// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//ProfileCard component;
import Header from "./Components/header";
import ProfileCard from "./Components/ProfileCard";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      
      <h2 style={{marginLeft:"500px",backgroundColor: "lightsalmon",textAlign:"center"}}>My Friends</h2>
      <ProfileCard name="Ilyas" age="22" city="Karachi" />
      <ProfileCard name="Ali" age="24" city="Lahore" />
      <ProfileCard name="Sara" age="21" city="Islamabad" />

      <Footer />
    </div>
  );
}

export default App;

