"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function Assignments3() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("text-gray-700"); // 기본 색상

    // +1 증가
    const increment = () => {
        triggerColorChange("up");
        setCount(count + 1);
    };

    // -1 감소
    const decrement = () => {
        if (count > 0) {
            triggerColorChange("down");
            setCount(count - 1);
        }
    };

    // +10 증가
    const incrementByTen = () => {
        triggerColorChange("up");
        setCount(count + 10);
    };

    // -10 감소
    const decrementByTen = () => {
        if (count >= 10) {
            triggerColorChange("down");
            setCount(count - 10);
        }
    };

    // 리셋
    const reset = () => {
        setColor("text-gray-700");
        setCount(0);
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

            {/* 버튼 배치 */}
            <div className="flex flex-nowrap justify-center items-center gap-8 mb-6">
                {/* 왼쪽 컬럼 (감소 버튼들) */}
                <div className="flex flex-col gap-4">
                    {/* -1 감소 버튼 */}
                    <button
                        onClick={decrement}
                        className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-xl bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        - 1 감소
                    </button>
                    {/* -10 감소 버튼 */}
                    <button
                        onClick={decrementByTen}
                        className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                    >
                        - 10 감소
                    </button>
                </div>

                {/* 오른쪽 컬럼 (증가 버튼들) */}
                <div className="flex flex-col gap-4">
                    {/* +1 증가 버튼 */}
                    <button
                        onClick={increment}
                        className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        + 1 증가
                    </button>
                    {/* +10 증가 버튼 */}
                    <button
                        onClick={incrementByTen}
                        className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        + 10 증가
                    </button>
                </div>
            </div>

            {/* 리셋 버튼 */}
            <div className="flex justify-center">
                <button
                    onClick={reset}
                    className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-xl bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                    리셋
                </button>
            </div>
        </div>
    );
}