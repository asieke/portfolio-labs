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
	},
	{
		label: 'Allocation',
		href: '/allocation'
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
		href: '/auth/signout'
	}
];

import { IconLock, IconSignOut, IconGear, IconProfile, IconAdjustments, IconWallet, IconCalculator, IconCreditCard } from '$components/svg';

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
		label: 'Subscription',
		href: '/settings/subscription',
		icon: IconCreditCard
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
		label: 'Allocation Targets',
		href: '/settings/targets',
		icon: IconCalculator
	},
	{
		label: 'Security',
		href: '/settings/security',
		icon: IconLock
	},
	{
		label: 'Logout',
		href: '/auth/signout',
		icon: IconSignOut
	}
];
