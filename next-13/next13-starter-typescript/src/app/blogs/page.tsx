"use client";
import x from "@/styles/app.module.css";

import Tables from "@/components/table/page";
import useSWR from "swr";
function Blogs() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div className={x.main}>
      <Tables blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
}

export default Blogs;
