import { useState, useEffect } from 'react';
import Axios from '../axios';
import ComfyJS from 'comfy.js';

const Layout = () => {
  const [timeStamp, setTimestamp] = useState('');
  const [tempPadrao, setTempPadrao] = useState();
  const [tempRainbow, setTempRainbow] = useState();
  const [tema, setTema] = useState();

  useEffect(() => {
    ComfyJS.Init(
      'bot_faiskola',
      'oauth:dkzg3l9lk0akbnw6qr0dahmep9jmph',
      'f4isk4'
    );
    setTimeout(
      // { classe: 'webcamBlack', url: `leds?valor=0` }
      () => executaRequest({ classe: 'webcamBlue', url: `leds?valor=azul` }),
      2000
    );
  }, []);

  const executaRequest = async (obj) => {
    await Axios.post(obj.url);
    setTema(obj.classe);
    return obj.classe;
  };

  ComfyJS.onChat = async (user, message, flags, self, extra) => {
    if (extra.timestamp !== timeStamp && extra.customRewardId) {
      let classe = '';
      console.log(extra.customRewardId);
      switch (extra.customRewardId) {
        case '8f12aad7-4c11-4908-b7f6-3d09f30f3bfd': // ITEM OVERLAY RGB
          setTimestamp(extra.timestamp);
          clearTimeout(tempPadrao);
          clearTimeout(tempRainbow);
          classe = await executaRequest({
            classe: 'webcamRainbow',
            url: `leds?valor=1`,
          });
          break;
        case '32fb105c-feff-4b59-8e8f-459935bd6b38':
          setTimestamp(extra.timestamp);
          clearTimeout(tempPadrao);
          const url = `leds?valor=`;
          const mensagem = message.toLowerCase();
          switch (mensagem) {
            case 'vermelho':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamRed',
                    url: url + mensagem,
                  }));
              break;
            case 'verde':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamGreen',
                    url: url + mensagem,
                  }));
              break;
            case 'rosa':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamPink',
                    url: url + mensagem,
                  }));
              break;
            case 'azul':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamBlue',
                    url: url + mensagem,
                  }));
              break;
            case 'roxo':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamPurple',
                    url: url + mensagem,
                  }));
              break;
            case 'branco':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamWhite',
                    url: url + mensagem,
                  }));
              break;
            case 'amarelo':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamYellow',
                    url: url + mensagem,
                  }));
              break;
            case 'laranja':
              tema === 'webcamRainbow'
                ? ComfyJS.Say(
                    `/me ${user} alguém comprou o overlay RGB, aguarde...`
                  )
                : (classe = await executaRequest({
                    classe: 'webcamOrange',
                    url: url + mensagem,
                  }));
              break;
            default:
              ComfyJS.Say(
                `/me ${user} cor inválida, digite !overlay para ver as cores disponíveis.`
              );
              break;
          }
          break;
        default:
          break;
      }
      if (classe === 'webcamRainbow') {
        setTempRainbow(
          setTimeout(
            () =>
              executaRequest({ classe: 'webcamBlue', url: `leds?valor=azul` }),
            2 * 60000
          )
        );
      } else if (classe && classe !== 'webcamRainbow') {
        setTempPadrao(
          setTimeout(
            () =>
              executaRequest({ classe: 'webcamBlue', url: `leds?valor=azul` }),
            60000
          )
        );
      }
    }
  };

  return (
    <div className="Container">
      <div className="blocoLayout">
        <div className={tema} />
      </div>
    </div>
  );
};
export default Layout;
