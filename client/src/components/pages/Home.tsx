import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

import LeftSideContent from "../LeftSideContent"
import MainContent from "../MainContent"
import RightSideContent from "../RightSideContent"
import { useState } from "react";


const cardMaker = ()=> {

    const [isFollowed, setIsFollowed] = useState(false)

    const description = "Frontend developer and UI/UX enthusiast. Join me on this coding adventure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus amet architecto tenetur! Voluptatibus ullam nisi placeat quos quibusdam tenetur consectetur, accusantium, rem, consequatur id ad ea dicta voluptates culpa deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus amet architecto tenetur! Voluptatibus ullam nisi placeat quos quibusdam tenetur consectetur, accusantium, rem, consequatur id ad ea dicta voluptates culpa deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus amet architecto tenetur! Voluptatibus ullam nisi placeat quos quibusdam tenetur consectetur, accusantium, rem, consequatur id ad ea dicta voluptates culpa deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus amet architecto tenetur! Voluptatibus ullam nisi placeat quos quibusdam tenetur consectetur, accusantium, rem, consequatur id ad ea dicta voluptates culpa deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus amet architecto tenetur! Voluptatibus ullam nisi placeat quos quibusdam tenetur consectetur, accusantium, rem, consequatur id ad ea dicta voluptates culpa deleniti!" 

    return (
        <Card className="max-w-full bg-[#313337] h-52 mb-5">
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
            className={isFollowed ? "bg-transparent text-blue-600" : ""}
            color="primary"
            radius="sm"
            size="sm"
            variant={isFollowed ? "solid" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
            >
            {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-[#999797] flex justify-between">
            <p className="text-xl font-semibold">
                Studying for Cal 2 Finals at Snells. 5 people only
            </p>
            <p>{description.length >= 510 ? description.slice(0, 410) + "..." : description}</p>
            <p className="pt-[3px] text-[#96969699]">
                #Python #C++ #Java #Python #C++ #Java 
            </p>
            

        </CardBody>
        <CardFooter className="p-3 pt-1 flex justify-between" >
            <div className="flex gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </div>

            <p className="text-[#9696967a] text-small">
                12/9/2025
            </p>
        </CardFooter>
    </Card>
    )
}


export default function Home() {


    return (

        <div className="h-full">

            <div className="bg-[#303235] h-full fixed left-0 top-0 mt-[64px] w-[17.5%]">
                asd
            </div>
            <div className="bg-[#262728] h-full w-[60%] mx-auto my-16">

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
    )
}