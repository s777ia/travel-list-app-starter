function PackingList({ items, onToggle, onDelete, onDeleteAll }) {
    const packedItems = items.filter((item) => item.packed);
    const unpackedItems = items.filter((item) => !item.packed);

    return (
        <div className="list">
            <h2>Unpacked Items</h2>
            <ul>
                {unpackedItems.map((item) => (
                    <Item key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
                ))}
            </ul>

            <h2>Packed Items</h2>
            <ul>
                {packedItems.map((item) => (
                    <Item key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
                ))}
            </ul>

            {items.length > 0 && (
                <button onClick={onDeleteAll}>REMOVE ALL ITEMS</button>
            )}
        </div>
    );
}

function Item({ item, onToggle, onDelete }) {
    return (
        <div className="item-container">
            <li
                style={{
                    textDecoration: item.packed ? "line-through" : "none",
                }}
            >
                <span style={{ fontSize: 20, fontWeight: 800, color: "#e75b8d" }}>
                    {item.category}
                </span><br />
                (x{item.quantity}) {item.description}  - {item.packed ? "Packed" : "Unpacked"}
            </li>
            <input type='checkbox'
                checked={item.packed}
                onChange={() => onToggle(item.id)} />
            <button onClick={() => onDelete(item.id)}>X</button>
        </div>
    );
}

export default PackingList;