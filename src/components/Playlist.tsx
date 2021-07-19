import React,{useState} from "react";
import LibrarySong from "./PlaylistSong";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import chillHop from "../data";
import '../index.scss'
const Playlist = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }:any) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
	
	const handleClose = () => {
	  setOpen(false);
	  console.log(name,artist,url);
	  chillHop.push({name : name, cover : cover, artist : artist, audio : url , color : [],id : uuidv4(),active : false})
	};
	const handleDelete = () =>{
		chillHop.pop()
		console.log(chillHop)
		document.location.reload(true)
	}
	
	const [name,setName] = useState("")
	const [artist,setArtist] = useState("")
	const [url,setUrl] = useState("")
	const [cover,setCover] = useState("")
	return (
		<div id="songlibrary">
			<h1 style={{marginLeft:"2rem"}}>Playlist</h1>
			<Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginLeft:"2rem",marginBottom:"1rem",marginTop:"1rem"}}>
  Add New Song
</Button>
			<Button onClick={handleDelete} variant="contained" color="secondary" style={{marginLeft:"2rem"}}>
  Delete Song
</Button>
			<div className="songcontainer">
				{songs.map((song:any) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
				
			</div>
			<div>
     
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new song</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Feel free to add new songs to your playlist
          </DialogContentText>
          <TextField
		  value={name}
		  onChange={e => {setName(e.target.value)}}
            autoFocus
            margin="dense"
            id="name"
            label="Song Name"
            type="text"
            fullWidth
          />
		   <TextField
		  value={artist}
		  onChange={e => {setArtist(e.target.value)}}
            autoFocus
            margin="dense"
            id="artist"
            label="Artist Name"
            type="text"
            fullWidth
          />
		   <TextField
		    value={url}
			onChange={e => {setUrl(e.target.value)}}
            autoFocus
            margin="dense"
            id="url"
            label="Song URL"
            type="text"
            fullWidth
          />
		    <TextField
		    value={cover}
			onChange={e => {setCover(e.target.value)}}
            autoFocus
            margin="dense"
            id="cover"
            label="Cover URL"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose}  color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
		</div>
	);
};
/*
const LibraryContainer = styled.div`
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	width: 20rem;
	height: 100%;
	background-color: white;
	box-shadow: 2px 2px 50px rgb(204, 204, 204);
	user-select: none;
	overflow: scroll;
	transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
	transition: all 0.5s ease;
	opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
	scrollbar-width: thin;
	scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.5);
		border-radius: 20px;
		border: transparent;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		z-index: 9;
	}
`;

const SongContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
`;

const H1 = styled.h2`
	padding: 2rem;
`;
*/
export default Playlist;