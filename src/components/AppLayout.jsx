import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
}

export default AppLayout;
