import {
  Add,
  AddAPhoto,
  DateRangeOutlined,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add new Note"
        sx={{ position: "fixed", bottom: 20, left: { xs: "70%", md: "10%" } }}
      >
        <Box>
          <Fab
            onClick={(e) => setOpen(true)}
            color="secondary"
            variant="extended"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Add sx={{ mr: 1 }} />
            New Post
          </Fab>

          <Fab
            onClick={(e) => setOpen(true)}
            color="secondary"
            aria-label="edit"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Add />
          </Fab>
        </Box>
      </Tooltip>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: { lg: "30%", md: "40%", sm: "50", xs: "60%" },
            borderRadius: 5,
            bgcolor: "background.default",
            color: "text.primary",
            p: 2,
          }}
        >
          <Typography
            id="modal-modal-title"
            color="gray"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Create post
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar src="" alt="profile" />
            <Typography>Marc Loe</Typography>
          </Box>

          <TextField
            variant="standard"
            rows={3}
            multiline
            sx={{ width: "100%" }}
            placeholder="What's in your mind"
          />

          <Stack direction="row" gap={1} mt={1} mb={3}>
            <EmojiEmotions color="warning" />
            <PersonAdd color="primary" />
            <AddAPhoto color="secondary" />
            <VideoCameraBack color="success" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "40%" }}>
              <DateRangeOutlined />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
