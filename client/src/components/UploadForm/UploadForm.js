import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadItemFile } from "../../redux/item/action";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import UploadIcon from "../../assets/icons/upload-icon.png";
import Input from "../Input";

const UploadForm = () => {
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  function uploadItem(metadata) {
    console.log(imageURL);
    dispatch(uploadItemFile(metadata, image, imageURL));
    setImage("");
    ref.current.value = "";
    setImageURL("");
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }
  function handleURLChange(e) {
    setImageURL(e.target.value);
  }
  return (
    <div>
      <div>
        <Formik
          onSubmit={(values, { resetForm }) => {
            uploadItem(values);
            resetForm({ values: "" });
          }}
          initialValues={{
            title: "",
            category: "",
          }}
          validationSchema={FormSchema}
        >
          {({
            errors,
            values,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <div>
              <div className="modal-title">Upload Meme</div>
              <form onSubmit={handleSubmit} className="form-box">
                <div className="left-side-modal">
                  <div className="modal-input-box">
                    <Input
                      className="register-inputs"
                      name="title"
                      label=""
                      autoComplete="on"
                      placeholder="Title"
                      type="text"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      hasErrorMessage={touched.title}
                      errorMessage={errors.title}
                    />
                  </div>
                  <div className="modal-input-box">
                    <select
                      name="category"
                      className="register-inputs"
                      autoComplete="on"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      hasErrorMessage={touched.category}
                      errorMessage={errors.category}
                    >
                      <option value="">Select a category</option>
                      <option value="GIF">GIF</option>
                      <option value="Emoji">Emoji</option>
                      <option value="Sticker">Sticker</option>
                    </select>
                  </div>
                </div>
                <div className="right-side-modal">
                  <div className="upload-image-box">
                    <input
                      id="upload-input"
                      className="input-upload"
                      type="file"
                      accept=".jpg, .jpeg, .png, .gif"
                      ref={ref}
                      onChange={handleImageChange}
                    />
                    <input
                      id="upload-input"
                      className="input-upload"
                      type="text"
                      placeholder="URL"
                      onChange={handleURLChange}
                      value={imageURL}
                    />
                  </div>
                </div>
                <button className="submit" type="submit" submitButton>
                  Submit
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UploadForm;
