import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostBox, PostProps } from "../../components/PostBox";
import { api } from "../../service/axios";
import { Content, PostContainer } from "./styles";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [posts, setPosts] = useState<PostProps>();

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

  if(!posts) {
    return <h1>Carregando...</h1> 
  }

  return (
    <PostContainer>
      <PostBox 
        post={posts}
      />
      <Content>
        <ReactMarkdown children={posts.body} />
      </Content>
    </PostContainer>
  )
}