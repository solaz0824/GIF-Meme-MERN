import React from "react";
import UploadForm from "../../components/UploadForm";
import withLayout from "../../hoc/withLayout";

const Upload = () => {
  //TODO logged in check and if not alert to log in
  return (
    <div>
      <UploadForm />
    </div>
  );
};

export default withLayout(Upload);
