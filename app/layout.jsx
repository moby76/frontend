import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "@/utils/ReactQueryClientProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MiniCart from "./components/MiniCart";
import Header from "./components/Header";
import { getServerSession } from "next-auth";
import SessProvider from '@/utils/SessionProvider'
import SessionProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ArtDivan",
    description: "Generated by create next app",
};

export default async function RootLayout({ children })
{
    const session = getServerSession()

    return (
        <html lang="en">
            <body className={ inter.className }>
                {/* <SProvider > */}
                <SessProvider session={ session }>
                    <ReactQueryClientProvider>
                        <Header />
                        {/* <MiniCart />  */}
                        { children }
                        <ReactQueryDevtools initialIsOpen={ false } />
                    </ReactQueryClientProvider>
                </SessProvider>                    
                {/* </SProvider> */}

            </body>
        </html>
    );
}
