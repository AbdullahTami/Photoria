import Gallery from "../components/Gallery";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col items-center justify-center gap-20  text-center">
        <SearchForm />
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
