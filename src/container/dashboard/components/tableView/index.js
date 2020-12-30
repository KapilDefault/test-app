import React, { useCallback, useState } from "react";
import { Container, Alert } from "reactstrap";

import AddItemView from "../addItemView";
import Header from "../header";
import TableComponent from "./component";

const TableView = ({ data, addItem, deleteItem, updateItem }) => {
  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const [editItemId, setEditItemId] = useState("");
  const [errorText, setErrorText] = useState("");

  const resetErrorText = useCallback(() => {
    if (errorText) {
      setErrorText("");
    }
  }, [errorText]);

  const toggleAddItem = useCallback(() => {
    setIsShowAddNew(!isShowAddNew);
  }, [isShowAddNew]);

  const handleEditItem = (key) => {
    setIsShowAddNew(false);
    setEditItemId(key);
    resetErrorText();
  };

  const handleDeleteItem = useCallback(
    (key) => {
      deleteItem(key);
    },
    [deleteItem]
  );

  const handleSaveItem = useCallback(
    (key, newTitle) => {
      if (!newTitle) {
        setErrorText("Title is required!!");
        return;
      }
      const item = data.find((album) => album.id === key);
      updateItem({ ...item, id: key, title: newTitle });
      setEditItemId("");
    },
    [data, updateItem]
  );

  const handleCancel = useCallback(() => {
    setEditItemId("");
    resetErrorText();
  }, [resetErrorText]);

  const handleCloseAddNewItem = useCallback(() => {
    setIsShowAddNew(false);
    resetErrorText();
  }, [resetErrorText]);

  const handleSaveNewItem = useCallback(
    ({ itemId, title }) => {
      if (!itemId || !title) {
        setErrorText("All fields are required!!");
        return;
      }
      addItem({ id: Date.now(), title, albumId: itemId });
      handleCloseAddNewItem();
    },
    [addItem, handleCloseAddNewItem]
  );

  return (
    <section className="py-3">
      <Container fluid="lg">
        <div>
          <Header isShowAddNew={isShowAddNew} toggle={toggleAddItem} />
          <AddItemView
            isShowAddNew={isShowAddNew}
            toggle={toggleAddItem}
            onSave={handleSaveNewItem}
          />
          {errorText && <Alert color="danger"> {errorText}</Alert>}
          <TableComponent
            data={data}
            updateIndex={editItemId}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onCancel={handleCancel}
            onSave={handleSaveItem}
          />
        </div>
      </Container>
    </section>
  );
};

export default TableView;
