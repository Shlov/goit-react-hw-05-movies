import Header from "components/Header/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";


export default function SharedLayout() {
  return (
    
    <Container>
      <Header/>
      <Toaster />
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>


  )
}