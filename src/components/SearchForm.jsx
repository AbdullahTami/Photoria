import { FaSearch } from "react-icons/fa";
import { useAppContext } from "./AppContext";
import { useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");
  const { setSearchQuery } = useAppContext();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setSearchQuery(query);
  }
  return (
    <div className="mt-20">
      <h1 className="mb-10 text-5xl font-bold uppercase tracking-wider ">
        Photoria
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid w-[600px] grid-cols-[1fr_auto]"
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
          type="text"
          name="search"
          className="h-10 rounded-sm border border-slate-200  px-4 py-1 text-sm placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-slate-200"
        />
        <button
          type="submit"
          className="rounded-sm bg-slate-600 px-3 text-slate-100 transition-all duration-300 hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-violet-200 active:bg-slate-800"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
