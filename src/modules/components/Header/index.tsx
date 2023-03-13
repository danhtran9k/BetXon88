import AuthButton from "@/common/Button";
import { Anchor, Button, Layout } from "antd";
import * as React from "react";
export const Header: React.FC = () => {
  return (
    <Layout.Header className="bg-[#202a39]">
      <div
        className="w-full px-14 h-full mx-auto flex flex-wrap 
				items-center justify-between drop-shadow-md"
      >
        <div className="h-full flex flex-row gap-10">
          <div className="flex justify-center items-center">
            <a href="#" className="">
              <img src="/images/logo.png" alt="" />
            </a>
          </div>

          <ul className="flex flex-row justify-center items-center gap-4 text-white text-lg ">
            <li>
              <a href="#">Live</a>
            </li>
            <li>
              <a href="#">Sports Betting</a>
            </li>
            <li>
              <a href="#">Casino</a>
            </li>
            <li>
              <a href="#">Lucky Drops</a>
            </li>
            <li>
              <a href="#">Promotions</a>
            </li>
          </ul>
          {/* <Anchor
            style={{}}
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
              {
                key: "part-4",
                href: "#part-4",
                title: "Part 4",
              },
              {
                key: "part-5",
                href: "#part-5",
                title: "Part 5",
              },
              {
                key: "part-6",
                href: "#part-6",
                title: "Part 6",
              },
            ]}
          /> */}
        </div>

        <div className="flex flex-row gap-4">
          <Button ghost>Language</Button>
          <AuthButton type="login">Login</AuthButton>
          <AuthButton type="logout">Login</AuthButton>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
