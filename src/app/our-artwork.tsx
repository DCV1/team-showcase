"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Videoclip from "@/components/videoclip"


export function OurArtwork() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
          placeholder="category"
          onResize={() => { <></> }}
          onResizeCapture={() => { <></> }}
        >
          AI Video
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-2"
          placeholder="title"
          onResize={() => { <></> }}
          onResizeCapture={() => { <></> }}
        >
          Exhibitions
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
          placeholder="explanation"
          onResize={() => { <></> }}
          onResizeCapture={() => { <></> }}
        >
          중세부터 현대에 이르기까지 각 시대별 화풍과 음악에 해당하는 작품과
          K-POP을 테마로하는 독특하고 싱그러운 뮤직비디오,
          다양한 시대의 건축 양식을 신나는 EDM 음악에 반영하여 생성한 영상을 차례대로 선보입니다.
        </Typography>
        <Videoclip />

      </div>
    </section>
  );
}

export default OurArtwork;
