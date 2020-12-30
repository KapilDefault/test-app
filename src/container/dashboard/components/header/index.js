import React from "react";
import { Button } from "reactstrap";

const Header = ({ toggle, isShowAddNew }) => {
  return (
    <h3 className="title">
      Table view
      <Button
        color="primary"
        size="sm"
        className="float-right"
        title={isShowAddNew ? "Cancel" : "Add New"}
        onClick={toggle}
      >
        <i
          className="fas fa-plus"
          style={isShowAddNew ? { transform: "rotate(45deg)" } : {}}
        />
      </Button>
    </h3>
  );
};

export default Header;
