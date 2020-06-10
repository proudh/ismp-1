import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

export const SearchWrapper = styled.div`
  margin: 10px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const SearchFieldWrapper = styled.div`
  width: 25%;
`;

export const Header = styled.div`
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;
  // font-size: ${theme.fontSizes.md};
`;

export const BackButton = styled(Link)`
  margin: 30px 0;
  width: fit-content;
  ${mixins.link}
`;

export const FilterWrapper = styled.div`
  display: flex;
`;
