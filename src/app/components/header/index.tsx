'use client'

import { MainListLinkItem } from '@/app/components/header/main-list-link-item'
import { SubListLinkItem } from '@/app/components/header/sub-list-link-item'
import {
  containerDrawer,
  containerMenuBtn,
  containerNavStyles,
  subContainerNavStyles as containerSubNavStyles,
  mainNavStyles,
} from '@/app/components/header/sx'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'

interface Navigation {
  label: string
  href: string
  subItems?: Navigation[]
}

const navigationItems: Navigation[] = [
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Recipes',
    href: '/recipes',
    subItems: [
      {
        label: 'Categories',
        href: '/recipes/categories',
      },
      {
        label: 'Collections',
        href: '/recipes/collections',
      },
      {
        label: 'Resources',
        href: '/recipes/resources',
      },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

export default function Header() {
  const pathname = usePathname()

  const [openDrawer, setOpenDrawer] = useState(false)

  const activeNav = useMemo(() => {
    return navigationItems.find(
      (item) => item.href === pathname || pathname.includes(item.href)
    )
  }, [pathname])

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false)
  }, [])

  const onOpenDrawer = useCallback(() => {
    setOpenDrawer(true)
  }, [])

  return (
    <Box
      position="sticky"
      bgcolor="white"
      top={0}
      pt={3}
      pb={3}
      component="header"
    >
      <Container maxWidth="lg" component="nav">
        <Box position="absolute" top="0">
          <Image src="/logo.svg" alt="Logo" width={100} height={104} priority />
        </Box>
        <Box sx={containerMenuBtn}>
          <IconButton aria-label="menu" size="large" onClick={onOpenDrawer}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Drawer anchor="right" open={openDrawer} onClose={onCloseDrawer}>
          <Box
            sx={containerDrawer}
            role="presentation"
            onClick={onCloseDrawer}
            onKeyDown={onCloseDrawer}
          >
            <List>
              {navigationItems.map((item) => (
                <ListItem key={item.href}>
                  <ListItemButton component={NextLink} href={item.href}>
                    {item.label}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={containerNavStyles}>
          <List sx={mainNavStyles}>
            {navigationItems.map((item) => (
              <MainListLinkItem
                key={item.href}
                label={item.label}
                href={item.href}
              />
            ))}
          </List>
        </Box>
      </Container>
      {activeNav && activeNav.subItems && (
        <Box sx={containerSubNavStyles}>
          <Container maxWidth="lg" component="nav">
            <List sx={mainNavStyles}>
              {activeNav.subItems.map((item) => (
                <SubListLinkItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </List>
          </Container>
        </Box>
      )}
    </Box>
  )
}
