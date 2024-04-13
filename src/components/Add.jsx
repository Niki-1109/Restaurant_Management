import React, { useState } from "react";
import styles from "./Add.module.css";
import Modal from "react-modal";

const Add = ({ onNewItem, formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewItem(formData);
    setFormData({
      id: "",
      name: "",
      address: "",
      pincode: "",
      mobile: "",
      email: "",
      website: "",
    });
    handleCloseModal();
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      name: "",
      address: "",
      pincode: "",
      mobile: "",
      email: "",
      website: "",
    });
    handleCloseModal();
  };

  return (
    <>
      <button class={`btn btn-primary ${styles.add}`} onClick={handleOpenModal}>
        ADD
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="EDITING INFORMATION"
        className={styles.customModal}
      >
        <h2>EDITING INFORMATION</h2>
        <form className={styles.myForm} onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="form-control"
                placeholder="ID"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="form-control"
                placeholder="Pincode"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control"
                placeholder="Mobile"
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
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
              onClick={handleCancel}
            >
              CANCLE
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              ADD
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Add;
