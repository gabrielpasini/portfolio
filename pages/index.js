import Link from 'next/link';

const Home = () => {
  return (
    <div className="dashboardContainer homeContainer">
      <h1>Home</h1>
      <h2>
        <Link href="/layout">
          <a className="homeLinks">Layout</a>
        </Link>
      </h2>
      <h2>
        <Link href="/alerts">
          <a className="homeLinks">Alertas</a>
        </Link>
      </h2>
      <h2>
        <Link href="/fila">
          <a className="homeLinks">Fila</a>
        </Link>
      </h2>
      <h2>
        <Link href="/songlist">
          <a className="homeLinks">Lista</a>
        </Link>
      </h2>
      <h2>
        <Link href="/leaderboard">
          <a className="homeLinks">Leaderboard</a>
        </Link>
      </h2>
    </div>
  );
};
export default Home;
