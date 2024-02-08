import { itemNavLinkStyles, itemNavStyles } from '@/app/components/header/sx'
import { Link, ListItem, ListItemProps, useTheme } from '@mui/material'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type MainListLinkItemProps = ListItemProps & {
  label: string
  href: string
}

export function MainListLinkItem(props: MainListLinkItemProps) {
  const { label, href, ...rest } = props
  const theme = useTheme()
  const pathname = usePathname()

  const sx = useMemo(() => {
    const baseStyles = itemNavLinkStyles(theme)

    return pathname === href || pathname.includes(href)
      ? { ...baseStyles, borderColor: theme.palette.primary.main }
      : baseStyles
  }, [href, pathname, theme])

  return (
    <ListItem sx={itemNavStyles} {...rest}>
      <Link sx={sx} underline="none" component={NextLink} href={href}>
        {label}
      </Link>
    </ListItem>
  )
}
