import { useCallback, useState } from "react";
import { Button, Input } from "reactstrap";
import placeholder from "../../../../../assets/images/placeholder.png";

const Item = ({ item, isEditView, onEdit, onDelete, onCancel, onSave }) => {
  const [title, setTitle] = useState(item.title);
  const key = item.id;
  const handlePrimaryAction = useCallback(() => {
    if (isEditView) {
      onSave(key, title);
    } else {
      onEdit(key);
    }
  }, [isEditView, onEdit, onSave, key, title]);

  const handleSecondaryAction = useCallback(() => {
    if (isEditView) {
      onCancel(key);
    } else {
      onDelete(key);
    }
  }, [isEditView, onCancel, onDelete, key]);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.albumId}</td>
      <td>
        {isEditView ? (
          <Input
            placeholder="Enter Keyword"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          item.title
        )}
      </td>
      <td>
        <div>
          <img
            src={item.thumbnailUrl || placeholder}
            style={{ width: 70 }}
            alt=""
          />
        </div>
      </td>
      <td className="text-right">
        <Button
          color="primary"
          title="Edit"
          size="sm"
          onClick={handlePrimaryAction}
        >
          <i
            className={`${isEditView ? "fas fa-save" : "fas fa-pencil-alt"} `}
          ></i>
        </Button>
        <Button
          color="danger"
          className="ml-2"
          size="sm"
          title="Delete"
          onClick={handleSecondaryAction}
        >
          <i
            className={`${isEditView ? "fas fa-times" : "fas fa-trash "} `}
          ></i>
        </Button>
      </td>
    </tr>
  );
};

export default Item;
