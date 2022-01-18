import React, {useState, useEffect} from 'react'
import firebaseApp from "../credentials"
import { getFirestore, getCollection, doc, getDoc, collection, orderBy, getDocs, query } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const db = getFirestore(firebaseApp)



const Add = () => {

    const [songs, setSongs] = useState([])

    const getSongs = async () => {
        const songsSnap = await getDocs(query(collection(db, "canciones"), orderBy("artista")))
    
        songsSnap.forEach((ss) => {
            let songData = Object.assign(ss.data(), { id: ss.id })
            setSongs(songs => [...songs, songData])
        })
    }
    useEffect(()=>getSongs(),[])

    const addSong = (s) => {
        console.log(s)
    }
    



    return (<>
        <div className="pagAdd">

            <div className="addHeader">

                <Link to='/'><i className="material-icons" >chevron_left</i></Link>

                <div>
                    <div ><b>Añadir Canciones</b></div>
                    <div ><small>Escoge las canciones que desees</small></div>
                </div>
            </div>

            <div className='addAdded'>

            </div>

            <br /><hr /> <br />

            <div className="allSongs">
                {songs.map((s)=>{
                    return(<div key={s.id}className='blockList'>
                        <div>{s.titulo} - <small>{s.artista}</small></div>
                        <i className="material-icons" onClick={()=> addSong(s.id)}>add</i>
                    </div>)
                })}
            </div>
        </div>
    </>)

}

export default Add