"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "DCV LAB은 어떤 팀인가요?",
    desc: "DCV LAB은 AI 분야를 연구하고 지원하는 모두의 연구소에 소속된 LAB으로 Computer Vision 연구와 GenAI 서비스를 구현하는 연구소입니다.",
  },
  {
    title:
      "팀 모임은 언제 진행하나요?",
    desc: "매주 1회 월요일 모두의 연구소 강남캠퍼스에서 오프라인 모임이 있습니다. 프로젝트 의뢰가 들어오면 최대 2회까지 온라인 회의를 합니다.",
  },
  {
    title: "팀원 모집은 언제 하나요?",
    desc: "매년 1회 서류 지원과 대면 인터뷰를 통해 팀원 모집을 하며, 인원이 필요할 경우 최대 1회까지 추가 모집을 합니다.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4" placeholder="Title">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
            placeholder="Subtitle"
          >
            인공지능과 인간이 협력하여 더 나은 미래를 만들어가는 비전을 가지고 있으며, 이를 통해 창의력과 혁신을 강화하려 합니다.
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              placeholder="Q&A"
            >
              <AccordionHeader className="text-left text-gray-900" placeholder="Q&A">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                  placeholder="Q&A"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
