import { itemNavLinkStyles, subItemNavStyles } from '@/app/components/header/sx'
import { Link, ListItem, ListItemProps } from '@mui/material'
import NextLink from 'next/link'

type SubListLinkItemProps = ListItemProps & {
  label: string
  href: string
}

export function SubListLinkItem(props: SubListLinkItemProps) {
  const { label, href, ...rest } = props

  return (
    <ListItem sx={subItemNavStyles} {...rest}>
      <Link
        sx={itemNavLinkStyles}
        underline="none"
        component={NextLink}
        href={href}
      >
        {label}
      </Link>
    </ListItem>
  )
}
