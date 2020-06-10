import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

// QUESTION: Do we need this? We can use semantic select dropdown
// https://react.semantic-ui.com/addons/select/
// Should also use theme.css
const StyledDropdown = styled(Dropdown)`
  &&& {
    min-width: 150px;
    max-width: 150px;
    min-height: 48px;
    max-height: 48px;
    padding: 10px 16px;

    &&& i {
      padding: 10px 16px;
    }
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => (props.marginRight ? 'margin-right: 30px' : '')}
`;

const Label = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
`;

export class FilterDropdown extends React.Component {
  render() {
    const { options, label, marginRight } = this.props;
    return (
      <DropdownWrapper marginRight={marginRight}>
        <Label>{label}</Label>
        <StyledDropdown
          selection
          options={options}
          defaultValue={options[0].value}
        />
      </DropdownWrapper>
    );
  }
}

export default FilterDropdown;
