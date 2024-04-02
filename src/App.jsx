import { Layout } from "./components";
import { Home, Characters, About, Download } from "./pages";

function App() {
  return (
    <Layout>
      <Home />
      <Characters />
      <About />
      <Download />
    </Layout>
  );
}

export default App;
