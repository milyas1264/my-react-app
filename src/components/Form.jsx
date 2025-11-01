import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState(""); // state banai

  const handleChange = (event) => {
    setName(event.target.value); // input ki value state main store
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // page reload rokna
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input type="text" value={name} onChange={handleChange} placeholder= " Enter your name" className="border 1px p 5px"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
