import NavBar from "./components/navbar";
import PageFooter from "./components/pageFooter";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col h-screen w-screen">
        <NavBar />
        <div className="h-32">
          Main content
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
