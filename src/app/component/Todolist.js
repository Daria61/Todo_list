import { Box, IconButton, Grid2 } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Todolist = ({ tasks, deleteList, edit, status }) => {
  return (
    <Box style={{ width: "100%" }}>
      <Grid2
        style={{
          width: "100%",
          display: "flex",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        container
        marginY={1}
      >
        <Grid2 size={7}>
          <Box size={4} fontWeight={200} color={"#7A828F"}>
            Task
          </Box>
        </Grid2>

        <Grid2 size={1}>
          <Box size={4} fontWeight={200} color={"#7A828F"}>
            Priority
          </Box>
        </Grid2>
        <Grid2 size={2}>
          <Box size={4} fontWeight={200} color={"#7A828F"}>
            Due date
          </Box>
        </Grid2>
        <Grid2 size={1}>
          <Box size={4} fontWeight={200} color={"#7A828F"}>
            Edit
          </Box>
        </Grid2>

        <Grid2 size={1}>
          <Box size={4} fontWeight={200} color={"#7A828F"}>
            Delete
          </Box>
        </Grid2>
      </Grid2>

      {tasks.map((a) => {
        if (a.status == status) {
          return (
            <Grid2
              sx={{
                width: "100%",
                display: "flex",
                border: "1px, solid, red",
                borderRadius: "10px",
                paddingX: 1,
                borderColor: "#7A828F",
                alignItems: "center",
                justifyContent: "space-between",
                marginY: 2,
              }}
              container
            >
              <Grid2 size={1}>
                {status == "Complete" ? (
                  <RadioButtonCheckedIcon color={"success"} />
                ) : status == "Incomplete" ? (
                  <RadioButtonCheckedIcon color={"error"} />
                ) : status == "Progress" ? (
                  <ChangeCircleIcon color={"primary"} />
                ) : (
                  <RadioButtonCheckedIcon />
                )}
              </Grid2>
              <Grid2 size={6} display={"flex"} overflow={"auto"}>
                <Box color="white">{a.text}</Box>
              </Grid2>

              <Grid2 size={1}>
                <Box
                  sx={{
                    color:
                      a.priority == "Urgent"
                        ? "red"
                        : a.priority == "Low"
                        ? "orange"
                        : "green",
                  }}
                >
                  {a.priority}
                </Box>
              </Grid2>
              <Grid2 size={2}>
                <Box
                  sx={{
                    color: "white",
                  }}
                >
                  {a.due_date?.slice(0, 10)}
                </Box>
              </Grid2>
              <Grid2 size={1}>
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "#ccc" }}
                  aria-label="search"
                  onClick={() => edit(a.id)}
                >
                  <EditIcon />
                </IconButton>
              </Grid2>
              <Grid2 size={1}>
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "#ccc" }}
                  aria-label="search"
                  onClick={() => deleteList(a.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid2>
            </Grid2>
          );
        }
      })}
    </Box>
  );
};
export default Todolist;
