import React from "react";
import Image from "next/image";
import { PhotoType } from "../lib/interfaces";
import Link from "next/link";
import urlFor from "../lib/sanityImageUrl";

interface PhotoPreviewProps {
  photo: PhotoType;
}

const PhotoPreview = ({ photo }: PhotoPreviewProps) => {
  return (
    <div key={photo._id} className="w-full sm:w-[48%] lg:w-[49%]">
      <Link href={`/photo/${photo.slug.current}`} prefetch>
        <article className="flex flex-col items-start justify-center">
          <Image
            className="h-full w-full object-cover"
            src={urlFor(photo.image).url()}
            width={640}
            height={480}
            alt={photo.title}
          />
        </article>
      </Link>
    </div>
  );
};

export default PhotoPreview;
