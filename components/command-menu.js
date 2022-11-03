import { Global } from '@emotion/react'
import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { Box, Container } from 'theme-ui'
import { Column, Row } from '@carbonplan/components'

const Item = ({ children }) => {
  return (
    <Box
      as={Command.Item}
      sx={{
        width: '100%',
        cursor: 'pointer',
        color: 'secondary',
        height: '40px',
        fontSize: 2,

        padding: '0 8px',
        userSelect: 'none',
        willChange: 'background, color',
        transition: 'all 150ms ease',
        transitionProperty: 'none',

        "&[aria-selected='true']": {
          border: 0,
          borderLeft: '3px',
          borderColor: 'primary',
          borderStyle: 'solid',
          color: 'primary',
        },

        "&[aria-disabled='true']": {
          color: 'secondary',
          cursor: 'not-allowed',
        },
      }}
    >
      {children}
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
        console.log('in here')
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

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
        // onOpenChange={setOpen}
        label='Global Command Menu'
        sx={{
          // [cmdk-root]
          width: '100%',
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
          width: '300px',
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
          }}
        >
          <Command.Empty>No results found.</Command.Empty>

          <Item>a</Item>
          <Item>b</Item>
          <Item>c</Item>
          <Item>Apple</Item>
        </Box>
      </Box>
    </Box>
  )
}

export default CommandMenu
