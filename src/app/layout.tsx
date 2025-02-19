import { Inter } from "next/font/google";
import "./styles/root.css";
import "./styles/globals.css";
import StyledComponentsRegistry from "./AntdRegistry";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
