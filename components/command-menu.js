import { Global } from '@emotion/react'
import { useState, useEffect, useMemo } from 'react'
import { Command } from 'cmdk'
import { Box, Container } from 'theme-ui'
import { Column, Row } from '@carbonplan/components'
import contents from '../data/contents.json'

const Item = ({ date, page, summary, title }) => {
  return (
    <Box
      as={Command.Item}
      sx={{
        width: '100%',
        cursor: 'pointer',
        color: 'secondary',
        fontSize: 2,
        padding: '0 8px',
        userSelect: 'none',
        willChange: 'background, color',
        transition: 'all 150ms ease',
        transitionProperty: 'none',
        '& .summary': {
          display: 'none',
        },

        "&[aria-selected='true']": {
          border: 0,
          borderLeft: '3px',
          borderColor: 'primary',
          borderStyle: 'solid',
          color: 'primary',
          '& .summary': {
            display: 'block',
          },
        },

        "&[aria-disabled='true']": {
          color: 'secondary',
          cursor: 'not-allowed',
        },
      }}
      onSelect={(value) => console.log('Selected', value)}
      value={page}
    >
      {title}
      <Box className='summary' sx={{ fontSize: 0 }}>
        {summary}
      </Box>
    </Box>
  )
}

const CommandMenu = () => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filteredItems = useMemo(() => {
    const regexp = new RegExp(search.trim(), 'i')

    return contents
      .filter(
        ({ title, summary, page }) =>
          title?.match(regexp) ||
          page.replace('-', ' ').match(regexp) ||
          summary?.match(regexp)
      )
      .slice(0, 5)
  }, [search])

  return (
    <Box id='testing'>
      <Global
        styles={(theme) => ({
          '[cmdk-overlay]': {
            width: '100vw',
            height: '100vh',
            backgroundColor: theme.colors.primary,
            opacity: 0.5,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2000,
          },
        })}
      />

      <Box
        as={Command.Dialog}
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        label='Global Command Menu'
        sx={{
          // [cmdk-root]
          width: '437.336px', // temporarily hardcode 4 column width
          background: 'background',
          padding: '8px 0',
          fontFamily: 'body',
          position: 'relative',
          //

          // [cmdk-dialog]
          zIndex: 2000,
          position: 'fixed',
          left: '50%',
          top: '56px',
          transform: 'translateX(-50%)',
          '& [cmdk]': {
            width: '640px',
            transformOrigin: 'center center',
            animation: 'dialogIn var(--transition-fast) forwards',
          },
          "&[data-state='closed'] [cmdk]": {
            animation: 'dialogOut var(--transition-fast) forwards',
          },
        }}
      >
        {/* <Row>
          <Column start={[1, 2, 5, 5]} columns={[6, 6, 4, 4]}> */}
        <Box
          as={Command.Input}
          placeholder='Search'
          value={search}
          onValueChange={setSearch}
          sx={{
            fontFamily: 'body',
            border: 'none',
            width: '100%',
            fontSize: '15px',
            padding: '8px 16px',
            outline: 'none',
            background: 'background',
            color: 'primary',
            borderWidth: 0,
            borderBottomWidth: '1px',
            borderColor: 'muted',
            borderStyle: 'solid',
            '&::placeholder': {
              color: 'secondary',
            },
          }}
        />
        <Box
          as={Command.List}
          sx={{
            width: '100%',
            overflow: 'auto',
            overscrollBehavior: 'contain',
            transition: '100ms ease',
            transitionProperty: 'height',
            height: 'var(--cmdk-list-height)',
          }}
        >
          <Command.Empty>No results found.</Command.Empty>

          {
            /* TODO: replace with fetched contents.json files */
            filteredItems.map((c) => (
              <Item key={c.page} {...c} />
            ))
          }
        </Box>
        {/* </Column>
        </Row> */}
      </Box>
    </Box>
  )
}

export default CommandMenu
