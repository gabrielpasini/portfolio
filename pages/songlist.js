import { useState, useEffect } from 'react';
import Axios from '../axios';
import _ from 'lodash';
import lista from '../songs.json';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

let height = null;
if (process.browser) {
  height = window.innerHeight;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    maxHeight: `${height - 136}px`,
  },
}));

const SongList = () => {
  useEffect(() => {
    setLoading(true);
    setMusicas(
      _.sortBy(lista, 'Artist').map((m, index) => {
        m.Codigo = index + 1;
        return m;
      })
    );
    setLoading(false);
  }, []);

  const classes = useStyles();
  const [musicas, setMusicas] = useState([]);
  const [sortSelecionado, setSortSelecionado] = useState('Artist');
  const [loading, setLoading] = useState(false);

  const ordenaLista = (campo) => {
    if (campo !== sortSelecionado) {
      setLoading(true);
      setSortSelecionado(campo);
      setMusicas(_.sortBy(musicas, campo));
      setLoading(false);
    }
  };

  const selecionaMusica = async (codigo) => {
    setLoading(true);
    const { data } = await Axios.get(`songlist/${codigo}`);
    if (!data.length) {
      copiaCodigo(codigo);
    } else {
      alert(`Esta musica ja foi pedida hoje! Peça outra musica...`);
    }
    setLoading(false);
  };

  const copiaCodigo = (codigo) => {
    const el = document.createElement('textarea');
    el.value = codigo;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(
      `Codigo ${codigo} copiado! Agora use este código lá no pedido da música...`
    );
  };

  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="dashboardContainer" style={{ padding: '10px' }}>
        <div className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small" aria-label="a dense sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className="avisoCell">
                    IMPORTANTE! Clique na música para copiar o{' '}
                    <b style={{ color: '#29B8FF' }}>código</b> e use lá no item
                    "Pedir Música" da 🍑 loja do canal, use SOMENTE o{' '}
                    <b style={{ color: '#29B8FF' }}>código</b> na mensagem de
                    compra!
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small" aria-label="a dense sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className="dicaCell">
                    DICA: Use o comando Ctrl+F para buscar a música.
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small" aria-label="a dense sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      backgroundColor: 'rgb(50, 50, 52)',
                      color: '#29B8FF',
                      fontWeight: 'bold',
                    }}
                    onClick={() => ordenaLista('Codigo')}
                  >
                    Código
                  </TableCell>
                  <TableCell
                    className="headerCell"
                    onClick={() => ordenaLista('Name')}
                  >
                    Música{' '}
                    {sortSelecionado === 'Name' ? (
                      <b className="sortIcon">↓</b>
                    ) : null}
                  </TableCell>
                  <TableCell
                    className="headerCell"
                    onClick={() => ordenaLista('Artist')}
                  >
                    Artista{' '}
                    {sortSelecionado === 'Artist' ? (
                      <b className="sortIcon">↓</b>
                    ) : null}
                  </TableCell>
                  <TableCell
                    className="headerCell"
                    onClick={() => ordenaLista('Album')}
                  >
                    Álbum{' '}
                    {sortSelecionado === 'Album' ? (
                      <b className="sortIcon">↓</b>
                    ) : null}
                  </TableCell>
                  <TableCell
                    className="headerCell"
                    onClick={() => ordenaLista('Playlist')}
                  >
                    Playlist{' '}
                    {sortSelecionado === 'Playlist' ? (
                      <b className="sortIcon">↓</b>
                    ) : null}
                  </TableCell>
                  <TableCell
                    className="headerCell"
                    onClick={() => ordenaLista('Charter')}
                  >
                    Criador{' '}
                    {sortSelecionado === 'Charter' ? (
                      <b className="sortIcon">↓</b>
                    ) : null}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {musicas.map((musica) => (
                  <TableRow
                    className="linhaMusicaLista"
                    key={musica.Codigo}
                    onClick={() => selecionaMusica(musica.Codigo)}
                  >
                    <TableCell
                      component="th"
                      scope="musica"
                      className="codigoCell"
                    >
                      {musica.Codigo}
                    </TableCell>
                    <TableCell className="defaultCell">{musica.Name}</TableCell>
                    <TableCell className="defaultCell">
                      {musica.Artist}
                    </TableCell>
                    <TableCell className="defaultCell">
                      {musica.Album}
                    </TableCell>
                    <TableCell className="defaultCell">
                      {musica.Playlist}
                    </TableCell>
                    <TableCell className="defaultCell">
                      {musica.Charter}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default SongList;
