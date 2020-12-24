import { useState, useEffect } from "react";
import _ from "lodash";
import ComfyJS from "comfy.js";
import lista from "../songs.json";

const Fila = () => {
  useEffect(() => {
    ComfyJS.Init(
      process.env.REACT_APP_TWITCHUSER,
      process.env.REACT_APP_OAUTH,
      "f4isk4"
    );
    setMusicas(
      _.sortBy(lista, "Artist").map((m, index) => {
        m.Codigo = index + 1;
        return m;
      })
    );
  }, []);

  const [musicas, setMusicas] = useState([]);
  const [timeStamp, setTimestamp] = useState("");
  const [musicasNaFila, setMusicasNaFila] = useState([]);

  const deletaMusica = (musica) => {
    const copia = _.cloneDeep(musicasNaFila);
    _.remove(copia, musica);
    setMusicasNaFila(copia);
  };

  ComfyJS.onChat = (user, message, flags, self, extra) => {
    if (extra.timestamp !== timeStamp && extra.customRewardId) {
      setTimestamp(extra.timestamp);
      console.log(extra);
      switch (extra.customRewardId) {
        case "f59e4549-791a-405f-82dc-9f8f71509ffa":
          const musicaEscolhida = musicas.find(
            (m) => m.Codigo.toString() === message
          );
          console.log(musicaEscolhida);
          if (musicaEscolhida) {
            musicaEscolhida.Pedinte = user;
            musicaEscolhida.CorPedinte = extra.userColor;
            setMusicasNaFila([...musicasNaFila, musicaEscolhida]);
            ComfyJS.Say(
              `/me ${user} pediu a música: ${musicaEscolhida.Name} - ${musicaEscolhida.Artist}`
            );
          } else {
            ComfyJS.Say(
              `/me ${user} Código inválido, digite !lista e use o código da música escolhida aqui...`
            );
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <table
      style={{
        width: "100%",
        height: "100%",
        color: "#FFFFFF",
        textShadow: "0 0 1px #000, 0 0 2px #000",
        fontWeight: "600",
        fontSize: "26px",
        textAlign: "left",
        wordWrap: "break-word",
        lineHeight: "1.5em",
        boxSizing: "border-box",
        background: "rgb(0, 0, 0, 0.4)",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid #FFFFFF" }}>
          <th style={{ width: "25%", padding: "0 10px" }}>
            <b>Pedinte</b>
          </th>
          <th style={{ width: "75%", padding: "0 10px" }}>
            <b>Música - Artista</b>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          // eslint-disable-next-line
          musicasNaFila.map((musica, index) => {
            if (index < 3) {
              return (
                <tr
                  style={{ borderBottom: "2px solid #FFFFFF" }}
                  className="linhaMusica"
                  key={index}
                  onClick={() => deletaMusica(musica)}
                >
                  <td style={{ padding: "0 10px", color: musica.CorPedinte }}>
                    {musica.Pedinte}
                  </td>
                  <td style={{ padding: "0 10px" }}>
                    {musica.Name} - {musica.Artist}
                  </td>
                </tr>
              );
            }
          })
        }
        {musicasNaFila.length > 3 ? (
          <tr>
            <td style={{ padding: "0 10px" }}>
              e mais{" "}
              {musicasNaFila.length >= 10 ? (
                <b style={{ color: "red", fontSize: "30px" }}>
                  {musicasNaFila.length - 3}
                </b>
              ) : (
                musicasNaFila.length - 3
              )}
              ...
            </td>
          </tr>
        ) : (
          ""
        )}
      </tbody>
    </table>
  );
};
export default Fila;
