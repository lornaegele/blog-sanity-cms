import { ContentLoader, Footer } from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import { AboutType } from "@/app/lib/interfaces";
import { fetchSanityData } from "@/app/lib/sanity";
import React from "react";
import urlFor from "@/app/lib/sanityImageUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me | Lorenz Nägele",
  description: `Embark on a journey of discovery through captivating photography and profound philosophy.
    Delve into hidden wonders, ponder life's mysteries, and experience the essence of our world 
    in every pixel.`,
};

export const revalidate = 60;

const AboutPage = async () => {
  const query = `*[_type == "about"][0]`;

  const data = (await fetchSanityData(query)) as AboutType;

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex flex-col items-end justify-end">
          <Image
            className="object-cover object-left lg:object-center"
            src={urlFor(data.portrait).url()}
            width={1000}
            height={750}
            alt={data.portrait.alt}
          />
          <div>{data.portraitDescription}</div>
        </div>
        <div className="py-2 ">{data.bio}</div>
        <div className="py-2 ">
          <ContentLoader content={data.descriptionOne} />
        </div>
        {data.descriptionTwo && (
          <div className="py-2 ">
            <ContentLoader content={data.descriptionTwo} />
          </div>
        )}
        {data.descriptionThree && (
          <div className="py-2 ">
            <ContentLoader content={data.descriptionThree} />
          </div>
        )}
        {data.descriptionFour && (
          <div className="py-2 ">
            <ContentLoader content={data.descriptionFour} />
          </div>
        )}
        {data.descriptionFive && (
          <div className="py-2 ">
            <ContentLoader content={data.descriptionFive} />
          </div>
        )}
        {data.descriptionSix && (
          <div className="py-2 ">
            <ContentLoader content={data.descriptionSix} />
          </div>
        )}
        <div className="flex gap-2 py-2">
          <span>Contact: </span>
          <Link
            href={`mailto:${data.email}`}
            className="dura underline hover:opacity-50"
          >
            {data.email}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
