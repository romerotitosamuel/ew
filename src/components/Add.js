import React, { useState, useEffect } from 'react'
import firebaseApp from "../credentials"
import { getFirestore, doc, getDoc, collection, orderBy, getDocs, query, setDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const db = getFirestore(firebaseApp)



const Add = () => {

    const [songs, setSongs] = useState([])
    const [songsDom, setSongsDom] = useState([])

    const getSongs = async () => {
        const songsSnap = await getDocs(query(collection(db, "canciones"), orderBy("artista")))

        songsSnap.forEach((ss) => {
            let songData = Object.assign(ss.data(), { id: ss.id })
            setSongs(songs => [...songs, songData])
        })
    }
    useEffect(() => getSongs(), [])

    const getSongsDom = async () => {
        let arrayDomSnap = await getDoc(doc(db, 'domingo', 'listDom'))
        let arrayDom = arrayDomSnap.data().dom
        arrayDom.forEach( async (s) => {
            let songSnap = await getDoc(doc(db, 'canciones', s))
            setSongsDom(songsDom => [...songsDom , songSnap.data()])
        })

    }
    useEffect( ()=> getSongsDom(), [])

    const addSong = async (s) => {
        let arrayDomSnap = await getDoc(doc(db, 'domingo', 'listDom'))
        let arrayDom = arrayDomSnap.data().dom
        arrayDom.push(s)
        await setDoc(doc(db, 'domingo', 'listDom'), { dom: arrayDom })
        window.location.reload()
    }
    const cleanSongs = async () => {
        await setDoc(doc(db, 'domingo', 'listDom'), { dom: [] })
        window.location.reload()
    }



    return (<>
        <div className="pagAdd">

            <div className="addHeader">

                <Link to='/'><i className="material-icons" >chevron_left</i></Link>

                <div>
                    <div ><b>Añadir Canciones</b></div>
                    <div ><small>Escoge las canciones que desees</small></div>
                </div>
                <i className='material-icons' onClick={() => cleanSongs()}>playlist_remove</i>

            </div>

            <div className='addAdded'>

                {songsDom.map( (s) => {
                    return( <div className='cancionesAdded'>
                        {s.titulo}<small> - {s.artista}</small>
                    </div> )
                })
                }
            </div>

            <br /><hr /> <br />

            <div className="allSongs">
                {songs.map((s) => {
                    return (<div key={s.id} className='blockList'>
                        <div>{s.titulo}<small> - {s.artista}</small></div>
                        <i className="material-icons" onClick={() => addSong(s.id)}>add</i>
                    </div>)
                })}
            </div>
        </div>
    </>)

}

export default Add