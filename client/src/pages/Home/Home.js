import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import { getAllItemsData, getRandomItems } from "../../api";
import Spinner from "../../components/Spinner";

const Home = ({ uploadedItems }) => {
  const [randomItems, setRandomItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    if (randomItems.length === 0) {
      setIsLoading(true);
      getRandomItems()
        .then((res) => {
          setRandomItems(res.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="row">
      {isLoading && <Spinner color={"rgb(245, 188, 3)"} loading={true} />}

      <div className="col">
        <div className="row">
          {uploadedItems && (
            <div className="col col-12">
              <CardList list={[...uploadedItems, ...randomItems]} />
            </div>
          )}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
