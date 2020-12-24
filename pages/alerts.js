import { useState, useEffect } from "react";
import ComfyJS from "comfy.js";
import _ from "lodash";

const Alerts = () => {
  const [statusAlerta, setStatusAlerta] = useState("");
  const [timeStampCompra, setTimestampCompra] = useState("");
  const [timeStampComando, setTimestampComando] = useState("");
  const [alerta, setAlerta] = useState({});
  const [audioPadrao, setAudio] = useState({});
  const [audioFunkEstouradasso, setFunkEstouradasso] = useState({});
  const [audioRojao, setRojao] = useState({});
  const [audioRojaoApito, setRojaoApito] = useState({});
  const [audioMaminha, setMaminha] = useState({});
  const [audioBebim, setBebim] = useState({});
  const [audioAvengers, setAvengers] = useState({});

  useEffect(() => {
    ComfyJS.Init(
      process.env.REACT_APP_TWITCHUSER,
      process.env.REACT_APP_OAUTH,
      "f4isk4"
    );
    setInterval(
      () =>
        ComfyJS.Say(`/me Digite !comandos para ver todos os comandos da live!`),
      10 * 60000
    );
  }, []);

  const executaAlerta = (objAlerta) => {
    switch (objAlerta.tipo) {
      case "funkEstouradasso":
        audioFunkEstouradasso.play();
        break;
      case "rojao":
        audioRojao.play();
        break;
      case "rojaoApito":
        audioRojaoApito.play();
        break;
      case "maminha":
        audioMaminha.play();
        break;
      case "aguinha":
        audioBebim.play();
        break;
      case "avengers":
        audioAvengers.play();
        break;
      default:
        audioPadrao.play();
        break;
    }
    setAlerta(objAlerta);
    setTimeout(() => setStatusAlerta("alertafadeIn"), 200);
    setTimeout(() => setStatusAlerta("alertaFadeOut"), 5000);
    setTimeout(() => setAlerta({}), 5300);
  };

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (extra.timestamp !== timeStampComando) {
      setTimestampComando(extra.timestamp);
      const comando = command.toLowerCase();
      console.log(comando);
      switch (comando) {
        case "comandos":
          ComfyJS.Say(
            `/me !faiskolas !doar !sub !prime !membro !raiz !instagram !discord !youtube !overlay !steam !psn !pipi !mamar !pergunta !dinheiro !codigo !saque`
          );
          break;
        case "dinheiro":
          ComfyJS.Say(
            `/me ${user} https://get.incent.com/landing/referral?referral=10jhxe5t 👈 Clique aqui para entrar no INCENT! Depois fique ligado, quando aparecer os códigos na tela da live digite !codigo, entre no link e pronto...`
          );
          break;
        case "codigo":
          ComfyJS.Say(
            `/me ${user} https://get.incent.com/ 👈 Clique aqui e digite o código que vai aparecer na tela da live pra ganhar dinheiros!`
          );
          break;
        case "saque":
          ComfyJS.Say(
            `/me ${user} Siga esse tutorial para sacar seus INCNT de forma fácil! https://youtu.be/EU8p83J263Q`
          );
          break;
        case "faiskolas":
          ComfyJS.Say(
            `/me ${user} FAISKOLAS: são os pontos do canal, vc ganha assistindo a live(subs ganham o dobro) e usa para resgatar várias recompensas na loja! Clique na 🍑 aqui em baixo do chat para abrir a loja! 👇👇👇`
          );
          break;
        case "overlay":
          ComfyJS.Say(
            `/me ${user} Compre na 🍑 loja com suas !faiskolas os itens: [Overlay RGB] - Duração: 2min | [Overlay] - Duração: 1min; Cores disponíveis: azul, rosa, vermelho, verde, amarelo, branco, roxo, laranja.`
          );
          break;
        case "raiz":
          ComfyJS.Say(
            `/me ${user} Membros RAIZ jogam comigo e participam de calls nas lives! Existem 3 formas de se tornar RAIZ: 1️⃣-Virando !sub ou !prime 2️⃣-Virando !membro no youtube 3️⃣-Comprando o item "RAIZ" na 🍑 loja com suas !faiskolas`
          );
          break;
        case "membro":
          ComfyJS.Say(
            `/me ${user} MEMBRO YOUTUBE: https://www.youtube.com/channel/UCozHr9pJQPHNcmjvM4ELVRQ/join`
          );
          break;
        case "doar":
          ComfyJS.Say(`/me ${user} DOAÇÃO: https://streamlabs.com/f4isk4/tip`);
          break;
        case "sub":
          ComfyJS.Say(
            `/me ${user} SUBSCRIBE: https://www.twitch.tv/subs/f4isk4`
          );
          break;
        case "prime":
          ComfyJS.Say(
            `/me ${user} AMAZON PRIME: https://www.amazon.com.br/prime?ref_=nav_logo_prime_join`
          );
          break;
        case "instagram":
          ComfyJS.Say(
            `/me ${user} INSTAGRAM: https://www.instagram.com/gabrielfsk/`
          );
          break;
        case "discord":
          ComfyJS.Say(
            `/me ${user} DISCORD: https://discordapp.com/invite/H32A8jw`
          );
          break;
        case "youtube":
          ComfyJS.Say(
            `/me ${user} YOUTUBE: https://www.youtube.com/channel/UCozHr9pJQPHNcmjvM4ELVRQ`
          );
          break;
        case "steam":
          ComfyJS.Say(
            `/me ${user} STEAM: https://steamcommunity.com/id/faiskera/`
          );
          break;
        case "psn":
          ComfyJS.Say(
            `/me ${user} PSN: https://my.playstation.com/profile/FAISKINHO`
          );
          break;
        // case 'server':
        //   ComfyJS.Say(`/me ${user} Para entrar no servidor basta comprar o item "ACESSO SERVER MINECRAFT" na 🍑 loja com suas !faiskolas | Para ter um terreno na cidade vire um !raiz ou compre o item "TERRENO SERVER MINECRAFT" também na 🍑 loja!`); break;
        // case 'lista':
        //   ComfyJS.Say(`/me ${user} Lista de músicas do CloneHero: https://faiska.herokuapp.com/songlist`); break;
        // case 'pedirmusica':
        //   ComfyJS.Say(`/me ${user} Pra pedir música nas lives de CloneHero é só comprar o item "Pedir Música" na 🍑 loja e digitar o código da música que tu pega em !lista`); break;
        case "pipi":
          if (message) {
            let m = message.toLowerCase();
            if (
              m.includes("faisk") ||
              m.includes("f a i s k") ||
              m.includes("faisca") ||
              m.includes("f4isk") ||
              m.includes("fáísk") ||
              m.includes("faísk") ||
              m.includes("fáisk") ||
              m.includes("fáísk") ||
              m.includes("streamer") ||
              m.includes("ksiaf")
            ) {
              ComfyJS.Say(`/me ${user} toma então bobaião! PogChamp`);
              ComfyJS.Say(`/timeout ${user} 120`);
            } else {
              ComfyJS.Say(
                `/me ${message} tem um pipi de ${
                  Math.floor(Math.random() * 30) + 1
                }cm`
              );
            }
          } else {
            ComfyJS.Say(
              `/me ${user} tem um pipi de ${
                Math.floor(Math.random() * 30) + 1
              }cm`
            );
          }
          break;
        case "mamar":
          if (message) {
            ComfyJS.Say(`/me ${user} mamou ${message} KappaPride`);
          } else {
            ComfyJS.Say(`/me ${user} se auto-mamou NotLikeThis`);
          }
          break;
        case "pergunta":
          if (message) {
            ComfyJS.Say(
              `/me ${user} ${_.sample([
                "Sim!",
                "Não!",
                "Caguei...",
                "Talvez...",
                "Mama aqui ó!",
                "Quem sabe, né?",
                "Acho que não...",
                "Acho que sim...",
                "Na real fodase...",
                "Não é da sua conta!",
                "Poisé, poisé, poisé...",
                "Como assim? num entendi!?",
                "Pergunta lá no posto ipiranga...",
                "Que pergunta merda heim!?",
                "Não sou capaz de opinar...",
                "Ééééééé... Não.",
              ])}`
            );
          } else {
            ComfyJS.Say(`/me ${user} lança a braba ae tio!`);
          }
          break;
        default:
          break;
      }
    }
  };

  ComfyJS.onChat = (user, message, flags, self, extra) => {
    if (extra.timestamp !== timeStampCompra && extra.customRewardId) {
      setTimestampCompra(extra.timestamp);
      console.log(extra.customRewardId);
      const objAlerta = {
        user: user,
        message: message,
        color: extra.userColor,
        tipo: null,
        messageExib: "",
        imgSrc:
          "https://cdn.discordapp.com/attachments/658163745159118858/699430997611249734/wumpa112x112.png",
      };
      switch (extra.customRewardId) {
        case "fcf43b65-d395-4f1a-b6e9-b38078043476":
          objAlerta.tipo = "salve";
          objAlerta.messageExib = ` MANDOU O TÃO ACLAMADO E GLORIOSO SALVE!`;
          ComfyJS.Say(`/me salve ${user}`);
          break;
        case "22710f6e-e141-4141-a3b9-1afc9bff455a":
          objAlerta.tipo = "raiz";
          objAlerta.messageExib = ` ACABOU DE SE TORNAR UM RAIZ!`;
          break;
        case "ada9820b-8a39-4268-bb91-a7556a43b2d3":
          objAlerta.tipo = "vip";
          objAlerta.messageExib = ` ACABOU DE SE TORNAR UM VIP!`;
          ComfyJS.Say(`/vip ${user}`);
          break;
        // case '329b4b90-45c9-41ed-b6b0-68d05c372e1c':
        //   objAlerta.tipo = 'terrenoMinecraft';
        //   objAlerta.imgSrc = 'https://cdn.discordapp.com/attachments/663479366918995985/727940978228592652/chaveTerreno.png';
        //   objAlerta.messageExib = ` comprou um terreno na cidade do minecraft!`;
        //   ComfyJS.Say(`/me Bem-vindo(a) ${user} à cidade de ⛏🟩 Faiskolandia 🟩⛏`);
        //   break;
        // case '22eadb89-c9d5-4d7e-ad6e-0764976adbf7':
        //   objAlerta.tipo = 'acessoMinecraft';
        //   objAlerta.messageExib = ` comprou acesso ao server de minecraft!`;
        //   ComfyJS.Say(`/me Bem-vindo(a) ${user} ao servidor de ⛏🟩 Minecraft 🟩⛏`);
        //   break;
        case "0ee4ca36-3e60-40cc-8ea4-6fccf7418c77":
          objAlerta.tipo = "timeout";
          objAlerta.messageExib = ` deu timeout no ${message}!`;
          ComfyJS.Say(`/timeout ${message} 300`);
          ComfyJS.Say(
            `PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp`
          );
          break;
        case "9f57fec4-ce8c-459f-bcd7-a9cde32d183c":
          objAlerta.tipo = "oclinho";
          objAlerta.messageExib = ` me obrigou a por o óclinho chavoso!`;
          ComfyJS.Say(`/me ${user} 😎`);
          break;
        case "b0e41399-2120-4810-9b7f-3474dad7da44":
          objAlerta.tipo = "aguinha";
          objAlerta.messageExib = ` me obrigou a hidratar o corpinho!`;
          ComfyJS.Say(`/me ${user} 🧃`);
          break;
        case "7d336038-69d4-401b-bf3f-78941010adc8":
          objAlerta.tipo = "funkEstouradasso";
          objAlerta.imgSrc =
            "https://cdn.discordapp.com/attachments/332541301134196739/452637843769131008/GIF-130418_104051.gif";
          objAlerta.messageExib = ` TCHÁTCDUN TCHÁ TCHÁ!!!`;
          break;
        case "8d0cdc8e-5a84-45a4-9dda-96f527304d48":
          objAlerta.tipo = "rojao";
          objAlerta.imgSrc =
            "https://cdn.discordapp.com/attachments/663479366918995985/717549849867714570/rojaosss.gif";
          objAlerta.messageExib = ` soltou um rojão 12 tiros!`;
          break;
        case "160cbd1d-e0b1-4def-9b4a-624cf588695c":
          objAlerta.tipo = "rojaoApito";
          objAlerta.imgSrc =
            "https://cdn.discordapp.com/attachments/663479366918995985/717549849867714570/rojaosss.gif";
          objAlerta.messageExib = ` soltou um rojão apito!`;
          break;
        case "6ff0083b-9843-4efa-8179-241f26d44897":
          objAlerta.tipo = "maminha";
          objAlerta.imgSrc =
            "https://cdn.discordapp.com/attachments/663479366918995985/717999474596905020/maminhaaaaaaaaaa.gif";
          objAlerta.messageExib = ` botou a danada no brazeiro!`;
          break;
        case "34b46d8a-2cb6-4e13-ba9d-a8ced2ea7404":
          objAlerta.tipo = "avengers";
          objAlerta.imgSrc =
            "https://cdn.discordapp.com/attachments/663479366918995985/717999528547975168/thanos.gif";
          objAlerta.messageExib = ` rebolou com o Thanos!`;
          break;
        case "363b8c8d-0af7-4998-a6c4-1ff724e2c6b0":
          objAlerta.tipo = "jogaComigo";
          objAlerta.messageExib = ` comprou uma vaguinha no meu time!`;
          break;
        case "44aff5f6-855d-4fa8-af3f-ab54cca80f59":
          objAlerta.tipo = "fullEmote";
          objAlerta.messageExib = ` partiu spam de emotes no chat!`;
          ComfyJS.Say(`/emoteonly`);
          ComfyJS.Say(
            `Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm`
          );
          break;
        case "b4f26282-d2be-43b7-a0d9-dfc7f0f73926":
          objAlerta.tipo = "asmr";
          objAlerta.messageExib = ` comprou um ASMR gostozin!`;
          break;
        case "aaa8f23c-39b0-4df6-a061-47406ed05dbc":
          objAlerta.tipo = "mute";
          objAlerta.messageExib = "sssshhhhhhh...";
          break;
        case "83d94f5c-e0d9-4d4e-8b11-a376c3facb90":
          objAlerta.tipo = "instaKill";
          objAlerta.messageExib = " morre aê lixão!";
          break;
        case "b29968a7-0f64-4ce5-8c64-ac8326f89afd":
          objAlerta.tipo = "nextLive";
          objAlerta.messageExib = " vai escolher a próxima live!";
          break;
        case "e970d1dd-0e83-431a-a037-8a563d14efa0":
          objAlerta.tipo = "trocaJogo";
          objAlerta.messageExib = " troca essa merda ae!";
          break;
        case "1e807ab2-27ec-436a-8c6f-69eaed35d8ef":
          objAlerta.tipo = "divulgacao";
          objAlerta.messageExib = " divulga meu anau plis!";
          ComfyJS.Say(`/me !sh-so ${user}`);
          break;
        case "4ab3188b-6931-46b6-96de-b939da24362a":
          objAlerta.tipo = "adzada";
          objAlerta.messageExib = " mandou um AD na fuça do chat!";
          ComfyJS.Say(`/commercial 30`);
          ComfyJS.Say(`/me tankem o AD do ${user}...`);
          break;
        default:
          break;
      }
      if (objAlerta.tipo) {
        executaAlerta(objAlerta);
      }
    }
  };

  ComfyJS.onHosted = (user) => {
    ComfyJS.Say(`/me muito obrigado pelo host ${user}!`);
  };
  ComfyJS.onCheer = (user) => {
    ComfyJS.Say(`/me muito obrigado pelos bits ${user}!`);
  };
  ComfyJS.onSub = (user) => {
    ComfyJS.Say(`/me muito obrigado pelo sub ${user}!`);
  };
  ComfyJS.onResub = (user) => {
    ComfyJS.Say(`/me muito obrigado pelo resub ${user}!`);
  };
  ComfyJS.onRaid = (user) => {
    ComfyJS.Say(`/me muito obrigado pela raid ${user}!`);
  };

  return (
    <div className="Container">
      <audio ref={(audioRef) => setAudio(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/701831380065321130/CRASH_BANDICOOT_New_Life_1up.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setFunkEstouradasso(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/658163745159118858/699460702527815770/funk_estouradasso.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setRojao(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/717548273791139850/rojao1.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setRojaoApito(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/717548276198670386/rojaoapito.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setMaminha(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/717986048113639484/maminha.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setBebim(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/717997440208338995/bebim.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <audio ref={(audioRef) => setAvengers(audioRef)}>
        <source
          src="https://cdn.discordapp.com/attachments/663479366918995985/717997424236429374/avengers_estouradasso.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
      <div className="alertas">
        {alerta.message ? (
          <div className={statusAlerta}>
            <img src={alerta.imgSrc} className="gira" alt="" />
            <p className="mensagem">
              <b className="nomeUser" style={{ color: alerta.color }}>
                {alerta.user}
              </b>
              {alerta.messageExib}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Alerts;
