import React, { useContext } from "react";
import { Context } from "../Context";

import {StyledBackArrow} from "../StyledComponents/ActiveComp"

//fuction sets the active search card -> null -> returns to search target page

function BackArrow() {
  const { returnPreviousPage } = useContext(Context);

  return (
    <StyledBackArrow
      className="ri-arrow-left-s-line"
      onClick={() => {
        returnPreviousPage()
        window.scrollTo(0, 0)
        }}
    ></StyledBackArrow>
  );
}

export default BackArrow;
