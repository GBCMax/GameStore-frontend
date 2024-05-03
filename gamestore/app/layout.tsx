import "./globals.css";
import { Menu } from "antd";
import Layout, {Footer, Header, Content } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {key: "home", label: <Link href={"/"}>Home</Link>},
  {key: "games", label: <Link href={"/games"}>Games</Link>}
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Menu 
              theme="dark" 
              mode="horizontal" 
              items={items} 
              style= {{flex: 1, minWidth: 0}}
            />
          </Header>
          <Content style={{ padding: "0px, 48px"}}>{children}</Content>
          <Footer style={{ textAlign: "center"}}>
            Game store 2024.
          </Footer>
        </Layout>
        </body>
    </html>
  );
}
