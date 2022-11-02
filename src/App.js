import { Header } from "./components/header/Header";
import { Section } from "./components/section/Section";
import "./App.css";

const sectionsName = [
  `To do (A ser feito)`,
  `Doing(Em progresso)`,
  `Done(Terminado)`,
];
const endpointsApi = [`todo`, `doing`, `done`];

function App() {
  return (
    <div className="App">
      <Header />
      <Section name={sectionsName[0]} endpoint={endpointsApi[0]} />
      <Section name={sectionsName[1]} endpoint={endpointsApi[1]} />
      <Section name={sectionsName[2]} endpoint={endpointsApi[2]} />
    </div>
  );
}

export default App;
