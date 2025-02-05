"use client";

import React from "react";
import HeaderComponent from "@/components/header";
import Link from "next/link";
import Header from "@/components/header";


export default function Page() {
    const posts = [
        {
            id: 1,
            title: '꿈비 범퍼 침대',
            writer: 'ahn_sum87',
            createdAt: '10:52',
            viewCount: 133,
            commentCount: 3,
            isNew: true,
            hasImage: true
        },
        {
            id: 2,
            title: '검정치마 콘서트 스탠딩석 구해요',
            writer: '중앙지검검사',
            createdAt: '10:25',
            viewCount: 111,
            commentCount: 3,
            isNew: true
        },
        {
            id: 3,
            title: '인테리어 4단선반(나눔완료)',
            writer: 'Abanera',
            createdAt: '09:56',
            viewCount: 170,
            commentCount: 6,
            isNew: true,
            hasImage: true
        },
        {
            id: 4,
            title: '미니 손지갑(아가일매니)',
            writer: '발랄상쾌',
            createdAt: '09:51',
            viewCount: 55,
            commentCount: 7,
            isNew: true
        },
        {
            id: 5,
            title: '티벳벗중궁',
            writer: '작은곰돌',
            createdAt: '09:34',
            viewCount: 147,
            commentCount: 10,
            isNew: true,
            hasImage: true
        },
        {
            id: 6,
            title: '달콤핀스) 코피코사탕',
            writer: '달콤핀스',
            createdAt: '08:08',
            viewCount: 121,
            commentCount: 15,
            isNew: true
        },
        {
            id: 7,
            title: '사각 파이프 무료 나눔',
            writer: '표원지추',
            createdAt: '00:43',
            viewCount: 339,
            commentCount: 10,
            isNew: true,
            hasImage: true
        },
        {
            id: 8,
            title: '계좌만받고잡수타는사람',
            writer: '하이가',
            createdAt: '00:18',
            viewCount: 496,
            commentCount: 13,
            isNew: true,
            hasImage: true
        },
        {
            id: 9,
            title: '농심 밀터팩',
            writer: '찬자내꺼',
            createdAt: '2025.02.01.',
            viewCount: 636,
            commentCount: 32,
            hasImage: true
        },
        {
            id: 10,
            title: '마감) 막 써야하는 새뺑 건설현장용 갈매(?), 초록색장갑, 안전화, 쪼끼',
            writer: '싸벌싸밭',
            createdAt: '2025.02.01.',
            viewCount: 228,
            commentCount: 18
        }
    ];

    return (
        <div style={{ padding: "16px" }}>
            {/* 상단 Header 컴포넌트 */}
            <Header title="카페 게시글 목록" hasBack={true} />

            {/* 게시글 테이블 */}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead>
                <tr style={{ borderBottom: "1px solid #ddd", fontSize: "0.85rem" }}>
                    <th style={{ padding: "8px", textAlign: "left" }}>제목</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>작성자</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>작성일</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>조회</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "8px", fontSize: "0.9rem" }}>
                            <Link
                                href={`/posts/${post.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    fontSize: "0.85rem",
                                }}
                            >
                                {post.title}
                                {post.hasImage && (
                                    <span
                                        style={{
                                            width: "14px",
                                            height: "14px",
                                            backgroundImage: "url(/image-icon.png)",
                                            display: "inline-block",
                                        }}
                                    ></span>
                                )}
                                {post.isNew && (
                                    <span
                                        style={{
                                            backgroundColor: "#ff0000",
                                            color: "white",
                                            padding: "1px 4px",
                                            borderRadius: "2px",
                                            fontSize: "0.7rem",
                                        }}
                                    >
                                            N
                                        </span>
                                )}
                                <span style={{ color: "#ff0000", fontSize: "0.85rem" }}>
                                        [{post.commentCount}]
                                    </span>
                            </Link>
                        </td>
                        <td style={{ padding: "8px", fontSize: "0.85rem" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    {post.writer}
                                    <span style={{ color: "green", fontSize: "0.85rem" }}>✓</span>
                                </span>
                        </td>
                        <td style={{ padding: "8px", fontSize: "0.85rem" }}>{post.createdAt}</td>
                        <td style={{ padding: "8px", fontSize: "0.85rem" }}>{post.viewCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
