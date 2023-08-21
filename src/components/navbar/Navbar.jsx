import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">
            <img
              className="profileImg"
              src={"/assets/bitnine-logo_.png"}
              alt=""
            />
          </span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="profileImg"
            src={"/assets/bitnine-logo_.png"}
            alt=""
          />
          <span className="navbarName">{currentUser.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
