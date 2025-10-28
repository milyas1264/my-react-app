function NameList() {
  const names = ["Ali", "Ayesha", "Ilyas", "Sara"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
