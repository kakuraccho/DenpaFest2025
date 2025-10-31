import { createClient } from "microcms-js-sdk";
import * as React from "react";
import { useState, useEffect } from "react";

const CATEGORY_STYLES = {
    "お知らせ": {
        color: "border-2"
    },
    "重要なお知らせ": {
        color: "border-red-300 border-2"
    },
    "セール": {
        color: "border-yellow-300 border-2"
    }
}

export const client = createClient({
    serviceDomain: "denpafest2025",
    apiKey: process.env.GATSBY_MICROCMS_API_KEY,
})

export default function AnnouncementContent() {
    const [news, setNews] = useState({ contents: [], totalCount: 0 })
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const LIMIT = 10

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const offset = (currentPage - 1) * LIMIT

                const res = await client.get({
                    endpoint: 'news',
                    queries: {
                        limit: LIMIT,
                        offset: offset
                    },
                })
                setNews(res)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    },[currentPage])

    console.log(news)

    const totalPages = Math.ceil(news.totalCount / LIMIT)
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div>
            {loading ? (
                <p className="">loading...</p>
            ) : (
                <>
                    {news.contents && Array.isArray(news.contents) && news.contents.map(data => {
                        const style = CATEGORY_STYLES[data.category?.name]
                        return (
                            <div key={data.id} className={`m-2 p-2 rounded-lg ${style.color}`}>
                                <p className="text-2xl">{data.title}</p>
                                <p className="text-sm">団体名: {data.group}</p>
                                <p className="text-sm">カテゴリ: {data.category?.name}</p>
                                <hr className="my-2 border" />
                                <div
                                    dangerouslySetInnerHTML={{ __html: data.content }}
                                />
                            </div>
                        )}
                    )}
                    {totalPages > 1 && (
                        <div className="flex justify-center m-3 space-x-2">
                            {pageNumbers.map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`
                                        px-3 py-1 text-sm font-medium rounded-lg 
                                        transition-colors duration-200
                                        ${currentPage === pageNumber
                                            ? 'bg-gray-50 text-white' 
                                            : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                                        }
                                `}
                            >
                                {pageNumber}
                            </button>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}