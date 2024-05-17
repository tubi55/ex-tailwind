import Card from "./components/Card";

function App() {
  return (
    <main className="w-full min-h-screen  bg-black/5 py-[10vh] px-[10vw]">
      <h1 className="w-full mb-20 text-6xl font-thin text-center">Members</h1>

      <section>
        <Card />
      </section>
    </main>
  );
}

export default App;
