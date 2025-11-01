function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} = ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
