import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaUnsplash } from "react-icons/fa";
import Social from "./Social";

function PublisherContacts({ photo }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {photo.user.twitter_username && (
        <Social
          place={"top-start"}
          content={`Visit ${photo.user.first_name}'s X account `}
          href={`https://twitter.com/${photo.user.twitter_username}`}
        >
          <RiTwitterXLine />
        </Social>
      )}
      {photo.user.instagram_username && (
        <Social
          content={`Have a look at ${photo.user.first_name}'s instagram profile`}
          place={"bottom-start"}
          href={`https://www.instagram.com/${photo.user.instagram_username}`}
        >
          <FaInstagram />
        </Social>
      )}

      <Social
        place={"top-end"}
        content={`See picture on Unsplash website`}
        href={`https://unsplash.com/photos/${photo.id}`}
      >
        <FaUnsplash />
      </Social>
    </div>
  );
}

export default PublisherContacts;
