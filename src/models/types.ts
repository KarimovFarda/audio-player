export interface ISongs {
    name: string;
    artist: string;
    uploadDate: string;
    audio: string;
    playlistId: string;
    music: File;
    _id?: string;
}

export interface IPlaylist {
    name: string;
    creationDate: string;
    songs?: ISongs[];
}
  
  