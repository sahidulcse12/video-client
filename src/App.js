import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { AppBar, Typography } from '@mui/material';
import './App.css';

const appBar = {
  borderRadius: 15,
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',
}

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}



function App() {
  return (
    <div style={wrapper}>
      <AppBar style={appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">video chat app</Typography>
      </AppBar>
      <VideoPlayer></VideoPlayer>
      <Options>
        <Notifications></Notifications>
      </Options>
    </div>
  );
}

export default App;
