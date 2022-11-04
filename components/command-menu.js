import { Global } from '@emotion/react'
import { useState, useEffect, useMemo } from 'react'
import { Command } from 'cmdk'
import { Box, Flex } from 'theme-ui'
import { Down, Left, Up } from '@carbonplan/icons'
import { useRouter } from 'next/router'

import contents from '../data/contents.json'

const COLUMNS = 4

const Item = ({ date, page, summary, title }) => {
  const router = useRouter()
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
        py: 2,
        px: [4, 5, 5, 6],
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
          px: (theme) =>
            [4, 5, 5, 6].map((i) => `calc(${theme.space[i]}px - 3px)`),
        },

        "&[aria-disabled='true']": {
          color: 'secondary',
          cursor: 'not-allowed',
        },
      }}
      onSelect={() => router.push(`https://carbonplan.org/${page}`)}
      value={page}
    >
      {title}
      <Box className='summary' sx={{ width: '100%', fontSize: 0, mt: 1 }}>
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
      .filter((c) => c.title)
      .filter(
        ({ title, summary, page }) =>
          title?.match(regexp) ||
          page.replace('-', ' ').match(regexp) ||
          summary?.match(regexp)
      )
      .slice(0, 5)
  }, [search])

  return (
    <>
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
          width: [
            `calc(${COLUMNS} * (100vw - 7 * 24px) / 6 + ${COLUMNS + 1} * 24px)`,
            `calc(${COLUMNS} * (100vw - 9 * 32px) / 8 + ${COLUMNS + 1} * 32px)`,
            `calc(${COLUMNS} * (100vw - 13 * 32px) / 12 + ${
              COLUMNS + 1
            } * 32px)`,
            `calc(${COLUMNS} * (100vw - 13 * 48px) / 12 + ${
              COLUMNS + 1
            } * 48px)`,
          ],
          background: 'background',
          position: 'relative',

          // [cmdk-dialog]
          zIndex: 2000,
          position: 'fixed',
          left: '50%',
          top: '56px',
          transform: 'translateX(-50%)',
          '& [cmdk]': {
            width: '100%',
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
            fontSize: [2, 2, 2, 3],
            fontFamily: 'body',
            letterSpacing: 'body',
            lineHeight: [1.2],
            border: 'none',
            width: '100%',
            pt: 3,
            pb: 2,
            px: [4, 5, 5, 6],
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
            'input::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            'input::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            ':focus-visible': {
              outline: 'none !important',
              background: 'none !important',
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
          <Box
            as={Command.Empty}
            sx={{
              p: [4, 5, 5, 6],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              color: 'secondary',
            }}
          >
            No results found.
          </Box>

          {
            /* TODO: replace with fetched contents.json files */
            filteredItems.map((c) => (
              <Item key={c.page} {...c} />
            ))
          }
        </Box>
        <Flex
          sx={{
            justifyContent: 'flex-end',
            gap: 3,
            pr: [4, 5, 5, 6],
            py: 2,
            borderWidth: 0,
            borderTopWidth: '1px',
            borderColor: 'muted',
            borderStyle: 'solid',
            fontSize: 0,
          }}
        >
          <Flex sx={{ gap: 2, alignItems: 'center' }}>
            Navigate
            <Box sx={{ mt: 1 }}>
              <Up sx={{ width: '10px' }} />
              <Down sx={{ width: '10px' }} />
            </Box>
          </Flex>
          <Flex sx={{ gap: 2, alignItems: 'center' }}>
            Open link
            <Left sx={{ width: '10px' }} />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default CommandMenu
