import Head from 'next/head';
import { useEffect } from 'react';

const easterEgg =
  '\n                   .::^^~~~~~~~~~!!~~^^^~~~^::..            \n               .:^^~!!7!!!!~~~~~~~~~~~!77!!!~~~~^::.        \n           .::^:^~~!!!!~^^:::^^~!!!~^:::~7???777!~^:..      \n        ..:::^^^^^^^^^^~7?Y5PB##&&@&#GJ~::~7??7??77~::..    \n      .:~7JPGBBGPPPPGGGB#&@@@&#BGPPG#@#P?::!?JJ?77777~:.    \n    :^:.^!!!?YP&@@&&#&&@&#PY7~^:.. .^!YGY!^~!?J?77777~:::.  \n  ....:^^^:.  .~?P#&&#GJ!^::^!?JY5YJ!::^^^~~!?J?7!^:::^^^:  \n  .::^7JYYJ7!~^:~JG&@#5J777??J??77???7!^^:^~7??7~:.:^7JJJ!:.\n  .::^^~~~~~~^^^^^~7YGBPJ!^:^^^^^^~!!!~~^:^~7JJ!^::^!7?JJ7~:\n  ::::^~:..:~?YYY?!^^7J7~~7!~^:~5#&#Y~!??7!:^7?7!^^~!77??!^:\n  .:::!?~:~?P&@@#57~~JGPJ??JYYJ?YY7~!?P@@#Y^.:~7?7!!!!777!^:\n  .:^~!7JYPPPYJ?!^:~JG@@#PJ777????J5B&&&&&#5?:.^!77!^^^^^:::\n .^7P#B5YJ?JJYY55?7J5B@@&&#BGGB#&@@@&####&&&P7^:^!7!^::..   \n ^JG&@@&&&&&&@#PJ77P&@@&##BB##&&&########&&&BJ!::~???7~:..  \n ^YB&&####BPPG5?!~!JGBB&&#B5JJPB&@@&&&&###&&B57:.^7??7~^.   \n.:!YG#&#PJ77?5Y!:  .::^7YG#G?!~75GGGPPPGGB##B5?^.^!7?7!^:.  \n...^?P5Y!^~JP#BY7~^!?JYGBBGY7777!!!!!7J5GBBBG5?~:^!7?7!^:.  \n  ..:^!?YP5J???YYJJJY5P5J?!75G##BGGGB##&####BPJ~:~7?J?7~:   \n   .~JG&@&BPJ!!!7777777?J5G#&&&&#########B##BY7^:~7???!^.   \n   :?P#&&####BBGGGGBBB#&&&&&##########BBBGBBP?~^^!??77!^.   \n   .!YB&&#BB##&&&&&&&&&##############BBBB#G5?^:!?JJJ?7!^.   \n   .^!YBBBBBGG5Y?7?YPB##############BB#&&#P!^~7Y5YJYY7~:.   \n     :7YPBBGPJ7^:.:^!YGBBBBGGGGGGBGGBBBB57~:^7JJ?????!:...  \n      ^75GBBGPY7!~~!?5BBBGGGPGGGB###BGJ~:.^7JJ?!~!!!~^..    \n       .~?JY55YJ?JYPGGGGGGBBBBBGGPY?!:.:~?YYYJ?777!!~^..    \n      ......^?YPGGGGGGGGGGGP5Y?7!~^:::~7JYYJJ??77??7!^.     \n      :~!7~:...^~~!!!!!!!~~^:. .:~7??7????JJJ?777?J?!^.     \n    .^~!7??7!~^:............:^~!!77777?????J???77???7~:.    ';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(easterEgg);
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Anton"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <title>Gabriel Pasini</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
