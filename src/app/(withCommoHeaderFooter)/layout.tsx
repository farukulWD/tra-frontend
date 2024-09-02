import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { ReactNode } from "react";

export default function CommonLayouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
