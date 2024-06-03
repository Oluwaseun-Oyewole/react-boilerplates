import { AxiosError } from "axios";
import { useQuery } from "react-query";
import Request from "../../../axios";
import Loader from "../../../components/custom/loader";
import { albumsValidationSchema } from "../../../schema/albums";
import { BASE_URL } from "../../../services/endpoints";

export interface AlbumInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Albums = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: () => Request.get(`${BASE_URL}albums`).then((data) => data),
    onError: (err: AxiosError) => {
      console.log(err?.response?.status);
    },
  });

  return (
    <div>
      <h1>Albums</h1>

      {error instanceof Error && (
        <div role="alert" aria-atomic="true">
          <p> {error?.message}</p>
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {data?.map((todo: AlbumInterface, index: number) => {
            const validateAlbum = albumsValidationSchema.safeParse(todo);
            if (!validateAlbum.success) <li>No todo found!!</li>;
            return <li key={index}>{todo?.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Albums;
