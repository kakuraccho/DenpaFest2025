import * as React from "react"
import Body from "../components/body"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

export default function Home() {

    return (
        <Body>
            <div className="flex flex-col items-center mt-5 mb-10"> {/*開催者概要セクション*/}
                <p className="text-xl">香川高等専門学校 詫間キャンパス</p>
                <h2 className="text-xl">令和7年度 第53回 電波祭</h2>
            </div>

            <div className="flex flex-col items-center"> {/*タイトルセクション*/}
                <div className="relation flex flex-row w-full justify-end">
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <p className="text-2xl writing-mode-vertical-rl">電波祭を。</p>
                    </div>
                    <div className="">
                        <p className="text-2xl writing-mode-vertical-rl pr-4">楽しめ<br />青春を<br />詫間を<br />今を</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <StaticImage
                        src="../images/de.png"
                        alt="デ。"
                        placeholder="blurred"
                        layout="fixed"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex flex-col items-center mt-5 mb-20">
                    <h1 className="font-extrabold text-3xl">-地球の電波祭について-</h1>
                </div>
            </div>

            <div className="flex flex-col items-end gap-2"> {/*横帯セクション*/}
                <div className="w-48 px-2">
                    <p className="text-2xl">第53回 電波祭</p>
                </div>
                <div className="w-48 px-2  bg-black text-white">
                    <p className="text-2xl">11/1, 11/2に</p>
                </div>
                <div className="w-48 px-2  bg-black text-white">
                    <p className="text-2xl">開催決定！</p>
                </div>
            </div>
        </Body>
    )
}
