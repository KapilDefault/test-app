import { useCallback, useState } from "react";
import { Table, Collapse, Input, Button } from "reactstrap";

const AddItemView = ({ toggle, isShowAddNew, onSave }) => {
  const [itemId, setItemId] = useState("");
  const [title, setTitle] = useState("");
  const handleSaveItem = useCallback(() => {
    onSave({ itemId, title });
    setItemId("");
    setTitle("");
  }, [itemId, title, onSave]);

  const handleClose = useCallback(() => {
    toggle();
    setItemId("");
    setTitle("");
  }, [toggle]);

  return (
    <Collapse isOpen={isShowAddNew}>
      <Table className="mb-0">
        <tbody>
          <tr>
            <td>
              <Input
                placeholder="Enter Album Id"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
              />
            </td>
            <td>
              <Input
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td className="text-right">
              <Button
                color="primary"
                size="sm"
                title="Save"
                onClick={handleSaveItem}
              >
                <i className="fas fa-save"></i>
              </Button>
              <Button
                color="danger"
                className="ml-2"
                size="sm"
                title="Cancel"
                onClick={handleClose}
              >
                <i className="fas fa-times"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Collapse>
  );
};

export default AddItemView;
