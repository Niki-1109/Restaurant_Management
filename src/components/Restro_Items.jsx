import React, { useState } from "react";

const Restro_Items = ({ restoItems, onDeleteClick, onEditClick }) => {
  const [editingItemId, setEditingItemId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    address: "",
    pincode: "",
    mobile: "",
    email: "",
    website: "",
  });

  const handleEditClick = (item) => {
    setEditingItemId(item.id);
    setEditFormData(item);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    onEditClick(editFormData);
    setEditingItemId(null);
    setEditFormData({
      id: "",
      name: "",
      address: "",
      pincode: "",
      mobile: "",
      email: "",
      website: "",
    });
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditFormData({
      id: "",
      name: "",
      address: "",
      pincode: "",
      mobile: "",
      email: "",
      website: "",
    });
  };
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">PINCODE</th>
            <th scope="col">MOBILE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">WEBSITE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {restoItems.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center"></td>
            </tr>
          ) : (
            restoItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.pincode}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDeleteClick(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editingItemId && (
        <div className="edit-form-container">
          <h2>Edit Item</h2>
          <form onSubmit={handleEditFormSubmit}>
            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  name="id"
                  value={editFormData.id}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="ID"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="address"
                  value={editFormData.address}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="pincode"
                  value={editFormData.pincode}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Pincode"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="mobile"
                  value={editFormData.mobile}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="website"
                  value={editFormData.website}
                  onChange={handleEditFormChange}
                  className="form-control"
                  placeholder="Website"
                />
              </div>
              <div class="w-100"></div>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                class="btn btn-secondary mx-2"
                onClick={handleCancelEdit}
              >
                CANCLE
              </button>
              <button type="submit" className="btn btn-primary mx-2">
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Restro_Items;
