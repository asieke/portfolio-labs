import type { DataType } from './types';

export const fakePortfolio: DataType = {
	headers: ['Asset Class', 'Dollar Amount', 'Number of Positions', 'Percentage', 'Cost Basis'],
	colors: ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'],
	types: ['string', 'number', 'number', 'number', 'number'],
	formats: ['string', 'currency', 'number', 'percent', 'currency'],
	data: [
		['Equities', 120000, 1000, 0.485, 100000],
		['Fixed Income', 60000, 50000, 0.235, 55000],
		['Real Estate', 40000, 3, 0.16, 35000],
		['Commodities', 20000, 2, 0.08, 18000],
		['Cash and Cash Equivalents', 10000, 1, 0.04, 10000]
	]
};

export const fakeNotifications = [
	{
		title: 'New Product Launch',
		description:
			"Check out our latest product and get it before it's gone. Limited stock available!",
		time: 1679516397000
	},
	{
		title: 'Important System Maintenance',
		description:
			"We'll be performing maintenance on our systems tonight from 9pm-11pm EST. Please plan accordingly.",
		time: 1679516397000 - 24 * 60 * 60 * 1000
	},
	{
		title: 'Upcoming Sale',
		description: "Don't miss our upcoming sale starting next week. Save up to 50% on select items!",
		time: 1679516397000 - 6 * 24 * 60 * 60 * 1000
	}
];

export const fakeQuestions = [
	{
		question: 'What is portfolio visualization?',
		answer:
			'Portfolio visualization is the process of using technology to bring all of your investment accounts together in one place and display them in a way that is easy to understand. Our product connects to your accounts and provides insights into your historical performance, direct indexing, tax loss harvesting, and asset allocation, all in one convenient dashboard.'
	},
	{
		question: 'How does the product connect to my accounts?',
		answer:
			'Our product connects to your investment accounts by securely accessing them through APIs. This allows us to gather data on your holdings, transactions, and performance, all without requiring you to manually enter any information. We take data security very seriously, and our systems are designed to protect your information at every step of the process.'
	},
	{
		question: 'Is my financial information secure?',
		answer:
			'Yes, your financial information is very secure. We use state-of-the-art encryption and security protocols to protect your data, both in transit and at rest. We also take steps to ensure that our systems are regularly monitored and audited, and that our employees undergo regular security training to prevent data breaches or unauthorized access.'
	},
	{
		question: 'What is historical performance tracking and how does it work?',
		answer:
			'Historical performance tracking is the process of looking at how your investments have performed over time. Our product tracks your investment returns, both overall and by individual asset class, and displays them in an easy-to-understand format. This helps you see how your portfolio has performed in the past, and can help you make better decisions about how to allocate your investments in the future. We use sophisticated algorithms to calculate your performance, factoring in factors such as fees, taxes, and other costs.'
	},
	{
		question: 'What is direct indexing and how does it benefit me?',
		answer:
			'Direct indexing is a technique that allows you to invest in individual securities instead of buying a mutual fund or ETF. This can help you achieve better tax efficiency, as you can choose which securities to buy and sell based on your tax situation. Our product uses direct indexing to help you maximize your returns and minimize your tax liability. We use sophisticated algorithms to create custom portfolios that are tailored to your individual needs and goals.'
	},
	{
		question: 'What is tax loss harvesting and how does it work?',
		answer:
			'Tax loss harvesting is a technique that involves selling securities at a loss to offset gains in other parts of your portfolio. This can help you reduce your tax liability and increase your after-tax returns. Our product uses tax loss harvesting to help you maximize your tax efficiency and keep more of your investment gains. We use sophisticated algorithms to identify opportunities for tax loss harvesting and execute trades on your behalf.'
	},
	{
		question: 'Can I customize my asset allocation?',
		answer:
			'Yes, you can customize your asset allocation using our product. We offer a range of asset allocation options, from conservative to aggressive, and you can choose the one that best fits your individual goals and risk tolerance. We also offer the ability to create custom portfolios, so you can invest in specific securities or asset classes that you believe will perform well.'
	},
	{
		question: 'What is rebalancing and why is it important?',
		answer:
			"Rebalancing is the process of periodically adjusting your portfolio to maintain your desired asset allocation. This is important because over time, some parts of your portfolio may grow faster than others, throwing off your desired balance. By rebalancing, you can sell some of your winners and buy more of your losers, which helps you stay on track and maintain your desired risk level. Our product automatically rebalances your portfolio on a regular basis, so you don't have to worry about doing it manually."
	},
	{
		question: 'What types of accounts can I connect to the product?',
		answer:
			'Our product can connect to a wide range of investment accounts, including brokerage accounts, retirement accounts, and college savings accounts. We support many of the most popular financial institutions, including Vanguard, Fidelity, Schwab, and TD Ameritrade, and are constantly adding new integrations. If you have a specific account that you would like to connect, please contact us and we will do our best to accommodate your request.'
	},
	{
		question: 'How frequently is my data updated?',
		answer:
			'Your data is updated on a regular basis, typically daily or weekly, depending on the integration. This ensures that your portfolio information is always up-to-date and accurate. You can view your updated data at any time by logging into your account and viewing your dashboard.'
	},
	{
		question: 'How does the product calculate my returns?',
		answer:
			'Our product uses advanced algorithms to calculate your returns, taking into account factors such as fees, taxes, and other costs. We calculate your returns on a time-weighted basis, which means that we take into account the timing and size of your cash flows, and adjust for any periods when you were not invested in the market. This helps us provide an accurate picture of your investment performance over time.'
	},
	{
		question: 'What investment strategies does the product use?',
		answer:
			'Our product uses a range of investment strategies, including direct indexing, tax loss harvesting, and asset allocation. We also use modern portfolio theory to create portfolios that are designed to maximize your returns while minimizing your risk. Our investment strategies are based on the latest research and data, and are constantly evolving to reflect changes in the market and new opportunities for investment.'
	},
	{
		question: 'How does the product help me minimize taxes?',
		answer:
			'Our product helps you minimize taxes in a number of ways, including direct indexing, tax loss harvesting, and rebalancing. By using these strategies, we help you reduce your tax liability and keep more of your investment gains. We also provide tax reports and other tools to help you better understand your tax situation and make more informed decisions about your investments.'
	},
	{
		question: 'Is there a mobile app available?',
		answer:
			'Yes, we offer a mobile app for iOS and Android devices. Our mobile app provides many of the same features and functions as our web app, allowing you to easily view your portfolio information, track your performance, and make trades on the go. The mobile app is free to download and use, and can be accessed using the same login credentials as the web app.'
	},
	{
		question: 'How much does the product cost?',
		answer:
			'Our product is available on a subscription basis, with pricing starting at $10 per month. We offer a range of pricing options to fit your individual needs and budget, and you can cancel at any time. We believe in transparent and fair pricing, and do not charge any hidden fees or commissions. Please visit our website to learn more about our pricing options and to sign up for a free trial.'
	}
];

export const orgChart = [
	{
		name: 'Emma Reed',
		priorWork:
			'Previously served as a senior executive at Amazon, where she was instrumental in launching several successful products.',
		funFact: 'She once backpacked solo across Southeast Asia for six months.',
		companies: 'Amazon, Microsoft, Goldman Sachs',
		img: 'ceo',
		title: 'CEO'
	},
	{
		name: 'Andrew Chen',
		priorWork:
			'Worked as a software engineer at Google, where he helped develop cutting-edge machine learning algorithms.',
		funFact: "He's a passionate chess player and has competed in several tournaments.",
		companies: 'Google, IBM, Intel',
		img: 'cto',
		title: 'CTO'
	},
	{
		name: 'Olivia Lee',
		priorWork:
			'Formerly served as a finance director at Dropbox, where she helped lead the company through a successful IPO.',
		funFact: "She's an accomplished salsa dancer and has performed in several shows.",
		companies: 'Dropbox, Square, Visa',
		img: 'cfo',
		title: 'CFO'
	},
	{
		name: 'David Park',
		priorWork:
			'Previously worked as a product manager at Microsoft, where he led the development of several key enterprise software solutions.',
		funFact: "He's an avid marathon runner and has completed several races around the world.",
		companies: 'Microsoft, LinkedIn, Cisco',
		img: 'coo',
		title: 'COO'
	},
	{
		name: 'Sarah Smith',
		priorWork:
			'Formerly served as a marketing director at Airbnb, where she helped drive rapid user acquisition and engagement.',
		funFact:
			"She's an amateur photographer and has won several awards for her landscape and nature shots.",
		companies: 'Airbnb, Yelp, Groupon',
		img: 'cmo',
		title: 'CMO'
	},
	{
		name: 'James Lee',
		priorWork:
			'Worked as a senior software engineer at Stripe, where he helped develop innovative payment processing systems.',
		funFact: "He's a passionate foodie and loves trying out new recipes in his spare time.",
		companies: 'Stripe, Square, Twilio',
		img: 'eng1',
		title: 'Sr. Software Engineer'
	},
	{
		name: 'Grace Lee',
		priorWork:
			"Previously served as a software engineer at Facebook, where she worked on improving the platform's recommendation algorithms.",
		funFact: "She's an accomplished classical pianist and has performed in several recitals.",
		companies: 'Facebook, Google, Apple',
		img: 'eng2',
		title: 'Software Engineer'
	},
	{
		name: 'Alex Nicholson',
		priorWork:
			'Worked as a UI/UX designer at a fast-growing design agency, where he created beautiful and user-friendly interfaces for clients.',
		funFact: "He's an amateur graffiti artist and has painted several murals around the city.",
		companies: 'IDEO, Frog Design, Pentagram',
		img: 'ux',
		title: 'UI/UX Designer'
	},
	{
		name: 'Sam Roth',
		priorWork:
			'Previously worked as a frontend developer at a leading e-commerce platform, where he helped optimize website performance and user experience.',
		funFact: "He's a passionate traveler and has visited more than 30 countries around the world.",
		companies: 'Shopify, eBay, Zillow',
		img: 'eng3',
		title: 'Frontend Developer'
	},
	{
		name: 'Daniel Carter',
		priorWork:
			"Formerly served as a backend engineer at a successful startup, where he helped scale the company's infrastructure to handle millions of users.",
		funFact: "He's an avid hiker and loves exploring the great outdoors in his spare time.",
		companies: 'Twilio, SendGrid, MongoDB',
		img: 'eng4',
		title: 'Backend Engineer'
	}
];

export const investors = [
	{
		name: 'John Smith',
		description:
			'An experienced investor with a background in finance and a keen interest in fintech startups.',
		areaOfFocus: 'Seed-stage fintech companies'
	},
	{
		name: 'Jane Lee',
		description:
			'A former executive at a top fintech company with a passion for supporting innovative startups.',
		areaOfFocus: 'Early-stage fintech companies'
	},
	{
		name: 'Digital Capital Partners',
		description:
			'A fintech-focused venture capital firm that invests in disruptive startups with high growth potential.',
		areaOfFocus: 'Fintech companies at any stage'
	},
	{
		name: 'Silverline Ventures',
		description:
			'A boutique investment firm specializing in early-stage fintech startups with a focus on innovative technology.',
		areaOfFocus: 'Seed-stage and early-stage fintech companies'
	},
	{
		name: 'Lighthouse Capital',
		description:
			'A leading venture capital firm that invests in cutting-edge fintech startups with a strong track record of growth.',
		areaOfFocus: 'Mid-stage and late-stage fintech companies'
	}
];
