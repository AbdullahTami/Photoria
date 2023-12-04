import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { IoLocationOutline } from "react-icons/io5";
import LeftGrid from "../components/LeftGrid";
import { IoMdArrowBack } from "react-icons/io";
import BottomSection from "../components/BottomSection";
import PublisherContacts from "../components/PublisherContacts";
import { SINGLE_PHOTO_URL as URL } from "../constants";

function Image() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const {
    data: photo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["single-image", imageId],
    queryFn: async () => {
      const result = await axios.get(
        `${URL}/${imageId}?client_id=${import.meta.env.VITE_ACCESS_KEY}`,
      );
      return result.data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <Error resourceName="the image" />;

  return (
    <div className="mt-3 md:mt-10">
      <span
        className="mb-3 flex w-fit cursor-pointer items-center gap-2 px-2 text-slate-500 duration-300 hover:text-slate-700 hover:underline md:mb-5 md:px-5"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Go back
      </span>
      <div className="flex flex-col justify-center gap-10">
        <div className="self-center md:w-[550px]">
          <img
            className="block h-[300px] w-full object-cover px-3 md:h-[510px]"
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        </div>
        <div className="px-5">
          <div className="flex grid-cols-3 flex-col items-center gap-6 md:grid md:gap-4">
            <LeftGrid photo={photo} />
            <div className="flex items-center gap-2 justify-self-center text-slate-500">
              <IoLocationOutline />
              <span>{photo?.location?.name || "Planet earth"}</span>
            </div>

            <PublisherContacts photo={photo} />
          </div>
        </div>
        <BottomSection photo={photo} />
      </div>
    </div>
  );
}

export default Image;
