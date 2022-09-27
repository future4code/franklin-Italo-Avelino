import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inputPlaylist, setInputPlaylist] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);

  const onChangeInputPlaylist = (event) => {
    setInputPlaylist(event.target.value)
  }

  const createPlaylist = () => {
    const body = {
      name: inputPlaylist
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then((res) => {
      setPlaylists(res.data.result.list)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(getAllPlaylists, [playlists])

  const deletePlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getPlaylistTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then((res) => {
      setPlayListTracks(res.data.result.tracks)
    }).catch((err) => {
      console.log(err)
    })
  }

  const tracksDatail = playListTracks.map((track) => {
    return <p>{track.artist} {track.name}</p>
  })

  const displayPlaylists = playlists.map((playlist) => {
    return <li key={playlist.id}>{playlist.name} <button onClick={() => deletePlaylist(playlist.id)}>X</button> <button onClick={() => getPlaylistTracks(playlist.id)}>Detalhes</button></li>
  })

  return (
    <div className="App">
      <label>Adicionar playlist <input placeholder="Nome da playlist" value={inputPlaylist} onChange={onChangeInputPlaylist}/></label>
      <button onClick={()=> createPlaylist()}>Criar Playlist</button>

      {displayPlaylists}
      {tracksDatail}
    </div>
  );
}

export default App;
