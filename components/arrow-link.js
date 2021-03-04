import { Box, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function ArrowLink({ href, children, big = false, color = 'text' }) {
  return (
    <Box
      sx={{
        fontSize: big ? [5, 5, 6] : [4],
        lineHeight: 'heading',
        width: 'fit-content',
        mb: big ? [0] : [1],
      }}
    >
      <Link
        id='link'
        sx={{
          textDecoration: 'none',
          transition: '0.15s',
          '&:hover > #arrow': {
            transform: 'rotate(45deg)',
            color: 'secondary',
          },
        }}
        href={href}
      >
        {children}
        <Box
          as='span'
          id='arrow'
          sx={{
            ml: [2],
            fontSize: big ? [7] : [4],
            position: 'relative',
            top: big ? '9px' : '3px',
            display: 'inline-block',
            lineHeight: 0,
            left: '0px',
            transition: '0.15s',
            color: color,
          }}
        >
          ↗
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['6px'] }} />
      </Link>
    </Box>
  )
}

export default ArrowLink
