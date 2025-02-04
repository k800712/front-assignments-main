"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function Assignments3() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("text-gray-700"); // 기본 색상

    const increment = () => {
        triggerColorChange("up");
        setCount(count + 1); // +1 증가
    };

    const decrement = () => {
        if (count > 0) {
            triggerColorChange("down");
            setCount(count - 1); // -1 감소
        }
    };

    const reset = () => {
        setColor("text-gray-700");
        setCount(0); // 리셋
    };

    // 색상 변화를 트리거
    const triggerColorChange = (direction: "up" | "down") => {
        if (direction === "up") {
            setColor("text-green-500"); // 증가 시 녹색
        } else if (direction === "down") {
            setColor("text-red-500"); // 감소 시 빨간색
        }

        // 500ms 후 기본 색상으로 복귀
        setTimeout(() => setColor("text-gray-700"), 500);
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* 상단 Header */}
            <Header title={"counter 만들기"} hasBack={true} />

            {/* 현재 카운트 텍스트 */}
            <div className="flex justify-center items-center mt-6">
                <div className="text-2xl md:text-4xl font-bold text-gray-700">
                    현재 카운트
                </div>
            </div>

            {/* 카운트 숫자 */}
            <div className="flex-1 flex items-center justify-center">
                <div className={`text-6xl md:text-8xl lg:text-9xl font-extrabold transition-colors duration-500 ${color}`}>
                    {count}
                </div>
            </div>

            {/* 증가/감소/리셋 버튼 */}
            <div className="flex justify-center gap-4 mb-6">
                {/* +1 증가 */}
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    + 1 증가
                </button>
                {/* -1 감소 */}
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    - 1 감소
                </button>
                {/* 리셋 */}
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                >
                    리셋
                </button>
            </div>
        </div>
    );
}