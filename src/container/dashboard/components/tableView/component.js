import { Table } from "reactstrap";
import Item from "./components/item";

const TableComponent = ({
  data,
  updateIndex,
  onEdit,
  onDelete,
  onCancel,
  onSave,
}) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Album Id</th>
          <th>Title</th>
          <th style={{ width: 100 }}>Image</th>
          <th className="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <Item
              key={"item" + item.id}
              isEditView={updateIndex === item.id}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
              onCancel={onCancel}
              onSave={onSave}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
