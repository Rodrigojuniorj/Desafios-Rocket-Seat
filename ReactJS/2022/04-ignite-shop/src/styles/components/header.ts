import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    cursor: 'pointer',
    width: '3rem',
    height: '3rem',
    borderRadius: 6,
    border: 'none',
    position: 'relative',
    background: '$gray800',
    color: '$gray400',

    span:{
      background: '$green300',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '0',
      position: 'absolute',
      top: '-7px',
      right: '-7px',
      border: '3px solid $gray900',
      borderRadius: '1000px',

      fontWeigth: 'normal',
      fontSize: '0.75rem',
      color: '$white'
    }
  }
})