import { useState, useEffect } from 'react';
import Link from 'next/link';
import Axios from '../axios';
import _ from 'lodash';
import {
  Table,
  Backdrop,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  IconButton,
  TableContainer,
  CircularProgress,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
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
  iconHeader: {
    color: '#00ff00',
  },
  iconFirst: {
    marginLeft: 5,
    marginBottom: -5,
    color: '#FFD700',
  },
  iconSecond: {
    marginLeft: 5,
    marginBottom: -5,
    color: '#D3D3D3',
  },
  iconThird: {
    marginLeft: 5,
    marginBottom: -5,
    color: '#B87333',
  },
}));

const Leaderboard = () => {
  const classes = useStyles();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregaLeaderboard = async () => {
    setLoading(true);
    const { data } = await Axios.get('/leaderboard');
    setLeaderboard(_.orderBy(data, 'pedidos', 'desc'));
    setLoading(false);
  };

  useEffect(() => {
    carregaLeaderboard();
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="dashboardContainer" style={{ padding: '10px' }}>
        <div className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="titleCell">
                    RANKING DE USUÁRIOS QUE MAIS PEDIRAM MÚSICA NAS LIVES!
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="rankCell titleCell">
                    Rank
                    <IconButton
                      size="small"
                      className={classes.iconHeader}
                      onClick={() => {
                        setLeaderboard([]);
                        carregaLeaderboard();
                      }}
                    >
                      <RefreshIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                  <TableCell className="titleCell">Usuário</TableCell>
                  <TableCell className="titleCell">Pedidos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboard.map((userInRank, index) => (
                  <Link
                    href={`https://twitch.tv/${userInRank.usuario}`}
                    key={userInRank._id}
                  >
                    <TableRow className="linhaMusicaLista">
                      <TableCell className="rankCell defaultCell">
                        {`${index + 1}º`}
                        {index + 1 === 1 ? (
                          <EmojiEventsIcon className={classes.iconFirst} />
                        ) : (
                          ''
                        )}
                        {index + 1 === 2 ? (
                          <EmojiEventsIcon className={classes.iconSecond} />
                        ) : (
                          ''
                        )}
                        {index + 1 === 3 ? (
                          <EmojiEventsIcon className={classes.iconThird} />
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="rank"
                        style={{ color: userInRank.corUsuario }}
                      >
                        {userInRank.usuario}
                      </TableCell>
                      <TableCell className="defaultCell">
                        {userInRank.pedidos}
                      </TableCell>
                    </TableRow>
                  </Link>
                ))}
                {leaderboard.length === 0 ? (
                  <TableRow>
                    <TableCell className="linhaNenhumDado titleCell">
                      Nenhum dado encontrado...
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default Leaderboard;
