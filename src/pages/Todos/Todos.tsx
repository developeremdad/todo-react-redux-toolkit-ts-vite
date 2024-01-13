import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todos = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl text-orange-500 underline  font-semibold">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todos;
