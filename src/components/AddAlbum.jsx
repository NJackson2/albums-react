import { useState } from "react"


export default function AddAlbum() {
    const [album, setAlbum] = useState('')  //use this state variable to control this component
    const [artist, setArtist] = useState('') 
    const [year, setYear] = useState(1970) 
    const handleSubmit = (e) => {
        e.preventDefault()
        //let's check to see that they entered all the data
        if(!album || !artist || !year) {
            alert('Please enter all info')
            return
        }
        const newAlbum = {artist, album, year}
        fetch('https://albums-api-nj.web.app/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
            .then(() => {
                //assume it worked...
                setAlbum('')
                setArtist('')
                setYear('')
            })
            .catch(alert)
    }
    return (
        <section className = "add-album">
            <h3>Add new Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                    <input type="text" name="album" required
                    onChange = {e => setAlbum(e.target.value)} 
                    value={album}/>                
                </label><br /><br />
                <label htmlFor="artist">Artist:
                    <input type="text" name="artist" required
                    onChange = {e => setArtist(e.target.value)} 
                    value={artist}/>                
                </label><br /><br />
                <label htmlFor="year">Year:
                    <input type="number" name="year" required
                    onChange = {e => setYear(e.target.value)} 
                    value={year}/>                
                </label><br /><br />
                <input type="submit" value = "Add Album" />
            </form>
       
        </section>
    )
}