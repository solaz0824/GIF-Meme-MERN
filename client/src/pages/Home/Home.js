import React from "react";
import CardList from "../../components/CardList";
import withLayout from "../../hoc/withLayout";

const Home = () => {
  return (
    <div className="row">
      <div className="col col-8">
        <div className="row">
          <div className="col col-12">
            <header className="jumbotron">
              <h1 className="display-4">GIF List</h1>
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
          {/* {!isLoading && !hasError && ( */}
          <div className="col col-12">
            <CardList />
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
