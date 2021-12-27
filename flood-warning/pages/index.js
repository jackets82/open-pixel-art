import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { list } from "postcss";
import { useState } from "react";
import Card from "../components/Card";
import { floodData } from "../lib/getData";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const data = await floodData();
  return {
    props: {
      data,
    },
    revalidate: 500,
  };
}

export default function Home({ data }) {
  console.log(data.items);
  return (
    <div className="bg-violet-400 flex flex-col items-center justify-center text-center p-5">
      <h1 className=" text-5xl font-bold py-5 underline">Flood Warnings</h1>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {data.items.map((warning) => (
          <Card
            background={
              warning.severityLevel === 1
                ? "bg-green-500"
                : warning.severityLevel === 2
                ? "bg-yellow-500"
                : warning.severityLevel === 3
                ? "bg-orange-500"
                : "bg-red-500"
            }
            location={warning.eaAreaName}
            severity={warning.severityLevel}
          >
            {warning.severityLevel}
          </Card>
        ))}

        {/* {data.items.map((warning) => {
          const [level, setLevel] = useState('bg-green-400');
          if (warning.severityLevel === 3){
setLevel('bg-red-400')}
<div className={`${level} `}></div>
          }
        })} */}
      </div>
    </div>
  );
}
