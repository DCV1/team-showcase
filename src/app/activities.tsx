"use client";

import { Typography } from "@material-tailwind/react";
import BookCard from "@/components/card"

const OTHER_BOOKS = [
  {
    img: `/image/display/2.jpeg`,
    category: "아트랩 사업부 전시",
    title: "AI Video",
    desc: "다양한 화풍과 카메라 구도, 오디오 리엑티브 AI 뮤직비디오",
  },
  {
    img: `/image/display/1.jpeg`,
    category: "아트랩 사업부 전시",
    title: "착시그림",
    desc: "기존의 명화의 색채를 유지하여 사회적인 의미를 담은 착시이미지",
  },
  {
    img: `/image/display/3.jpeg`,
    category: "아트랩 사업부 전시",
    title: "체험부스",
    desc: "원하는 음악과 이미지를 넣고 오디오 반응에 뛰어난 나만의 뮤직비디오 제작하기",
  },
  {
    img: `/image/display/4.jpg`,
    category: "모두콘 2023 AI Conference",
    title: "DCV LAB 부스",
    desc: "AI 뮤직비디오 데모체험과 연구 소개",
  },
];


export function OtherBookOffers() {
  return (
    <section className="px-8 pt-28">
      <div className="container mx-auto mb-10">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-2"
          placeholder="title"
          onResize={() => { <></> }}
          onResizeCapture={() => { <></> }}
        >
          Activities
        </Typography>
        <Typography
          variant="lead"
          className="w-full max-w-lg !text-gray-500"
          placeholder="explanation"
          onResize={() => { <></> }}
          onResizeCapture={() => { <></> }}
        >
          인공지능의 가능성을 공유하고 다양한 전시와 프로젝트를 통해 생성형 AI에 대한
          크리에이터들에게 이해와 활용을 돕고자 합니다.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {OTHER_BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherBookOffers;
