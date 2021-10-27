import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserItems } from "../../api";

import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const User = ({ uploadedItems }) => {
  const { user } = useSelector((state) => state.auth);
  const filtered = uploadedItems.filter((ele) => ele.owner === user.uid);
  return (
    <div className="row">
      {/* {isLoading && <Spinner color={"green"} loading={true} />} */}
      <div className="col">
        <div className="row">
          {/* {!isLoading && ( */}
          <div className="col col-12">
            <CardList list={filtered} />
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default withLayout(User);
