import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SidebarDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <div className="sidebar-dropdown-button">
        <DropdownToggle caret>
        <i className="icon-location-pin icons"></i>  Wellsite
        </DropdownToggle>
        </div>
        <DropdownMenu>
          <DropdownItem header>Marcellus</DropdownItem>
          <DropdownItem>API 3654</DropdownItem>
          <DropdownItem>API 3321</DropdownItem>
          <DropdownItem>API 3210</DropdownItem>
          <DropdownItem>API 2914</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Permian</DropdownItem>
          <DropdownItem>API 6546</DropdownItem>
          <DropdownItem>API 1964</DropdownItem>
          <DropdownItem>API 1257</DropdownItem>
          <DropdownItem>API 1246</DropdownItem>
          <DropdownItem>API 9234</DropdownItem>
          <DropdownItem>API 6543</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
