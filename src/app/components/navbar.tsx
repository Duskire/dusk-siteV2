import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex flex-col h-lvh w-60vw bg-background-800">
            <Image
                src=""
                alt="Logo Home"
                className=""
                width={100}
                height={100}
                priority
            />
            <ul>
                <li className=""></li>
                <li className=""></li>
                <li className=""></li>
                <li className=""></li>
            </ul>
        </div>
    )
}