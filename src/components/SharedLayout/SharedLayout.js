import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";


export default function SharedLayout() {
  return (
    <Container>
      <Header/>
      <Outlet />
    </Container>
  )
}