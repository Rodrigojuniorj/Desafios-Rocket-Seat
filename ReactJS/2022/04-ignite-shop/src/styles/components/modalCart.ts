import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

// export const Overlay = styled(Dialog.Overlay, {
//   position: 'fixed',
//   width: '100vw',
//   height: '100vh',
//   inset: 0,
//   background: 'rgba(0, 0, 0, 0.75)',
// })

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  height: '100vh',
  padding: '2.5rem 3rem',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  top: '0',
  right: '0',
})

export const TitleContent = styled(Dialog.Title, {
  marginTop: '1.5rem',
  color: '$gray100',
  fontSize: '$lg',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500',
})

export const WrapperItens = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.25rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    span: {
      display: 'block',
      fontSize: '$md',
      color: '$gray300',
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
    },

    button: {
      background: 'transparent',
      color: '$green500',
      fontSize: '1rem',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      width: '4rem',
      transition: 'all 0.4s',

      '&:hover': {
        color: '$green300',
      },
    }
  }
})


export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '2.5rem',
  paddingRight: '5rem',
  width: '100%',
  gap: '7px',

  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:last-child': {
      '& > strong:last-child': {
        fontSize: '$xl',
      }
    }
  },

  button: {
    width: '100%',
    height: '4.3rem',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    borderRadius: 8,
    marginTop: '3.5rem',
    cursor: 'pointer',
    transition: 'all 0.4s',

    '&:hover': {
      background: '$green300',
    }
  }
});