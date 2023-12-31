import React from "react";
import Infos from "./Infos";
import CreateArea from "./CreateArea";

function Top() {
// props -- replaced by redux
  return (
    <div className="background">
      <CreateArea
      // onAdd={props.onAdd} --- this is replaced by redux
      />
      <Infos />
    </div>
  );
}

export default Top;
