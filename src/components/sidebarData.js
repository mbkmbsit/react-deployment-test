import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export const sidebarData = [
	{
		title: 'Home',
		path: '/',
		cName: 'nav-text',
		icon: <AiIcons.AiFillHome />
	},
	{
		title: 'Reports',
		path: '/report',
		cName: 'nav-text',
		icon: <IoIcons.IoIosPaper />
	},
	{
		title: 'Products',
		path: '/products',
		cName: 'nav-text',
		icon: <FaIcons.FaCartPlus />
	},
	{
		title: 'Team',
		path: '/team',
		cName: 'nav-text',
		icon: <IoIcons.IoMdPeople />
	},
	{
		title: 'Messages',
		path: '/messages',
		cName: 'nav-text',
		icon: <IoIcons.IoMdHelpCircle />
	}
];
