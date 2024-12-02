import { useState } from 'react';

function Form({ setItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Clothing");


    function handleSubmit(e) {
        e.preventDefault(); // To submit a form without reloading the page.

        // Create a new item object
        const newItem = {
            id: Date.now(),
            description,
            quantity: Number(quantity),
            packed: false,
            category
        };

        // Call handleAddItems to add the new item to the state
        setItems(newItem);

        // Reset the form inputs to default values
        setDescription('');
        setQuantity(1);
        setCategory("Clothing");
    }

    return (
        <>
            <form className="add-form" onSubmit={handleSubmit}>
                <h3>What do you need to pack?</h3>
                <select name="qty" id="qty" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <input type="text" id="item" name="item" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Item..." />
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value={"Clothing"}>Clothing</option>
                    <option value={"Electronics"}>Electronics</option>
                    <option value={"Toiletries"}>Toiletries</option>
                    <option value={"Personal Item"}>Personal Item</option>
                </select>
                <button>ADD</button>
            </form>
        </>
    );
}

export default Form;