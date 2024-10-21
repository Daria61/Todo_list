"use client";
import styles from "./page.module.css";
import Modal from "./component/modal";
import Todolist from "./component/Todolist";
import { useState } from "react";
import { Box, Button, InputBase, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./counterSlice";

const init = {
  id: null,
  text: null,
  status: null,
  priority: null,
  due_date: null,
};

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [Obj, setObj] = useState(init);
  const [editStatus, setEditStatus] = useState(false);

  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const createID = () => {
    let abc = "ABCDEFGHIJKLMNOPQR";
    let num = "1234567890";
    let newStr =
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)];
    let newNum =
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)];
    return newStr + newNum;
  };

  const modalChange = () => {
    setModal(!modal);
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: editId, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <Box className={styles.page}>
      <Box>
        <Box>
          <Box fontSize={34} fontWeight={400} color={"white"}>
            To Do List
          </Box>
          <Box marginY={5}>
            <Grid container spacing={2}>
              <Grid size={10}>
                <Box
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#1E1E1E",
                    borderRadius: 2,
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px", color: "#ccc" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1, color: "#ccc" }}
                    placeholder="Search Google Maps"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Box>
              </Grid>
              <Grid size={2}>
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={addHandle}
                  className={styles.text}
                  style={{ height: "100%" }}
                >
                  ADD
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box gap={5}>
          <Box color={"#F9BD34"}>INCOMPLETE</Box>
          <Todolist
            tasks={tasks}
            setTasks={setTasks}
            deleteList={deleteList}
            edit={edit}
            done={done}
          />
        </Box>
        <Box>
          <Box color={"#7F76F0"}>PROGRESS</Box>
          <Todolist
            tasks={tasks}
            setTasks={setTasks}
            deleteList={deleteList}
            edit={edit}
            done={done}
          />
        </Box>
        <Box>
          <Box color={"#31A069"}>COMPLETE</Box>
          <Todolist
            tasks={tasks}
            setTasks={setTasks}
            deleteList={deleteList}
            edit={edit}
            done={done}
          />
        </Box>
        <Box>
          <Modal
            modal={modal}
            setModal={modalChange}
            setTasks={setTasks}
            tasks={tasks}
            addList={AddList}
            Obj={Obj}
            setObj={setObj}
            editStatus={editStatus}
            init={init}
          />
        </Box>
      </Box>
    </Box>
  );
}
