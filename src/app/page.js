import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm";
// import { narsda1 } from "next/image";

export default function Home() {
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Redirect or perform any action after successful login
        console.log("Login successful!");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <div className="content">
        <Image src="/narsda1.png" alt="Logo" width="277" height="277" />
        <LoginForm />
      </div>
    </>
  );
}
