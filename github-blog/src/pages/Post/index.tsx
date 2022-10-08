import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../service/axios";
import { PostContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  const getPosts = useCallback(
    async () => {
      try {
        const response = await api.get(
          `/repos/${username}/${repoName}/issues/${id}`
        );
        setPosts(response.data);
      } finally {
      }
    },
    [posts]
    
  );

  useEffect(() => {
    getPosts();
  },[])

  return (
    <PostContainer>
      12312
    </PostContainer>
  )
}