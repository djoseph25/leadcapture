import React, { useState } from 'react';
import { useGlobalContext } from '../context';


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { logout } = useGlobalContext();
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<Dropdown
			isOpen={dropdownOpen}
			toggle={toggle}
			style={{ backgroundColor: 'transparent', radius: 50 }}
		>
			<DropdownToggle>
				<img
					className="thumbnail-image"
					src="https://images.unsplash.com/photo-1585675100414-add2e465a136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
					alt="user pic"
					style={{ width: 30 }}
				/>
			</DropdownToggle>
			<DropdownMenu style={{ marginRight: 130 }}>
				<div style={{ margin: 'auto', textAlign: 'center', fontSize: 12 }}>
					<DropdownItem>David Joseph</DropdownItem>
					<DropdownItem text>Davidjoseph850@gmail.com</DropdownItem>
					<DropdownItem className="account">Manage your Accounts</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>David Joseph</DropdownItem>
					<DropdownItem>djoseph25@gmail.com</DropdownItem>

					<button onClick={logout} className="btn btn-signin" style={{ marginTop: 25 }}>
						Logout
					</button>
				</div>
			</DropdownMenu>
		</Dropdown>
	);
};

export default Example;
