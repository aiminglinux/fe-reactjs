import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/NavBar/AppBar';
import Toolbar from '../components/NavBar/Toolbar';
import CodeIcon from '@mui/icons-material/Code';

const rightLink = {
  fontSize: '1rem',
  fontWeight: 400,
  color: 'common.white',
  ml: 3,
};

function NavBar() {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'center' } }}>
          <CodeIcon sx={{ display: 'flex', mr: 1 }} />
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='#'
            sx={{ fontSize: 24 }}
          >
            {'DevConnector'}
          </Link>
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='/signin'
              sx={rightLink}
            >
              {'Developers'}
            </Link>
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='/signin'
              sx={rightLink}
            >
              {'Register'}
            </Link>
            <Link
              variant='h6'
              underline='none'
              href='/sign-up'
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Log In'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default NavBar;
