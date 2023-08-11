"use client"

import { useRouter } from 'next/navigation';
import { ClerkProvider } from "@clerk/nextjs";
import { Center, Box } from "@chakra-ui/react";
import { dark } from '@clerk/themes';
import type { AppProps } from "next/app";
import { useUser } from '@clerk/clerk-react';

function MyComponent() {
  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
}

function Layout({ pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useUser();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
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
      <Center
        h="100vh"
        mx="auto"
        position="relative"
        style={{
          background: "linear-gradient(to bottom right, #320850 , #2E51BB)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "relative",
        }}
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            layout: {
              socialButtonsPlacement: "bottom",
            },
          }}
        >
          <Box h="auto" w="auto" px={4}>
            {user ? (
              <MyComponent />
            ) : (
              <p>Loading...</p>
            )}
            <button onClick={handleClick}>Go to About page</button>
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
            opacity: "0.3",
          }}
        />
      </Center>
    </div>
  );
}

export default Layout;