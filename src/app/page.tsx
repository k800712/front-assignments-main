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
    {
        order: 3,
        path: "counter",
        title: "counter 만들기",
        description: "object 형식의 데이터를 만들고 그것을 이용해서 counter 카드 만들기",
    },
];

export default function Home() {
    return (
        <div className="relative h-full w-full flex flex-col overflow-hidden bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
            {/* 배경 장식 요소 */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-pink-200 opacity-50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-blue-200 opacity-40 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-purple-200 opacity-40 rounded-full blur-2xl"></div>
            </div>

            {/* 헤더 */}
            <Header title={"Frontend 과제"} />

            {/* 메인 컨텐츠 */}
            <main className="relative z-10 w-full flex-1 overflow-y-auto py-8 px-5">
                <div className="space-y-6">
                    {assignments.map((assignment, index) => (
                        <Assignment
                            key={index}
                            title={`${assignment.order}. ${assignment.title}`}
                            href={`/assignments/${assignment.path}`}
                            description={assignment.description}
                        />
                    ))}
                </div>
            </main>

            {/* 회사 정보 섹션 */}
            <div className="relative z-10 w-full bg-white/90 backdrop-blur-sm shadow-lg mt-auto">
                <div className="max-w-4xl mx-auto p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-gray-800">고객센터</h2>
                        <Link
                            href="/chat"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center gap-2"
                        >
                            <span>1:1 채팅 문의하기</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>전화번호: 02-501-9396</p>
                        <p>이메일: help@fastcampus.co.kr</p>
                        <p>주중 10시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p>호스트 서비스 제공: (주) 패스트캠퍼스</p>
                            <p>통신판매업 신고번호: 제 2017-서울강남-01977호</p>
                            <p>학원설립 운영등록번호: 제12484호(강남)</p>
                            <p>원격평생교육원: 제 572호</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Assignment({ title, href, description }: {
    title: string;
    href: string;
    description?: string;
}) {
    return (
        <Link
            href={href}
            className="bg-white border shadow-md rounded-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
        >
            <div className="font-bold text-lg mb-3 text-purple-600">{title}</div>
            {description && (
                <div className="text-sm text-gray-500 leading-6">{description}</div>
            )}
        </Link>
    );
}
