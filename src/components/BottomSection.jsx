import { AiOutlineCalendar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { formatDistance, parseISO } from "date-fns";

const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

function BottomSection({ photo }) {
  return (
    <div className="my-5 flex flex-col gap-3 px-5 text-slate-500">
      <div className="flex items-center gap-2">
        <span>
          <AiOutlineCalendar />
        </span>
        Published {formatDistanceFromNow(photo.created_at)}
      </div>
      <div className="flex items-center gap-2 uppercase">
        <span>
          <IoCameraOutline />
        </span>
        {photo.exif.name}
      </div>
      <div className="flex items-center gap-2">
        <span>
          <CiUser />
        </span>
        Picture was taken by
        {photo.user.portfolio_url ? (
          <a
            className="duration-300 hover:text-slate-700 hover:underline"
            href={photo.user.portfolio_url}
          >
            {photo.user.name}
          </a>
        ) : (
          photo.user.name
        )}
      </div>
    </div>
  );
}

export default BottomSection;
