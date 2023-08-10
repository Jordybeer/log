"use client"

// app/layout.tsx
import { dark } from "@clerk/themes";
import type { NextComponentType, NextPageContext } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export default function RootLayout({ Component, pageProps }: Props) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            body {
              animation: fadeIn 1s ease-in-out;
            }
          `}
        </style>
      </head>
      <body
        className={inter.className}
        style={{
          background: "linear-gradient(to bottom right, #320850 , #2E51BB)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "relative",
        }}
      >
        <Center h="100vh" mx="auto" position="relative">
          <ClerkProvider
            appearance={{
              baseTheme: dark,
              variables: {
                colorBackground: "#0D0F69CC",
              },
              layout: {
                socialButtonsPlacement: "bottom",
              },
            }}
          >
            <Box h="auto" w="auto" px={4}>
              <Component {...pageProps} />
            </Box>
          </ClerkProvider>
          <img
            src="https://i.imgur.com/UfNPoEK.png"
            alt="logo"
            style={{
              width: "70%",
              height: "auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
              opacity: "0.35",
            }}
            className={inter.className}
          />
        </Center>
      </body>
    </html>
  );
}
