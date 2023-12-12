import React from "react";
import { format } from "date-fns";
import { PhotoType } from "@/app/lib/interfaces";

import { ContentLoader } from ".";
interface PhotoProps {
  photo: PhotoType;
}

const Photo = ({ photo }: PhotoProps) => {
  const formattedDate =
    photo && format(new Date(photo._createdAt), "dd MMMM yyyy");
  return (
    <div className="overflow-auto xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pb-6 pt-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <p className="text-base font-medium leading-6 text-primary">
              {formattedDate}
            </p>
          </div>
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
            {photo?.title}
          </h1>
        </div>
      </header>
      <div className="space-y-6 divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="prose prose-lg max-w-none  dark:prose-invert">
            <ContentLoader content={photo?.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
