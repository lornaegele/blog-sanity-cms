import VideoTeaser from "../../components/VideoTeaser";
import { videoThumbnails } from "../../lib/constants/imagePaths";

export default function page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 py-4 pt-0 ">
      {videoThumbnails.map((video) => (
        <VideoTeaser key={video.path} video={video} />
      ))}
    </div>
  );
}
