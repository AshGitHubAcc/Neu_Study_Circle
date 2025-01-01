import React from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Input,
} from "@nextui-org/react";

import logo from "../assets/new_logo.svg"


export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={ size || width }
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
};



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#202123]" maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="object-contain h-full">
          <Link href="/home" className="text-gray-400 data-[active=true]:opacity-0" >
            <img src={logo} alt="Website logo" className="h-[50%] w-auto ml-10 mr-5" />
            <p className="font-bold text-inherit mr-5">Website Name</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem className="w-full">
        <Input
            classNames={{
                base: "h-full",
                input:"placeholder:text-gray-400 group-data-[hover=true]:placeholder:text-gray-200 group-data-[focus=true]:placeholder:text-gray-100 !text-gray-200 group-data-[focus=true]:!text-gray-100 group-data-[hover=true]:!text-gray-100 text-lg",
                inputWrapper:`h-full font-normal bg-gray-600
                  group-data-[hover=true]:bg-gray-500
                  group-data-[focus=true]:bg-gray-500`
                }}
            placeholder="Search..."
            size="sm"
            startContent={<SearchIcon size={18} width={18} height={18} className="mr-1 text-gray-400 group-data-[hover=true]:text-gray-100 group-data-[focus=true]:text-gray-100" />}
            type="search"
        />
        </NavbarItem>
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

      <NavbarMenu style={{boxShadow: "10px 20px 20px rgba(0,0,0,0.3)"}} className="w-[15%] min-w-40 bg-[#858585] drop-shadow-lg">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>

          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}