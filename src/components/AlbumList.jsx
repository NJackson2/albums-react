import { useState, useEffect } from "react";

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
                : albums.map(album => (
                    <div className = 'album' key={album.album.Id}>
                        <h3>{album.album}</h3>
                        <p>{album.year}, {album.artist}</p>
                    </div>
                ))
            
            }
        </main>
    )
}