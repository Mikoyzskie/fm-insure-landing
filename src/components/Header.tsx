import Image from "next/image"
import Link from "next/link"
import { karla } from "@/app/fonts"

export default function Header() {
    return (
        <div className="bg-white">
            <header className="max-w-[1105px] m-auto flex justify-between items-center py-[22px] border-b">
                <Image
                    src={"/logo.svg"}
                    alt="Logo"
                    width={112}
                    height={18}

                />
                <div className={`${karla.className} flex gap-8`}>
                    <div className={` font-bold flex gap-7 items-center text-sm text-gray-500`}>
                        <Link href={"/"}>HOW WE WORK</Link>
                        <Link href={"/"}>BLOG</Link>
                        <Link href={"/"}>ACCOUNT</Link>
                    </div>
                    <button className={`border border-black px-7 py-2.5 text-sm font-bold`}>VIEW PLANS</button>
                </div>
            </header>
        </div>
    )
}