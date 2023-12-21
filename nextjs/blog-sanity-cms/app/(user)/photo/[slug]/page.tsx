import { client, fetchSanityData } from "@/app/lib/sanity";
import { PhotoType } from "@/app/lib/interfaces";
import Image from "next/image";
import urlFor from "@/app/lib/sanityImageUrl";
import { ContentLoader, Footer } from "@/app/components";
import { groq } from "next-sanity";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const photoQuery = groq`*[_type == 'photo']{slug}`;
  const slugs: PhotoType[] = await fetchSanityData(photoQuery);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const SlugPage = async ({ params: { slug } }: SlugPageProps) => {
  const query = groq`*[_type == 'photo' && slug.current == $slug][0]`;

  const data: PhotoType = await client.fetch(query, { slug });

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex flex-col items-end justify-end">
          <Image
            className="max-h-full object-contain object-center md:max-h-[100svh]"
            src={urlFor(data.image).url()}
            width={1000}
            height={750}
            alt={data.title}
          />
          <div className="flex w-full justify-end pt-1">
            {/* <button className="underline">View Fullscreen</button> */}
            <div>{data.date}</div>
          </div>
        </div>
        <div className="py-4">
          <h1 className="pb-4 text-xl font-semibold">{data.title}</h1>
          {data.shortDescription && (
            <div className="pb-4">{data.shortDescription}</div>
          )}
          <ContentLoader content={data.description} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SlugPage;
