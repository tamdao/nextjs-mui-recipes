import { Container } from '@mui/material'
import NextLink from 'next/link'

export default function Page() {
  return (
    <Container>
      <NextLink href="/recipes/abc-def">Whole-Grain Banana Bread</NextLink>
    </Container>
  )
}
