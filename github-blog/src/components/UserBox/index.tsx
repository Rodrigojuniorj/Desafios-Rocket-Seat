import { useEffect, useState } from "react";
import { api } from "../../service/axios";
import { UserBoxContainer, UserContent } from "./styles";
import { ArrowSquareUpRight, GithubLogo, Buildings, Users } from 'phosphor-react'

import imgUser from '../../assets/marcaoPT.jpeg'

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  login: string;
  company: string;
  followers: string;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function UserBox(){
  const [users, setUsers] = useState<User>();

  async function buscarDados() {
    await api.get(`/users/${username}`).then(response => setUsers(response.data))
  }

  useEffect(() => {
    buscarDados()
  },[])


  if(!users){
    return <h1>Carregando...</h1> 
  }

  return (
    <UserBoxContainer>
      <img src={users.avatar_url} />
      <UserContent>
        <header>
          <h2>{users.name}</h2>
          <a target="_blank" href={users.html_url}><span>GITHUB</span> <ArrowSquareUpRight size={20} /></a>
        </header>
        <p>{users.bio}</p>
        <footer>
          <div>
            <GithubLogo size={24} />
            <span>{users.login}</span>
          </div>
          <div>
            <Buildings size={24} />
            <span>{users.company ? users.company : '<RodrigoDev />'}</span>
          </div>
          <div>
            <Users size={24} />
            <span>{users.followers} Seguidores</span>
          </div>
        </footer>
      </UserContent>
    </UserBoxContainer>
  )
}