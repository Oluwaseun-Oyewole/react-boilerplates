import Loader from "../../../components/custom/loader";
import { useGetAllTodosQuery } from "../../../redux/store/query";
import { TodosInterface } from "../../../redux/types";
import { todoValidationSchema } from "../../../schema/todos";
// import { useAppSelector } from "../../../store/hook";

const Products = () => {
  const { data, isLoading, error } = useGetAllTodosQuery({});
  // another variation of getting todos directly from your slice. This is approach is useful if you want a common source of truth for your data(i.e todo)
  // const { todos, loading } = useAppSelector((state) => state.rootReducer.todos);

  return (
    <div>
      <h1>All Todos</h1>

      {error instanceof Error && (
        <div role="alert" aria-atomic="true">
          <p> {error?.message}</p>
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {data?.map((todo: TodosInterface, index: number) => {
            const validTodo = todoValidationSchema.safeParse(todo);
            if (!validTodo.success) return <li>No todo found!!</li>;
            return <li key={index}>{todo?.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Products;
