import Header from "@/components/header";

interface IProduct {
  imageSrc?: string;
  title: string;
  price: number;
}

export default function Assignment1() {
  const products: IProduct[] = [
    {
      imageSrc:
          "https://gdimg.gmarket.co.kr/2004408943/still/300?ver=1712543662",
      title: "(15%쿠폰)탱글탱글 대추방울토마토 2kg 4번 소과",
      price: 13900,
    },
    {
      imageSrc:
          "https://gdimg.gmarket.co.kr/2443084722/still/300?ver=1685408705",
      title: "(15%쿠폰)과일꾼 고당도 꿀수박 실속형 6-7kg",
      price: 20900,
    },
    {
      imageSrc:
          "https://gdimg.gmarket.co.kr/3522982349/still/300?ver=1707283921",
      title: "[촌아저씨](15%쿠폰)고당도 벌꿀 성주참외 3kg 소과(16-24과)",
      price: 15500,
    },
    {
      imageSrc:
          "https://gdimg.gmarket.co.kr/3133329667/still/300?ver=1694668544",
      title: "[본죽](15%할인)본죽 대용량 냉장 메추리알 장조림 1kg 2팩",
      price: 13980,
    },
    {
      imageSrc:
          "https://gdimg.gmarket.co.kr/701323554/still/300?ver=1717108275",
      title: "[맥심](행사상품)동서 모카골드믹스 230T 2760G",
      price: 28750,
    },
  ];

  return (
      <>
        <Header title={"상품목록 만들기"} hasBack={true} />
        <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5 scrollbar-hide">
          {/* 반응형 Grid Layout */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="rounded-md bg-white border p-3 gap-1 flex flex-col"
                >
                  {/* 상품 이미지 */}
                  <div className="w-full aspect-square rounded-md">
                    {product.imageSrc ? (
                        <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="rounded-md w-full aspect-square"
                        />
                    ) : (
                        <BlankImage />
                    )}
                  </div>
                  {/* 상품 정보 */}
                  <div className="h-12 max-h-12 overflow-hidden">{product.title}</div>
                  <div className="font-bold">{product.price.toLocaleString()}원</div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}

function BlankImage() {
  return (
      <div className="w-full aspect-square rounded-md bg-stone-300 text-white flex justify-center items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
  );
}