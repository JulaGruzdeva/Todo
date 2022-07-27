import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react";
import { CSSProperties, useState } from "react";
import Todos, { TodoType } from "../store/Todos";
import Task from "./Task";

interface ButtonStyleType {
  marginRight: CSSProperties["margin"];
  fontSize: CSSProperties["fontSize"];
  textTransform: CSSProperties["textTransform"];
}

const buttonStyle: ButtonStyleType = {
  marginRight: "5px",
  fontSize: "15px",
  textTransform: "lowercase",
};

const TodoList = observer(() => {
  const [searchParam, setSearchParam] = useState<TodoType["status"] | "all">(
    "all"
  );

  return (
    <>
      <Container
        style={{
          display: "flex",
          margin: "0 auto",
          width: "100%",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography
          style={{ marginRight: "15px", width: "72px", fontSize: "14px" }}
        >
          {Todos.todos.filter((item) => item.status === "active").length} items
          left
        </Typography>

        <Button
          style={buttonStyle}
          variant={searchParam === "all" ? "outlined" : "text"}
          color="secondary"
          onClick={() => setSearchParam("all")}
        >
          all
        </Button>

        <Button
          style={buttonStyle}
          variant={searchParam === "active" ? "outlined" : "text"}
          color="secondary"
          onClick={() => {
            setSearchParam("active");
          }}
        >
          active
        </Button>

        <Button
          style={buttonStyle}
          variant={searchParam === "completed" ? "outlined" : "text"}
          color="secondary"
          onClick={() => setSearchParam("completed")}
        >
          completed
        </Button>

        <Button
          style={buttonStyle}
          variant="text"
          color="secondary"
          onClick={() => Todos.removeTodo()}
        >
          Clear Completed
        </Button>
      </Container>

      {Todos.todos
        .filter((item) => item.status === searchParam || searchParam === "all")
        .map((item) => (
          <Task
            title={item.title}
            key={`${item.id}`}
            status={item.status}
            id={item.id}
          />
        ))}
    </>
  );
});

export default TodoList;
