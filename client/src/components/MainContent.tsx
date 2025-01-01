import { Image } from "@nextui-org/react"
import logo from "../assets/logo.png"

export default function MainContent() {


    


    return (
        <div className="flex-[4] bg-gray-500">

            Middle

            <Image src={logo} width={50}></Image>

        </div>
    )
}