import { StyledLink } from "./StyledLink.styled"

export const Header = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </div>
  )
}