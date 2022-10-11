import { useEffect, useState } from "react";
import { api } from "../../service/axios";
import { UserBoxContainer, UserContent } from "./styles";
import { ArrowSquareUpRight, GithubLogo, Buildings, Users, ChatCircleText, ArrowLeft, Calendar } from 'phosphor-react'

export interface User {
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
}


interface UserBoxProps {
  image?: boolean;
  post?: PostProps;
  users?: User;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function UserBox({ image , post, users}: UserBoxProps){

  if(!users) {
    return <h1>Carregando...</h1> 
  }

  return (
    <UserBoxContainer>
      { image && (
        <img src={users.avatar_url} />
      )}
      <UserContent>
        <header>
          { image ? (
            <>
              <h2>{users.name}</h2>
              <a target="_blank" href={users.html_url}><span>GITHUB</span> <ArrowSquareUpRight size={20} /></a>
            </>
          ): (
            <>
              <a target="_blank" href={users.html_url}><span><ArrowLeft size={16} /></span>Voltar</a>
              <a target="_blank" href={users.html_url}><span>GITHUB</span> <ArrowSquareUpRight size={20} /></a>
            </>
          )}
        </header>
        { image ? (
          <p>{users.bio}</p>
        ): (
          <div></div>
        )}
        <footer>
          <div>
            <GithubLogo size={24} />
            <span>{users.login}</span>
          </div>
          { image ? (
            <>
              <div>
                <Buildings size={24} />
                <span>{users.company ? users.company : '<RodrigoDev />'}</span>
              </div>
              <div>
                <Users size={24} />
                <span>{users.followers} Seguidores</span>
              </div>
            </>
          ): (
            <>
              <div>
                <Calendar size={24} />
                <span>{users.company ? users.company : '<RodrigoDev />'}</span>
              </div>
              <div>
                <ChatCircleText size={24} />
                <span>{users.followers} Seguidores</span>
              </div>
            </>
          )}
        </footer>
      </UserContent>
    </UserBoxContainer>
  )
}