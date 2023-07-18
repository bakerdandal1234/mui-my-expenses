import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.baker.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.baker.main,
    scale: "0.99"
  },
}));

const Create = () => {
  const navigate = useNavigate();
  // Why <<<component="form">>> ?
  const[title,settitle]=useState("")
  const[price,setprice]=useState()
  return (
    <Box autoComplete="off" sx={{ width: "380px" }} component="form">
      <TextField   value={title} onChange={(eo) => {
        settitle(eo.target.value)
      }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField value={price} onChange={(eo) => {
        // @ts-ignore
        setprice(Number(eo.target.value))
      }}
        fullWidth={true}
        label="amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton onClick={(params) => {
        fetch("http://localhost:3100/posts",{
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({price,title})
        }).then(() => {
          navigate("/")
        })
        settitle("")
      }} sx={{ mt: "22px", }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
