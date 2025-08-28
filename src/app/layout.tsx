import "@/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { geist } from "@ui/fonts";

// TODO need to add all the metadata here
export const metadata: Metadata = {
  title: "VentureNet",
  authors: {
    name: "Shai brown",
  },
  description:
    "Never forget who you meet. Track contacts, notes, and take your next step.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
