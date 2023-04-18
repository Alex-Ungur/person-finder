"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Liste from "./liste/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Link href={"/liste"}>Liste de personnes</Link> */}
      <Liste />
    </>
  );
}
