import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import Todos from "../store/Todos";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <TextField
        fullWidth
        id="fullWidth"
        label="What needs to be done?"
        color="secondary"
        margin="normal"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        color="secondary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          Todos.addTodo({ title: value, status: "active", id: Date.now() });
          setValue("");
        }}
      >
        add
      </Button>
    </Container>
  );
};

export default Input;
