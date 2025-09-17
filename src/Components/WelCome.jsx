function WelCome(props) {
    return (
        <div>
            <h1>Welcome to My Application  {props.user}!</h1>
            <p>This is the welcome props</p>
        </div>
    );
}

export default WelCome;