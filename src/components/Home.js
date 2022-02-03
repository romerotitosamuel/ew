import { getFirestore, getDoc, doc } from 'firebase/firestore'
import firebaseApp from '../credentials'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo50 from '../styles/images/logoWor50px.png'
const db = getFirestore(firebaseApp)

const Home = () => {

    const [songsDom, setSongsDom] = useState([])

    const getSongsDom = async () => {

        if (window.navigator.onLine) {

            const arraySnap = await getDoc(doc(db, 'domingo', 'listDom'))
            const arraySongs = arraySnap.data().dom
            let paraLocal = []

            arraySongs.forEach(async (s) => {
                const songSnap = await getDoc(doc(db, 'canciones', s))
                const songWId = Object.assign(songSnap.data(), { id: s })
                setSongsDom(songsDom => [...songsDom, songWId])
                paraLocal.push(songWId)
            })
        } else {
            console.log("no hay internet")
            setSongsDom(JSON.parse(localStorage.getItem('localSongsDom')))
        }
    }

    const enviarSong = (titulo, artista, bpm, url, letra, acordes) => {
        const song = { titulo, artista, bpm, url, letra, acordes }
        localStorage.setItem('song', JSON.stringify(song))
    }
    useEffect(() => getSongsDom(), [])

    if (window.navigator.onLine) { localStorage.setItem('localSongsDom', JSON.stringify(songsDom)) }

    return (<>
        <div className='homePage'>
            <div className='homeHeader'>
                <img src={logo50} alt="No hay logo" />
            </div>

            <div className="domHome">
                {
                    songsDom.map((s) => {
                        return (

                            <Link to='./content' className='link' key={s.id}>
                                <div className='filaSong' onClick={() => enviarSong(s.titulo, s.artista, s.bpm, s.url, s.letra, s.acordes)}>
                                    {s.titulo} <small>- {s.artista}</small>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="aplications">

            </div>

            <a className='youtubeArea' href="https://music.youtube.com/playlist?list=PL_FgA7_oWUXKWcagYkqu2DW9z7IC-BiOu" target="_blank">
                <i className="material-icons" >play_circle_outline</i>
                <div>Playlist - Youtube Music</div>
            </a  >

            <div className="footerHome">
                <Link to='/'><i className="material-icons" >home</i></Link>
                <div ><i className="material-icons" >apps</i></div>
                <Link to='/lib'><i className="material-icons" >library_music</i></Link>

            </div>
        </div>

    </>)
}
export default Home