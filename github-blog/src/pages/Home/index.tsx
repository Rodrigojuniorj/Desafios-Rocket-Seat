import { ContentCard, HomeContainer } from "./styles";

import { UserBox } from "../../components/UserBox";
import { SearchForm } from "./components/SearchForm";
import { Card } from "../../components/Card";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../service/axios";
import { string } from "zod";
import { Link } from "react-router-dom";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface Posts {
  title: string;
  body: string;
  number: number;
  created_at: string;
}

export function Home(){
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        
        setPosts(response.data.items);
      } finally {
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  },[])

  console.log(posts)

  return (
    <>
      <HomeContainer>
        <UserBox />
        <SearchForm
          countPost={posts.length}
        />
        <ContentCard>
          {posts.map(post => (
            <Link to={`/post/${post.number}`}>
              <Card
                body={post.body}
                created_at={post.created_at}
                number={post.number}
                title={post.title}
              />
            </Link>
          ))}
        </ContentCard>
      </HomeContainer>
    </>
  )
}