import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Button, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';


const Root = () => {
  return (
    <div>
      <Typography 
        color="primary.main"
        variant="h4"
      > Soufiane Amama </Typography>

      <Button 
        sx={{ mr: "auto", ml: "auto", display: "flex"}}
        endIcon={<Delete />} 
        variant='contained' 
        color='error' >
        Click here
      </Button> 

      <IconButton size='large' color='info'>
        <MenuIcon fontSize='inherit' />
      </IconButton>

      <Outlet />
    </div>
  )
}

export default Root