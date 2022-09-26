import { Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { SocketContext } from "../Context";



const paper = {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
}

const video = {
    width: '550px',
}

const gridContainer = {
    justifyContent: 'center',
}


const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <Grid container style={gridContainer}>
            {stream && (
                <Paper style={paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay style={video} />
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper style={paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay style={video} />
                    </Grid>
                </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;