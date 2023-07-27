//import react
import React, { useEffect, useState } from "react";

//import layout admin
import LayoutAdmin from "../../../layouts/Admin";

//import js cookie
import Cookies from "js-cookie";

//import BASE URL API
import Api from "../../../api";

function UsersIndex() {
  //title page
  document.title = "User - Administrator";

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  // Fungsi yang dipanggil ketika tombol "Edit" diklik
  const handleEditClick = () => {
    setIsEditClicked(true);
    setIsSaveDisabled(false);
  };

  // Fungsi yang dipanggil ketika tombol "Simpan" diklik
  const handleSaveClick = () => {
    // Lakukan tindakan untuk menyimpan data atau lakukan sesuatu yang sesuai
    setIsEditClicked(false);
    setIsSaveDisabled(true);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4 mb-4">
          <div className="col-12">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-folder"></i> Edit User
                </span>
              </div>
              <div className="card-body">
                <form>
                  <label className="mb-1">Name</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      disabled={!isEditClicked}
                    />
                  </div>
                  <label className="mb-1">Username</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      disabled={!isEditClicked}
                    />
                  </div>
                  <label className="mb-1">Email</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      disabled={!isEditClicked}
                    />
                  </div>
                  <label className="mb-1">PASSWORD</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      disabled={!isEditClicked}
                    />
                  </div>
                  <label className="mb-1">CONFIRM PASSWORD</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      disabled={!isEditClicked}
                    />
                  </div>
                  <label className="mb-1">PHOTO</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handlePhotoChange}
                      disabled={!isEditClicked}
                    />
                  </div>
                  <div className="mt-2">
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ maxWidth: "100px" }}
                      />
                    )}
                  </div>
                  <div className="mt-3">
                    <button onClick={handleEditClick} type="reset" className="btn btn-md btn-warning me-2">
                      <i className="fa fa-redo"></i> EDIT
                    </button>
                    <button
                      type="submit"
                      className="btn btn-md btn-success"
                      onClick={handleSaveClick} disabled={isSaveDisabled}
                    >
                      <i className="fa fa-save"></i> SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default UsersIndex;
