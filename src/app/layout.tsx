// app/layout.tsx
import { dark } from "@clerk/themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ClerkProvider, SignIn } from "@clerk/nextjs";


const {
  Center: ChakraCenter,
  Flex,
  Box: ChakraBox,
  Box,
} = require("@chakra-ui/react");

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background: "linear-gradient(to bottom right, #320850 , #2E51BB)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <ChakraCenter h="100vh" mx="auto">
          <ClerkProvider
            appearance={{
              baseTheme: dark,
              variables: {
                colorBackground: "#0B0C666C",
              },
              layout: {
                logoImageUrl: "https://i.imgur.com/UfNPoEK.png",
                logoPlacement: "inside",
                socialButtonsPlacement: "bottom",
              },
            }}
          >
            <Box h="auto" w="auto" px={4}>
              <img
                src="https://i.imgur.com/UfNPoEK.png"
                alt="logo"
                style={{ transform: "scale(2)", width: "200px", height: "200px" }}
                className={inter.className}
              />
              {children}
            </Box>
          </ClerkProvider>
        </ChakraCenter>
      </body>
    </html>
  );
}