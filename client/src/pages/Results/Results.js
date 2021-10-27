import React, { useState } from "react";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import Spinner from "../../components/Spinner";

const Results = (props) => {
  const [isLoading, setIsLoading] = useState([]);
  const userValue = props.location.state.userInput;
  const searchedUploadedData = props.uploadedItems.filter((ele) =>
    ele.title.includes(userValue)
  );
  const searchedList = props.location.state.searched;
  return (
    <div className="row">
      {/* {isLoading && <Spinner color={"rgb(26, 192, 204)"} loading={true} />} */}
      <div className="col">
        <div className="row">
          {/* {!isLoading && ( */}
          <div className="col col-12">
            <CardList list={[...searchedList, ...searchedUploadedData]} />
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Results);
