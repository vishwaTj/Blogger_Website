import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function Avatar2({stl,name}) {

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500], p: 3 ,fontSize: 23 }}>{name.slice(0,1)}</Avatar>
    </Stack>
  );
}