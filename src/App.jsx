import Card from "./components/Card";

function App() {
  const memberInfo = [
    { name: "Peter Choi", pic: "peter.jpg", position: "President" },
    { name: "Emily Chung", pic: "emily.jpg", position: "Vice President" },
    { name: "Michael Hall", pic: "michael.jpg", position: "UI Designer" },
    { name: "Julia Min", pic: "julia.jpg", position: "Frontend Dev" },
    { name: "David Yoon", pic: "david.jpg", position: "Backend Dev" },
    { name: "Emma Smith", pic: "emma.jpg", position: "Project Manager" },
  ];

  return (
    <main className="w-full min-h-screen  bg-black/5 py-[10vh] px-[10vw]">
      <h1 className="w-full mb-20 text-6xl font-thin text-center">Members</h1>

      <section>
        {memberInfo.map((data, idx) => (
          <Card data={data} key={idx} />
        ))}
      </section>
    </main>
  );
}

export default App;
