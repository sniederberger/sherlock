import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';


function Layout() {

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
      <Outlet />
    </Box>
  )
}

export default Layout
