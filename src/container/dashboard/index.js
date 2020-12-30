import TableView from "./components/tableView";
import { connect } from "react-redux";
import {
  getData,
  setCurrentPage,
  addItem,
  deleteItem,
  updateItem,
} from "../../redux/actions/data";
import { useCallback, useEffect } from "react";
import { Button } from "reactstrap";

const LIMIT = 5;

const Dashboard = (props) => {
  const {
    tableData,
    getTableData,
    setPage,
    page,
    addItem,
    deleteItem,
    updateItem,
  } = props;

  useEffect(() => {
    getTableData({ start: 0, limit: LIMIT });
  }, [getTableData]);

  const nextHandle = useCallback(() => {
    getTableData({ start: (page + 1) * LIMIT, limit: LIMIT });
    setPage({ type: "next" });
  }, [getTableData, setPage, page]);

  const previousHandle = useCallback(() => {
    setPage({ type: "prev" });
  }, [setPage]);

  return (
    <div>
      <TableView
        data={tableData}
        addItem={addItem}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
      <div className="text-center py-4">
        {page > 0 && (
          <Button color="primary" className="mr-2" onClick={previousHandle}>
            Previous
          </Button>
        )}
        <Button color="primary" onClick={nextHandle}>
          Next
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const page = state.dataReducer.page;
  return {
    tableData: state.dataReducer.data.slice(page * LIMIT, page * LIMIT + LIMIT),
    page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: (data) => dispatch(getData(data)),
    setPage: (data) => dispatch(setCurrentPage(data)),
    addItem: (data) => dispatch(addItem(data)),
    deleteItem: (data) => dispatch(deleteItem(data)),
    updateItem: (data) => dispatch(updateItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
