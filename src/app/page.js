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
import { addTodo, editTodo, deleteTodo } from "../features/list/listSlice";

const init = {
  id: null,
  text: null,
  status: null,
  priority: null,
  due_date: null,
};

export default function Home() {
  const [modal, setModal] = useState(false);
  const [currentTodo, setCurrent] = useState(init);
  const [searchTerm, setSearchTerm] = useState("");

  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setCurrent(init);
  };

  const handleEditTodo = (id) => {
    const data = todos.filter((data) => data.id == id);
    setCurrent(data[0]);
    setModal(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo(currentTodo));
    setCurrent(init);
    setModal(false);
  };

  const handleAddTodo = () => {
    setCurrent(init);
    setModal(true);
  };

  const handleSaveAdd = () => {
    if (currentTodo.text) {
      dispatch(addTodo({ ...currentTodo, id: createID() }));
    } else {
      alert("Please fill the all");
    }
    setCurrent(init);
    setModal(false);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid size={2}>
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={handleAddTodo}
                  className={styles.text}
                  style={{ height: "100%" }}
                >
                  ADD
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box marginY={5}>
          <Box color={"#F9BD34"}>INCOMPLETE</Box>
          <Todolist
            tasks={filteredTodos}
            deleteList={handleDeleteTodo}
            edit={handleEditTodo}
            status={"Incomplete"}
          />
        </Box>
        <Box marginY={5}>
          <Box color={"#7F76F0"}>PROGRESS</Box>
          <Todolist
            tasks={filteredTodos}
            deleteList={handleDeleteTodo}
            edit={handleEditTodo}
            status={"Progress"}
          />
        </Box>
        <Box marginY={5}>
          <Box color={"#31A069"}>COMPLETE</Box>
          <Todolist
            tasks={filteredTodos}
            deleteList={handleDeleteTodo}
            edit={handleEditTodo}
            status={"Complete"}
          />
        </Box>
        <Box marginY={5}>
          <Box color={"white"}>NO STATUS</Box>
          <Todolist
            tasks={filteredTodos}
            deleteList={handleDeleteTodo}
            edit={handleEditTodo}
            status={null}
          />
        </Box>
        <Box>
          <Modal
            modal={modal}
            setModal={modalChange}
            addList={handleSaveAdd}
            editList={handleSaveEdit}
            currentTodo={currentTodo}
            setCurrent={setCurrent}
          />
        </Box>
      </Box>
    </Box>
  );
}
