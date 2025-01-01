import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";

import logo from '../../assets/new_logo.svg'

export default function LoginRegisterHeader() {
  
    return (
      <Navbar className="bg-[#202123]" maxWidth="full">
        <NavbarContent>
          <NavbarBrand className="object-contain h-full ml-10">
            <Link href="/home" className="text-gray-400 data-[active=true]:opacity-0" >
              <img src={logo} alt="Website logo" className="h-[50%] w-auto ml-10 mr-5" />
              <p className="font-bold text-inherit mr-5">Website Name</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
  
  
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
              <div className="flex justify-center items-center">
                <Link href="home" underline="hover" className="text-blue-500 font-bold hover:text-blue-300">Login</Link>
                <div className="bg-blue-500 w-[2px] h-[70%] mx-2"/>
                <Link href="home" underline="hover" className="text-blue-500 font-bold hover:text-blue-300">Sign Up</Link>
  
              </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }