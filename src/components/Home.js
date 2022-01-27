import { getFirestore, getDoc, doc } from 'firebase/firestore'
import firebaseApp from '../credentials'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo50 from '../styles/images/logoWor50px.png'
const db = getFirestore(firebaseApp)

const Home = () => {

    const [songsDom, setSongsDom] = useState([])

    const getSongsDom = async () => {

        console.log(window.navigator.onLine)
        const arraySnap = await getDoc(doc(db, 'domingo', 'listDom'))
        const arraySongs = arraySnap.data().dom
        arraySongs.forEach(async (s) => {
            const songSnap = await getDoc(doc(db, 'canciones', s))
            setSongsDom(songsDom => [...songsDom, songSnap.data()])
        })


    }

    const enviarSong = (titulo, artista, bpm, url, letra, acordes) => {
        const song = { titulo, artista, bpm, url, letra, acordes }
        localStorage.setItem('song', JSON.stringify(song))
    }
    useEffect(() => getSongsDom(), [])

    return (<>
        <div className='homePage'>
            <div className='homeHeader'>
                <img src={logo50} alt="No hay logo" />
            </div>

            <div className="domHome">
                {
                    songsDom.map((s) => {
                        return (

                            <Link to='./add' className='link'>
                                <div className='filaSong' onClick={() => enviarSong(s.titulo, s.artista, s.bpm, s.url, s.letra, s.acrodes)}>
                                    {s.titulo} <small>- {s.artista}</small>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <i className="material-icons" >preview</i>
            <Link to='/add'>Hacia add</ Link> <br />
            <Link to='/lab'>Hacia Lab</ Link>
            <button onClick={() => getSongsDom()} >getArray</button>
        </div>

    </>)
}
export default Home