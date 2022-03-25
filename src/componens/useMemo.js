import { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tinh toan lai...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: 32 }}>
      <input
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>add</button>
      <h1>total: {total}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoComponent;
