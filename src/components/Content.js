import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import ReactPlayer from 'react-player'


const Content = () => {

    const [song] = useState(JSON.parse(localStorage.getItem('song')))
    const [chordOn, setChordOn] = useState(false)
    const [tam, setTam] = useState(16)

    const songArray = song.letra.split(['\n\n'])
    const acordeArray = song.acordes.split(['\n'])
    console.log(song.acordes)



    return (<>
        <div className="contentAll">
            <div className="contentHeader">
                <div className='headerLeft'>
                    <Link to='/'><i className="material-icons" >chevron_left</i></Link>
                    <div>
                        <div ><b>{song.titulo}</b></div>
                        <div ><small>{song.artista}  </small></div>
                        <div><small><small>{song.bpm ? `${song.bpm} bpm` : ""}</small></small></div>
                    </div>
                </div>
                <div className='vidRight'>

                    <ReactPlayer className='videoYT' url={`https://www.youtube.com/watch?v=${song.url}`} height='70px' width='150px' controls={true} light={true} playing={true} loop={true} />
                </div>

            </div>
            <div className="contentArea" style={{fontSize: tam}}>
                <div className="contentLetra" style={{ display: chordOn ? "none" : "block" }}>
                    <pre>
                        {songArray.map((r) => {

                            if (r.substr(0, 4) === 'CORO') {
                                return (<div><b>{r.slice(5)}</b> <br /> </div>)
                            }
                            return (<div>{r} <br /> </div>)
                        })}
                    </pre>

                </div>
                <div className="contentAcordes" style={{ display: chordOn ? "block" : "none" }}>
                    <pre>
                        {acordeArray.map((line) => {
                            const m = line.substr(0, 2)
                            if (m === "In" || m === "So" || m === " " || m === "  " || m === "   " || m === "    " || m === "     " || m === "     " || m === "C " || m === "Cm" || m === "C#" || m === "D " || m === "Dm" || m === "D#" || m === "Eb" || m === "E " || m === "Em" || m === "F " || m === "Fm" || m === "F#" || m === "G " || m === "Gm" || m === "G#" || m === "A " || m === "Am" || m === "A#" || m === "Bb" || m === "B " || m === "Bm") {
                                return (<div className='chord'>{line}</div>)
                            } else {
                                return (<div>{line}</div>)
                            }
                        })
                        }

                    </pre>


                </div>
                <div className="blockButtons">
                    <Link to='/'><i className="material-icons" id="iconAtras">chevron_left</i></Link>
                    <div onClick={() => setChordOn(false)}><i style={{borderBottom: chordOn ? 'none' : 'solid'}}className="material-icons" >description</i></div>
                    <div onClick={() => setChordOn(true)}><i style={{borderBottom: chordOn ? 'solid' : 'none'}} className="material-icons" >music_note</i></div>
                    <div><i style={{color: chordOn ? "#65f32d" : "gray" }} className="material-icons" >text_rotate_vertical</i></div>
                </div>

            </div>
        </div>

    </>)
}
export default Content