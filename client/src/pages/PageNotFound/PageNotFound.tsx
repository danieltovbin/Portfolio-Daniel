import React from "react";
import "./style.scss";
import Header from "../../components/Header/Header";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="page-not-found">Oops.. PAGE NOT FOUND.</div>;
    </>
  );
};

export default PageNotFound;
