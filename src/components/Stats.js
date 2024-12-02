function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

    return (
        <footer className="stats">
            {packedPercentage < 100 ?
                <em>You have {totalItems} items in the list. You already packed {packedItems} items ({packedPercentage}%).</em>
                : <em>You got everything!</em>
            }
        </footer>
    );
}

export default Stats;