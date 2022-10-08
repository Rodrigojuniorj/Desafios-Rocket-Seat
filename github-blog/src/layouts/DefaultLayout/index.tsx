import { Outlet } from 'react-router-dom'
import { CoverImg, LayoutContainer } from './styles'
import imgCover from '../../assets/Cover.png'

export function DefaultLayout() {
  return (
    <>
      <CoverImg src={imgCover} alt="Cover" />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
