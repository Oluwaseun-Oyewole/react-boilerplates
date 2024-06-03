import Loader from "../../../components/custom/loader";
import { useGetAllTodosQuery } from "../../../redux/store/query";
import { TodosInterface } from "../../../redux/types";
import { todoValidationSchema } from "../../../schema/todos";

const Products = () => {
  const { data, isLoading } = useGetAllTodosQuery({});

  // for global data instance

  // const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <h1>All Todos</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {data?.map((todo: TodosInterface, index: number) => {
            const validTodo = todoValidationSchema.safeParse(todo);
            if (!validTodo.success) {
              return <div>No post found!!</div>;
            }
            return (
              <div key={index} className="flex gap-2">
                <p>{todo.id}</p>
                {todo?.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
