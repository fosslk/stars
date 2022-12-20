import Head from "next/head";
import StarItem from "../components/star-item";
import { StarItem as ItemType, StatType } from "../types/star-item";
import stats from "../data/data.json";

export default function Home() {

  const key = new Date().getFullYear().toString();
  const data = (stats as StatType)[key];
  const items = data as ItemType[];

  return (
    <>
      <Head>
        <title>FOSSLK - Stars</title>
        <meta
          name="description"
          content="Stars program by FOSSLK for campus clubs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 xl:gap-5 px-10">
          {items.map((item) => (
            <StarItem key={item.key} star={item} />
          ))}
        </div>
      </main>
    </>
  );
}
