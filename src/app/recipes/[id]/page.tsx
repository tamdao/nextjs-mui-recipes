import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AddIcon from '@mui/icons-material/Add'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PrintIcon from '@mui/icons-material/Print'
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Page() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/recipes"
      component={NextLink}
      textTransform="uppercase"
      fontWeight="500"
    >
      Recipes
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/recipes/categories/bread"
      component={NextLink}
      textTransform="uppercase"
      fontWeight="500"
    >
      Bread
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/recipes/categories/bread/quick-bread"
      component={NextLink}
      textTransform="uppercase"
      fontWeight="500"
    >
      Quick bread
    </Link>,
  ]
  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Stack
        spacing={2}
        direction={{
          md: 'row-reverse',
        }}
      >
        <Box flex="1" width="100%">
          <Image
            src="/bread.jpg"
            alt="Whole-Grain Banana Bread"
            width="1920"
            height="1272"
            layout="responsive"
          />
        </Box>
        <Box flex="1">
          <Box mb={12}>
            <Typography component="h2" variant="h2" fontWeight="500">
              Whole-Grain Banana Bread
            </Typography>
          </Box>

          <Typography mb={6}>
            This one-bowl banana bread - our <u>2018 Recipe of the Year</u> -
            uses the simplest ingredients, but is incredibly moist and
            flavorful. While the recipe calls for a 50/50 mix of flours
            (all-purpose and whole wheat), we often make the bread 100% whole
            wheat, and honestly? No one can tell, it&apos;s that good! And not
            only is this bread delicious — it&apos;s versatile.
          </Typography>
          <Stack direction="row" mb={3} spacing={4}>
            <Stack direction="row" spacing={1}>
              <AccessTimeIcon fontSize="large" />
              <Box>
                <Typography fontWeight="500">PREP</Typography>
                <Typography fontWeight="500">10 mins</Typography>
              </Box>
            </Stack>
            <Box>
              <Typography fontWeight="500">BAKE</Typography>
              <Typography fontWeight="500">1 hr to 1 hr 15 mins</Typography>
            </Box>
            <Box>
              <Typography fontWeight="500">TOTAL</Typography>
              <Typography fontWeight="500">1 hr 10 mins</Typography>
            </Box>
          </Stack>
          <Divider />
          <Stack direction="row" mt={3} spacing={4}>
            <Stack flex="1" direction="row" spacing={1}>
              <GroupWorkIcon fontSize="large" />
              <Box>
                <Typography fontWeight="500">YIELD</Typography>
                <Typography fontWeight="500">
                  1 loaf, 12 generous servings
                </Typography>
              </Box>
            </Stack>
            <Stack flex="1" direction="row" spacing={1}>
              <Box>
                <Button variant="outlined" startIcon={<AddIcon />}>
                  SAVE RECIPE
                </Button>
              </Box>
              <Box>
                <Button variant="outlined" startIcon={<PrintIcon />}>
                  PRINT
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
