"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import notionImage from 'public/image/dcv.png'

export function FixedPlugin() {
  return (
    <a href="https://modulabs.notion.site/Deep-Computer-Vision-LAB-66bfa3524b2547b5af7aeece277584a7?pvs=4" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder='explanation'
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="DCV Notion"
          src={notionImage}
        />{" "}
        DCV LAB 노션 페이지
      </Button>
    </a>
  );
}