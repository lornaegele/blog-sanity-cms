import { PhotoPreview } from "@/app/components";
import { PhotoType } from "@/app/lib/interfaces";
import { fetchSanityData } from "@/app/lib/sanity";
import { Modal } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo gallery of my latest work",
  description: `Embark on a journey of discovery through captivating photography and profound philosophy.
    Delve into hidden wonders, ponder life's mysteries, and experience the essence of our world 
    in every pixel.`,
};

export const revalidate = 60;

const PhotographyPage = async () => {
  const photoQuery = `*[_type == "photo"]`;

  const photoData = (await fetchSanityData(photoQuery)) as PhotoType[];
  return (
    <div className="flex flex-col p-0 md:px-4">
      <div className="flex flex-wrap gap-4">
        {photoData.map((photo: PhotoType) => (
          <PhotoPreview photo={photo} key={photo._id} />
        ))}
      </div>
      <Modal>
        <div>
          <p className="font-bold">Welcome!</p>
          <p className="py-2">
            You can click on every picuture you like, to see more information
            about my thoughts and the story behind the photograph.
          </p>
          <p>I hope you enjoy!</p>
        </div>
      </Modal>
    </div>
  );
};

export default PhotographyPage;
