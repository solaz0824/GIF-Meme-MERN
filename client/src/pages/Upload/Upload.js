import React from "react";
import UploadForm from "../../components/UploadForm";
import withLayout from "../../hoc/withLayout";

const Upload = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-md-5 mx-auto border border-secondary rounded p-4">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Upload</h1>
            </div>
          </div>
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Upload);
