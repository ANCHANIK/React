import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/edit"}>Edit</Link>
    </>
  );
};

export default RouteTest;
