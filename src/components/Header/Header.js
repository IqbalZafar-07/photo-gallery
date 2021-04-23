import React from "react";
import "./Header.css";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

function Header() {
  return (
    <div>
      <div className="header">
        <PhotoAlbumIcon style={{ color: "white", fontSize: "30px" }} />
        <h1>Photo Gallery</h1>
      </div>
    </div>
  );
}

export default Header;
