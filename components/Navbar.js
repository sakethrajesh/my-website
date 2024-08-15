'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import React, { useState } from 'react'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Projects',
            href: '/projects'
        },
        {
            label: 'Gallery',
            href: '/gallery'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
    ]

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={item.href === window.location.pathname}>
                        <Link href={item.href} aria-current={item.href === window.location.pathname ? 'page' : undefined} color={item.href === window.location.pathname ? 'primary' : 'foreground'}>{item.label}</Link>
                    </NavbarItem>
                ))}

            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    )
}

export default Nav