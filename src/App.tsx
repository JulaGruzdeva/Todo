import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Container maxWidth="sm" sx={{ display: "block", textAlign: "center" }}>
        <Typography
          variant="h2"
          style={{ color: "purple", fontWeight: "100", opacity: "50%" }}
        >
          todos
        </Typography>
        <Input />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
