"use client";

import { Typography, Carousel } from "@material-tailwind/react";

const contents = [
  {
    content: "DCV LAB 리더로서 8개월 간의 장기 프로젝트를 이끌며, 연구 방향성 설정과 세부 작업 계획 수립의 중요성을 깊이 깨달았습니다. 팀원들이 지치지 않고 지속적으로 연구에 몰두할 수 있도록 동기부여하는 것이 리더의 핵심 역량임을 배웠습니다.",
    name: "조현욱",
  },
  {
    content: "모두의 연구소를 통해 전시를 준비하며 다양한 작품을 계속해서 만들어갔습니다. 내가 의도하고 싶은 화풍으로 영상 생성하려면 프롬프트를 세심하게 다뤄야 한다는 것을 느꼈는데, 각자 생성한 영상에 대해 피드백을 하며, 프롬프트와 Stable diffusion의 매개변수 튜닝에서 몰랐던 부분을 알아가며 협업의 즐거움을 배웠습니다.",
    name: "박지현",
  },
  {
    content: "예술 분야는 거의 접해본 적이 없는 공학도인 제가 직접 만든 작품으로 전시회를 열었다는 사실이 너무나 신기하고 뜻깊은 경험이었습니다. 전시회를 준비하는 내내 저처럼 예술과 거리가 먼 사람들도 작품을 만들 수 있을 정도로 기술이 발전했다는 사실에 크게 놀랐고 이 기술이 일반인 뿐만 아니라 예술가들에게도 유용하게 활용될 수 있으면 더 좋겠다는 생각이 들었습니다.",
    name: "명지윤",
  },
  {
    content: "stable diffusion webui를 사용해서 전시까지 해볼 수 있는 경험이 너무 좋았습니다. 나중에 생성 AI로 이미지를 만들 때에도 도움이 많이 될 것 같습니다. 그리고 unimaker 제작을 위해서 fastapi 공부도 할 수 있었는데, 이번 경험을 통해서 fastapi에 대해서 잘 알게 되었으며, 이번 경험을 계기로 백엔드 엔지니어링에 관심을 가질 수 있었습니다.",
    name: "문광수",
  },
  {
    content: "프롬프트를 작성하는 것으로 영상까지 출력하여 작품 전시를 하게 되었다. 작가가 되는 일은 전문적인 사람들만이 할 수 있는 일이라 여겼지만, 프롬프트를 활용하여 내가 원하는 바 그대로 만들 수 있음을 경험할 수 있었습니다.",
    name: "박민지",
  },
  {
    content: "Stable diffusion deforum을 사용하면서 stable diffusion에 대해 전반적으로 이해하고 예술 작품까지 생성 해볼 수 있었다. 원하는 작품을 만들기 위해 stable diffusion의 파라미터와 프롬프트 엔지리어닝을 연구할 수 있었으며 이를 기반으로 예술 작품을 생성하고 전시까지 하게 되어 좋은 기회였다.",
    name: "변해린",
  },
  {
    content: "작년에 diffusion 연구를 하면서 생성형 모델로 서비스화해보고 싶었습니다. AI 모델을 바꿔가며 성능을 높였던 연구와는 달리 작품을 만들때는 AI 모델을 바꾸는 것보다 적재적소에 원하는 작품의 느낌을 표현하기 위해 parameter tuning에 신경을 써야한다는 것을 배웠습니다. Parameter tuning부터 prompt engineering까지 생성형 AI의 A부터 Z까지 경험할 수 있었던 값진 시간이였습니다.",
    name: "이선민",
  }
];


export function CarouselFeatures() {
  return (
    <div className="px-8 py-56">
      <section className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-3 lg:px-20">

        <Carousel
          className="rounded-xl"
          transition={{ duration: 1 }}
          // nextArrow={() => <></>}
          // prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-4 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          placeholder="reviews"
        >
          {contents.map((content, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-20 py-20 md:grid md:grid-cols-5 md:gap-14 md:py-15"
            >
              <div className="col-span-5 flex flex-col items-start justify-center">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal"
                  placeholder="프로젝트 설명"
                >
                  {content.content}
                </Typography>
                <div className="flex items-center gap-2">

                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium uppercase"
                    placeholder="팀원 이름"
                  >
                    {content.name}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

      </section>
    </div>
  );
}

export default CarouselFeatures;
