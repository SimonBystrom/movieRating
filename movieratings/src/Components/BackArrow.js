import React, { useContext } from "react";
import { Context } from "../Context";

//fuction sets the active search card -> null -> returns to search target page

function BackArrow() {
  const { returnPreviousPage } = useContext(Context);

  return (
    <i
      className="ri-arrow-left-s-line"
      onClick={() => returnPreviousPage()}
    ></i>
  );
}

export default BackArrow;
