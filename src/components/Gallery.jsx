import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "./AppContext";
import axios from "axios";
import Loader from "./Loader";
import Empty from "./Empty";
import Error from "./Error";
import ImageItem from "./ImageItem";
import { PHOTO_LIST_URL as URL } from "../constants";

function Gallery() {
  const { searchQuery } = useAppContext();
  const {
    data: images,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["images", searchQuery],
    queryFn: async () => {
      const data = await axios.get(
        `${URL}?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&query=${searchQuery}`,
      );

      return data.data.results;
    },
  });
  console.log(images);

  if (isLoading) return <Loader />;

  if (!images?.length) return <Empty resourceName="image" />;

  if (isError) return <Error resourceName="images" />;

  return (
    <div className="grid grid-cols-4 gap-6">
      {images.map((image, i) => (
        <ImageItem key={image.id} image={image} index={i} />
      ))}
    </div>
  );
}

export default Gallery;
