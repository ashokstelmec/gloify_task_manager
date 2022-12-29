import { useState, useEffect } from "react";
import { getAllUsersLists } from "./api";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import { MuiStyledOptions } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const selectedValue = () => {};

  const handleClickOpen = () => {
    console.log("20");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const apiCall = async () => {
      const getData = await getAllUsersLists();
      console.log(getData.data.users);
      // const response = await getData.data.users.json();
      setData(getData.data.users);
    };

    apiCall();
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="search">
        <div className="task-list">
          <input type="text" placeholder="Search Task" />
          <h2 className="task-priority">Task priority</h2>
          <div>
            <div>
              <button>All</button>
            </div>
            <div>
              <button>High</button>
            </div>
            <div>
              <button>Medium</button>
            </div>
            <div>
              <button>Low</button>
            </div>
          </div>
        </div>
        <div className="list-of-task">
          <div className="add-task">
            <h3>List of Tasks</h3>
            <button className="btn" onClick={handleClickOpen}>
              <span className="add-icon"> + </span> Add task
            </button>
          </div>
          {data.map((el, i) => (
            <div key={i} className="mapping">
              <h3 className="names">{el.name}</h3>
              <p className="something">Do something ?</p>
            </div>
          ))}
        </div>
      </div>

      {/* <Modal open={open} onClose={onCloseModal} center>
      <h2 className="title">Add Task</h2>
      <input type="text" className="input-type" />
    </Modal> */}
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Add Task
      </Button> */}
      <Dialog onClose={handleClose} open={open}>
        hello
      </Dialog>
    </div>
  );
}

export default App;
