export const navLinks = [
	{
		label: 'Dashboard',
		href: '/dashboard'
	},
	{
		label: 'Positions',
		href: '/positions'
	},
	{
		label: 'Performance',
		href: '/performance'
	},
	{
		label: 'Modeling',
		href: '/modeling'
	}
];

export const profileLinks = [
	{
		label: 'Profile',
		href: '/settings/profile'
	},
	{
		label: 'Settings',
		href: '/settings'
	},
	{
		label: 'Accounts',
		href: '/settings/accounts'
	},
	{
		label: 'Logout',
		href: '/settings/logout'
	}
];

import { IconLock, IconSignOut, IconGear, IconProfile, IconAdjustments, IconWallet } from '$components/svg';

export const settingsLinks = [
	{
		label: 'Profile',
		href: '/settings/profile',
		icon: IconProfile
	},
	{
		label: 'Settings',
		href: '/settings',
		icon: IconGear
	},
	{
		label: 'Accounts',
		href: '/settings/accounts',
		icon: IconWallet
	},
	{
		label: 'Asset Classifications',
		href: '/settings/assets',
		icon: IconAdjustments
	},
	{
		label: 'Security',
		href: '/settings/security',
		icon: IconLock
	},
	{
		label: 'Logout',
		href: '/settings/logout',
		icon: IconSignOut
	}
];
