import { HomeType } from "../lib/interfaces";
import { fetchSanityData } from "../lib/sanity";

const Title = async () => {
  const homeQuery = `*[_type == "home"][0]`;
  const homeData = (await fetchSanityData(homeQuery)) as HomeType;
  return <>{homeData.title}</>;
};

export default Title;
