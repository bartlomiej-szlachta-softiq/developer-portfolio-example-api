const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => setTimeout(next, 1000 * Math.random()));

app.get('/projects', (req, res) => {
  res.send([
    {
      name: 'Facebook',
      description: 'Serwis społecznościowy, w ramach którego zarejestrowani użytkownicy mogą tworzyć sieci i grupy,' +
        ' dzielić się wiadomościami i zdjęciami oraz korzystać z aplikacji,' +
        ' będący własnością Meta Platforms z siedzibą w Menlo Park.' +
        ' Został uruchomiony 4 lutego 2004 na Uniwersytecie Harvarda i był początkowo przeznaczony przede wszystkim dla osób' +
        ' studiujących na tej uczelni.',
    },
    {
      name: 'Instagram',
      description: 'Fotograficzny serwis społecznościowy hostingu zdjęć, połączony z aplikacją o tej samej nazwie' +
        ' (dostępną na systemy operacyjne iOS i Android), który umożliwia użytkownikom edycję zdjęć i filmów,' +
        ' stosowanie do nich filtrów cyfrowych oraz udostępnianie ich w różnych serwisach społecznościowych.' +
        ' Charakterystyczną cechą aplikacji był nadawany zdjęciom kwadratowy kształt,' +
        ' podobnie jak w aparatach fotograficznych marki Kodak serii Instamatic,' +
        ' aparatach do fotografii błyskawicznej firmy Polaroid oraz w średnioformatowych aparatach formatu 6x6' +
        ' w przeciwieństwie do proporcji obrazu 4:3,' +
        ' który jest wykorzystywany przez większość aparatów fotograficznych oraz urządzeń mobilnych' +
        ' dysponujących funkcją foto. 27 sierpnia 2015 roku udostępniono możliwość umieszczania zdjęć i filmów' +
        ' w innych formatach obrazu.',
    },
    {
      name: 'WhatsApp',
      description: 'mobilna aplikacja dla smartfonów, służąca jako komunikator internetowy.' +
        ' Aplikacja ta jest dostępna dla różnych platform: iOS, Android i KaiOS.' +
        ' Dzięki tej aplikacji można przesyłać wiadomości i pliki multimedialne pomiędzy dwoma telefonami komórkowymi,' +
        ' połączonymi z Internetem. Wymagana jest instalacja aplikacji na telefonie.' +
        ' Możliwe jest tworzenie czatów grupowych, przesyłanie własnej pozycji dzięki Mapom Google' +
        ' i współdzielenie kontaktów własnej rubryki. Aplikacja pozwala również na rozmowy wideo oraz VoIP.',
    },
    {
      name: 'Oculus',
      description: 'Gogle wirtualnej rzeczywistości stworzone przez firmę Reality Labs (wcześniej Oculus)' +
        ' wydane 26 marca 2016 roku. W roku 2012 firma Oculus zorganizowała zbiórkę pieniędzy na serwisie Kickstarter,' +
        ' która ostatecznie zebrała 2,437,429 USD.' +
        ' Popularność projektu przyczyniła się do zakupu firmy przez przedsiębiorstwo Facebook.',
    },
  ]);
});

app.post('/contact', (req, res) => {
  res.send({
    message: 'Pomyślnie wysłano wiadomość',
  });
});

app.get('/*', (req, res) => res.sendStatus(404));

const server = http.createServer(app);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`API Server listening on http://localhost:${port}`);
});
