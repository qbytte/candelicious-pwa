import { Layout } from "./components";
import { Home, Characters, About } from "./pages";

function App() {
  return (
    <Layout>
      <Home />
      <Characters />
      <About />
    </Layout>
  );
}

export default App;
