import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';
import SearchBar from './SearchBar.js';

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true },
// ];


function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleAddItems(item) {
    return setItems((prevItems) => [...prevItems, item]);
  }

  function handleToggle(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleDeleteAll(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id === id));
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={handleAddItems} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PackingList
        items={filteredItems}
        onToggle={handleToggle}
        onDelete={handleDeleteItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
