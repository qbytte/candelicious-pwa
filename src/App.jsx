import { Layout } from "./components";
import { Home, Characters, About, Download } from "./pages";

function App() {
  return (
    <Layout>
      <Home />
      <Characters />
      <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:gap-0 lg:mx-24">
        <About />
        <Download />
      </div>
    </Layout>
  );
}

export default App;
