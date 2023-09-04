const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => setTimeout(next, 1000 * Math.random()));
app.use(cors());

app.get('/api/projects', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send([
    {
      name: 'Aplikacja do zarządzania zadaniami "TaskMaster"',
      description: '"TaskMaster" to kompleksowa aplikacja webowa, której celem jest ułatwienie użytkownikom zarządzania swoimi codziennymi zadaniami. Aplikacja pozwala użytkownikom tworzyć listy zadań, nadawać im priorytety, dodawać terminy i opisy. Dodatkowo, posiada wbudowany kalendarz umożliwiający planowanie i śledzenie zadań w oparciu o daty. Użytkownicy otrzymują również powiadomienia e-mailowe lub powiadomienia push, aby nie przegapić terminów. "TaskMaster" jest intuicyjny w obsłudze i pomaga w efektywnym zarządzaniu czasem.',
    },
    {
      name: 'System zarządzania sklepem internetowym "E-CommercePro"',
      description: '"E-CommercePro" to zaawansowany system do zarządzania sklepem internetowym, który umożliwia przedsiębiorcom prowadzenie swojego biznesu online. System ten pozwala na łatwe zarządzanie katalogiem produktów, tworzenie stron produktów, obsługę koszyka zakupowego, integrację z różnymi bramkami płatności, a także śledzenie zamówień i zarządzanie zapasami. Klienci mogą tworzyć konta, śledzić swoje zamówienia i korzystać z różnych opcji płatności. "E-CommercePro" zapewnia również narzędzia do analizy danych i monitorowania wydajności sklepu.',
    },
    {
      name: 'Aplikacja do analizy danych finansowych "FinAnalyze"',
      description: '"FinAnalyze" to zaawansowana aplikacja desktopowa, stworzona z myślą o analitykach finansowych i osobach zajmujących się inwestycjami. Aplikacja umożliwia importowanie danych finansowych z różnych źródeł, takich jak giełdowe notowania, bilanse spółek czy kursy walut. Następnie użytkownicy mogą tworzyć różnorodne wykresy, raporty i analizy, które pomagają w podejmowaniu decyzji inwestycyjnych. "FinAnalyze" oferuje również zaawansowane narzędzia do prognozowania trendów ekonomicznych i ryzyka inwestycyjnego.',
    },
    {
      name: 'Gra platformowa "PixelQuest"',
      description: '"PixelQuest" to klasyczna gra platformowa inspirowana estetyką retro gier z lat 80. i 90. Gracz wciela się w postać bohatera, który musi przejść przez różnorodne poziomy pełne przeszkód, pułapek i wrogów. Celem gry jest zdobywanie punktów, zbieranie nagród i pokonywanie bossów. "PixelQuest" oferuje rozbudowany świat gry, wiele poziomów trudności i możliwość zdobywania osiągnięć. To projekt programistyczny, który łączy w sobie umiejętności programowania gier, projektowania graficznego i rozwoju interakcji użytkownika.',
    },
  ]);
});

app.post('/api/contact', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send({
    message: 'Pomyślnie wysłano wiadomość',
  });
});

app.get('/api/*', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.sendStatus(404)
});

const server = http.createServer(app);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`API Server listening on http://localhost:${port}`);
});
