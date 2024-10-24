import { Box, Grid2, Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Modal = ({
  modal,
  setModal,
  addList,
  editList,
  currentTodo,
  setCurrent,
}) => {
  const dis = modal ? "flex" : "none";

  return (
    <Box className="modal" style={{ display: dis }} onClick={setModal}>
      <Box className="modal-body" onClick={(e) => e.stopPropagation()}>
        <Box fontSize={35} fontWeight={400} color={"black"}>
          {currentTodo.id ? "Edit task" : "Add Task"}
        </Box>
        <Box>
          <Box marginY={2}>
            <TextField
              sx={{ color: "#ccc", width: "100%" }}
              placeholder="Text Here"
              value={currentTodo.text}
              defaultValue={null}
              onChange={(e) =>
                setCurrent({ ...currentTodo, text: e.target.value })
              }
              multiline
            />
          </Box>
          <Box marginY={2}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    value={currentTodo.status}
                    onChange={(e) =>
                      setCurrent({ ...currentTodo, status: e.target.value })
                    }
                  >
                    <MenuItem value={"Incomplete"}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <RadioButtonCheckedIcon color={"error"} />
                        Incomplete
                      </Box>
                    </MenuItem>
                    <MenuItem value={"Progress"}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ChangeCircleIcon color={"primary"} /> Progress
                      </Box>
                    </MenuItem>
                    <MenuItem value={"Complete"}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <RadioButtonCheckedIcon color={"success"} />
                        Complete
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid2>
              <Grid2 size={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Priority
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Priority"
                    value={currentTodo.priority}
                    onChange={(e) =>
                      setCurrent({ ...currentTodo, priority: e.target.value })
                    }
                  >
                    <MenuItem value={"Urgent"}>Urgent</MenuItem>
                    <MenuItem value={"Normal"}>Normal</MenuItem>
                    <MenuItem value={"Low"}>Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>
            </Grid2>
          </Box>
          <Box marginY={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={dayjs(currentTodo.due_date)}
                onChange={(e) => {
                  setCurrent({ ...currentTodo, due_date: e });
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Grid2 container spacing={2} justifyContent={"end"}>
          <Button
            variant="contained"
            onClick={setModal}
            style={{ height: "100%" }}
            color="error"
          >
            Discard
          </Button>
          <Button
            variant="contained"
            onClick={() => (currentTodo.id ? editList() : addList())}
            style={{ height: "100%" }}
            color="success"
          >
            {currentTodo.id ? "Save" : "Add"}
          </Button>
        </Grid2>
      </Box>
    </Box>
  );
};
export default Modal;
