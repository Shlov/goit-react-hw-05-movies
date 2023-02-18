import { HeaderEl } from "./Header.styled"
import { StyledLink } from "./StyledLink.styled"

export default function Header() {
  
  return (
    <HeaderEl>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </HeaderEl>
  )
}

