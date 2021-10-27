import React from "react";

import AppHeader from "../components/AppHeader";
import Main from "../components/Main";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

/* eslint no-param-reassign: [2, { "props": false }] */
const withLayout = (WrappedComponent) => {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  const WrapperComponent = ({ ...props }) => {
    return (
      <>
        <AppHeader />
        <Main
          className={
            props.fullWidth ? "container-fluid p-2 " : "container p-2 "
          }
        >
          <WrappedComponent {...props} />
        </Main>
      </>
    );
  };

  return WrapperComponent;
};

export default withLayout;
