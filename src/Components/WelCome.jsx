import { Children } from "react";

function WelCome(props) {
    return (
        <div>
            <h1>Welcome to My Application  {props.user}!</h1>
           <p> Hellow Child {props.Children}</p>
            <p>This is the welcome props</p>
        </div>
    );
}

export default WelCome;