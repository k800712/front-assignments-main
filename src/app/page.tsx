import Header from "@/components/header";
import Link from "next/link";

const assignments = [
    {
        order: 1,
        path: "product-list",
        title: "상품 목록 만들기",
        description: "object 형식의 데이터를 이용해서 상품 목록 만들기",
    },
    {
        order: 2,
        path: "profile-card",
        title: "프로필 카드 만들기",
        description: "object 형식의 데이터를 만들고 그것을 이용해서 프로필 카드 만들기",
    },
];

export default function Home() {
    return (
        <div className="relative h-full w-full flex flex-col overflow-hidden bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
            {/* 배경 장식 요소 */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                {/* 둥근 파스텔 장식 요소 */}
                <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-pink-200 opacity-50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-blue-200 opacity-40 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-purple-200 opacity-40 rounded-full blur-2xl"></div>
                {/* 작은 이미지 삽입 */}
                <img
                    src="/small-decor-image.svg" // URL 경로를 실제 이미지로 변경해야 합니다.
                    alt="Decorative"
                    className="absolute top-5 right-5 w-20 h-20 opacity-70"
                />
                <img
                    src="/small-heart-icon.svg" // URL 경로를 실제 이미지로 변경해야 합니다.
                    alt="Heart Icon"
                    className="absolute bottom-10 left-10 w-24 h-24 opacity-60"
                />
            </div>

            {/* 헤더 */}
            <Header title={"Frontend 과제"} />

            {/* 메인 컨텐츠 */}
            <main className="relative z-10 w-full h-full flex flex-col overflow-y-auto py-8 px-5 gap-6">
                {assignments.map((assignment, index) => (
                    <Assignment
                        key={index}
                        title={`${assignment.order}. ${assignment.title}`}
                        href={`/assignments/${assignment.path}`}
                        description={assignment.description}
                    />
                ))}
            </main>
        </div>
    );
}

function Assignment({
                        title,
                        href,
                        description,
                    }: {
    title: string;
    href: string;
    description?: string;
}) {
    return (
        <Link
            href={href}
            className="bg-white border shadow-md rounded-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
        >
            {/* 과제 제목 */}
            <div className="font-bold text-lg mb-3 text-purple-600">{title}</div>
            {/* 과제 설명 */}
            {description && (
                <div className="text-sm text-gray-500 leading-6">{description}</div>
            )}
        </Link>
    );
}