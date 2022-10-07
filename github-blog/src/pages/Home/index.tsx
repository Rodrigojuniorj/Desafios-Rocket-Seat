import { ContentCard, CoverImg, HomeContainer } from "./styles";

import imgCover from '../../assets/Cover.png'
import { UserBox } from "../../components/UserBox";
import { SearchForm } from "./components/SearchForm";
import { Card } from "../../components/Card";

export function Home(){
  return (
    <>
      <CoverImg src={imgCover} alt="Cover" />
      <HomeContainer>
        <UserBox />
        <SearchForm />
        <ContentCard>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContentCard>
      </HomeContainer>
    </>
  )
}