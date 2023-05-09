import React from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeaderLinks from "@/components/Header/HeaderLinks";
const layout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <div>
      <Header
        brand="Docurer"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        absolute="true"
        changeColorOnScroll={{
          height: 100,
          color: "#fff",
        }}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
