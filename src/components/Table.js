import React from "react";

export function Table(props) {
  return (
    <div className="back-container">
      <div className="col-sm-2 menu-container">
        <img src="./kavida_logo.png" className="header-logo" alt="logo" />
      </div>
      <div className="col-sm-10 main-container">
        <div className="header-component">
          <h3 className="header-name">Supplier Relationship Manager</h3>
          <div className="profile-container">
            <span className="user-name">Jones Ferdinand</span>
            <span className="profile-icon">
              <i className="fa fa-user user-icon"></i>
            </span>
          </div>
        </div>
        <div className="body-container float-settings">
          <div className="col-sm-4">
            <p>
              Manage all your Supplier contacts and your interaction history
              within this page
            </p>
            <div className="search-box-container">
              <i className="search-icon fa fa-search"></i>
              <input
                className="search-input"
                placeholder="Search for a supplier"
                type="text"
              ></input>
            </div>
          </div>
          <div className="col-sm-12 tabs-container">
            <span className="tab-link active-tab">Suppliers</span>
            <span className="tab-link">Contacts</span>
            <span className="tab-link">Purchase Orders</span>
          </div>
          <div className="body-container">
            <div className="buttons-container">
              <h5 className="label-title">Your Suppliers</h5>
              <button className="button" onClick={() => props.updateModal()}>
                Add Supplier
              </button>
              <button className="button">Import Data</button>
            </div>
            <div className="data-container">
              <p className="info">
                Your contacts list is empty!
                <br />
                Click here to create a new contact
                <a> here</a>
              </p>
            </div>
            <div className="footer-container">
              <span className="footer-title">
                Kavida Technologies &copy; 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
