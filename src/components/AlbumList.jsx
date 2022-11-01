import { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard";

export default function AlbumList({toggle}) {   //get the toggle/prop from APP
    const [albums, setAlbums] = useState()     //state variable because we want react to respond to it
    useEffect(() => {    // want to put the fetch in a useEffect so that the fetch does not continually reload 
        fetch('https://albums-api-nj.web.app/albums') //basic fetch get request
            .then(response => response.json())
            .then(setAlbums)
            .catch(alert)
    }, [toggle])  //empty [] means it will only load once/call the API once (it is an empty dependency list). Originally we only had it run once - but now with toggle, whenever toggle is triggered, we run it again

        return (
        <main className="album-list">
            {!albums
                ? <p>Loading...</p>
                : albums.map(thisAlbum => <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum}/>) //the last two thisAlbums (or whatever we call it) need to match   
                
            }
        </main>
    )
}