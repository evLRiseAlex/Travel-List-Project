import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Submitted");

    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (!description) return;
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-form">
      <h3>What do you need for your trip? </h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target, e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
