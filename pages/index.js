import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>
        <Link href="/layout">
          <a>Layout</a>
        </Link>
      </h2>
      <h2>
        <Link href="/alerts">
          <a>Alertas</a>
        </Link>
      </h2>
      <h2>
        <Link href="/songlist">
          <a>Lista</a>
        </Link>
      </h2>
      <h2>
        <Link href="/fila">
          <a>Fila</a>
        </Link>
      </h2>
    </>
  );
};
export default Home;
