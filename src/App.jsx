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
import Header from "./Components/Header";
import ProfileCard from "./Components/ProfileCard";
import Footer from "./Components/footer";
import Counter from "./Pages/Counter";
import WelCome from "./Components/WelCome";
import BootstrapCard from "./Components/BootsCard";
import ShowHidePassword from "./Components/ShowHidePassword";




function App() {
  return (
    <div style={{margin:"25px 300px"}}>
      <Header />
      
        <div >
        <h2 style={{backgroundColor: "lightsalmon",textAlign:"center",borderBottom:"5px ridge red"}}>My Friends</h2>
        <ProfileCard name="Rashid" age="22" city="Karachi" />
        <ProfileCard name="Ahmed" age="22" city="Karachi" />
        <ProfileCard name="Ali" age="24" city="Lahore" />
        <ProfileCard name="Sara" age="21" city="Islamabad" />
        </div>
      <Counter/>

      <Footer />
        <ABC/>
        <WelCome user="Uzair"  />
        <WelCome   >  
        </WelCome >
        <div className="container" style={{display:"flex",flexWrap:"wrap",justifyContent:"center", gap:"10px"}}>
          <BootstrapCard
            img="https://via.placeholder.com/150"
            title="React"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            link="#"
            btnText="Go somewhere"
            />
            <BootstrapCard
          img="https://via.placeholder.com/150"
          title="Tailwind CSS"
          text="Some quick example text to build on the card  and make up the bulk of the card's content.title"
          link="#"
          btnText="Go somewhere"
        />
        <BootstrapCard
          img="https://via.placeholder.com/150"
          title="JavaScript"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          link="#"
          btnText="Go somewhere"
        />
        <ShowHidePassword/>
        </div>
          
          
        
      
    </div>
  );

}


export default App;

function ABC() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">Hello React + Bootstrap</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
  );
}












