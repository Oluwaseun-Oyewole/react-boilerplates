import Request from "../../axios";

import { Endpoints } from "../endpoints";

export const allPosts = async () => {
  try {
    const response = await Request.get(Endpoints.posts);
    return response;
  } catch (error) {
    // handle api error here
    return;
  }
};
