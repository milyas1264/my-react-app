// Ye ek chhota component hai jo props leta hai aur ek card banata hai
function ProfileCard(props) {
  return (
    <div style={{border: "5px ridge green", padding: "10px", margin: "10px", borderRadius: "8px", marginLeft: "500px", backgroundColor: "gold", width: "200px", textAlign: "center",color: 'blue'}}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>

    
  );
}

export default ProfileCard;   // 👈 isko export karna zaroori hai
// taaki hum ise dusre files mein import kar sakein

// Ab hum is component ko src/App.jsx mein import karenge aur use karenge
