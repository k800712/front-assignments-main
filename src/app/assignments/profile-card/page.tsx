"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // 좋아요 하트 아이콘

interface Profile {
    imageSrc: string;
    name: string;
    age: number;
    nationality: string;
    height: number;
    weight: number;
    job: string;
    famousLines: string[];
}

// 프로필 데이터
const profiles: Profile[] = [
    {
        imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "홍길동",
        age: 30,
        nationality: "대한민국",
        height: 180,
        weight: 75,
        job: "소프트웨어 개발자",
        famousLines: ["끊임없이 배우자.", "도전은 나를 성장시킨다.", "최선을 다하자."],
    },
    {
        imageSrc: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "김유정",
        age: 27,
        nationality: "대한민국",
        height: 165,
        weight: 52,
        job: "UI/UX 디자이너",
        famousLines: ["디테일이 마무리를 만든다.", "끊임없이 창조하자.", "창의력의 끝은 없다."],
    },
    {
        imageSrc: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "John Smith",
        age: 35,
        nationality: "미국",
        height: 178,
        weight: 80,
        job: "사업가",
        famousLines: ["생각보다 실천이 중요하다.", "도전하지 않으면 변하지 않는다.", "시간은 금이다."],
    },
    {
        imageSrc: "https://randomuser.me/api/portraits/women/30.jpg",
        name: "Jane Doe",
        age: 29,
        nationality: "영국",
        height: 168,
        weight: 58,
        job: "마케팅 전문가",
        famousLines: ["소통이 곧 성공이다.", "모두의 의견을 존중하자."],
    },
];

export default function Assignment2() {
    return (
        <>
            <Header title={"프로필 카드 만들기"} hasBack={true} />
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-5 py-5 px-5 bg-gray-50">
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </>
    );
}

interface ProfileCardProps {
    profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
    const { imageSrc, name, age, nationality, height, weight, job, famousLines } = profile;

    // 좋아요 상태 관리
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // 좋아요 버튼 클릭 핸들러
    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="p-5 bg-white border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* 이미지 */}
            <div className="w-full flex justify-center pb-5">
                <Image
                    className="rounded-full border-4 border-gray-200"
                    src={imageSrc}
                    width={120}
                    height={120}
                    alt={name}
                />
            </div>
            {/* 정보 */}
            <div className="w-full h-full flex flex-col gap-4 text-center">
                <div>
                    <p className="text-xs text-stone-400">이름</p>
                    <div className="text-lg font-semibold">{name}</div>
                </div>
                <div>
                    <p className="text-xs text-stone-400">나이</p>
                    <div>{age}세</div>
                </div>
                <div>
                    <p className="text-xs text-stone-400">국적</p>
                    <div>{nationality}</div>
                </div>
                <div>
                    <p className="text-xs text-stone-400">키/몸무게</p>
                    <div>
                        {height}cm / {weight}kg
                    </div>
                </div>
                <div>
                    <p className="text-xs text-stone-400">직업</p>
                    <div>{job}</div>
                </div>
                <div>
                    <p className="text-xs text-stone-400">좌우명</p>
                    <div className="flex flex-col items-center gap-1">
                        {famousLines.map((line, index) => (
                            <div
                                key={`${name}-famous-line-${index}`}
                                className="italic text-gray-600"
                            >
                                &quot;{line}&quot;
                            </div>
                        ))}
                    </div>
                </div>

                {/* 좋아요 버튼 */}
                <div className="flex justify-center items-center flex-col gap-2 mt-4">
                    <button
                        className="relative flex items-center justify-center text-red-500 text-3xl transition-transform duration-300 focus:outline-none"
                        onClick={handleLikeClick}
                    >
                        {/* 좋아요 하트 아이콘 */}
                        {isLiked ? (
                            <AiFillHeart className="animate-ping-once scale-125 transition-transform duration-300" />
                        ) : (
                            <AiOutlineHeart className="hover:scale-110" />
                        )}

                        {/* 하트 이펙트 */}
                        <span
                            className={`absolute w-6 h-6 bg-pink-400 rounded-full opacity-50 animate-pop ${
                                isLiked ? "block" : "hidden"
                            }`}
                        />
                    </button>
                    {/* 좋아요 횟수 */}
                    <p className="text-sm text-gray-600">
                        좋아요: {likes.toLocaleString("ko-KR")}회
                    </p>
                </div>
            </div>
        </div>
    );
}