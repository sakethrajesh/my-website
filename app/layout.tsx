import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { Heading, Box, Flex } from "@chakra-ui/react";
import ColorModeToggle from "@/components/ColorModeToggle";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saketh Rajesh",
  description: "Personal website of Saketh Rajesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SpeedInsights />
          <Box maxW="3xl" mx="auto" px="5" my="5">
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Heading size='lg' as='i'>Saketh Rajesh</Heading>
              <ColorModeToggle />
            </Flex>
            <Navbar />
            {children}
          </Box>
          {/* <Box maxW="3xl" mx="auto" px="5" my="5" alignItems="end">
            <Flex justifyContent="center" alignItems="bottom" w="100%">
              <Heading size='sm' as='i'>© 2024 Saketh Rajesh</Heading>
            </Flex>
          </Box> */}
        </Providers>
      </body>
    </html>
  );
}
