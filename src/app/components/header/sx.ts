import { Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'

export const mainNavStyles: SystemStyleObject<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  marginLeft: 14,
}

export const itemNavStyles: SystemStyleObject<Theme> = {
  width: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
}

export const subItemNavStyles: SystemStyleObject<Theme> = {
  width: 'auto',
  paddingTop: 0,
  paddingBottom: 0,
}

export const itemNavLinkStyles = (theme: Theme): SystemStyleObject<Theme> => ({
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  fontWeight: 500,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  borderBottom: '3px solid transparent',
})

export const containerNavStyles = (theme: Theme): SystemStyleObject<Theme> => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
})

export const subContainerNavStyles = (
  theme: Theme
): SystemStyleObject<Theme> => ({
  backgroundColor: theme.palette.secondary.main,
  paddingTop: '2px',
  paddingBottom: '2px',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
})

export const containerMenuBtn = (theme: Theme): SystemStyleObject<Theme> => ({
  display: 'block',
  textAlign: 'right',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
})

export const containerDrawer = (theme: Theme): SystemStyleObject<Theme> => ({
  width: '250px',
})
