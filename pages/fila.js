import { useState, useEffect } from 'react';
import Axios from '../axios';
import _ from 'lodash';
import ComfyJS from 'comfy.js';
import lista from '../songs.json';

const Fila = () => {
  const [musicas, setMusicas] = useState([]);
  const [timeStamp, setTimestamp] = useState('');
  const [musicasNaFila, setMusicasNaFila] = useState([]);
  const [musicasPedidas, setMusicasPedidas] = useState([]);

  const carregaMusicasNaFila = async (musicasIniciais) => {
    const { data } = await Axios.get(`songlist`);
    const listaInicial = [];
    data.map((musicaDB) => {
      const musicaEncontrada = musicasIniciais.find(
        (m) => m.Codigo.toString() === musicaDB.songId
      );
      if (musicaEncontrada) {
        musicaEncontrada.Pedinte = musicaDB.pedinte;
        musicaEncontrada.CorPedinte = musicaDB.corPedinte;
        musicaEncontrada.JaFoiTocada = musicaDB.jaFoiTocada;
        listaInicial.push(musicaEncontrada);
      }
    });
    setMusicasPedidas(listaInicial);
  };

  useEffect(() => {
    ComfyJS.Init(
      'bot_faiskola',
      'oauth:dkzg3l9lk0akbnw6qr0dahmep9jmph',
      'f4isk4'
    );
    const musicasIniciais = _.sortBy(lista, 'Artist').map((m, index) => {
      m.Codigo = index + 1;
      return m;
    });
    carregaMusicasNaFila(musicasIniciais);
    setMusicas(musicasIniciais);
  }, []);

  useEffect(() => {
    setMusicasNaFila(musicasPedidas.filter((m) => !m.JaFoiTocada));
  }, [musicasPedidas]);

  const limpaMusicaTocada = async (musica) => {
    await Axios.put(`songlist/${musica.Codigo}`);
    const copia = _.cloneDeep(musicasPedidas);
    const indexMusicaTocada = copia.findIndex(
      (m) => m.Codigo === musica.Codigo
    );
    const copiaMusica = { ...musica, JaFoiTocada: true };
    copia[indexMusicaTocada] = copiaMusica;
    setMusicasPedidas(copia);
  };

  const limparPedidas = async () => {
    await Axios.post(`songlist/clear`);
    setMusicasPedidas([]);
  };

  ComfyJS.onChat = async (user, message, flags, self, extra) => {
    if (extra.timestamp !== timeStamp && extra.customRewardId) {
      setTimestamp(extra.timestamp);
      switch (extra.customRewardId) {
        case '8ce378fc-7ab0-4e51-80d6-5f7fab617776':
          const musicaEscolhida = musicas.find(
            (m) => m.Codigo.toString() === message
          );
          if (musicaEscolhida) {
            const { data } = await Axios.get(`songlist/${message}`);
            if (data.length) {
              ComfyJS.Say(
                `/me ${user} Lamento mas esta música já foi pedida, tente outra...`
              );
              break;
            }
            musicaEscolhida.Pedinte = user;
            musicaEscolhida.CorPedinte = extra.userColor;
            musicaEscolhida.JaFoiTocada = false;
            await Axios.post(`songlist/new`, {
              songId: message,
              pedinte: user,
              corPedinte: extra.userColor,
              jaFoiTocada: false,
            });
            setMusicasPedidas([...musicasPedidas, musicaEscolhida]);
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
    <>
      <table
        style={{
          width: '100%',
          height: '100%',
          color: '#FFFFFF',
          textShadow: '0 0 1px #000, 0 0 2px #000',
          fontWeight: '600',
          fontSize: '26px',
          textAlign: 'left',
          wordWrap: 'break-word',
          lineHeight: '1.5em',
          boxSizing: 'border-box',
          background: 'rgb(0, 0, 0, 0.4)',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #FFFFFF' }}>
            <th style={{ width: '25%', padding: '0 10px' }}>
              <b>Usuário</b>
            </th>
            <th style={{ width: '75%', padding: '0 10px' }}>
              <b>Música - Artista</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {musicasNaFila.map((musica, index) => {
            if (index < 3) {
              return (
                <tr
                  style={{ borderBottom: '2px solid #FFF' }}
                  className="linhaMusica"
                  key={index}
                  onClick={() => limpaMusicaTocada(musica)}
                >
                  <td style={{ padding: '0 10px', color: musica.CorPedinte }}>
                    {musica.Pedinte}
                  </td>
                  <td style={{ padding: '0 10px' }}>
                    {musica.Name} - {musica.Artist}
                  </td>
                </tr>
              );
            }
          })}
          {musicasNaFila.length > 3 ? (
            <tr>
              <td style={{ padding: '0 10px' }}>
                e mais{' '}
                {musicasNaFila.length >= 10 ? (
                  <b style={{ color: 'red', fontSize: '30px' }}>
                    {musicasNaFila.length - 3}
                  </b>
                ) : (
                  musicasNaFila.length - 3
                )}
                ...
              </td>
            </tr>
          ) : null}
          {musicasNaFila.length === 0 ? (
            <tr>
              <div
                style={{
                  background: 'rgb(0, 0, 0, 0.4)',
                  position: 'fixed',
                  width: '100%',
                  padding: '0 10px',
                }}
              >
                Nenhuma música na fila...
              </div>
            </tr>
          ) : null}
        </tbody>
      </table>
      <button
        style={{ position: 'fixed', left: 0, bottom: 0 }}
        onClick={() => limparPedidas()}
      >
        LIMPAR
      </button>
    </>
  );
};
export default Fila;
