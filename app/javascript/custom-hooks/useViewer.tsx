import { useQuery } from "react-apollo";
import { GET_VIEWER } from "../utility/Queries/post-show-queries.js";
export const userViewer = () => {
  const { data, loading } = useQuery(GET_VIEWER);
  return { isUserLoggedIn: data?.viewer, loading };
};
