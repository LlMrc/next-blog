"use client";
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
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AddAPhoto,
  Add as AddIcon,
  BrowseGallery,
  Camera,
  DateRangeOutlined,
  EmojiEmotions,

  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{ position: "fixed", bottom: 20, left: { xs: "70%", md: 20 } }}
      >
        <IconButton>
          <Fab color="secondary" variant="extended" aria-label="add">
            <AddIcon sx={{ mr: 1 }} onClick={(e) => setOpen(true)} />
            Add Post
          </Fab>
        </IconButton>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={2}
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

          <UserBox>
            <Avatar src="" alt="profile" />
            <Typography>Loe Mrc</Typography>
          </UserBox>

          <TextField
            variant="standard"
            rows={3}
            multiline
            sx={{ width: "100%" }}
            placeholder="What's in your mine"
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
      </StyledModal>
    </>
  );
};

export default Add;
