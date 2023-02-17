import { HeaderEl } from "./Header.styled"
import { StyledLink } from "./StyledLink.styled"

const Header = () => {
  return (
    <HeaderEl>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </HeaderEl>
  )
}

export default Header