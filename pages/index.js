import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { format, parseISO } from "date-fns";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  const { data } = useSWR("/api/tweets", fetcher);

  return <p>lorem ipsum</p>;
}

Home.headerTitle = "Latest Tweets";
Home.headerBorder = true;

export default Home;
