import styled from '@emotion/styled';
import { RiArrowDropDownFill } from 'react-icons/ri';

export const HeaderRightWrapper = styled.div`
  height: 68px;
  color: #e5e5e5;
  display: flex;
  align-items: center;
  flex-grow: 1;
  right: 4%;
  top: 0;
`;

export const SecondaryNavigation = styled.div`
  color: #e5e5e5;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const NavElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 20px;

  & .search-focused {
    transition: 500ms;
    background-color: black;
    border: 1px solid #e5e5e5;
    padding: 5px;
  }
  /* & :last-child:hover svg:last-child {
    transition: 500ms;
    transform: rotate(-180deg);
  } */
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 10px;
  width: 200px;
  color: white;
  background-color: transparent;
  outline: none;
`;

export const ToggleWrapper = styled.div`
  margin-top: 20px;
`;

export const DropdownContentWrapper = styled.div``;

export const CustomRiArrowDropDownFill = styled(RiArrowDropDownFill)`
  :hover {
    transition: 500ms;
    transform: rotate(-180deg);
  }
`;

export const SearchModalWrapper = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 68px;
  right: 0;
  z-index: 10001;

  /* & div {
    margin-top: 200px; 
    display: inline-block;
    width: 100%;
    height: 100%;
    background: black;
    user-select: none;
    max-width: 100%;
    padding-top: 40px;
    position: relative;
    & h1 {
      color: white;
    }
  } */
`;
export const SearchWrapMain = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  user-select: none;
  max-width: 100%;
  padding-top: 4%;
  position: relative;
  overflow: auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding-left: 4%;
  padding-bottom: 4%;
  & h1 {
    color: white;
  }
`;
