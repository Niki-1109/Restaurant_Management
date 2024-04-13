import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Restro_Items from "./components/Restro_Items";

function App() {
  const [restoItems, setRestoItems] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    pincode: "",
    mobile: "",
    email: "",
    website: "",
  });

  const handleNewRestoItem = (newItemData) => {
    const newRestoItems = [...restoItems, newItemData];
    setRestoItems(newRestoItems);
  };

  const handleDeleteItem = (restoItemId) => {
    const newRestoItems = restoItems.filter((item) => item.id !== restoItemId);
    setRestoItems(newRestoItems);
  };

  const handleEditItem = (editedItemData) => {
    const updatedRestoItems = restoItems.map((item) => {
      if (item.id === editedItemData.id) {
        return editedItemData;
      }
      return item;
    });
    setRestoItems(updatedRestoItems);
  };

  return (
    <>
      <div className="container my_container">
        <Add
          onNewItem={handleNewRestoItem}
          formData={formData}
          setFormData={setFormData}
        />
        <Restro_Items
          restoItems={restoItems}
          onDeleteClick={handleDeleteItem}
          onEditClick={handleEditItem}
        />
      </div>
    </>
  );
}

export default App;
