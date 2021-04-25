import { Box } from 'theme-ui'
import { Column } from '@carbonplan/components'

const Sidenote = ({ children, variant = 'h1' }) => {
  let mt
  if (variant === 'h1') mt = [4, '27px', '42px', '54px']
  if (variant === 'h2') mt = [4, 4, '14px', '54px']
  return (
    <>
      <Column start={[1, 4, 8, 8]} width={[1, 1, 1, 1]}>
        <Box
          sx={{
            mt: mt,
            fontFamily: 'faux',
            letterSpacing: 'faux',
            fontSize: [2, 2, 2, 3],
            textAlign: 'right',
          }}
        >
          /
        </Box>
      </Column>
      <Column start={[2, 5, 9, 9]} width={[3, 3, 2, 2]}>
        <Box
          sx={{
            mt: mt,
            fontFamily: 'faux',
            letterSpacing: 'faux',
            fontSize: [2, 2, 2, 3],
            height: ['100%', '0px', '0px', '0px'],
          }}
        >
          {children}
        </Box>
      </Column>
    </>
  )
}

export default Sidenote
