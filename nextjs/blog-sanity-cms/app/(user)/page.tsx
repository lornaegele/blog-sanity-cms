import { fetchSanityData } from "../lib/sanity";
import Image from "next/image";
import { HomeType } from "../lib/interfaces";
import urlFor from "../lib/sanityImageUrl";
import Link from "next/link";

export const revalidate = 60;

const Home = async () => {
  const homeQuery = `*[_type == "home"][0]`;
  const homeData = (await fetchSanityData(homeQuery)) as HomeType;

  return (
    <div className=" flex flex-col">
      <div className="top-0 z-[1] hidden md:block">
        <Image
          className=" object-cover"
          src={urlFor(homeData.heroDesktop).url()}
          fill
          alt={homeData.heroDesktop.alt}
        />
      </div>
      <div className="absolute left-0 top-0 z-10 h-screen w-screen bg-black/40"></div>
      <div className="-mt-[70px] block md:hidden">
        <Image
          className="z-[1] object-cover"
          src={urlFor(homeData.heroMobile).url()}
          fill
          alt={homeData.heroDesktop.alt}
        />
      </div>
      <div className="absolute bottom-1/4 left-0 z-10 w-screen text-white md:bottom-1/4">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="max-w-2/3 flex flex-col gap-4  p-4">
            <h1 className="whitespace-pre-line break-words text-[2.5rem] font-semibold leading-10 md:text-4xl">
              {homeData.headline}
            </h1>
            <h1 className="pr-4 text-xl md:text-2xl">{homeData.subheadline}</h1>
            <div className="flex">
              <Link
                href="/gallery"
                className="transtion-all border-[1.5px] border-white bg-black/20 p-2 text-lg duration-300 hover:bg-white hover:text-black"
              >
                My latest photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
