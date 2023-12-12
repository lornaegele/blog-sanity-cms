import Image from "next/image";
import { PortableText } from "@portabletext/react";
import urlFor from "../lib/sanityImageUrl";

interface ContentLoaderProps {
  content: any;
}

const ContentLoader = ({ content }: ContentLoaderProps) => {
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={1050}
          height={800}
        />
      ),
    },
  };

  return <PortableText value={content} components={PortableTextComponent} />;
};

export default ContentLoader;
