import Image from "next/image";
import styles from "../../src/app/page.module.css";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/quan.module.css";
import Tables from "@/components/table/page";
import { log } from "console";
import { useEffect } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Bla Bla",
};

export default function Home() {
  return (
    <div className={x.main}>
      <ul className={styles.oke}>
        <Link href={"/facebook"} className={x.red}>
          <li className={y.border}>Facebook</li>
        </Link>
        <Link href={"/tiktok"}>
          <li>tiktok</li>
        </Link>
        <Link href={"/youtube"}>
          <li>Youtube</li>
        </Link>
      </ul>
    </div>
  );
}
