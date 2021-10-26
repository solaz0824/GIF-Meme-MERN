import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";
import { getAllItemsData, getRandomItems } from "../../api";
import Spinner from "../../components/Spinner";

const Home = ({ uploadedItems }) => {
  // const [uploadedItems, setUploadedItems] = useState([]);
  const [randomItems, setRandomItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  // useEffect(() => {
  //   if (uploadedItems.length === 0) {
  //     setIsLoading(true);
  //     getAllItemsData()
  //       .then((res) => {
  //         setUploadedItems(res.data.data);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setIsLoading(false);
  //         console.log(error);
  //       });
  //   }
  // }, []);

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
          <div className="col col-12">
            <header className="jumbotron">
              <h1 className="display-4">Home</h1>
            </header>
          </div>
          {/* {isLoading && (
            <div className="col col-12">
              <h2>Loading...</h2>
            </div>
          )} */}
          {/* {hasError && (
            <div className="col col-12">
              <h2>Something went wrong...</h2>
              <pre>
                <code>{loadingError}</code>
              </pre>
            </div>
          )} */}
          {/* {!isLoading && ( */}
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
