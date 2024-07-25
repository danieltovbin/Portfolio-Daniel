import HeaderNav from "../../components/Header/HeaderNav";
import "./style.scss";

const PageNotFound = () => {
  return (
    <>
      <HeaderNav />
      <div className="page-not-found">Oops.. PAGE NOT FOUND.</div>;
    </>
  );
};

export default PageNotFound;
