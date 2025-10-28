function Greeting(props) {
  if (props.isLoggedIn) {
    return <h2 class='bg-amber-400'>Welcome Back!</h2>;
  } else {
    return <h2>Please Log In</h2>;
  }
}

export default Greeting;
