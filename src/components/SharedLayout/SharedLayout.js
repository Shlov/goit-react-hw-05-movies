import Header from "components/Header/Header";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";


export default function SharedLayout() {
  return (
    <Container>
      <Header/>
      <Outlet />
      <Toaster />
    </Container>
  )
}