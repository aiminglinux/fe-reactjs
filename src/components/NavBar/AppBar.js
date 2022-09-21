import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
  return (
    <MuiAppBar
      elevation={0}
      position='fixed'
      {...props}
      sx={{ opacity: 0.9 }}
    />
  );
}

export default AppBar;
