import { Box, Typography } from '@mui/material'
import IconNock from '../SVG/Iconnock'
import React from 'react'

type Props = {}

const HeaderLogo = (props: Props) => {
  return (
<Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        gap={"8px"}
        marginTop={"20px"}
      >
        <IconNock height={44} width={44} />
        <Box component={"span"}>
          <Typography variant="h5" component={"h1"} color={"primary"}>
            Nock
          </Typography>
        </Box>
      </Box>  )
}

export default HeaderLogo