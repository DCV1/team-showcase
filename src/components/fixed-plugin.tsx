"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

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
          alt="Material Tailwind"
          src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc09f8228-29c7-4dcb-8ca3-1de7d3988fab%2Fbf7b4053-1512-4087-a84a-649fb8e348fb%2FUntitled.png?table=block&id=66bfa352-4b25-47b5-af7a-eece277584a7&spaceId=c09f8228-29c7-4dcb-8ca3-1de7d3988fab&width=250&userId=0ebd4577-3d60-4ce3-a68b-3d969d022763&cache=v2"
        />{" "}
        DCV LAB 노션 페이지
      </Button>
    </a>
  );
}
