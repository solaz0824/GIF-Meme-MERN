import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadItemFile } from "../../redux/item/action";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import Input from "../Input";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./UploadForm.scss";

const UploadForm = () => {
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  function uploadItem(metadata) {
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
              <form onSubmit={handleSubmit} className="form-box">
                <div className="left-side-modal">
                  <div className="modal-input-box">
                    <Input
                      className="register-inputs w-100 mb-2"
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
                  <div className="modal-input-box w-100 mb-2">
                    <select
                      name="category"
                      className="category-select w-100"
                      autoComplete="on"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      hasErrorMessage={touched.category}
                      errorMessage={errors.category}
                    >
                      <option value="">Select a category</option>
                      <option value="GIF">GIF</option>
                      <option value="Image">Image</option>
                      <option value="Emoji">Emoji</option>
                      <option value="Sticker">Sticker</option>
                    </select>
                  </div>
                </div>
                <div className="right-side-modal">
                  <div className="upload-image-box ">
                    <p className="text-center text-primary">
                      <u>Choose a file or Enter URL</u>
                    </p>
                    <Form.Group className="mb-3">
                      <Form.Control
                        id="upload-input"
                        className="input-upload mb-2"
                        type="file"
                        accept=".jpg, .jpeg, .png, .gif"
                        ref={ref}
                        onChange={handleImageChange}
                      />
                    </Form.Group>
                    <p className="pt-2 text-center">OR</p>
                    <input
                      id="upload-input"
                      className="input-upload w-100 mb-2"
                      type="text"
                      placeholder="Enter URL here"
                      onChange={handleURLChange}
                      value={imageURL}
                    />
                  </div>
                </div>
                <Button className="submit w-100 mb-2" type="submit">
                  Upload
                </Button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UploadForm;
