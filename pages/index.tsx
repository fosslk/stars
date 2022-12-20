import { NextApiRequest } from "next";
import Head from "next/head";
import StarItem from "../components/star-item";
import { StarItem as ItemType } from "../types/star-item";

export default function Home({ items }: { items: ItemType[] }) {
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

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  let items: ItemType[] = [];
  
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/stats`);
    const { data } = await res.json();
    items = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      items,
    },
  };
}
