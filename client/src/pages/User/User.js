import React from "react";
import { useSelector } from "react-redux";

import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";

const User = ({ uploadedItems }) => {
  const { user } = useSelector((state) => state.auth);
  const filtered = uploadedItems.filter((ele) => ele.owner === user.uid);
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col col-12">
            <CardList list={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(User);
