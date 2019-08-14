import styled from '@emotion/styled';
const TeamMember = styled.article`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[1]}rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;

  .name {
    margin: ${props => props.theme.spacing[1]}rem 0;
  }

  .img {
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 8rem;
  }

  .position {
    color: ${props => props.theme.colors.darkLight};
    font-size: ${props => props.theme.fontSizes[1]}rem;
    margin: ${props => props.theme.spacing[0]}rem 0;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.1);
  }
  .contact {
    font-size: ${props => props.theme.fontSizes[0]}rem;
  }
`;

export default TeamMember;
