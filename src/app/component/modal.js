import { Box, Grid2, Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Modal = ({ modal, setModal, addList, Obj, setObj, editStatus }) => {
  const dis = modal ? "block" : "none";

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className="modal" style={{ display: dis }} onClick={setModal}>
      <Box className="modal-body" onClick={(e) => e.stopPropagation()}>
        <Box fontSize={35} fontWeight={400} color={"black"}>
          {Obj.isEdit ? "Edit task" : "Add Task"}
        </Box>
        <Box>
          <Box marginY={2}>
            <TextField
              sx={{ color: "#ccc", width: "100%" }}
              placeholder="Text Here"
              value={Obj.input}
              onChange={(e) => setObj({ ...Obj, input: e.target.value })}
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
                    // onChange={handleChange}
                    // value={Obj.type}
                    value={10}
                    onChange={(e) => setObj({ ...Obj, type: e.target.value })}
                  >
                    <MenuItem value={10}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <PanoramaFishEyeIcon color={"error"} />
                        Incomplete
                      </Box>
                    </MenuItem>
                    <MenuItem value={20}>
                      <ChangeCircleIcon color={"primary"} /> Progress
                    </MenuItem>
                    <MenuItem value={30}>
                      <RadioButtonCheckedIcon color={"success"} />
                      Complete
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
                    label="Status"
                    // onChange={handleChange}
                    // value={Obj.type}
                    value={10}
                    onChange={(e) => setObj({ ...Obj, type: e.target.value })}
                  >
                    <MenuItem value={10}>Urgent</MenuItem>
                    <MenuItem value={20}>Normal</MenuItem>
                    <MenuItem value={30}>Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>
            </Grid2>
          </Box>
          <Box marginY={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker defaultValue={dayjs("2022-04-17")} />
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
            onClick={() => addList()}
            style={{ height: "100%" }}
            color="success"
          >
            {Obj.isEdit ? "Save" : "Add"}
          </Button>
        </Grid2>
      </Box>
    </Box>
  );
};
export default Modal;
