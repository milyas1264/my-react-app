function userStatus({isOnline}){
    return(
      <div>
        {isOnline ? <h3>User is isOnline</h3> : <h3>User is offline</h3>}
      </div>
    )
}
export default userStatus;