import { Button } from "antd";
import { ReactNode } from "react";
import styles from "./style.module.scss";

interface IButtonProps {
  type: string;
  children: ReactNode;
}

function AuthButton({ type, children }: IButtonProps) {
  return (
    <button
      className={type === "login" ? styles["login_btn"] : styles["logout_btn"]}
    >
      {children}
    </button>
  );
}

export default AuthButton;
