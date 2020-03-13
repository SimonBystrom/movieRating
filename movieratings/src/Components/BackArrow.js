import React, { useContext } from "react";
import { Context } from "../Context";

import {StyledBackArrow} from "../StyledComponents/ActiveComp"

//BackArrow sets the active searchCard -> null. This takes us back to previous "page"

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
