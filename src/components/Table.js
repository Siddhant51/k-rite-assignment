import React, { useState, useEffect } from "react";

const Table = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // Check if all items are selected
    setSelectAll(selectedItems.length === items.length);
  }, [selectedItems, items]);

  const handleCheckboxChange = (itemId) => {
    const selectedSet = new Set(selectedItems);

    if (selectedSet.has(itemId)) {
      selectedSet.delete(itemId);
    } else {
      selectedSet.add(itemId);
    }

    setSelectedItems(Array.from(selectedSet));
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allItemsIds = items.map((item) => item.id);
      setSelectedItems(allItemsIds);
    }

    setSelectAll(!selectAll);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
              Select All
            </th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
