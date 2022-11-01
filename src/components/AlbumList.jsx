import { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard";

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-nj.web.app/albums')
            .then(response => response.json())
            .then(setAlbums)
            .catch(alert)
    }, [])  //empty [] means it will only load once/call the API once (it is an empty dependency list)

        return (
        <main className="album-list">
            {!albums
                ? <p>Loading...</p>
                : albums.map(thisAlbum => <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum}/>) //the last two thisAlbums (or whatever we call it) need to match   
                
            }
        </main>
    )
}