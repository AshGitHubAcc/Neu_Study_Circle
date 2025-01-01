import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import Header from "../reuse/Header"

import LeftSideContent from "../LeftSideContent"
import MainContent from "../MainContent"
import RightSideContent from "../RightSideContent"
import { useState } from "react";


const cardMaker = ()=> {

    const [isFollowed, setIsFollowed] = useState(false)
    
    const description = "Call me in discord ingtamr and"

    return (
        <Card className="max-w-full bg-[#313337] max-h-56 mb-5">
        <CardHeader className="justify-between">
            <div className="flex gap-5">
            <Avatar
                radius="md"
                size="md"
                src="https://nextui.org/avatars/avatar-1.png"
                classNames={{
                    base: "ring-1  ring-primary",
                  }}
                
            />
            <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-[#8f8e8e]">Zoey Lang</h4>
                <h5 className="text-small tracking-tight text-[#757474]">@zoeylang</h5>
            </div>
            </div>
            <Button
            className={`${
                isFollowed ? "bg-transparent text-[#2564ebda]" : "text-[#9d9c9c] bg-[#1a68ee89]"
            } !px-1 !py-1 !h-auto rounded-[5px] mb-auto`}
            color="primary"
            size="sm"
            variant={isFollowed ? "solid" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
            >
            {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-[#999797eb] flex justify-between">
            <p className="text-[17px] font-semibold">
                Studying for Cal 2 Finals at Snells. 5 people only
            </p>
            <p className="pt-2 pb-1">{description.length >= 385 ? description.slice(0, 385) + "..." : description}</p>
            
            

        </CardBody>
        <CardFooter className="p-3 pt-[1px] flex flex-col items-start text-[#96969699]" >

            <p className="pt-[3px]">
                #Python #C++
            </p>
            <div className="flex justify-between w-full">
                <div className="flex gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold  text-small">4</p>
                        <p className="  text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold  text-small">97.1K</p>
                        <p className=" text-small">Followers</p>
                    </div>
                </div>

                <p className="text-[#9696967a] text-small">
                    12/9/2025
                </p>

            </div>            
        </CardFooter>
    </Card>
    )
}


export default function Home() {


    return (

        <div className="h-full w-full">

            <Header/>

            <div className="py-10">
                <div className="bg-[#303235] h-full fixed left-0 top-0 mt-[64px] w-[17.5%]">
                    asd
                </div>
                <div className="bg-[#262728] h-full w-[60%] mx-auto">

                    {cardMaker()}
                    {cardMaker()}
                    {cardMaker()}
                    {cardMaker()}
                    {cardMaker()}
                    {cardMaker()}
                    {cardMaker()}


                    
                </div>
                <div className="bg-[#222325] h-full fixed right-0 top-0 mt-[64px] w-[17.5%]">
                    asd
                </div>
            </div>

            </div>
    )
}