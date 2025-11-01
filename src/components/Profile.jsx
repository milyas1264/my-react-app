import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext); // 3. Context se data lena

  return <h3>Welcome, {user}!</h3>;
}

export default Profile;
