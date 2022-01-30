import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore, query, collection, orderBy, getDocs } from 'firebase/firestore'
import firebaseApp from '../credentials'
const db = getFirestore(firebaseApp)



const Lib = () => {

    const [songs, setSongs] = useState([])

    const getSongs = async () => {
        const songsSnap = await getDocs(query(collection(db, "canciones"), orderBy("titulo")))

        songsSnap.forEach((ss) => {
            let songData = Object.assign(ss.data(), { id: ss.id })
            setSongs(songs => [...songs, songData])
        })

    }
    const enviarSong = (titulo, artista, bpm, url, letra, acordes) => {
        const song = { titulo, artista, bpm, url, letra, acordes }
        localStorage.setItem('song', JSON.stringify(song))
    }

    useEffect(() => getSongs(), [])
    console.log(songs)
    return (<>
        <div className="libPage">
            <div className="headerLib">

                <Link to='/'><i className="material-icons" >home</i></Link>
                <div>Biblioteca de Alabanzas</div>
            </div>
            <div className="libArea">
                {
                    songs.map((s) => {
                        return (
                            <Link to='../content' className='link' key={s.id}>
                                <div className='filaSong' onClick={() => enviarSong(s.titulo, s.artista, s.bpm, s.url, s.letra, s.acordes)}>
                                    {s.titulo} <small>- {s.artista}</small>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    </>)
}
export default Lib