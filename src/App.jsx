import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import { AppContextProvider } from "./components/AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="image/:imageId" element={<Image />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
