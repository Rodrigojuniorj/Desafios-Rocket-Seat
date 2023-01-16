import { PostBoxContainer, UserContent } from "./styles";
import { ArrowSquareUpRight, GithubLogo, Buildings, Users, ChatCircleText, ArrowLeft, Calendar } from 'phosphor-react'
import { Link } from "react-router-dom";
import { relativeDateFormatter } from "../../utils/formatter";

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  login: string;
  company: string;
  followers: string;
}

export interface PostProps {
  created_at: string;
  title: string;
  body: string;
  comments: string;
  user: User;
}

interface PostBoxProps {
  post?: PostProps;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function PostBox({ post }: PostBoxProps){
  console.log(post)

  if(!post) {
    return <h1>Carregando...</h1> 
  }
  return (
    <PostBoxContainer>
      <UserContent>
        <header>
          <Link to='/'  ><span><ArrowLeft size={16} /></span>Voltar</Link>
          <a target="_blank" href={post.user.html_url} ><span>GITHUB</span> <ArrowSquareUpRight size={20} /></a>
        </header>
          <h2>{post.title}</h2>
        <footer>
          <div>
            <GithubLogo size={24} />
            <span>{post.user.login}</span>
          </div>
          <div>
            <Calendar size={24} />
            <span>{relativeDateFormatter(post.created_at)}</span>
          </div>
          <div>
            <ChatCircleText size={24} />
            <span>{} Seguidores</span>
          </div>
        </footer>
      </UserContent>
    </PostBoxContainer>
  )
}