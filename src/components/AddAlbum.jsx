import { useState } from "react"


export default function AddAlbum({setToggle, toggle}) {   //pulling in a function from the parent
    const [album, setAlbum] = useState('')  //use this state variable to control this component
    const [artist, setArtist] = useState('') 
    const [year, setYear] = useState(1970) //this is just a placeholder
    const handleSubmit = (e) => {        //put in album data and it does this fetch. Takes an event as a parameter.
        e.preventDefault()   // have to add this line to prevent HTML from its default behavior - put this on every form there is
        //let's check to see that they entered all the data
        if(!album || !artist || !year) {  //this code should never run (just a backup) - we added required to input belows
            alert('Please enter all info')
            return
        }
        const newAlbum = {artist, album, year}     //putting this together into a single object
        fetch('https://albums-api-nj.web.app/albums', {   //for anything other than a get request (like a post), we need to put in options. Some of these (headers and body) are done automatically by postman. 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)    // we compress the object to a single string. JSON parse takes it back to a regular JS object.
        })
            .then(() => {
                //if I get request, then assume it worked (this is why we did not add the other .then re: JSON)
                setToggle(!toggle) // set it to the opposite of the toggle. This is sent up to APP and down to toggle list in AlbumList.
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
                {/* form starts here and has the below three elements. When we submit the form, it  */}
                <label htmlFor="album">Album:
                    <input type="text" name="album" required
                    onChange = {e => setAlbum(e.target.value)} 
                    value={album}/>
                    {/*  */}
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