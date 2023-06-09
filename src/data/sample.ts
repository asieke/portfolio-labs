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

export const fakeTransactions = `"Transactions  for account Direct Index ...321 as of 06/01/2023 06:25:08 PM ET"
"Date","Action","Symbol","Description","Quantity","Price","Fees & Comm","Amount"
"06/01/2023","Qualified Dividend","TJX","TJX COMPANIES INC","","","","$136.67"
"06/01/2023","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$56.72"
"06/01/2023","Qualified Dividend","INTC","INTEL CORP","","","","$116.63"
"06/01/2023","Qualified Dividend","V","VISA INC CLASS A","","","","$98.10"
"06/01/2023","Qualified Dividend","AFL","AFLAC INC","","","","$184.16"
"05/31/2023","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$56.17"
"05/30/2023","Margin Interest","","INTEREST 04/27THRU 05/29","","","","-$7.24"
"05/30/2023","Qualified Dividend","WMT","WALMART INC","","","","$321.05"
"05/26/2023","Qualified Dividend","SBUX","STARBUCKS CORP","","","","$31.27"
"05/25/2023","Qualified Dividend","PAYX","PAYCHEX INC","","","","$110.67"
"05/23/2023","Journal","","TRANSFER FUNDS TO SCHWAB BANK - 440044964722","","","","-$4000.00"
"05/22/2023","Qualified Dividend","APA","APA CORP","","","","$26.63"
"05/19/2023","Qualified Dividend","CAT","CATERPILLAR INC","","","","$200.40"
"05/19/2023","Qualified Dividend","COST","COSTCO WHOLESALE CO","","","","$87.76"
"05/18/2023","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$21.01"
"05/18/2023","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$0.79"
"05/18/2023","Qualified Dividend","AAPL","APPLE INC","","","","$140.88"
"05/18/2023","Buy","AAPL","APPLE INC","636","$174.2785","","-$110841.13"
"05/18/2023","Sell","ADBE","ADOBE INC","50","$360.6826","$0.15","$18033.98"
"05/18/2023","Sell","ORCL","ORACLE CORP","200","$101.30","$0.19","$20259.81"
"05/18/2023","Sell","NVDA","NVIDIA CORP","150","$313.2305","$0.40","$46984.18"
"05/18/2023","Buy","KR","KROGER CO","203","$49.2197","","-$9991.60"
"05/18/2023","Buy","ADM","ARCHER-DANIELS-MIDLN","110","$72.4551","","-$7970.06"
"05/18/2023","Sell","GIS","GENERAL MILLS INC","200","$88.5766","$0.17","$17715.15"
"05/18/2023","Sell","MNST","MONSTER BEVERAGE CORPORA","250","$59.605","$0.16","$14901.09"
"05/18/2023","Sell","PEP","PEPSICO INC","50","$191.435","$0.09","$9571.66"
"05/18/2023","Buy","ISRG","INTUITIVE SURGICAL","51","$310.56","","-$15838.56"
"05/18/2023","Buy","EW","EDWARDS LIFESCIENCES","114","$87.73","","-$10001.22"
"05/18/2023","Sell","UNH","UNITEDHEALTH GRP INC","50","$480.295","$0.20","$24014.55"
"05/16/2023 as of 05/15/2023","Bank Interest","","BANK INT 041623-051523 SCHWAB BANK","","","","$6.08"
"05/15/2023","Qualified Dividend","ABBV","ABBVIE INC","","","","$293.04"
"05/15/2023","Qualified Dividend","MS","MORGAN STANLEY","","","","$276.93"
"05/15/2023","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$31.04"
"05/15/2023","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$94.89"
"05/15/2023","Qualified Dividend","ABT","ABBOTT LABORATORIES","","","","$128.52"
"05/12/2023","Qualified Dividend","GD","GENERAL DYNAMICS CO","","","","$86.68"
"05/11/2023","Qualified Dividend","NUE","NUCOR CORP","","","","$51.00"
"05/10/2023","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$92.40"
"05/10/2023","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$6.11"
"05/10/2023","Qualified Dividend","LEN","LENNAR CORP CLASS A","","","","$122.85"
"05/09/2023","Buy","AES","AES CORP","450","$22.1873","","-$9984.29"
"05/09/2023","Buy","SRE","SEMPRA","64","$155.87","","-$9975.68"
"05/09/2023","Buy","CBRE","CBRE GROUP INC CLASS A","136","$73.31","","-$9970.16"
"05/09/2023","Buy","CCI","CROWN CASTLE INC REIT","170","$117.18","","-$19920.60"
"05/09/2023","Buy","JNJ","JOHNSON & JOHNSON","372","$161.085","","-$59923.62"
"05/09/2023","Buy","C","CITIGROUP INC","214","$46.695","","-$9992.73"
"05/09/2023","Buy","V","VISA INC CLASS A","171","$233.8339","","-$39985.60"
"05/09/2023","Buy","AMZN","AMAZON.COM INC","470","$106.3836","","-$50000.29"
"05/09/2023","Buy","DIS","WALT DISNEY CO","292","$102.3832","","-$29895.89"
"05/09/2023","Buy","AAPL","APPLE INC","587","$171.8923","","-$100900.78"
"05/09/2023","Sell","AMT","AMERN TOWER CORP REIT","141","$193.525","$0.24","$27286.79"
"05/09/2023","Sell","MET","METLIFE INC","388.2103","$52.91","$0.22","$20539.99"
"05/09/2023","Sell","MET","METLIFE INC","1","$52.89","","$52.89"
"05/09/2023","Sell","DHR","DANAHER CORP","140.9987","$234.3701","$0.28","$33045.60"
"05/09/2023","Sell","CEG","CONSTELLATION ENERGY COR","226","$78.8467","$0.17","$17819.18"
"05/09/2023","Sell","PYPL","PAYPAL HOLDINGS INCORPOR","319.1592","$66.5815","$0.22","$21249.88"
"05/09/2023","Sell","HD","HOME DEPOT INC","123","$290.01","$0.30","$35670.93"
"05/09/2023","Sell","JKHY","HENRY JACK & ASSOC","167.004","$152.645","$0.22","$25492.11"
"05/09/2023","Sell","PFE","PFIZER INC","391","$38.555","$0.18","$15074.83"
"05/09/2023","Sell","REM","ISHARES MORTGAGE REAL ESTATE ETF","3,550","$20.92","$1.09","$74264.97"
"05/09/2023","Sell","CVS","CVS HEALTH CORP","260.3012","$70.19","$0.18","$18270.36"
"05/09/2023","Sell","HBAN","HUNTINGTON BANCSHS","1,856.4299","$9.7811","$0.42","$18157.50"
"05/09/2023","Sell","SCHW","CHARLES SCHWAB CORP","318","$47.9721","$0.17","$15254.96"
"05/09/2023","Qualified Dividend","MA","MASTERCARD INC CLASS A","","","","$110.59"
"05/08/2023","Qualified Dividend","DE","DEERE & CO","","","","$105.00"
"05/08/2023","Qualified Dividend","APD","AIR PROD & CHEMICALS","","","","$73.50"
"05/01/2023","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$200.33"
"05/01/2023","Qualified Dividend","VZ","VERIZON COMMUNICATN","","","","$537.01"
"05/01/2023","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$157.48"
"05/01/2023","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$197.69"
"05/01/2023 as of 04/30/2023","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$358.45"
"04/28/2023","Qualified Dividend","HUM","HUMANA INC","","","","$20.59"
"04/28/2023","Cash Dividend","AMT","AMERN TOWER CORP REIT","","","","$219.96"
"04/28/2023","Qualified Dividend","DHR","DANAHER CORP","","","","$38.07"
"04/28/2023","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$77.60"
"04/26/2023","Qualified Dividend","CMCSA","COMCAST CORP CLASS A","","","","$273.18"
"04/26/2023","Qualified Dividend","CSCO","CISCO SYSTEMS INC","","","","$325.65"
"04/24/2023","Qualified Dividend","ORCL","ORACLE CORP","","","","$264.40"
"04/17/2023 as of 04/15/2023","Bank Interest","","BANK INT 031623-041523 SCHWAB BANK","","","","$5.73"
"04/14/2023","Qualified Dividend","MSI","MOTOROLA SOLUTIONS","","","","$169.28"
"04/14/2023","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$56.62"
"04/14/2023","Special Qual Div","COP","CONOCOPHILLIPS","","","","$66.73"
"04/14/2023","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$9.46"
"04/10/2023","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$410.06"
"04/06/2023","Qualified Dividend","SLB","SCHLUMBERGER LTD F","","","","$32.25"
"04/03/2023","Qualified Dividend","FDX","FEDEX CORP","","","","$87.40"
"04/03/2023","Qualified Dividend","HBAN","HUNTINGTON BANCSHS","","","","$287.75"
"04/03/2023","Qualified Dividend","WMT","WALMART INC","","","","$321.05"
"04/03/2023","Qualified Dividend","MCK","MCKESSON CORP","","","","$18.56"
"04/03/2023","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$180.49"
"04/03/2023","Qualified Dividend","NKE","NIKE INC CLASS B","","","","$92.48"
"04/03/2023 as of 04/01/2023","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$87.06"
"03/31/2023","Qualified Dividend","FTV","FORTIVE CORP DISC","","","","$35.58"
"03/31/2023","Cash Dividend","PLD","PROLOGIS INC. REIT","","","","$222.72"
"03/31/2023","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.83"
"03/31/2023","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$181.16"
"03/31/2023","Qualified Dividend","KHC","KRAFT HEINZ CO","","","","$114.60"
"03/31/2023","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$38.24"
"03/31/2023","Qualified Dividend","PEP","PEPSICO INC","","","","$179.37"
"03/31/2023","Qualified Dividend","NDAQ","NASDAQ INC","","","","$39.06"
"03/30/2023","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$13.23"
"03/30/2023","Qualified Dividend","GILD","GILEAD SCIENCES INC","","","","$297.71"
"03/30/2023","Non-Qualified Div","PSA","PUBLIC STORAGE REIT","","","","$150.00"
"03/30/2023","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$62.17"
"03/30/2023","Qualified Dividend","DPZ","DOMINOS PIZZA INC","","","","$66.69"
"03/30/2023","Qualified Dividend","HES","HESS CORP","","","","$42.70"
"03/30/2023","Qualified Dividend","GS","GOLDMAN SACHS GROUP","","","","$245.78"
"03/30/2023","Special Qual Div","EOG","EOG RESOURCES INC","","","","$94.06"
"03/29/2023 as of 03/27/2023","Cash In Lieu","MNST","MONSTER BEVERAGE CORPORA","","","","$40.60"
"03/29/2023","Qualified Dividend","HAL","HALLIBURTON CO HLDG","","","","$22.72"
"03/29/2023","Cash Dividend","REM","ISHARES MORTGAGE REAL ESTATE ETF","","","","$526.34"
"03/29/2023","Qualified Dividend","NVDA","NVIDIA CORP","","","","$21.48"
"03/28/2023","Qualified Dividend","LIN","LINDE PLC F","","","","$66.30"
"03/28/2023 as of 03/27/2023","Stock Split","MNST","MONSTER BEVERAGE CORPORA","290","$52.335","",""
"03/24/2023","Qualified Dividend","WM","WASTE MANAGEMENT INC","","","","$72.17"
"03/24/2023","Qualified Dividend","ELV","ELEVANCE HEALTH INC","","","","$31.58"
"03/24/2023","Qualified Dividend","JKHY","HENRY JACK & ASSOC","","","","$86.84"
"03/24/2023","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$262.04"
"03/23/2023","Qualified Dividend","CI","THE CIGNA GROUP","","","","$92.97"
"03/23/2023","Qualified Dividend","BLK","BLACKROCK INC","","","","$204.48"
"03/23/2023","Qualified Dividend","HD","HOME DEPOT INC","","","","$257.07"
"03/23/2023","Qualified Dividend","WRB","W R BERKLEY CORP","","","","$3.71"
"03/22/2023","Non-Qualified Div","EQIX","EQUINIX INC REIT","","","","$92.07"
"03/22/2023","Qualified Dividend","EA","ELECTRONIC ARTS INC","","","","$44.27"
"03/21/2023","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$355.67"
"03/21/2023 as of 03/20/2023","Qualified Dividend","VMC","VULCAN MATERIALS COM","","","","$38.70"
"03/17/2023","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$7.54"
"03/16/2023","Qualified Dividend","AMAT","APPLIED MATERIALS","","","","$52.26"
"03/16/2023 as of 03/15/2023","Bank Interest","","BANK INT 021623-031523 SCHWAB BANK","","","","$2.79"
"03/15/2023","Qualified Dividend","K","KELLOGG CO","","","","$213.02"
"03/15/2023","Qualified Dividend","NEE","NEXTERA ENERGY INC","","","","$152.36"
"03/15/2023","Qualified Dividend","ED","CONSOLIDATED EDISON","","","","$187.92"
"03/15/2023","Qualified Dividend","MCD","MCDONALDS CORP","","","","$244.73"
"03/15/2023","Qualified Dividend","CTVA","CORTEVA INC","","","","$17.55"
"03/15/2023","Qualified Dividend","NOC","NORTHROP GRUMMAN CO","","","","$64.11"
"03/15/2023","Qualified Dividend","HSY","HERSHEY CO","","","","$122.43"
"03/14/2023","Qualified Dividend","MET","METLIFE INC","","","","$194.61"
"03/13/2023 as of 03/12/2023","Qualified Dividend","MMM","3M CO","","","","$154.50"
"03/10/2023","Qualified Dividend","EXC","EXELON CORP","","","","$190.80"
"03/10/2023","Qualified Dividend","CEG","CONSTELLATION ENERGY COR","","","","$63.73"
"03/10/2023","Qualified Dividend","SHW","SHERWIN WILLIAMS CO","","","","$22.39"
"03/10/2023","Qualified Dividend","HON","HONEYWELL INTL INC","","","","$114.33"
"03/10/2023","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$87.17"
"03/10/2023","Qualified Dividend","LLY","LILLY ELI & CO","","","","$228.47"
"03/10/2023","Special Qual Div","FANG","DIAMONDBACK ENERGY","","","","$56.45"
"03/10/2023","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$15.95"
"03/10/2023","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$21.01"
"03/10/2023","Qualified Dividend","CVX","CHEVRON CORP","","","","$214.65"
"03/10/2023","Qualified Dividend","XOM","EXXON MOBIL CORP","","","","$582.84"
"03/09/2023","Qualified Dividend","MSFT","MICROSOFT CORP","","","","$567.80"
"03/08/2023","Qualified Dividend","PCAR","PACCAR INC","","","","$67.63"
"03/08/2023","Qualified Dividend","AMGN","AMGEN INC.","","","","$183.67"
"03/03/2023","Qualified Dividend","PFE","PFIZER INC","","","","$160.31"
"03/02/2023","Qualified Dividend","TJX","TJX COMPANIES INC","","","","$121.25"
"03/02/2023","Stock Merger","LIN","LINDE PLC F","52","","",""
"03/02/2023","Stock Merger","G5494J103","LINDE PLC XXXMANDATORY MERGER EFF: 03/02/23","-52","","",""
"03/01/2023","Qualified Dividend","V","VISA INC CLASS A","","","","$21.15"
"03/01/2023","Qualified Dividend","INTC","INTEL CORP","","","","$340.55"
"03/01/2023","Qualified Dividend","AFL","AFLAC INC","","","","$184.16"
"03/01/2023","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$56.72"
"02/28/2023","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$56.17"
"02/24/2023","Qualified Dividend","SCHW","CHARLES SCHWAB CORP","","","","$79.50"
"02/24/2023","Qualified Dividend","SBUX","STARBUCKS CORP","","","","$31.27"
"02/23/2023","Qualified Dividend","PAYX","PAYCHEX INC","","","","$98.23"
"02/22/2023","Qualified Dividend","APA","APA CORP","","","","$26.63"
"02/17/2023","Qualified Dividend","COST","COSTCO WHOLESALE CO","","","","$77.44"
"02/17/2023","Qualified Dividend","CAT","CATERPILLAR INC","","","","$200.40"
"02/16/2023 as of 02/15/2023","Bank Interest","","BANK INT 011623-021523 SCHWAB BANK","","","","$1.64"
"02/15/2023","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$30.14"
"02/15/2023","Qualified Dividend","MS","MORGAN STANLEY","","","","$276.93"
"02/15/2023","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$94.89"
"02/15/2023","Qualified Dividend","ABT","ABBOTT LABORATORIES","","","","$128.52"
"02/15/2023","Qualified Dividend","ABBV","ABBVIE INC","","","","$293.04"
"02/13/2023","Qualified Dividend","APD","AIR PROD & CHEMICALS","","","","$68.04"
"02/10/2023","Qualified Dividend","GD","GENERAL DYNAMICS CO","","","","$82.74"
"02/10/2023","Qualified Dividend","LEN","LENNAR CORP CLASS A","","","","$122.85"
"02/10/2023","Qualified Dividend","NUE","NUCOR CORP","","","","$51.00"
"02/10/2023","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$5.30"
"02/09/2023 as of 02/07/2023","Cash In Lieu","PCAR","PACCAR INC","","","","$18.88"
"02/09/2023","Qualified Dividend","MA","MASTERCARD INC CLASS A","","","","$110.59"
"02/08/2023","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$92.40"
"02/08/2023","Qualified Dividend","DE","DEERE & CO","","","","$100.80"
"02/08/2023 as of 02/07/2023","Stock Div Dist","PCAR","PACCAR INC","90","$73.5267","",""
"02/02/2023","Cash Dividend","AMT","AMERN TOWER CORP REIT","","","","$219.96"
"02/01/2023","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$157.48"
"02/01/2023","Qualified Dividend","VZ","VERIZON COMMUNICATN","","","","$537.01"
"02/01/2023","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$197.69"
"01/31/2023","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$77.60"
"01/31/2023","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$358.45"
"01/30/2023","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$200.33"
"01/27/2023","Qualified Dividend","DHR","DANAHER CORP","","","","$35.25"
"01/27/2023","Qualified Dividend","HUM","HUMANA INC","","","","$18.32"
"01/25/2023","Qualified Dividend","CMCSA","COMCAST CORP NEW CLASS A","","","","$254.34"
"01/25/2023","Qualified Dividend","CSCO","CISCO SYSTEMS INC","","","","$317.30"
"01/24/2023","Special Qual Div","WRB","W R BERKLEY CORP","","","","$18.56"
"01/24/2023","Qualified Dividend","ORCL","ORACLE CORP","","","","$211.52"
"01/17/2023 as of 01/15/2023","Bank Interest","","BANK INT 121622-011523 SCHWAB BANK","","","","$4.88"
"01/13/2023","Special Qual Div","COP","CONOCOPHILLIPS","","","","$77.85"
"01/13/2023","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$9.46"
"01/13/2023","Qualified Dividend","MSI","MOTOROLA SOLUTIONS","","","","$169.28"
"01/13/2023","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$56.62"
"01/12/2023","Qualified Dividend","SLB","SCHLUMBERGER LTD F","","","","$22.58"
"01/09/2023","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$410.06"
"01/06/2023","Qualified Dividend","PEP","PEPSICO INC","","","","$179.37"
"01/05/2023","Special Qual Div","PCAR","PACCAR INC","","","","$505.44"
"01/03/2023 as of 01/01/2023","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$87.06"
"01/03/2023","Buy","AMD","ADVANCED MICRO DEVIC","390","$63.9734","","-$24949.63"
"01/03/2023","Buy","INTC","INTEL CORP","933","$26.795","","-$24999.74"
"01/03/2023","Buy","CSCO","CISCO SYSTEMS INC","835","$47.893","","-$39990.66"
"01/03/2023","Buy","MSFT","MICROSOFT CORP","835","$239.466","","-$199954.11"
"01/03/2023","Buy","EQIX","EQUINIX INC REIT","27","$661.7564","","-$17867.42"
"01/03/2023","Buy","PFE","PFIZER INC","195","$51.1364","","-$9971.60"
"01/03/2023","Buy","PG","PROCTER & GAMBLE","33","$150.8457","","-$4977.91"
"01/03/2023","Buy","SBUX","STARBUCKS CORP","59","$100.5344","","-$5931.53"
"01/03/2023","Buy","GOOG","ALPHABET INC. CLASS C","177","$89.945","","-$15920.27"
"01/03/2023","Buy","SHW","SHERWIN WILLIAMS CO","37","$239.01","","-$8843.37"
"01/03/2023","Sell","AAPL","APPLE INC","0.2816","$124.8639","","$35.16"
"01/03/2023","Sell","AAPL","APPLE INC","2,655","$124.8639","$7.59","$331506.06"
"01/03/2023","Qualified Dividend","MCK","MCKESSON CORP","","","","$18.56"
"01/03/2023","Qualified Dividend","FDX","FEDEX CORP","","","","$87.40"
"01/03/2023","Qualified Dividend","HBAN","HUNTINGTON BANCSHS","","","","$287.75"
"01/03/2023","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$170.04"
"01/03/2023","Qualified Dividend","WMT","WALMART INC","","","","$315.41"
"12/30/2022","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.83"
"12/30/2022","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$38.24"
"12/30/2022","Qualified Dividend","DPZ","DOMINOS PIZZA INC","","","","$60.62"
"12/30/2022","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$274.80"
"12/30/2022","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$262.04"
"12/30/2022","Qualified Dividend","FTV","FORTIVE CORP DISC","","","","$35.58"
"12/30/2022","Cash Dividend","PLD","PROLOGIS INC. REIT","","","","$202.24"
"12/30/2022","Qualified Dividend","MTB","M & T BANK CORP","","","","$73.48"
"12/30/2022","Qualified Dividend","KHC","KRAFT HEINZ CO","","","","$114.60"
"12/30/2022","Special Qual Div","EOG","EOG RESOURCES INC","","","","$141.09"
"12/29/2022","Qualified Dividend","GILD","GILEAD SCIENCES INC","","","","$289.77"
"12/29/2022","Qualified Dividend","HES","HESS CORP","","","","$36.60"
"12/29/2022","Non-Qualified Div","PSA","PUBLIC STORAGE REIT","","","","$100.00"
"12/29/2022","Qualified Dividend","GS","GOLDMAN SACHS GROUP","","","","$245.78"
"12/28/2022","Qualified Dividend","WRB","W R BERKLEY CORP","","","","$3.71"
"12/23/2022","Qualified Dividend","BLK","BLACKROCK INC","","","","$199.58"
"12/22/2022","Qualified Dividend","JKHY","HENRY JACK & ASSOC","","","","$81.83"
"12/22/2022","Qualified Dividend","NVDA","NVIDIA CORP","","","","$21.48"
"12/21/2022","Qualified Dividend","CI","CIGNA CORP","","","","$84.66"
"12/21/2022","Qualified Dividend","EA","ELECTRONIC ARTS INC","","","","$44.27"
"12/21/2022","Qualified Dividend","ELV","ELEVANCE HEALTH INC","","","","$27.32"
"12/19/2022","Cash Dividend","REM","ISHARES MORTGAGE REAL ESTATE ETF","","","","$3698.07"
"12/16/2022","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$13.23"
"12/16/2022","Qualified Dividend","NDAQ","NASDAQ INC","","","","$39.06"
"12/16/2022","Qualified Dividend","LIN","LINDE PLC F","","","","$60.84"
"12/16/2022","Qualified Dividend","WM","WASTE MANAGEMENT INC","","","","$67.02"
"12/16/2022","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$6.99"
"12/16/2022 as of 12/15/2022","Bank Interest","","BANK INT 111622-121522 SCHWAB BANK","","","","$3.96"
"12/15/2022","Qualified Dividend","NEE","NEXTERA ENERGY INC","","","","$138.51"
"12/15/2022","Qualified Dividend","ED","CONSOLIDATED EDISON","","","","$183.28"
"12/15/2022","Qualified Dividend","K","KELLOGG CO","","","","$213.02"
"12/15/2022","Qualified Dividend","HSY","HERSHEY CO","","","","$122.43"
"12/15/2022","Qualified Dividend","CTVA","CORTEVA INC","","","","$17.55"
"12/15/2022","Qualified Dividend","MCD","MCDONALDS CORP","","","","$244.73"
"12/15/2022","Qualified Dividend","AMAT","APPLIED MATERIALS","","","","$52.26"
"12/14/2022","Qualified Dividend","MET","METLIFE INC","","","","$194.61"
"12/14/2022","Qualified Dividend","NOC","NORTHROP GRUMMAN CORP","","","","$64.11"
"12/13/2022","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$355.67"
"12/12/2022","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$87.17"
"12/12/2022","Qualified Dividend","MMM","3M CO","","","","$153.47"
"12/12/2022","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$14.36"
"12/12/2022","Qualified Dividend","CVX","CHEVRON CORP","","","","$201.85"
"12/09/2022","Reinvest Dividend","SWPPX","SCHWAB S&P 500 INDEX","","","","$6.01"
"12/09/2022","Reinvest Shares","SWPPX","SCHWAB S&P 500 INDEX","0.1","$60.16","","-$6.01"
"12/09/2022","Qualified Dividend","EXC","EXELON CORP","","","","$178.88"
"12/09/2022","Qualified Dividend","CEG","CONSTELLATION ENERGY COR","","","","$31.87"
"12/09/2022","Qualified Dividend","LLY","LILLY ELI & CO","","","","$198.14"
"12/09/2022","Qualified Dividend","XOM","EXXON MOBIL CORP","","","","$582.84"
"12/08/2022","Qualified Dividend","AMGN","AMGEN INC.","","","","$167.29"
"12/08/2022","Buy","AMT","AMERN TOWER CORP REIT","141","$211.175","","-$29775.68"
"12/08/2022","Buy","PLD","PROLOGIS INC. REIT","256","$117.085","","-$29973.76"
"12/08/2022","Buy","PFE","PFIZER INC","196","$50.7987","","-$9956.55"
"12/08/2022","Buy","V","VISA INC CLASS A","47","$209.5471","","-$9848.71"
"12/08/2022","Buy","HAL","HALLIBURTON CO HLDG","142","$35.0864","","-$4982.27"
"12/08/2022","Buy","NKE","NIKE INC CLASS B","272","$110.1591","","-$29963.28"
"12/08/2022","Buy","HD","HOME DEPOT INC","123","$324.10","","-$39864.30"
"12/08/2022","Buy","GOOG","ALPHABET INC. CLASS C","1,165","$94.3895","","-$109963.77"
"12/08/2022","Sell","MTB","M & T BANK CORP","0.235","$149.1312","","$35.05"
"12/08/2022","Sell","MTB","M & T BANK CORP","61","$149.1312","$0.21","$9096.79"
"12/08/2022","Sell","TTWO","TAKE TWO INTERACTV","0.6228","$99.735","","$62.11"
"12/08/2022","Sell","TTWO","TAKE TWO INTERACTV","233","$99.735","$0.53","$23237.73"
"12/08/2022","Sell","CMA","COMERICA INCORPORATE","0.3119","$65.3202","","$20.37"
"12/08/2022","Sell","CMA","COMERICA INCORPORATE","27","$65.3202","$0.04","$1763.61"
"12/08/2022","Sell","DIS","WALT DISNEY CO","632","$92.66","$1.34","$58559.78"
"12/08/2022","Sell","CRM","SALESFORCE INC","305","$130.055","$0.91","$39665.87"
"12/08/2022","Sell","AMZN","AMAZON.COM INC","0.6177","$90.41","","$55.85"
"12/08/2022","Sell","AMZN","AMAZON.COM INC","1,465","$90.41","$3.03","$132447.62"
"12/06/2022","Qualified Dividend","PCAR","PACCAR INC","","","","$66.79"
"12/05/2022","Qualified Dividend","VMC","VULCAN MATERIALS COM","","","","$36.00"
"12/02/2022","Qualified Dividend","HON","HONEYWELL INTL INC","","","","$114.33"
"12/01/2022","Qualified Dividend","AFL","AFLAC INC","","","","$175.40"
"12/01/2022","Qualified Dividend","TJX","TJX COMPANIES INC","","","","$121.25"
"12/01/2022","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$56.72"
"11/30/2022","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$74.16"
"11/30/2022","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$56.17"
"11/28/2022 as of 11/25/2022","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$19.69"
"11/25/2022","Qualified Div Adj","FANG","DIAMONDBACK ENERGY","","","","-$39.65"
"11/25/2022","Special Qual Div","FANG","DIAMONDBACK ENERGY","","","","$39.65"
"11/25/2022","Qualified Dividend","SCHW","CHARLES SCHWAB CORP","","","","$69.96"
"11/25/2022","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$39.65"
"11/23/2022","Qualified Dividend","PAYX","PAYCHEX INC","","","","$98.23"
"11/22/2022","Qualified Dividend","APA","APA CORP","","","","$26.63"
"11/18/2022","Qualified Dividend","CAT","CATERPILLAR INC","","","","$200.40"
"11/16/2022 as of 11/15/2022","Bank Interest","","BANK INT 101622-111522 SCHWAB BANK","","","","$3.33"
"11/15/2022","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$94.89"
"11/15/2022","Qualified Dividend","ABBV","ABBVIE INC","","","","$279.18"
"11/15/2022","Qualified Dividend","MS","MORGAN STANLEY","","","","$276.93"
"11/14/2022","Qualified Dividend","APD","AIR PROD & CHEMICALS","","","","$68.04"
"11/10/2022","Qualified Dividend","NUE","NUCOR CORP","","","","$50.00"
"11/10/2022","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$5.30"
"11/10/2022","Qualified Dividend","COST","COSTCO WHOLESALE CO","","","","$77.44"
"11/10/2022","Qualified Dividend","GD","GENERAL DYNAMICS CO","","","","$82.74"
"11/10/2022","Qualified Dividend","AAPL","APPLE INC","","","","$610.71"
"11/09/2022","Qualified Dividend","MA","MASTERCARD INC CLASS A","","","","$95.07"
"11/08/2022","Qualified Dividend","DE","DEERE & CO","","","","$94.92"
"11/02/2022","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$92.40"
"11/01/2022","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$143.17"
"11/01/2022","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$197.69"
"10/31/2022","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$200.33"
"10/31/2022","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$70.55"
"10/31/2022","Cash Merger","90184L102","TWITTER INC XXXMANDATORY MERGER EFF: 10/28/22","","","","$7854.63"
"10/31/2022","Cash Merger Adj","90184L102","TWITTER INC XXXMANDATORY MERGER EFF: 10/28/22","-144.9193","","",""
"10/31/2022","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$358.45"
"10/28/2022","Qualified Dividend","DHR","DANAHER CORP","","","","$35.25"
"10/28/2022","Qualified Dividend","HUM","HUMANA INC","","","","$18.32"
"10/27/2022","Qualified Dividend","LEN","LENNAR CORP CLASS A","","","","$122.85"
"10/26/2022","Buy","SNPS","SYNOPSYS INC","67","$296.8344","","-$19887.90"
"10/26/2022","Buy","AKAM","AKAMAI TECHNOLOGIES INC","113","$88.105","","-$9955.87"
"10/26/2022","Buy","CRM","SALESFORCE INC","305","$163.5492","","-$49882.51"
"10/26/2022","Buy","ORCL","ORACLE CORP","660","$75.593","","-$49891.38"
"10/26/2022","Buy","ORCL","ORACLE CORP","1","$75.593","","-$75.59"
"10/26/2022","Buy","AAPL","APPLE INC","464","$150.6099","","-$69882.99"
"10/26/2022","Buy","CEG","CONSTELLATION ENERGY COR","226","$88.425","","-$19984.05"
"10/26/2022","Buy","ED","CONSOLIDATED EDISON","232","$86.125","","-$19981.00"
"10/26/2022","Buy","PCG","P G & E CORP","1,316","$15.185","","-$19983.46"
"10/26/2022","Buy","EXC","EXELON CORP","299","$37.6799","","-$11266.29"
"10/26/2022","Buy","EXC","EXELON CORP","231","$37.6799","","-$8704.06"
"10/26/2022","Buy","PSA","PUBLIC STORAGE REIT","50","$299.2399","","-$14962.00"
"10/26/2022","Buy","HON","HONEYWELL INTL INC","26","$191.115","","-$4968.99"
"10/26/2022","Buy","ABT","ABBOTT LABORATORIES","252","$99.01","","-$24950.52"
"10/26/2022","Buy","NVDA","NVIDIA CORP","537","$130.375","","-$70011.38"
"10/26/2022","Buy","CMCSA","COMCAST HOLDINGS INC CLASS A","942","$31.8136","","-$29968.41"
"10/26/2022","Buy","VZ","VERIZON COMMUNICATN","823","$36.4383","","-$29988.72"
"10/26/2022","Buy","DIS","WALT DISNEY CO","283","$105.5872","","-$29881.18"
"10/26/2022","Buy","EA","ELECTRONIC ARTS INC","233","$128.30","","-$29893.90"
"10/26/2022","Buy","NFLX","NETFLIX INC","100","$298.22","","-$29822.00"
"10/26/2022","Sell","EMN","EASTMAN CHEMICAL CO","87","$75.4686","$0.15","$6565.62"
"10/26/2022","Sell","ATVI","ACTIVISION BLIZZARD","0.5874","$72.5445","","$42.61"
"10/26/2022","Sell","ATVI","ACTIVISION BLIZZARD","325","$72.5445","$0.54","$23576.42"
"10/26/2022","Sell","TMO","THERMO FISHER SCNTFC","2","$511.834","$0.02","$1023.65"
"10/26/2022","Sell","TMO","THERMO FISHER SCNTFC","21","$511.3301","$0.25","$10737.68"
"10/26/2022","Sell","TMO","THERMO FISHER SCNTFC","50","$511.76","$0.59","$25587.41"
"10/26/2022","Sell","SO","SOUTHERN CO","282","$65.581","$0.42","$18493.42"
"10/26/2022","Sell","SRE","SEMPRA","126","$146.2314","$0.42","$18424.74"
"10/26/2022","Sell","MSFT","MICROSOFT CORP","0.5581","$231.08","","$128.97"
"10/26/2022","Sell","MSFT","MICROSOFT CORP","921","$231.08","$4.87","$212819.81"
"10/26/2022","Sell","CHRW","C H ROBINSON WORLDWD","0.3441","$95.085","","$32.72"
"10/26/2022","Sell","CHRW","C H ROBINSON WORLDWD","144","$95.085","$0.31","$13691.93"
"10/26/2022","Sell","ES","EVERSOURCE ENERGY","245","$74.1169","$0.42","$18158.22"
"10/26/2022","Sell","NI","NISOURCE INC 00500","0.3495","$25.2106","","$8.81"
"10/26/2022","Sell","NI","NISOURCE INC 00500","356","$25.2106","$0.21","$8974.76"
"10/26/2022","Sell","GOOG","ALPHABET INC. CLASS C","0.336","$96.8401","","$32.54"
"10/26/2022","Sell","GOOG","ALPHABET INC. CLASS C","41","$96.8401","$0.09","$3970.35"
"10/26/2022","Sell","GOOG","ALPHABET INC. CLASS C","1,740","$96.8401","$3.86","$168497.91"
"10/20/2022","Qualified Dividend","XEL","XCEL ENERGY INC","","","","$68.41"
"10/17/2022","Qualified Dividend","ECL","ECOLAB INC","","","","$46.92"
"10/17/2022 as of 10/15/2022","Bank Interest","","BANK INT 091622-101522 SCHWAB BANK","","","","$6.24"
"10/14/2022","Qualified Dividend","MDT","MEDTRONIC PLC F","","","","$180.20"
"10/14/2022","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$56.62"
"10/14/2022","Qualified Dividend","MSI","MOTOROLA SOLUTIONS","","","","$151.97"
"10/14/2022","Qualified Dividend","TMO","THERMO FISHER SCNTFC","","","","$21.90"
"10/14/2022","Special Qual Div","COP","CONOCOPHILLIPS","","","","$155.71"
"10/14/2022","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$9.46"
"10/14/2022","Non-Qualified Div","O","REALTY INCOME CORP REIT","","","","$132.61"
"10/07/2022","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$387.59"
"10/04/2022","Buy","ES","EVERSOURCE ENERGY","245","$81.5157","","-$19971.35"
"10/04/2022","Buy","SRE","SEMPRA","126","$158.086","","-$19918.84"
"10/04/2022","Buy","SO","SOUTHERN CO","282","$70.8293","","-$19973.86"
"10/04/2022","Buy","AMAT","APPLIED MATERIALS","201","$89.4448","","-$17978.40"
"10/04/2022","Buy","ADBE","ADOBE INC","102","$293.5527","","-$29942.38"
"10/04/2022","Buy","REM","ISHARES MORTGAGE REAL ESTATE ETF","1","$22.5699","","-$22.57"
"10/04/2022","Buy","REM","ISHARES MORTGAGE REAL ESTATE ETF","601","$22.5677","","-$13563.19"
"10/04/2022","Buy","REM","ISHARES MORTGAGE REAL ESTATE ETF","100","$22.565","","-$2256.50"
"10/04/2022","Buy","REM","ISHARES MORTGAGE REAL ESTATE ETF","2,398","$22.5699","","-$54122.62"
"10/04/2022","Buy","REM","ISHARES MORTGAGE REAL ESTATE ETF","450","$22.5699","","-$10156.46"
"10/04/2022","Buy","FDX","FEDEX CORP","76","$157.185","","-$11946.06"
"10/04/2022","Buy","MMM","3M CO","103","$115.7296","","-$11920.15"
"10/04/2022","Buy","ABBV","ABBVIE INC","198","$141.09","","-$27935.82"
"10/04/2022","Buy","SCHW","CHARLES SCHWAB CORP","318","$75.385","","-$23972.43"
"10/04/2022","Buy","COST","COSTCO WHOLESALE CO","82","$487.02","","-$39935.64"
"10/04/2022","Buy","KHC","KRAFT HEINZ CO","55","$34.56","","-$1900.80"
"10/04/2022","Buy","KHC","KRAFT HEINZ CO","100","$34.56","","-$3456.00"
"10/04/2022","Buy","KHC","KRAFT HEINZ CO","5","$34.56","","-$172.80"
"10/04/2022","Buy","KHC","KRAFT HEINZ CO","100","$34.56","","-$3456.00"
"10/04/2022","Buy","DIS","WALT DISNEY CO","349","$100.205","","-$34971.55"
"10/04/2022","Buy","LIN","LINDE PLC F","52","$285.78","","-$14860.56"
"10/04/2022","Sell","ECL","ECOLAB INC","92","$153.601","$0.32","$14130.97"
"10/04/2022","Sell","PLD","PROLOGIS INC. REIT","177","$105.975","$0.43","$18757.15"
"10/04/2022","Sell","HSIC","SCHEIN HENRY INC","108","$68.976","$0.17","$7449.24"
"10/04/2022","Sell","WEC","W E C ENERGY GROUP INC","0.7523","$93.2001","","$70.11"
"10/04/2022","Sell","WEC","W E C ENERGY GROUP INC","100","$93.2001","$0.21","$9319.80"
"10/04/2022","Sell","TAP","MOLSON COORS BEVERAGE CLCLASS B","0.0579","$49.585","","$2.87"
"10/04/2022","Sell","TAP","MOLSON COORS BEVERAGE CLCLASS B","473","$49.585","$0.54","$23453.17"
"10/04/2022","Sell","MDT","MEDTRONIC PLC F","265","$84.17","$0.51","$22304.54"
"10/04/2022","Sell","XEL","XCEL ENERGY INC","0.3337","$66.3013","","$22.12"
"10/04/2022","Sell","XEL","XCEL ENERGY INC","140","$66.3013","$0.21","$9281.97"
"10/04/2022","Sell","AEP","AMER ELECTRIC PWR CO","0.8694","$90.234","","$78.45"
"10/04/2022","Sell","AEP","AMER ELECTRIC PWR CO","102","$90.234","$0.21","$9203.66"
"10/04/2022","Sell","O","REALTY INCOME CORP REIT","0.7173","$60.725","","$43.56"
"10/04/2022","Sell","O","REALTY INCOME CORP REIT","534","$60.725","$0.74","$32426.41"
"10/04/2022","Sell","KO","THE COCA-COLA CO","0.1984","$57.48","","$11.40"
"10/04/2022","Sell","KO","THE COCA-COLA CO","417","$57.48","$0.55","$23968.61"
"10/04/2022","Sell","D","DOMINION ENERGY INC","128","$71.611","$0.21","$9166.00"
"10/04/2022","Sell","UNP","UNION PACIFIC CORP","0.1289","$203.64","","$26.25"
"10/04/2022","Sell","UNP","UNION PACIFIC CORP","158","$203.64","$0.74","$32174.38"
"10/04/2022","Sell","AMT","AMERN TOWER CORP REIT","0.6386","$222.89","","$142.34"
"10/04/2022","Sell","AMT","AMERN TOWER CORP REIT","185","$222.89","$0.94","$41233.71"
"10/04/2022","Sell","AEE","AMEREN CORP","0.1893","$83.737","","$15.85"
"10/04/2022","Sell","AEE","AMEREN CORP","109","$83.737","$0.21","$9127.12"
"10/04/2022","Sell","DUK","DUKE ENERGY CORP","138","$97.0401","$0.31","$13391.22"
"10/04/2022","Sell","DUK","DUKE ENERGY CORP","6","$97.0401","$0.01","$582.23"
"10/04/2022","Sell","DUK","DUKE ENERGY CORP","100","$97.055","$0.22","$9705.28"
"10/04/2022","Sell","C","CITIGROUP INC","0.4751","$44.1967","","$21.00"
"10/04/2022","Sell","C","CITIGROUP INC","502","$44.1967","$0.51","$22186.23"
"10/03/2022 as of 10/01/2022","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$72.43"
"10/03/2022","Qualified Dividend","NKE","NIKE INC CLASS B","","","","$68.22"
"10/03/2022","Qualified Dividend","CHRW","C H ROBINSON WORLDWD","","","","$79.39"
"10/03/2022","Qualified Dividend","WRB","W R BERKLEY CORP","","","","$3.71"
"10/03/2022","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$170.04"
"10/03/2022 as of 10/01/2022","Qualified Dividend","CMA","COMERICA INCORPORATE","","","","$18.57"
"10/03/2022","Qualified Dividend","HBAN","HUNTINGTON BANCSHS","","","","$287.75"
"10/03/2022","Qualified Dividend","KO","THE COCA-COLA CO","","","","$183.57"
"10/03/2022","Cash Merger","177376100","CITRIX SYSTEMS INC XXXMANDATORY MERGER EFF: 10/03/22","","","","$31509.07"
"10/03/2022","Cash Merger Adj","177376100","CITRIX SYSTEMS INC XXXMANDATORY MERGER EFF: 10/03/22","-302.9718","","",""
"10/03/2022","Qualified Dividend","MCK","MCKESSON CORP","","","","$18.56"
"09/30/2022","Qualified Dividend","NDAQ","NASDAQ INC","","","","$39.06"
"09/30/2022","Qualified Dividend","UNP","UNION PACIFIC CORP","","","","$205.57"
"09/30/2022","Qualified Dividend","AEE","AMEREN CORP","","","","$64.42"
"09/30/2022","Qualified Dividend","DPZ","DOMINOS PIZZA INC","","","","$60.62"
"09/30/2022","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$315.51"
"09/30/2022","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$38.24"
"09/30/2022","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.83"
"09/30/2022","Qualified Dividend","HES","HESS CORP","","","","$36.60"
"09/30/2022","Non-Qualified Div","DLR","DIGITAL REALTY TRUST REIT","","","","$146.20"
"09/30/2022","Qualified Dividend","MTB","M & T BANK CORP","","","","$73.48"
"09/30/2022","Qualified Dividend","FTV","FORTIVE CORP DISC","","","","$35.58"
"09/30/2022","Qualified Dividend","PEP","PEPSICO INC","","","","$179.37"
"09/29/2022","Margin Interest","","INTEREST 08/30THRU 09/28","","","","-$4.11"
"09/29/2022","Qualified Dividend","GILD","GILEAD SCIENCES INC","","","","$289.77"
"09/29/2022","Non-Qualified Div","PSA","PUBLIC STORAGE REIT","","","","$58.00"
"09/29/2022","Qualified Dividend","GS","GOLDMAN SACHS GROUP","","","","$245.78"
"09/29/2022","Special Qual Div","EOG","EOG RESOURCES INC","","","","$141.09"
"09/29/2022","Qualified Dividend","JKHY","HENRY JACK & ASSOC","","","","$81.83"
"09/23/2022","Qualified Dividend","KHC","KRAFT HEINZ CO","","","","$10.60"
"09/23/2022","Qualified Dividend","ELV","ELEVANCE HEALTH INC","","","","$27.32"
"09/23/2022","Qualified Dividend","BLK","BLACKROCK INC","","","","$199.58"
"09/23/2022","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$244.57"
"09/23/2022","Qualified Dividend","WM","WASTE MANAGEMENT INC","","","","$67.02"
"09/22/2022","Qualified Dividend","CI","CIGNA CORP","","","","$84.66"
"09/22/2022","Qualified Dividend","QCOM","QUALCOMM INC","","","","$286.46"
"09/20/2022","Qualified Dividend","D","DOMINION ENERGY INC","","","","$85.44"
"09/20/2022","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$355.67"
"09/19/2022","Sell","META","META PLATFORMS INC CLASS A","0.3709","$146.755","","$54.43"
"09/19/2022","Sell","META","META PLATFORMS INC CLASS A","306","$146.755","$1.03","$44906.00"
"09/16/2022","Qualified Dividend","LIN","LINDE PLC F","","","","$133.62"
"09/16/2022","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$6.99"
"09/16/2022","Qualified Dividend","MCD","MCDONALDS CORP","","","","$140.77"
"09/16/2022","Qualified Dividend","DUK","DUKE ENERGY CORP","","","","$151.76"
"09/16/2022","Buy","HON","HONEYWELL INTL INC","84","$175.85","","-$14771.40"
"09/16/2022","Buy","HON","HONEYWELL INTL INC","1","$175.85","","-$175.85"
"09/16/2022","Buy","UAL","UNITED AIRLINES HLDGS","528","$37.76","","-$19937.28"
"09/16/2022","Buy","UAL","UNITED AIRLINES HLDGS","1","$37.76","","-$37.76"
"09/16/2022","Buy","AAPL","APPLE INC","228","$149.02","","-$33976.56"
"09/16/2022","Buy","PLD","PROLOGIS INC. REIT","177","$112.568","","-$19924.54"
"09/16/2022","Buy","CAT","CATERPILLAR INC","167","$179.14","","-$29916.38"
"09/16/2022","Buy","BA","BOEING CO","69","$143.865","","-$9926.69"
"09/16/2022","Buy","DE","DEERE & CO","84","$352.6541","","-$29622.94"
"09/16/2022","Buy","REGN","REGENERON PHARMS INC","22","$704.85","","-$15506.70"
"09/16/2022","Buy","MDT","MEDTRONIC PLC F","265","$90.308","","-$23931.62"
"09/16/2022","Buy","MA","MASTERCARD INC CLASS A","191","$313.2487","","-$59830.50"
"09/16/2022","Buy","SLB","SCHLUMBERGER LTD F","129","$38.465","","-$4961.99"
"09/16/2022","Buy","WMT","WALMART INC","150","$132.81","","-$19921.50"
"09/16/2022","Buy","LOW","LOWES COMPANIES INC","88","$191.495","","-$16851.56"
"09/16/2022","Buy","MCD","MCDONALDS CORP","59","$253.98","","-$14984.82"
"09/16/2022","Buy","EMN","EASTMAN CHEMICAL CO","87","$79.82","","-$6944.34"
"09/16/2022","Buy","NUE","NUCOR CORP","100","$117.225","","-$11722.50"
"09/16/2022","Sell","DOW","DOW INC","104","$46.395","$0.11","$4824.97"
"09/16/2022","Sell","DOW","DOW INC","200","$46.395","$0.21","$9278.79"
"09/16/2022","Sell","CSCO","CISCO SYSTEMS INC","0.7108","$42.8913","","$30.49"
"09/16/2022","Sell","CSCO","CISCO SYSTEMS INC","1,126","$42.8913","$1.11","$48294.49"
"09/16/2022","Sell","QCOM","QUALCOMM INC","0.9504","$124.6824","","$118.50"
"09/16/2022","Sell","QCOM","QUALCOMM INC","381","$124.6824","$1.09","$47502.90"
"09/16/2022","Sell","MDLZ","MONDELEZ INTL CLASS A","0.966","$59.795","","$57.76"
"09/16/2022","Sell","MDLZ","MONDELEZ INTL CLASS A","395","$59.795","$0.54","$23618.49"
"09/16/2022","Sell","NSC","NORFOLK SOUTHERN CO","0.3014","$233.675","","$70.43"
"09/16/2022","Sell","NSC","NORFOLK SOUTHERN CO","30","$233.675","$0.16","$7010.09"
"09/16/2022","Sell","NSC","NORFOLK SOUTHERN CO","11","$233.675","$0.06","$2570.37"
"09/16/2022","Sell","NSC","NORFOLK SOUTHERN CO","19","$233.675","$0.10","$4439.73"
"09/16/2022","Sell","UPS","UNITED PARCEL SRVC CLASS B","184","$177.86","$0.75","$32725.49"
"09/16/2022","Sell","HD","HOME DEPOT INC","0.7311","$273.5062","","$199.96"
"09/16/2022","Sell","HD","HOME DEPOT INC","89","$273.5062","$0.56","$24341.49"
"09/16/2022","Sell","AMD","ADVANCED MICRO DEVIC","20","$76.0707","$0.03","$1521.38"
"09/16/2022","Sell","V","VISA INC CLASS A","0.4999","$193.265","","$96.61"
"09/16/2022","Sell","V","VISA INC CLASS A","312","$193.265","$1.38","$60297.30"
"09/16/2022","Sell","PSA","PUBLIC STORAGE REIT","29","$310.8659","$0.21","$9014.90"
"09/16/2022","Sell","GE","GENERAL ELECTRIC CO","208","$66.0839","$0.31","$13745.14"
"09/16/2022","Sell","OTIS","OTIS WORLDWIDE CORP","0.9622","$68.04","","$65.47"
"09/16/2022","Sell","OTIS","OTIS WORLDWIDE CORP","198","$68.04","$0.31","$13471.61"
"09/16/2022","Sell","DLR","DIGITAL REALTY TRUST REIT","0.8331","$111.825","","$93.16"
"09/16/2022","Sell","DLR","DIGITAL REALTY TRUST REIT","119","$111.825","$0.30","$13306.88"
"09/16/2022 as of 09/15/2022","Bank Interest","","BANK INT 081622-091522 SCHWAB BANK","","","","$0.68"
"09/15/2022","Qualified Dividend","K","KELLOGG CO","","","","$213.02"
"09/15/2022","Qualified Dividend","NEE","NEXTERA ENERGY INC","","","","$138.51"
"09/15/2022","Qualified Dividend","HD","HOME DEPOT INC","","","","$170.49"
"09/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$132.34"
"09/15/2022","Qualified Dividend","HSY","HERSHEY CO","","","","$122.43"
"09/15/2022","Qualified Dividend","CTVA","CORTEVA INC","","","","$17.55"
"09/15/2022","Qualified Dividend","TAP","MOLSON COORS BEVERAGE CLCLASS B","","","","$179.76"
"09/14/2022","Qualified Dividend","MET","METLIFE INC","","","","$194.61"
"09/14/2022","Qualified Dividend","NOC","NORTHROP GRUMMAN CORP","","","","$64.11"
"09/13/2022","Buy","META","META PLATFORMS INC CLASS A","54","$155.97","","-$8422.38"
"09/13/2022","Buy","GE","GENERAL ELECTRIC CO","208","$71.9814","","-$14972.13"
"09/13/2022","Buy","HSIC","SCHEIN HENRY INC","108","$73.41","","-$7928.28"
"09/13/2022","Buy","ILMN","ILLUMINA INC","49","$201.09","","-$9853.41"
"09/13/2022","Buy","AMGN","AMGEN INC.","43","$231.407","","-$9950.50"
"09/13/2022","Sell","INCY","INCYTE CORP","0.6944","$69.16","","$48.02"
"09/13/2022","Sell","INCY","INCYTE CORP","136","$69.16","$0.22","$9405.54"
"09/13/2022","Sell","RTX","RAYTHEON TECHNOLOGIES CO","0.8799","$85.5697","","$75.29"
"09/13/2022","Sell","RTX","RAYTHEON TECHNOLOGIES CO","395","$85.5697","$0.77","$33799.26"
"09/12/2022","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$12.76"
"09/12/2022 as of 09/10/2022","Qualified Dividend","OTIS","OTIS WORLDWIDE CORP","","","","$57.70"
"09/12/2022","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$67.41"
"09/12/2022","Qualified Dividend","CVX","CHEVRON CORP","","","","$201.85"
"09/12/2022 as of 09/10/2022","Qualified Dividend","IBM","IBM CORP","","","","$612.10"
"09/09/2022","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$13.23"
"09/09/2022","Qualified Dividend","AEP","AMER ELECTRIC PWR CO","","","","$80.24"
"09/09/2022","Qualified Dividend","SHW","SHERWIN WILLIAMS CO","","","","$36.60"
"09/09/2022","Qualified Dividend","LUMN","LUMEN TECHNOLOGIES INC","","","","$558.47"
"09/09/2022","Qualified Dividend","LLY","LILLY ELI & CO","","","","$150.12"
"09/09/2022","Qualified Dividend","XOM","EXXON MOBIL CORP","","","","$563.63"
"09/08/2022","Qualified Dividend","MSFT","MICROSOFT CORP","","","","$377.93"
"09/08/2022","Qualified Dividend","RTX","RAYTHEON TECHNOLOGIES CO","","","","$217.73"
"09/08/2022","Qualified Dividend","AMGN","AMGEN INC.","","","","$83.87"
"09/08/2022","Qualified Dividend","ADI","ANALOG DEVICES INC","","","","$188.44"
"09/07/2022","Qualified Dividend","PCAR","PACCAR INC","","","","$61.38"
"09/06/2022","Qualified Dividend","WMT","WALMART INC","","","","$231.41"
"09/06/2022","Qualified Dividend","PFE","PFIZER INC","","","","$366.29"
"09/06/2022","Qualified Dividend","JNJ","JOHNSON & JOHNSON","","","","$557.36"
"09/02/2022","Buy","MSFT","MICROSOFT CORP","312","$256.015","","-$79876.68"
"09/02/2022","Buy","AAPL","APPLE INC","512","$156.0399","","-$79892.43"
"09/02/2022","Buy","DUK","DUKE ENERGY CORP","93","$107.3591","","-$9984.40"
"09/02/2022","Buy","PSA","PUBLIC STORAGE REIT","29","$334.91","","-$9712.39"
"09/02/2022","Buy","BA","BOEING CO","65","$153.4499","","-$9974.24"
"09/02/2022","Buy","TMO","THERMO FISHER SCNTFC","73","$545.36","","-$39811.28"
"09/02/2022","Buy","LLY","LILLY ELI & CO","49","$303.46","","-$14869.54"
"09/02/2022","Buy","CI","CIGNA CORP","34","$288.015","","-$9792.51"
"09/02/2022","Buy","MRK","MERCK & CO. INC.","115","$86.4899","","-$9946.34"
"09/02/2022","Buy","UNH","UNITEDHEALTH GRP INC","38","$518.245","","-$19693.31"
"09/02/2022","Buy","AMZN","AMAZON.COM INC","353","$127.12","","-$44873.36"
"09/02/2022","Buy","GOOG","ALPHABET INC. CLASS C","229","$108.76","","-$24906.04"
"09/02/2022","Buy","VMC","VULCAN MATERIALS COM","90","$165.8283","","-$14924.55"
"09/02/2022","Buy","DOW","DOW INC","304","$49.24","","-$14968.96"
"09/02/2022","Buy","ECL","ECOLAB INC","92","$162.1669","","-$14919.35"
"09/02/2022","Sell","KMX","CARMAX INC","0.48","$87.46","","$41.98"
"09/02/2022","Sell","KMX","CARMAX INC","271","$87.46","$0.54","$23701.12"
"09/02/2022","Sell","IBM","IBM CORP","0.9709","$127.8917","","$124.17"
"09/02/2022","Sell","IBM","IBM CORP","370","$127.8917","$1.08","$47318.85"
"09/02/2022","Sell","SHW","SHERWIN WILLIAMS CO","61","$232.2005","$0.32","$14163.91"
"09/02/2022","Sell","NKE","NIKE INC CLASS B","0.6747","$105.8303","","$71.40"
"09/02/2022","Sell","NKE","NIKE INC CLASS B","223","$105.8303","$0.54","$23599.62"
"09/02/2022","Sell","JNJ","JOHNSON & JOHNSON","0.2415","$163.545","","$39.50"
"09/02/2022","Sell","JNJ","JOHNSON & JOHNSON","493","$163.545","$1.85","$80625.84"
"09/02/2022","Sell","CRM","SALESFORCE INC","0.2336","$154.21","","$36.02"
"09/02/2022","Sell","CRM","SALESFORCE INC","308","$154.21","$1.09","$47495.59"
"09/02/2022","Sell","NVDA","NVIDIA CORP","0.1057","$136.7419","","$14.45"
"09/02/2022","Sell","NVDA","NVIDIA CORP","69","$136.7419","$0.22","$9434.97"
"09/02/2022","Sell","LIN","LINDE PLC F","0.2034","$278.895","","$56.73"
"09/02/2022","Sell","LIN","LINDE PLC F","114","$278.895","$0.73","$31793.30"
"09/02/2022","Sell","WAT","WATERS CORP","0.9246","$299.1497","$0.01","$276.58"
"09/02/2022","Sell","WAT","WATERS CORP","25","$299.1497","$0.17","$7478.57"
"09/02/2022","Sell","WAT","WATERS CORP","5","$299.1497","$0.03","$1495.72"
"09/02/2022","Sell","DGX","QUEST DIAGNOSTIC INC","0.8945","$125.16","","$111.96"
"09/02/2022","Sell","DGX","QUEST DIAGNOSTIC INC","73","$125.16","$0.21","$9136.47"
"09/02/2022","Sell","ADI","ANALOG DEVICES INC","0.9418","$148.36","","$139.73"
"09/02/2022","Sell","ADI","ANALOG DEVICES INC","247","$148.36","$0.84","$36644.08"
"09/02/2022","Sell","PFE","PFIZER INC","915","$46.005","$0.96","$42093.62"
"09/02/2022","Sell","PFE","PFIZER INC","0.7296","$46.005","","$33.57"
"09/02/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","0.877","$9.885","","$8.67"
"09/02/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","2,233","$9.885","$0.51","$22072.70"
"09/01/2022","Qualified Dividend","AFL","AFLAC INC","","","","$175.40"
"09/01/2022","Qualified Dividend","V","VISA INC CLASS A","","","","$117.19"
"09/01/2022","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$51.16"
"09/01/2022","Qualified Dividend","WEC","W E C ENERGY GROUP INC","","","","$73.30"
"09/01/2022","Qualified Dividend","INTC","INTEL CORP","","","","$483.33"
"09/01/2022","Qualified Dividend","TJX","TJX COMPANIES INC","","","","$121.25"
"09/01/2022","Qualified Dividend","UPS","UNITED PARCEL SRVC CLASS B","","","","$279.68"
"08/31/2022","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$56.17"
"08/30/2022 as of 08/26/2022","Cash In Lieu","NDAQ","NASDAQ INC","","","","$33.76"
"08/29/2022 as of 08/26/2022","Stock Split","NDAQ","NASDAQ INC","130","$60.69","",""
"08/26/2022","Qualified Dividend","C","CITIGROUP INC","","","","$256.26"
"08/25/2022","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$70.89"
"08/25/2022","Qualified Dividend","PAYX","PAYCHEX INC","","","","$98.23"
"08/23/2022","Special Qual Div","FANG","DIAMONDBACK ENERGY","","","","$60.39"
"08/23/2022","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$19.69"
"08/22/2022 as of 08/20/2022","Qualified Dividend","NSC","NORFOLK SOUTHERN CO","","","","$74.77"
"08/22/2022","Qualified Dividend","APA","APA CORP","","","","$13.31"
"08/19/2022","Qualified Dividend","NI","NISOURCE INC 00500","","","","$83.74"
"08/16/2022 as of 08/15/2022","Bank Interest","","BANK INT 071622-081522 SCHWAB BANK","","","","$0.53"
"08/15/2022","Reinvest Shares","COST","COSTCO WHOLESALE CO","0.0067","$541.7577","","-$3.63"
"08/15/2022","Qualified Dividend","MS","MORGAN STANLEY","","","","$276.93"
"08/15/2022","Qualified Dividend","ABT","ABBOTT LABORATORIES","","","","$103.93"
"08/15/2022","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$94.89"
"08/15/2022","Qualified Dividend","ABBV","ABBVIE INC","","","","$380.41"
"08/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$132.34"
"08/15/2022","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$3.79"
"08/12/2022","Qual Div Reinvest","COST","COSTCO WHOLESALE CO","","","","$3.63"
"08/11/2022","Reinvest Shares","AXP","AMERICAN EXPRESS CO","0.0321","$164.5651","","-$5.28"
"08/11/2022","Qualified Dividend","AAPL","APPLE INC","","","","$264.79"
"08/10/2022","Reinvest Shares","MA","MASTERCARD INC CLASS A","0.0042","$353.1411","","-$1.48"
"08/10/2022","Qual Div Reinvest","AXP","AMERICAN EXPRESS CO","","","","$5.28"
"08/09/2022","Qual Div Reinvest","MA","MASTERCARD INC CLASS A","","","","$1.48"
"08/08/2022","Buy","AAPL","APPLE INC","300","$164.4968","","-$49349.04"
"08/08/2022","Buy","DHR","DANAHER CORP","41","$286.565","","-$11749.17"
"08/08/2022","Buy","JNJ","JOHNSON & JOHNSON","234","$170.3316","","-$39857.59"
"08/08/2022","Buy","UNH","UNITEDHEALTH GRP INC","74","$535.75","","-$39645.50"
"08/08/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","1","$293.255","","-$293.26"
"08/08/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","16","$293.255","","-$4692.08"
"08/08/2022","Buy","CVX","CHEVRON CORP","45","$153.93","","-$6926.85"
"08/08/2022","Buy","WMT","WALMART INC","78","$127.5262","","-$9947.04"
"08/08/2022","Buy","GOOG","ALPHABET INC. CLASS C","211","$118.20","","-$24940.20"
"08/08/2022","Buy","CTVA","CORTEVA INC","117","$59.32","","-$6940.44"
"08/08/2022","Sell","ABT","ABBOTT LABORATORIES","0.1256","$108.92","","$13.68"
"08/08/2022","Sell","ABT","ABBOTT LABORATORIES","221","$108.92","$0.55","$24070.77"
"08/08/2022","Sell","BMY","BRISTOL-MYERS SQUIBB","0.2273","$73.005","","$16.59"
"08/08/2022","Sell","BMY","BRISTOL-MYERS SQUIBB","328","$73.005","$0.55","$23945.09"
"08/08/2022","Sell","AMCR","AMCOR PLC F","0.6594","$12.39","","$8.17"
"08/08/2022","Sell","AMCR","AMCOR PLC F","1,908","$12.39","$0.54","$23639.58"
"08/08/2022","Sell","PSX","PHILLIPS 66","0.2382","$84.1032","","$20.03"
"08/08/2022","Sell","PSX","PHILLIPS 66","111","$84.1032","$0.21","$9335.25"
"08/08/2022","Sell","ABBV","ABBVIE INC","0.7919","$138.67","","$109.81"
"08/08/2022","Sell","ABBV","ABBVIE INC","1","$138.67","","$138.67"
"08/08/2022","Sell","ABBV","ABBVIE INC","268","$138.67","$0.85","$37162.71"
"08/08/2022","Sell","INTC","INTEL CORP","0.1959","$35.384","","$6.93"
"08/08/2022","Sell","INTC","INTEL CORP","1,324","$35.384","$1.07","$46847.35"
"08/08/2022","Sell","TSN","TYSON FOODS INC CLASS A","0.7293","$80.444","","$58.67"
"08/08/2022","Sell","TSN","TYSON FOODS INC CLASS A","297","$80.444","$0.55","$23891.32"
"08/05/2022","Qualified Dividend","GD","GENERAL DYNAMICS CO","","","","$82.74"
"08/01/2022","Qualified Dividend","T","A T & T INC","","","","$472.96"
"08/01/2022","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$200.33"
"08/01/2022","Qualified Dividend","BMY","BRISTOL-MYERS SQUIBB","","","","$177.24"
"08/01/2022","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$197.69"
"08/01/2022","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$143.17"
"08/01/2022","Qualified Dividend","VZ","VERIZON COMMUNICATN","","","","$472.71"
"08/01/2022 as of 07/31/2022","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$225.45"
"07/29/2022","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$70.55"
"07/29/2022","Qualified Dividend","DHR","DANAHER CORP","","","","$25.00"
"07/29/2022","Qualified Dividend","HUM","HUMANA INC","","","","$18.32"
"07/28/2022","Buy","WMT","WALMART INC","157","$126.815","","-$19909.96"
"07/28/2022","Buy","AMZN","AMAZON.COM INC","210","$118.78","","-$24943.80"
"07/28/2022","Sell","L","LOEWS CORP","0.5808","$57.3571","","$33.31"
"07/28/2022","Sell","L","LOEWS CORP","164","$57.3571","$0.22","$9406.34"
"07/28/2022","Sell","CMCSA","COMCAST CORP CLASS A","0.379","$39.65","","$15.03"
"07/28/2022","Sell","CMCSA","COMCAST CORP CLASS A","823","$39.65","$0.75","$32631.20"
"07/27/2022","Qualified Dividend","CMCSA","COMCAST CORP CLASS A","","","","$222.31"
"07/27/2022","Qualified Dividend","CSCO","CISCO SYSTEMS INC","","","","$428.15"
"07/25/2022","Buy","D","DOMINION ENERGY INC","128","$77.788","","-$9956.86"
"07/25/2022","Buy","DUK","DUKE ENERGY CORP","151","$105.2389","","-$15891.07"
"07/25/2022","Buy","UPS","UNITED PARCEL SRVC CLASS B","184","$189.72","","-$34908.48"
"07/25/2022","Buy","V","VISA INC CLASS A","112","$213.20","","-$23878.40"
"07/25/2022","Buy","XOM","EXXON MOBIL CORP","316","$88.378","","-$27927.45"
"07/25/2022","Buy","WMT","WALMART INC","15","$131.8545","","-$1977.82"
"07/25/2022","Buy","APD","AIR PROD & CHEMICALS","42","$234.50","","-$9849.00"
"07/25/2022","Buy","LIN","LINDE PLC F","35","$285.85","","-$10004.75"
"07/25/2022","Buy","GOOG","ALPHABET INC. CLASS C","368","$108.69","","-$39997.92"
"07/25/2022","Sell","CSX","CSX CORP","0.3641","$31.0706","","$11.31"
"07/25/2022","Sell","CSX","CSX CORP","30","$31.0706","$0.02","$932.10"
"07/25/2022","Sell","PG","PROCTER & GAMBLE","0.1452","$143.9269","","$20.90"
"07/25/2022","Sell","PG","PROCTER & GAMBLE","4","$143.9269","$0.01","$575.70"
"07/25/2022","Sell","BAC","BANK OF AMERICA CORP","0.2254","$33.815","","$7.62"
"07/25/2022","Sell","BAC","BANK OF AMERICA CORP","8","$33.815","$0.01","$270.51"
"07/25/2022","Sell","PPL","PPL CORP","0.0432","$27.645","","$1.19"
"07/25/2022","Sell","PPL","PPL CORP","340","$27.645","$0.22","$9399.08"
"07/25/2022","Sell","T","A T & T INC","0.3531","$18.485","","$6.53"
"07/25/2022","Sell","T","A T & T INC","1,704","$18.485","$0.72","$31497.72"
"07/25/2022","Sell","SEE","SEALED AIR CORP","0.7091","$59.065","","$41.88"
"07/25/2022","Sell","SEE","SEALED AIR CORP","283","$59.065","$0.38","$16715.02"
"07/25/2022","Sell","ITW","ILLINOIS TOOL WORKS","0.9185","$191.3796","","$175.78"
"07/25/2022","Sell","ITW","ILLINOIS TOOL WORKS","72","$191.3796","$0.32","$13779.01"
"07/25/2022","Sell","MOS","THE MOSAIC CO","0.4069","$49.655","","$20.20"
"07/25/2022","Sell","MOS","THE MOSAIC CO","223","$49.655","$0.25","$11072.82"
"07/25/2022","Sell","ALL","ALLSTATE CORP","0.1986","$117.1271","","$23.26"
"07/25/2022","Sell","ALL","ALLSTATE CORP","195","$117.1271","$0.52","$22839.26"
"07/25/2022","Sell","VZ","VERIZON COMMUNICATN","0.6128","$44.445","","$27.24"
"07/25/2022","Sell","VZ","VERIZON COMMUNICATN","738","$44.445","$0.75","$32799.66"
"07/25/2022","Sell","PEG","PUB SVC ENTERPISE GP","0.7636","$60.35","","$46.08"
"07/25/2022","Sell","PEG","PUB SVC ENTERPISE GP","149","$60.35","$0.21","$8991.94"
"07/25/2022","Sell","HAL","HALLIBURTON CO HLDG","0.7025","$28.1484","","$19.77"
"07/25/2022","Sell","HAL","HALLIBURTON CO HLDG","317","$28.1484","$0.20","$8922.84"
"07/25/2022","Sell","NRG","NRG ENERGY INC","0.7577","$35.81","","$27.13"
"07/25/2022","Sell","NRG","NRG ENERGY INC","247","$35.81","$0.20","$8844.87"
"07/25/2022","Sell","PXD","PIONEER NATURAL RES","0.385","$214.02","","$82.40"
"07/25/2022","Sell","PXD","PIONEER NATURAL RES","41","$214.02","$0.20","$8774.62"
"07/25/2022","Sell","UL","UNILEVER PLC FSPONSORED ADR 1 ADR REPS 1 ORD SHS","0.033","$47.19","","$1.56"
"07/25/2022","Sell","NFLX","NETFLIX INC","4","$222.86","$0.02","$891.42"
"07/25/2022","Journal","SWPPX","SCHWAB S&P 500 INDEX","0.141","","",""
"07/25/2022","Journal","SWPPX","SCHWAB S&P 500 INDEX","-0.141","","",""
"07/21/2022","Reorganized Issue","GOOG","ALPHABET INC. CLASS C","0.6692","$114.70","",""
"07/21/2022","Reorganized Issue","GOOGL","ALPHABET INC. CLASS A","0.0219","$113.90","",""
"07/21/2022","Qualified Dividend","LEN","LENNAR CORP CLASS A","","","","$122.85"
"07/20/2022","Qualified Dividend","XEL","XCEL ENERGY INC","","","","$68.41"
"07/20/2022","Qualified Dividend","DGX","QUEST DIAGNOSTIC INC","","","","$48.77"
"07/19/2022","Journal","SWPPX","SCHWAB S&P 500 INDEX","5.991","","",""
"07/19/2022","Journal","SWPPX","SCHWAB S&P 500 INDEX","-5.991","","",""
"07/18/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","71","$278.65","","-$19784.15"
"07/18/2022","Buy","WM","WASTE MANAGEMENT INC","99","$151.1539","","-$14964.24"
"07/18/2022","Buy","LMT","LOCKHEED MARTIN CORP","25","$392.4386","","-$9810.97"
"07/18/2022","Buy","JPM","JPMORGAN CHASE & CO","133","$112.646","","-$14981.92"
"07/18/2022","Buy","XOM","EXXON MOBIL CORP","115","$86.847","","-$9987.41"
"07/18/2022","Buy","WMT","WALMART INC","153","$130.115","","-$19907.60"
"07/18/2022","Buy","SHW","SHERWIN WILLIAMS CO","61","$245.0598","","-$14948.65"
"07/18/2022","Sell","LYB","LYONDELLBASELL INDS FCLASS A","0.8259","$87.365","","$72.15"
"07/18/2022","Sell","LYB","LYONDELLBASELL INDS FCLASS A","113","$87.365","$0.23","$9872.02"
"07/18/2022","Sell","NEM","NEWMONT CORP","0.182","$55.36","","$10.08"
"07/18/2022","Sell","NEM","NEWMONT CORP","176","$55.36","$0.22","$9743.14"
"07/18/2022","Sell","CB","CHUBB LTD F","0.8948","$183.1674","","$163.90"
"07/18/2022","Sell","CB","CHUBB LTD F","120","$183.1674","$0.50","$21979.59"
"07/18/2022","Sell","HON","HONEYWELL INTL INC","0.8163","$172.9357","","$141.17"
"07/18/2022","Sell","HON","HONEYWELL INTL INC","127","$172.9357","$0.50","$21962.33"
"07/18/2022","Sell","ADM","ARCHER-DANIELS-MIDLN","0.5676","$73.2065","","$41.55"
"07/18/2022","Sell","ADM","ARCHER-DANIELS-MIDLN","295","$73.2065","$0.49","$21595.43"
"07/18/2022","Sell","CAT","CATERPILLAR INC","0.3751","$175.215","","$65.72"
"07/18/2022","Sell","CAT","CATERPILLAR INC","118","$175.215","$0.47","$20674.90"
"07/18/2022 as of 07/15/2022","Bank Interest","","BANK INT 061622-071522 SCHWAB BANK","","","","$0.40"
"07/18/2022 as of 07/15/2022","Stock Split","GOOGL","ALPHABET INC. CLASS A","11","$111.7775","",""
"07/18/2022 as of 07/15/2022","Stock Split","GOOG","ALPHABET INC. CLASS C","924","$112.767","",""
"07/15/2022","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$52.62"
"07/15/2022","Qualified Dividend","MSI","MOTOROLA SOLUTIONS","","","","$151.97"
"07/15/2022","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$9.46"
"07/15/2022","Special Qual Div","COP","CONOCOPHILLIPS","","","","$77.85"
"07/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$132.34"
"07/14/2022","Qualified Dividend","ITW","ILLINOIS TOOL WORKS","","","","$88.96"
"07/14/2022","Qualified Dividend","MDLZ","MONDELEZ INTL CLASS A","","","","$138.59"
"07/11/2022","Buy","AAPL","APPLE INC","173","$143.95","","-$24903.35"
"07/11/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","71","$280.18","","-$19892.78"
"07/11/2022","Buy","AAPL","APPLE INC","277","$143.875","","-$39853.38"
"07/11/2022","Sell","AVGO","BROADCOM INC","0.4335","$484.79","","$210.16"
"07/11/2022","Sell","AVGO","BROADCOM INC","90","$484.79","$1.00","$43630.10"
"07/11/2022","Sell","TEL","TE CONNECTIVITY LTD F","0.96","$113.646","","$109.10"
"07/11/2022","Sell","TEL","TE CONNECTIVITY LTD F","315","$113.646","$0.82","$35797.67"
"07/08/2022","Cash Dividend","AMT","AMERN TOWER CORP REIT","","","","$265.46"
"07/08/2022","Qualified Dividend","CB","CHUBB LTD F","","","","$100.34"
"07/08/2022","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$308.24"
"07/07/2022","Qualified Dividend","WRB","W R BERKLEY CORP","","","","$3.71"
"07/07/2022","Special Qual Div","WRB","W R BERKLEY CORP","","","","$18.56"
"07/06/2022","Qualified Dividend","HPQ","HP INC.","","","","$264.29"
"07/05/2022","Reinvest Shares","NVDA","NVIDIA CORP","0.074","$144.6036","","-$10.70"
"07/05/2022","Qualified Dividend","HIG","HARTFORD FINL SVC GP","","","","$11.10"
"07/01/2022","Qualified Dividend","HBAN","HUNTINGTON BANCSHS","","","","$287.75"
"07/01/2022","Qualified Dividend","MCK","MCKESSON CORP","","","","$16.16"
"07/01/2022","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$123.97"
"07/01/2022","Qualified Dividend","NKE","NIKE INC CLASS B","","","","$50.59"
"07/01/2022","Qualified Dividend","CMA","COMERICA INCORPORATE","","","","$18.57"
"07/01/2022","Qualified Dividend","KO","THE COCA-COLA CO","","","","$175.78"
"07/01/2022","Qual Div Reinvest","NVDA","NVIDIA CORP","","","","$10.70"
"07/01/2022","Qualified Dividend","PARA","PARAMOUNT GLOBAL CLASS B","","","","$200.30"
"07/01/2022","Qualified Dividend","PPL","PPL CORP","","","","$76.51"
"07/01/2022","Qualified Dividend","CHRW","C H ROBINSON WORLDWD","","","","$79.39"
"07/01/2022","Qualified Dividend","ALL","ALLSTATE CORP","","","","$165.92"
"07/01/2022","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$72.43"
"07/01/2022","Journaled Shares","HD","HOME DEPOT INC","0.0216","$276.38","",""
"07/01/2022","Journaled Shares","UL","UNILEVER PLC FSPONSORED ADR 1 ADR REPS 1 ORD SHS","0.033","$45.845","",""
"07/01/2022","Journaled Shares","WM","WASTE MANAGEMENT INC","0.0141","$154.1332","",""
"07/01/2022","Journaled Shares","NVDA","NVIDIA CORP","5","$146.65","",""
"07/01/2022","Journaled Shares","RTX","RAYTHEON TECHNOLOGIES CO","0.0966","$95.95","",""
"06/30/2022","Special Qual Div","EOG","EOG RESOURCES INC","","","","$169.31"
"06/30/2022","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$38.24"
"06/30/2022","Qualified Dividend","HES","HESS CORP","","","","$36.60"
"06/30/2022","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$258.51"
"06/30/2022","Qualified Dividend","MTB","M & T BANK CORP","","","","$73.48"
"06/30/2022","Qualified Dividend","PEP","PEPSICO INC","","","","$124.59"
"06/30/2022","Qualified Dividend","MAR","MARRIOTT INTL INC CLASS A","","","","$24.93"
"06/30/2022","Qualified Dividend","UNP","UNION PACIFIC CORP","","","","$85.06"
"06/30/2022","Qualified Dividend","AVGO","BROADCOM INC","","","","$370.78"
"06/30/2022","Qualified Dividend","DPZ","DOMINOS PIZZA INC","","","","$60.62"
"06/30/2022","Cash Dividend","CCI","CROWN CASTLE INTL CO REIT","","","","$156.52"
"06/30/2022","Qualified Dividend","AIG","AMERICAN INTL GROUP","","","","$140.52"
"06/30/2022","Qualified Dividend","AEE","AMEREN CORP","","","","$64.42"
"06/30/2022","Qualified Dividend","PEG","PUB SVC ENTERPISE GP","","","","$80.87"
"06/30/2022","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.83"
"06/29/2022","Qualified Dividend","GS","GOLDMAN SACHS GROUP","","","","$162.09"
"06/29/2022","Qualified Dividend","GLW","CORNING INC","","","","$232.30"
"06/29/2022","Qualified Dividend","GILD","GILEAD SCIENCES INC","","","","$289.77"
"06/28/2022","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$170.87"
"06/24/2022","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$99.79"
"06/24/2022","Qualified Dividend","FTV","FORTIVE CORP DISC 00500","","","","$35.58"
"06/24/2022","Qualified Dividend","ANTM","ANTHEM INC","","","","$27.32"
"06/24/2022","Qualified Dividend","PFG","PRINCIPAL FINL","","","","$19.69"
"06/24/2022","Qualified Dividend","SEE","SEALED AIR CORP","","","","$56.74"
"06/24/2022","Qualified Dividend","NDAQ","NASDAQ INC","","","","$39.17"
"06/24/2022","Buy","AAPL","APPLE INC","280","$140.8699","","-$39443.57"
"06/24/2022","Sell","GLW","CORNING INC","0.4145","$32.0569","","$13.29"
"06/24/2022","Sell","GLW","CORNING INC","12","$32.0569","$0.01","$384.67"
"06/24/2022","Sell","BKR","BAKER HUGHES CO. CLASS A","0.119","$28.6908","","$3.41"
"06/24/2022","Sell","BKR","BAKER HUGHES CO. CLASS A","307","$28.6908","$0.20","$8807.88"
"06/24/2022","Sell","KMI","KINDER MORGAN INC","0.2661","$16.3107","","$4.34"
"06/24/2022","Sell","KMI","KINDER MORGAN INC","529","$16.3107","$0.20","$8628.16"
"06/24/2022","Sell","FCX","FREEPORT-MCMORAN INC","0.9487","$29.295","","$27.79"
"06/24/2022","Sell","FCX","FREEPORT-MCMORAN INC","323","$29.295","$0.22","$9462.07"
"06/24/2022","Sell","BUD","ANHEUSER BUSCH INBEV S FSPONSORED ADR 1 ADR REPS 1 ORD SHS","15","$53.0508","$0.02","$795.74"
"06/24/2022","Sell","WBD","WARNER BROTHERS DISCOVER","13","$14.40","","$187.20"
"06/23/2022","Qualified Dividend","BLK","BLACKROCK INC","","","","$199.58"
"06/23/2022","Qualified Dividend","CI","CIGNA CORP","","","","$46.58"
"06/23/2022","Cash Dividend","KIM","KIMCO REALTY CORP REIT","","","","$87.39"
"06/22/2022","Qualified Dividend","HAL","HALLIBURTON CO HLDG","","","","$38.12"
"06/22/2022","Qualified Dividend","JNPR","JUNIPER NETWORKS INC","","","","$66.39"
"06/21/2022 as of 06/20/2022","Qualified Dividend","AIZ","ASSURANT INC","","","","$36.54"
"06/21/2022","Qualified Dividend","IPG","INTERPUBLIC GRP COS","","","","$222.23"
"06/21/2022 as of 06/20/2022","Qualified Dividend","MCD","MCDONALDS CORP","","","","$101.99"
"06/17/2022","Buy","SWPPX","SCHWAB S&P 500 INDEX","0.141","$56.65","","-$8.00"
"06/17/2022","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$13.23"
"06/17/2022","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$6.99"
"06/17/2022","Qualified Dividend","LIN","LINDE PLC F","","","","$45.49"
"06/17/2022","Cash Dividend","WY","WEYERHAEUSER CO REIT","","","","$46.92"
"06/17/2022","Journaled Shares","GLW","CORNING INC","12.4145","$31.68","",""
"06/17/2022","Journaled Shares","TWTR","TWITTER INC","5","$37.39","",""
"06/17/2022","Journaled Shares","AMD","ADVANCED MICRO DEVIC","20","$81.67","",""
"06/17/2022","Journaled Shares","RTX","RAYTHEON TECHNOLOGIES CO","20.4512","$88.995","",""
"06/17/2022","Journaled Shares","KHC","KRAFT HEINZ CO","26.4981","$35.39","",""
"06/17/2022","Journal","","JOURNAL FRM 91985836","","","","$10.00"
"06/17/2022","Journaled Shares","NOC","NORTHROP GRUMMAN CORP","3.0573","$441.7099","",""
"06/17/2022","Journaled Shares","MS","MORGAN STANLEY","28.8354","$73.502","",""
"06/17/2022","Journaled Shares","AAPL","APPLE INC","41.9688","$131.88","",""
"06/17/2022","Journaled Shares","MA","MASTERCARD INC CLASS A","3.0202","$308.75","",""
"06/17/2022","Journaled Shares","AMZN","AMAZON.COM INC","30.238","$105.12","",""
"06/17/2022","Journaled Shares","PFE","PFIZER INC","31.5669","$46.71","",""
"06/17/2022","Journaled Shares","INTC","INTEL CORP","10.3944","$36.90","",""
"06/17/2022","Journaled Shares","META","META PLATFORMS INC CLASS A","7","$162.74","",""
"06/17/2022","Journaled Shares","MSFT","MICROSOFT CORP","14.7782","$247.00","",""
"06/17/2022","Journaled Shares","JNJ","JOHNSON & JOHNSON","3.1191","$170.13","",""
"06/17/2022","Journaled Shares","HD","HOME DEPOT INC","4.0802","$274.5124","",""
"06/17/2022","Journaled Shares","VZ","VERIZON COMMUNICATN","21.2799","$48.6937","",""
"06/17/2022","Journaled Shares","JPM","JPMORGAN CHASE & CO","10.3696","$112.69","",""
"06/17/2022","Journaled Shares","CSCO","CISCO SYSTEMS INC","11.4421","$43.6256","",""
"06/17/2022","Journaled Shares","CRM","SALESFORCE INC","2","$163.95","",""
"06/17/2022","Journaled Shares","BUD","ANHEUSER BUSCH INBEV S FSPONSORED ADR 1 ADR REPS 1 ORD SHS","15","$51.53","",""
"06/17/2022","Journaled Shares","GS","GOLDMAN SACHS GROUP","17.2658","$281.09","",""
"06/17/2022","Journaled Shares","V","VISA INC CLASS A","5.0469","$187.76","",""
"06/17/2022","Journaled Shares","BAC","BANK OF AMERICA CORP","8.2254","$31.87","",""
"06/17/2022","Journaled Shares","XOM","EXXON MOBIL CORP","48.6199","$86.33","",""
"06/17/2022","Journaled Shares","BRKB","BERKSHIRE HATHAWAY CLASS B","6.2881","$268.10","",""
"06/17/2022","Journaled Shares","AMT","AMERN TOWER CORP REIT","41.6511","$233.9007","",""
"06/17/2022","Journaled Shares","PEP","PEPSICO INC","5.1881","$157.13","",""
"06/17/2022","Journaled Shares","CMCSA","COMCAST CORP CLASS A","15.4008","$38.33","",""
"06/17/2022","Journaled Shares","PG","PROCTER & GAMBLE","4.1452","$133.07","",""
"06/17/2022","Journaled Shares","TSN","TYSON FOODS INC CLASS A","13.4196","$82.37","",""
"06/17/2022","Journaled Shares","AXP","AMERICAN EXPRESS CO","10.1551","$140.34","",""
"06/17/2022","Journaled Shares","WMT","WALMART INC","10.2378","$118.76","",""
"06/17/2022","Journaled Shares","WM","WASTE MANAGEMENT INC","4.0908","$140.14","",""
"06/17/2022","Journaled Shares","KO","THE COCA-COLA CO","17.7084","$59.64","",""
"06/17/2022","Journaled Shares","UNH","UNITEDHEALTH GRP INC","10.1864","$453.50","",""
"06/17/2022","Journaled Shares","NVDA","NVIDIA CORP","64.0317","$156.61","",""
"06/17/2022","Journaled Shares","LMT","LOCKHEED MARTIN CORP","4.1506","$396.92","",""
"06/17/2022","Journaled Shares","NFLX","NETFLIX INC","4","$175.08","",""
"06/17/2022","Journaled Shares","COST","COSTCO WHOLESALE CO","4.0326","$446.25","",""
"06/17/2022","Journaled Shares","WBD","WARNER BROTHERS DISCOVER","13","$13.965","",""
"06/17/2022","Journaled Shares","CSX","CSX CORP","30.3641","$29.01","",""
"06/17/2022","Journaled Shares","GOOG","ALPHABET INC. CLASS C","3.4601","$2141.3999","",""
"06/17/2022","Journaled Shares","GOOGL","ALPHABET INC. CLASS A","0.5801","$2129.23","",""
"06/17/2022","Sell","AIZ","ASSURANT INC","0.7385","$170.085","","$125.61"
"06/17/2022","Sell","AIZ","ASSURANT INC","53","$170.085","$0.21","$9014.30"
"06/17/2022","Buy","AAPL","APPLE INC","379.3128","$131.8173","","-$49999.99"
"06/17/2022","Sell","AIG","AMERICAN INTL GROUP","0.1111","$50.86","","$5.65"
"06/17/2022","Sell","AIG","AMERICAN INTL GROUP","439","$50.86","$0.51","$22327.03"
"06/17/2022","Sell","GLW","CORNING INC","0.3713","$31.5076","","$11.70"
"06/17/2022","Sell","GLW","CORNING INC","860","$31.5076","$0.62","$27095.92"
"06/16/2022","Qualified Dividend","HD","HOME DEPOT INC","","","","$119.10"
"06/16/2022","Qualified Dividend","PRU","PRUDENTIAL FINL","","","","$112.47"
"06/16/2022","Qualified Dividend","MOS","THE MOSAIC CO","","","","$33.51"
"06/16/2022","Qualified Dividend","NEM","NEWMONT CORP","","","","$96.90"
"06/16/2022","Buy","V","VISA INC CLASS A","26.3279","$189.912","","-$4999.98"
"06/16/2022","Buy","GOOG","ALPHABET INC. CLASS C","11.6454","$2146.76","","-$24999.88"
"06/16/2022","Buy","AMZN","AMAZON.COM INC","292.6169","$102.5231","","-$29999.99"
"06/16/2022","Sell","TRMB","TRIMBLE INC","0.6735","$56.8458","","$38.29"
"06/16/2022","Sell","TRMB","TRIMBLE INC","155","$56.8458","$0.20","$8810.90"
"06/16/2022","Sell","WDC","WESTERN DIGITAL CORP","0.8351","$46.68","","$38.98"
"06/16/2022","Sell","WDC","WESTERN DIGITAL CORP","188","$46.68","$0.20","$8775.64"
"06/16/2022","Sell","STT","STATE STREET CORP","0.7877","$62.095","","$48.91"
"06/16/2022","Sell","STT","STATE STREET CORP","142","$62.095","$0.20","$8817.29"
"06/16/2022","Sell","JNPR","JUNIPER NETWORKS INC","0.1283","$27.6583","","$3.55"
"06/16/2022","Sell","JNPR","JUNIPER NETWORKS INC","316","$27.6583","$0.20","$8739.82"
"06/16/2022","Sell","STX","SEAGATE TECHNOLOGY HLD F","0.6744","$71.42","","$48.17"
"06/16/2022","Sell","STX","SEAGATE TECHNOLOGY HLD F","119","$71.42","$0.19","$8498.79"
"06/16/2022","Sell","IPGP","IPG PHOTONICS CORP","0.7897","$86.405","","$68.23"
"06/16/2022","Sell","IPGP","IPG PHOTONICS CORP","97","$86.405","$0.19","$8381.10"
"06/16/2022","Sell","OKE","ONEOK INC","0.1803","$57.14","","$10.30"
"06/16/2022","Sell","OKE","ONEOK INC","34","$57.14","$0.04","$1942.72"
"06/16/2022","Sell","PFG","PRINCIPAL FINL","0.7588","$62.56","","$47.47"
"06/16/2022","Sell","PFG","PRINCIPAL FINL","30","$62.56","$0.04","$1876.76"
"06/16/2022","Sell","HIG","HARTFORD FINL SVC GP","0.8234","$64.72","","$53.29"
"06/16/2022","Sell","HIG","HARTFORD FINL SVC GP","28","$64.72","$0.04","$1812.12"
"06/16/2022","Sell","RJF","RAYMOND JAMES FINL","0.4324","$85.9536","","$37.17"
"06/16/2022","Sell","RJF","RAYMOND JAMES FINL","21","$85.9536","$0.04","$1804.99"
"06/16/2022 as of 06/15/2022","Bank Interest","","BANK INT 051622-061522 SCHWAB BANK","","","","$0.77"
"06/15/2022","Buy","SWPPX","SCHWAB S&P 500 INDEX","5.991","$58.42","","-$350.00"
"06/15/2022","Qualified Dividend","TAP","MOLSON COORS BEVERAGE CLCLASS B","","","","$130.42"
"06/15/2022","Qualified Dividend","HSY","HERSHEY CO","","","","$63.40"
"06/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$36.55"
"06/15/2022","Qualified Dividend","K","KELLOGG CO","","","","$149.83"
"06/15/2022","Qualified Dividend","TSN","TYSON FOODS INC CLASS A","","","","$94.05"
"06/15/2022","Qualified Dividend","NOC","NORTHROP GRUMMAN CORP","","","","$58.82"
"06/14/2022","Qualified Dividend","AMCR","AMCOR PLC F","","","","$138.49"
"06/14/2022","Qualified Dividend","MET","METLIFE INC","","","","$76.62"
"06/14/2022","Cash Dividend","SBAC","S B A COMMUNICATIONS CLASS A","","","","$20.91"
"06/14/2022","Special Qual Div","PXD","PIONEER NATURAL RES","","","","$273.14"
"06/14/2022","Qualified Dividend","JKHY","HENRY JACK & ASSOC","","","","$81.83"
"06/14/2022","Qualified Dividend","PXD","PIONEER NATURAL RES","","","","$32.28"
"06/14/2022","Buy","NEE","NEXTERA ENERGY INC","70.3947","$71.028","","-$4999.99"
"06/14/2022","Buy","CRM","SALESFORCE INC","306.2336","$163.274","","-$49999.98"
"06/14/2022","Buy","MSFT","MICROSOFT CORP","206.1809","$242.5054","","-$49999.98"
"06/14/2022","Buy","AVGO","BROADCOM INC","19.3286","$517.368","","-$10000.00"
"06/14/2022","Buy","INTC","INTEL CORP","264.1449","$37.858","","-$10000.00"
"06/14/2022","Buy","IBM","IBM CORP","73.5986","$135.872","","-$9999.99"
"06/14/2022","Buy","QCOM","QUALCOMM INC","76.9159","$130.012","","-$9999.99"
"06/14/2022","Buy","CSCO","CISCO SYSTEMS INC","231.6423","$43.17","","-$10000.00"
"06/14/2022","Buy","MSFT","MICROSOFT CORP","103.1012","$242.48","","-$24999.98"
"06/14/2022","Buy","DLR","DIGITAL REALTY TRUST REIT","119.8331","$125.174","","-$14999.99"
"06/14/2022","Buy","AMT","AMERN TOWER CORP REIT","63.2946","$236.987","","-$15000.00"
"06/14/2022","Buy","O","REALTY INCOME CORP DISCOREIT","238.709","$62.838","","-$15000.00"
"06/14/2022","Buy","RTX","RAYTHEON TECHNOLOGIES CO","109.1774","$91.594","","-$9999.99"
"06/14/2022","Buy","UNP","UNION PACIFIC CORP","47.7554","$209.40","","-$9999.98"
"06/14/2022","Buy","JNJ","JOHNSON & JOHNSON","29.5082","$169.444","","-$4999.99"
"06/14/2022","Buy","UNH","UNITEDHEALTH GRP INC","10.7799","$463.8241","","-$4999.98"
"06/14/2022","Buy","LLY","LILLY ELI & CO","17.2819","$289.3195","","-$4999.99"
"06/14/2022","Buy","PFE","PFIZER INC","103.246","$48.428","","-$5000.00"
"06/14/2022","Buy","MS","MORGAN STANLEY","328.4918","$76.1054","","-$25000.00"
"06/14/2022","Buy","JPM","JPMORGAN CHASE & CO","215.0807","$116.2354","","-$24999.99"
"06/14/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","88.7185","$281.79","","-$24999.99"
"06/14/2022","Buy","XOM","EXXON MOBIL CORP","50.7784","$98.4669","","-$4999.99"
"06/14/2022","Buy","CVX","CHEVRON CORP","29.0866","$171.90","","-$4999.99"
"06/14/2022","Buy","AMZN","AMAZON.COM INC","96.6239","$103.494","","-$9999.99"
"06/14/2022","Buy","AMZN","AMAZON.COM INC","483.1389","$103.4899","","-$50000.00"
"06/14/2022","Buy","META","META PLATFORMS INC CLASS A","245.3709","$163.0185","","-$40000.00"
"06/14/2022","Buy","LIN","LINDE PLC F","40.3246","$297.5847","","-$11999.98"
"06/14/2022","Sell","GM","GENERAL MOTORS CO","0.024","$33.5015","","$0.80"
"06/14/2022","Sell","GM","GENERAL MOTORS CO","679","$33.5015","$0.52","$22747.00"
"06/14/2022","Sell","MAR","MARRIOTT INTL INC CLASS A","0.416","$151.625","","$63.08"
"06/14/2022","Sell","MAR","MARRIOTT INTL INC CLASS A","149","$151.625","$0.52","$22591.61"
"06/14/2022","Sell","WRK","WESTROCK CO","0.4314","$42.95","","$18.53"
"06/14/2022","Sell","WRK","WESTROCK CO","378","$42.95","$0.37","$16234.73"
"06/14/2022","Sell","PRU","PRUDENTIAL FINL","0.7279","$95.6048","","$69.59"
"06/14/2022","Sell","PRU","PRUDENTIAL FINL","93","$95.6048","$0.20","$8891.05"
"06/14/2022","Sell","WY","WEYERHAEUSER CO REIT","0.6566","$34.485","","$22.64"
"06/14/2022","Sell","WY","WEYERHAEUSER CO REIT","260","$34.485","$0.21","$8965.89"
"06/14/2022","Sell","HST","HOST HOTELS & RESORT","0.4763","$17.0643","","$8.13"
"06/14/2022","Sell","HST","HOST HOTELS & RESORT","519","$17.0643","$0.20","$8856.17"
"06/14/2022","Sell","SBAC","S B A COMMUNICATIONS CLASS A","0.4526","$299.73","","$135.66"
"06/14/2022","Sell","SBAC","S B A COMMUNICATIONS CLASS A","29","$299.73","$0.20","$8691.97"
"06/14/2022","Sell","ROP","ROPER TECHNOLOGIES","0.6419","$383.25","$0.01","$246.00"
"06/14/2022","Sell","ROP","ROPER TECHNOLOGIES","34","$383.25","$0.30","$13030.20"
"06/14/2022","Sell","BSX","BOSTON SCIENTIFIC CO","0.0906","$36.0601","","$3.27"
"06/14/2022","Sell","BSX","BOSTON SCIENTIFIC CO","512","$36.0601","$0.42","$18462.35"
"06/14/2022","Sell","BSX","BOSTON SCIENTIFIC CO","100","$36.065","$0.08","$3606.42"
"06/14/2022","Sell","SHW","SHERWIN WILLIAMS CO","0.6919","$233.76","","$161.74"
"06/14/2022","Sell","SHW","SHERWIN WILLIAMS CO","43","$233.76","$0.23","$10051.45"
"06/14/2022","Sell","KIM","KIMCO REALTY CORP REIT","0.9573","$19.2537","","$18.43"
"06/14/2022","Sell","KIM","KIMCO REALTY CORP REIT","436","$19.2537","$0.19","$8394.42"
"06/14/2022","Sell","CCI","CROWN CASTLE INTL CO REIT","0.474","$160.605","","$76.13"
"06/14/2022","Sell","CCI","CROWN CASTLE INTL CO REIT","106","$160.605","$0.39","$17023.74"
"06/14/2022","Sell","CDAY","CERIDIAN H C M HOLDING I","0.7454","$46.2206","","$34.45"
"06/14/2022","Sell","CDAY","CERIDIAN H C M HOLDING I","181","$46.2206","$0.19","$8365.74"
"06/14/2022","Sell","UAL","UNITED AIRLINES HLDGS","0.8193","$36.7526","","$30.11"
"06/14/2022","Sell","UAL","UNITED AIRLINES HLDGS","341","$36.7526","$0.29","$12532.35"
"06/14/2022","Sell","NTAP","NETAPP INC","0.0378","$64.73","","$2.45"
"06/14/2022","Sell","NTAP","NETAPP INC","411","$64.73","$0.61","$26603.42"
"06/14/2022","Sell","WFC","WELLS FARGO & CO","0.2106","$38.925","","$8.20"
"06/14/2022","Sell","WFC","WELLS FARGO & CO","398","$38.925","$0.35","$15491.80"
"06/14/2022","Sell","WFC","WELLS FARGO & CO","399","$38.925","$0.36","$15530.72"
"06/14/2022","Sell","PARA","PARAMOUNT GLOBAL CLASS B","0.5792","$25.735","","$14.91"
"06/14/2022","Sell","PARA","PARAMOUNT GLOBAL CLASS B","834","$25.735","$0.49","$21462.50"
"06/14/2022","Sell","NFLX","NETFLIX INC","0.2672","$168.125","","$44.92"
"06/14/2022","Sell","NFLX","NETFLIX INC","125","$168.125","$0.48","$21015.15"
"06/14/2022","Sell","BAC","BANK OF AMERICA CORP","0.9748","$32.22","","$31.41"
"06/14/2022","Sell","BAC","BANK OF AMERICA CORP","963","$32.22","$0.71","$31027.15"
"06/14/2022","Sell","HPQ","HP INC.","0.1733","$33.875","","$5.87"
"06/14/2022","Sell","HPQ","HP INC.","1,057","$33.875","$0.82","$35805.06"
"06/14/2022","Sell","DIS","WALT DISNEY CO","0.9583","$94.3755","","$90.44"
"06/14/2022","Sell","DIS","WALT DISNEY CO","322","$94.3755","$0.70","$30388.21"
"06/14/2022","Sell","ANET","ARISTA NETWORKS INC","0.1848","$92.0471","","$17.01"
"06/14/2022","Sell","ANET","ARISTA NETWORKS INC","381","$92.0471","$0.80","$35069.15"
"06/14/2022","Buy","GOOG","ALPHABET INC. CLASS C","11.6589","$2144.284","","-$24999.99"
"06/14/2022","Buy","MSFT","MICROSOFT CORP","102.6651","$243.51","","-$24999.98"
"06/14/2022","Sell","ADBE","ADOBE INC","0.2605","$371.9944","","$96.90"
"06/14/2022","Sell","ADBE","ADOBE INC","93","$371.9944","$0.79","$34594.69"
"06/14/2022","Sell","MU","MICRON TECHNOLOGY","0.9509","$59.0604","","$56.16"
"06/14/2022","Sell","MU","MICRON TECHNOLOGY","568","$59.0604","$0.77","$33545.54"
"06/14/2022","Buy","INTC","INTEL CORP","1,049.6566","$38.1077","","-$40000.00"
"06/14/2022","Sell","NVDA","NVIDIA CORP","0.4232","$158.0557","","$66.89"
"06/14/2022","Sell","NVDA","NVIDIA CORP","267","$158.0557","$0.97","$42199.90"
"06/14/2022","Buy","QCOM","QUALCOMM INC","305.0345","$131.1327","","-$40000.00"
"06/14/2022","Sell","AMD","ADVANCED MICRO DEVIC","0.506","$87.83","","$44.44"
"06/14/2022","Sell","AMD","ADVANCED MICRO DEVIC","376","$87.83","$0.76","$33023.32"
"06/13/2022","Special Qual Div","LYB","LYONDELLBASELL INDS FCLASS A","","","","$591.89"
"06/13/2022","Qualified Dividend","LYB","LYONDELLBASELL INDS FCLASS A","","","","$135.45"
"06/10/2022","Cash Merger","156782104","CERNER CORP XXXMANDATORY MERGER EFF: 06/09/22","","","","$66.60"
"06/10/2022","Cash Merger Adj","156782104","CERNER CORP XXXMANDATORY MERGER EFF: 06/09/22","-0.701","","",""
"06/10/2022","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$19.52"
"06/10/2022","Qualified Dividend","BKR","BAKER HUGHES CO. CLASS A","","","","$55.28"
"06/10/2022","Qualified Dividend","PFE","PFIZER INC","","","","$139.44"
"06/10/2022","Qualified Dividend","AEP","AMER ELECTRIC PWR CO","","","","$18.60"
"06/10/2022","Qualified Dividend","IBM","IBM CORP","","","","$244.67"
"06/10/2022","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$12.76"
"06/10/2022","Qualified Dividend","CVX","CHEVRON CORP","","","","$29.38"
"06/10/2022","Qualified Dividend","LUMN","LUMEN TECHNOLOGIES INC","","","","$558.47"
"06/10/2022","Qualified Dividend","OTIS","OTIS WORLDWIDE CORP","","","","$57.70"
"06/10/2022","Qualified Dividend","LLY","LILLY ELI & CO","","","","$35.21"
"06/10/2022","Qualified Dividend","XOM","EXXON MOBIL CORP","","","","$96.88"
"06/09/2022","Tender Activity","156995334","CERNER CORP XXXSUBMITTED FOR TENDER EXP: 06/06/2022","-53","","",""
"06/09/2022","Tender Activity","156995334","CERNER CORP XXXSUBMITTED FOR TENDER EXP: 06/06/2022","","","","$5035.00"
"06/09/2022","Qualified Dividend","ADI","ANALOG DEVICES INC","","","","$142.56"
"06/08/2022","Qualified Dividend","ADM","ARCHER-DANIELS-MIDLN","","","","$49.17"
"06/08/2022","Qualified Dividend","AMGN","AMGEN INC.","","","","$83.87"
"06/07/2022","Qualified Dividend","JNJ","JOHNSON & JOHNSON","","","","$160.15"
"06/07/2022","Qualified Dividend","L","LOEWS CORP","","","","$10.29"
"06/06/2022","Buy","MSFT","MICROSOFT CORP","182.8327","$273.474","","-$49999.99"
"06/03/2022","Qualified Dividend","TEL","TE CONNECTIVITY LTD F","","","","$133.78"
"06/03/2022","Qualified Dividend","SHW","SHERWIN WILLIAMS CO","","","","$21.55"
"06/03/2022","Qualified Dividend","HON","HONEYWELL INTL INC","","","","$49.85"
"06/03/2022","Buy","PPL","PPL CORP","268.3843","$29.808","","-$8000.00"
"06/03/2022","Buy","NEE","NEXTERA ENERGY INC","255.4996","$78.278","","-$20000.00"
"06/03/2022","Buy","HPQ","HP INC.","252.285","$39.6377","","-$10000.00"
"06/03/2022","Buy","ANET","ARISTA NETWORKS INC","96.8654","$103.236","","-$10000.00"
"06/03/2022","Buy","TEL","TE CONNECTIVITY LTD F","77.0721","$129.7486","","-$10000.00"
"06/03/2022","Buy","ADI","ANALOG DEVICES INC","60.3611","$165.6696","","-$10000.00"
"06/03/2022","Buy","AMD","ADVANCED MICRO DEVIC","376.506","$106.24","","-$40000.00"
"06/03/2022","Buy","CSCO","CISCO SYSTEMS INC","883.6264","$45.268","","-$40000.00"
"06/03/2022","Buy","ADBE","ADOBE INC","93.2605","$428.906","","-$39999.99"
"06/03/2022","Buy","NVDA","NVIDIA CORP","267.4232","$186.9695","","-$49999.98"
"06/03/2022","Buy","CCI","CROWN CASTLE INTL CO REIT","54.123","$184.764","","-$9999.98"
"06/03/2022","Buy","O","REALTY INCOME CORP DISCOREIT","148.0435","$67.5477","","-$10000.00"
"06/03/2022","Buy","AMT","AMERN TOWER CORP REIT","37.4874","$266.756","","-$9999.99"
"06/03/2022","Buy","HON","HONEYWELL INTL INC","51.5246","$194.082","","-$10000.00"
"06/03/2022","Buy","CAT","CATERPILLAR INC","44.9778","$222.3316","","-$9999.99"
"06/03/2022","Buy","LMT","LOCKHEED MARTIN CORP","22.5594","$443.2741","","-$10000.00"
"06/03/2022","Buy","UNP","UNION PACIFIC CORP","44.9396","$222.5208","","-$10000.00"
"06/03/2022","Buy","RTX","RAYTHEON TECHNOLOGIES CO","104.1731","$95.994","","-$9999.99"
"06/03/2022","Buy","LLY","LILLY ELI & CO","49.4794","$303.1563","","-$14999.99"
"06/03/2022","Buy","MRK","MERCK & CO. INC.","166.3197","$90.1877","","-$14999.99"
"06/03/2022","Buy","ABBV","ABBVIE INC","101.5811","$147.6652","","-$14999.99"
"06/03/2022","Buy","JNJ","JOHNSON & JOHNSON","84.8849","$176.7098","","-$14999.99"
"06/03/2022","Buy","UNH","UNITEDHEALTH GRP INC","30.8525","$486.184","","-$14999.99"
"06/03/2022","Buy","PFE","PFIZER INC","282.0731","$53.1777","","-$15000.00"
"06/03/2022","Buy","WFC","WELLS FARGO & CO","222.6278","$44.918","","-$10000.00"
"06/03/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","32.0274","$312.232","","-$9999.98"
"06/03/2022","Buy","V","VISA INC CLASS A","47.0083","$212.728","","-$9999.98"
"06/03/2022","Buy","BAC","BANK OF AMERICA CORP","963.9748","$36.308","","-$35000.00"
"06/03/2022","Buy","KMI","KINDER MORGAN INC","402.505","$19.96","","-$8034.00"
"06/03/2022","Buy","TAP","MOLSON COORS BEVERAGE CLCLASS B","129.8556","$53.906","","-$7000.00"
"06/03/2022","Buy","K","KELLOGG CO","102.7296","$68.14","","-$6999.99"
"06/03/2022","Buy","CPB","CAMPBELL SOUP CO","152.828","$45.8031","","-$7000.00"
"06/03/2022","Buy","TSN","TYSON FOODS INC CLASS A","79.8448","$87.67","","-$6999.99"
"06/03/2022","Buy","HSY","HERSHEY CO","33.6745","$207.872","","-$6999.99"
"06/03/2022","Buy","PEP","PEPSICO INC","42.4465","$164.9131","","-$6999.98"
"06/03/2022","Buy","MNST","MONSTER BEVERAGE CORPORA","79.0067","$88.60","","-$6999.99"
"06/03/2022","Buy","GIS","GENERAL MILLS INC","102.5744","$68.2431","","-$7000.00"
"06/03/2022","Buy","MDLZ","MONDELEZ INTL CLASS A","112.2955","$62.3355","","-$7000.00"
"06/03/2022","Buy","ADM","ARCHER-DANIELS-MIDLN","79.5138","$88.035","","-$7000.00"
"06/03/2022","Buy","KO","THE COCA-COLA CO","111.0318","$63.045","","-$7000.00"
"06/03/2022","Buy","CMG","CHIPOTLE MEXICAN GRL","5.1083","$1370.304","","-$6999.92"
"06/03/2022","Buy","GPC","GENUINE PARTS CO","51.4834","$135.966","","-$6999.99"
"06/03/2022","Buy","AMCR","AMCOR PLC F","520.9224","$13.4377","","-$7000.00"
"06/03/2022","Buy","AZO","AUTOZONE INC","3.405","$2055.744","","-$6999.81"
"06/03/2022","Buy","KMX","CARMAX INC","73.2187","$95.6039","","-$6999.99"
"06/03/2022","Buy","LEN","LENNAR CORP CLASS A","87.5","$80.00","","-$7000.00"
"06/03/2022","Buy","TJX","TJX COMPANIES INC","112.2604","$62.355","","-$7000.00"
"06/03/2022","Buy","ORLY","O REILLY AUTOMOTIVE","11.069","$632.396","","-$6999.99"
"06/03/2022","Buy","HD","HOME DEPOT INC","22.9426","$305.108","","-$6999.97"
"06/03/2022","Buy","GM","GENERAL MOTORS CO","184.661","$37.9073","","-$7000.00"
"06/03/2022","Buy","MAR","MARRIOTT INTL INC CLASS A","40.3156","$173.63","","-$7000.00"
"06/03/2022","Buy","MCD","MCDONALDS CORP","28.0968","$249.138","","-$6999.98"
"06/03/2022","Buy","NKE","NIKE INC CLASS B","57.8216","$121.062","","-$7000.00"
"06/03/2022","Buy","NFLX","NETFLIX INC","125.2672","$199.5733","","-$24999.99"
"06/03/2022","Buy","DIS","WALT DISNEY CO","322.9583","$108.3731","","-$34999.99"
"06/03/2022","Buy","CMCSA","COMCAST CORP CLASS A","807.9782","$43.318","","-$35000.00"
"06/03/2022","Buy","GOOG","ALPHABET INC. CLASS C","21.9024","$2282.85","","-$49999.89"
"06/03/2022","Journal","","JOURNAL FRM 35602508","","","","$500000.00"
"06/03/2022","Sell","PG","PROCTER & GAMBLE","0.6992","$145.68","","$101.86"
"06/03/2022","Sell","PG","PROCTER & GAMBLE","118","$145.68","$0.39","$17189.85"
"06/03/2022","Sell","BXP","BOSTON PROPERTIES REIT","0.3906","$106.215","","$41.49"
"06/03/2022","Sell","BXP","BOSTON PROPERTIES REIT","84","$106.215","$0.20","$8921.86"
"06/03/2022","Sell","SJM","J M SMUCKER CO","0.7105","$122.62","","$87.12"
"06/03/2022","Sell","SJM","J M SMUCKER CO","137","$122.62","$0.38","$16798.56"
"06/03/2022","Sell","IPG","INTERPUBLIC GRP COS","0.309","$31.1204","","$9.62"
"06/03/2022","Sell","IPG","INTERPUBLIC GRP COS","766","$31.1204","$0.55","$23837.68"
"06/03/2022","Sell","HPE","HEWLETT PACKARD ENTERPRI","0.7911","$15.0265","","$11.89"
"06/03/2022","Sell","HPE","HEWLETT PACKARD ENTERPRI","1,904","$15.0265","$0.66","$28609.80"
"06/03/2022","Sell","HRL","HORMEL FOODS CORP","0.0691","$45.54","","$3.15"
"06/03/2022","Sell","HRL","HORMEL FOODS CORP","359","$45.54","$0.37","$16348.49"
"06/03/2022","Sell","ROST","ROSS STORES INC","0.9281","$82.42","","$76.49"
"06/03/2022","Sell","ROST","ROSS STORES INC","197","$82.42","$0.37","$16236.37"
"06/03/2022","Sell","MDT","MEDTRONIC PLC F","0.205","$96.41","","$19.76"
"06/03/2022","Sell","MDT","MEDTRONIC PLC F","239","$96.41","$0.53","$23041.46"
"06/03/2022","Sell","OMC","OMNICOM GROUP INC","0.7246","$71.975","","$52.15"
"06/03/2022","Sell","OMC","OMNICOM GROUP INC","319","$71.975","$0.53","$22959.50"
"06/01/2022","Qualified Dividend","PCAR","PACCAR INC","","","","$40.83"
"06/01/2022","Qualified Dividend","WFC","WELLS FARGO & CO","","","","$55.23"
"06/01/2022","Qualified Dividend","F","FORD MOTOR CO","","","","$15.58"
"06/01/2022","Qualified Dividend","SJM","J M SMUCKER CO","","","","$16.32"
"06/01/2022","Qualified Dividend","AFL","AFLAC INC","","","","$69.47"
"06/01/2022","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$16.40"
"06/01/2022","Qualified Dividend","WEC","W E C ENERGY GROUP INC","","","","$73.30"
"06/01/2022","Qualified Dividend","PSX","PHILLIPS 66","","","","$27.15"
"05/31/2022","Qualified Dividend","WMT","WALMART INC","","","","$38.55"
"05/31/2022","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$17.62"
"05/27/2022","Qualified Dividend","SCHW","CHARLES SCHWAB CORP","","","","$49.73"
"05/27/2022","Qualified Dividend","C","CITIGROUP INC","","","","$50.34"
"05/26/2022","Qualified Dividend","PAYX","PAYCHEX INC","","","","$65.03"
"05/25/2022","Special Qual Div","CTRA","COTERRA ENERGY INC","","","","$49.08"
"05/25/2022","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$16.36"
"05/24/2022","Buy","IBM","IBM CORP","74.8547","$133.592","","-$9999.99"
"05/24/2022","Buy","FISV","FISERV INC","103.5346","$96.586","","-$9999.99"
"05/24/2022","Buy","MU","MICRON TECHNOLOGY","150.7159","$66.35","","-$10000.00"
"05/24/2022","Buy","MSI","MOTOROLA SOLUTIONS","46.6753","$214.246","","-$10000.00"
"05/24/2022","Buy","AVGO","BROADCOM INC","19.0999","$523.562","","-$9999.98"
"05/24/2022","Buy","PTC","PTC INC","92.6959","$107.8796","","-$10000.00"
"05/24/2022","Buy","JKHY","HENRY JACK & ASSOC","54.7494","$182.6501","","-$9999.98"
"05/24/2022","Buy","CCI","CROWN CASTLE INTL CO REIT","52.351","$191.018","","-$9999.98"
"05/24/2022","Buy","RTX","RAYTHEON TECHNOLOGIES CO","161.9816","$92.6031","","-$15000.00"
"05/24/2022","Buy","CAT","CATERPILLAR INC","73.3973","$204.367","","-$14999.99"
"05/24/2022","Buy","ITW","ILLINOIS TOOL WORKS","24.6943","$202.4755","","-$4999.99"
"05/24/2022","Buy","UAL","UNITED AIRLINES HLDGS","121.3124","$41.2159","","-$5000.00"
"05/24/2022","Buy","CHRW","C H ROBINSON WORLDWD","47.66","$104.9096","","-$4999.99"
"05/24/2022","Buy","MDT","MEDTRONIC PLC F","143.127","$104.802","","-$15000.00"
"05/24/2022","Buy","DHR","DANAHER CORP","59.721","$251.1679","","-$15000.00"
"05/24/2022","Buy","CVS","CVS HEALTH CORP","155.6274","$96.384","","-$14999.99"
"05/24/2022","Buy","BSX","BOSTON SCIENTIFIC CO","377.8527","$39.698","","-$15000.00"
"05/24/2022","Buy","GILD","GILEAD SCIENCES INC","233.544","$64.2277","","-$14999.99"
"05/24/2022","Buy","BMY","BRISTOL-MYERS SQUIBB","195.16","$76.86","","-$15000.00"
"05/24/2022","Buy","PFE","PFIZER INC","150.2412","$53.2477","","-$8000.00"
"05/24/2022","Buy","ALL","ALLSTATE CORP","117.6934","$127.4497","","-$14999.99"
"05/24/2022","Buy","HBAN","HUNTINGTON BANCSHS","1,122.1077","$13.3677","","-$15000.00"
"05/24/2022","Buy","MMC","MARSH & MC LENNAN CO","98.2691","$152.642","","-$14999.99"
"05/24/2022","Buy","AIG","AMERICAN INTL GROUP","268.7401","$55.816","","-$15000.00"
"05/24/2022","Buy","MET","METLIFE INC","235.9774","$63.5654","","-$15000.00"
"05/24/2022","Buy","AFL","AFLAC INC","264.8024","$56.646","","-$15000.00"
"05/24/2022","Buy","BKR","BAKER HUGHES CO. CLASS A","222.2222","$36.00","","-$8000.00"
"05/24/2022","Buy","PSX","PHILLIPS 66","83.2466","$96.10","","-$8000.00"
"05/24/2022","Buy","MPC","MARATHON PETE CORP","82.5593","$96.90","","-$8000.00"
"05/24/2022","Buy","HES","HESS CORP","68.1884","$117.322","","-$8000.00"
"05/24/2022","Buy","PXD","PIONEER NATURAL RES","29.6331","$269.968","","-$7999.99"
"05/24/2022","Buy","PEP","PEPSICO INC","18.0929","$165.8108","","-$3000.00"
"05/24/2022","Buy","MDLZ","MONDELEZ INTL CLASS A","48.1039","$62.365","","-$3000.00"
"05/24/2022","Buy","HSY","HERSHEY CO","14.1267","$212.3624","","-$2999.98"
"05/24/2022","Buy","PG","PROCTER & GAMBLE","20.4702","$146.554","","-$2999.99"
"05/24/2022","Buy","MNST","MONSTER BEVERAGE CORPORA","34.5361","$86.8654","","-$2999.99"
"05/24/2022","Buy","ADM","ARCHER-DANIELS-MIDLN","34.5017","$86.952","","-$2999.99"
"05/24/2022","Buy","KO","THE COCA-COLA CO","47.1994","$63.56","","-$2999.99"
"05/24/2022","Buy","GIS","GENERAL MILLS INC","43.7445","$68.58","","-$3000.00"
"05/24/2022","Buy","SJM","J M SMUCKER CO","24.1487","$124.23","","-$2999.99"
"05/24/2022","Buy","TSN","TYSON FOODS INC CLASS A","34.0278","$88.1631","","-$3000.00"
"05/24/2022","Buy","HRL","HORMEL FOODS CORP","61.6446","$48.666","","-$3000.00"
"05/24/2022","Buy","TAP","MOLSON COORS BEVERAGE CLCLASS B","151.1101","$52.9415","","-$8000.00"
"05/24/2022","Buy","K","KELLOGG CO","114.3786","$69.9431","","-$7999.99"
"05/24/2022","Buy","CPB","CAMPBELL SOUP CO","168.8191","$47.388","","-$8000.00"
"05/24/2022","Buy","NVR","N V R INC","0.739","$4059.446","","-$2999.93"
"05/24/2022","Buy","CMG","CHIPOTLE MEXICAN GRL","2.382","$1259.417","","-$2999.93"
"05/24/2022","Buy","MAR","MARRIOTT INTL INC CLASS A","19.7683","$151.758","","-$3000.00"
"05/24/2022","Buy","SEE","SEALED AIR CORP","49.7049","$60.3562","","-$3000.00"
"05/24/2022","Buy","AZO","AUTOZONE INC","1.5919","$1884.438","","-$2999.84"
"05/24/2022","Buy","ORLY","O REILLY AUTOMOTIVE","4.9546","$605.496","","-$2999.99"
"05/24/2022","Buy","ROST","ROSS STORES INC","38.7893","$77.3408","","-$3000.00"
"05/24/2022","Buy","GPC","GENUINE PARTS CO","23.0308","$130.2601","","-$2999.99"
"05/24/2022","Buy","KMX","CARMAX INC","33.2557","$90.21","","-$3000.00"
"05/24/2022","Buy","AMCR","AMCOR PLC F","233.6867","$12.8377","","-$3000.00"
"05/24/2022","Buy","TJX","TJX COMPANIES INC","50.7322","$59.134","","-$3000.00"
"05/24/2022","Buy","DPZ","DOMINOS PIZZA INC","8.8427","$339.26","","-$2999.97"
"05/24/2022","Buy","WRK","WESTROCK CO","67.0194","$44.7631","","-$3000.00"
"05/24/2022","Buy","HD","HOME DEPOT INC","10.4944","$285.866","","-$2999.99"
"05/24/2022","Buy","LEN","LENNAR CORP CLASS A","41.9282","$71.5508","","-$3000.00"
"05/24/2022","Buy","MCD","MCDONALDS CORP","12.2986","$243.93","","-$3000.00"
"05/24/2022","Buy","GM","GENERAL MOTORS CO","85.8663","$34.938","","-$3000.00"
"05/24/2022","Buy","NKE","NIKE INC CLASS B","37.4599","$106.7808","","-$4000.00"
"05/24/2022","Buy","TMUS","T-MOBILE US INC","77.8265","$128.4908","","-$9999.99"
"05/24/2022","Buy","VZ","VERIZON COMMUNICATN","198.216","$50.45","","-$10000.00"
"05/24/2022","Buy","T","A T & T INC","417.2884","$21.1077","","-$8808.00"
"05/24/2022","Buy","LYB","LYONDELLBASELL INDS FCLASS A","18.906","$105.7862","","-$1999.99"
"05/24/2022","Buy","NEM","NEWMONT CORP","29.2585","$68.356","","-$1999.99"
"05/24/2022","Buy","CF","CF INDUSTRIES HLDG","19.9748","$100.126","","-$2000.00"
"05/24/2022","Buy","MOS","THE MOSAIC CO","34.3801","$58.1731","","-$2000.00"
"05/24/2022","Buy","SHW","SHERWIN WILLIAMS CO","7.7764","$257.1871","","-$1999.99"
"05/24/2022","Buy","LIN","LINDE PLC F","6.2716","$318.896","","-$1999.99"
"05/24/2022","Buy","FCX","FREEPORT-MCMORAN INC","323.9487","$37.0429","","-$12000.00"
"05/24/2022","Journal","","JOURNAL FRM 35602508","","","","$693658.11"
"05/24/2022","Qualified Dividend","WRK","WESTROCK CO","","","","$50.86"
"05/23/2022","Qualified Dividend","APA","APA CORP","","","","$13.31"
"05/23/2022","Special Qual Div","FANG","DIAMONDBACK ENERGY","","","","$61.70"
"05/23/2022","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$18.38"
"05/20/2022","Qualified Dividend","NI","NISOURCE INC 00500","","","","$19.53"
"05/20/2022","Qualified Dividend","NSC","NORFOLK SOUTHERN CO","","","","$10.13"
"05/18/2022","Qualified Dividend","MKTX","MARKETAXESS HOLDINGS","","","","$12.12"
"05/18/2022","Buy","AEE","AMEREN CORP","85.5607","$93.5008","","-$7999.99"
"05/18/2022","Buy","PEG","PUB SVC ENTERPISE GP","117.1371","$68.296","","-$8000.00"
"05/18/2022","Buy","AEP","AMER ELECTRIC PWR CO","79.0185","$101.242","","-$7999.99"
"05/18/2022","Buy","MU","MICRON TECHNOLOGY","418.235","$71.73","","-$30000.00"
"05/18/2022","Buy","CTXS","CITRIX SYSTEMS INC","199.3848","$100.3085","","-$19999.99"
"05/18/2022","Buy","FTV","FORTIVE CORP DISC 00500","341.7985","$58.514","","-$20000.00"
"05/18/2022","Buy","GLW","CORNING INC","292.3138","$34.2098","","-$10000.00"
"05/18/2022","Buy","ANET","ARISTA NETWORKS INC","96.9367","$103.16","","-$9999.99"
"05/18/2022","Buy","KEYS","KEYSIGHT TECH INC","72.9598","$137.0617","","-$9999.99"
"05/18/2022","Buy","HPE","HEWLETT PACKARD ENTERPRI","621.5928","$16.0877","","-$10000.00"
"05/18/2022","Buy","NTAP","NETAPP INC","138.7193","$72.088","","-$10000.00"
"05/18/2022","Buy","MSI","MOTOROLA SOLUTIONS","48.7879","$204.9686","","-$9999.99"
"05/18/2022","Buy","TEL","TE CONNECTIVITY LTD F","80.6542","$123.986","","-$9999.99"
"05/18/2022","Buy","FISV","FISERV INC","104.7295","$95.484","","-$9999.99"
"05/18/2022","Buy","HPQ","HP INC.","265.9008","$37.608","","-$10000.00"
"05/18/2022","Buy","ADI","ANALOG DEVICES INC","61.669","$162.156","","-$10000.00"
"05/18/2022","Buy","AVGO","BROADCOM INC","16.9541","$589.826","","-$9999.97"
"05/18/2022","Buy","KIM","KIMCO REALTY CORP REIT","169.9401","$23.5377","","-$4000.00"
"05/18/2022","Buy","HST","HOST HOTELS & RESORT","195.5225","$20.458","","-$4000.00"
"05/18/2022","Buy","O","REALTY INCOME CORP DISCOREIT","117.4305","$68.1254","","-$8000.00"
"05/18/2022","Buy","WY","WEYERHAEUSER CO REIT","206.0506","$38.8254","","-$8000.00"
"05/18/2022","Buy","AMT","AMERN TOWER CORP REIT","43.2055","$231.452","","-$10000.00"
"05/18/2022","Buy","OTIS","OTIS WORLDWIDE CORP","68.005","$73.524","","-$5000.00"
"05/18/2022","Buy","PCAR","PACCAR INC","60.4346","$82.734","","-$5000.00"
"05/18/2022","Buy","NSC","NORFOLK SOUTHERN CO","20.6132","$242.562","","-$4999.98"
"05/18/2022","Buy","RSG","REPUBLIC SERVICES","38.3245","$130.4647","","-$4999.99"
"05/18/2022","Buy","PAYX","PAYCHEX INC","42.0288","$118.966","","-$5000.00"
"05/18/2022","Buy","ROP","ROPER TECHNOLOGIES","11.9489","$418.4481","","-$4999.99"
"05/18/2022","Buy","HON","HONEYWELL INTL INC","25.4214","$196.684","","-$4999.98"
"05/18/2022","Buy","NOC","NORTHROP GRUMMAN CORP","10.8826","$459.448","","-$4999.99"
"05/18/2022","Buy","GD","GENERAL DYNAMICS CO","21.5684","$231.82","","-$4999.99"
"05/18/2022","Buy","LMT","LOCKHEED MARTIN CORP","11.3719","$439.6788","","-$4999.98"
"05/18/2022","Buy","ADP","AUTO DATA PROCESSING","23.754","$210.49","","-$4999.98"
"05/18/2022","Buy","UNP","UNION PACIFIC CORP","22.0757","$226.4932","","-$5000.00"
"05/18/2022","Buy","VRTX","VERTEX PHARMACEUTICA","90.342","$254.588","","-$22999.99"
"05/18/2022","Buy","ABT","ABBOTT LABORATORIES","70.2583","$113.8654","","-$7999.99"
"05/18/2022","Buy","MRK","MERCK & CO. INC.","162.1351","$92.5154","","-$14999.99"
"05/18/2022","Buy","ABBV","ABBVIE INC","149.6097","$153.7333","","-$22999.99"
"05/18/2022","Buy","LLY","LILLY ELI & CO","50.4962","$297.0518","","-$14999.99"
"05/18/2022","Buy","JNJ","JOHNSON & JOHNSON","84.5785","$177.35","","-$15000.00"
"05/18/2022","Buy","UNH","UNITEDHEALTH GRP INC","31.1919","$480.894","","-$15000.00"
"05/18/2022","Buy","V","VISA INC CLASS A","122.1168","$204.722","","-$25000.00"
"05/18/2022","Buy","PYPL","PAYPAL HOLDINGS INCORPOR","319.1592","$78.3308","","-$25000.00"
"05/18/2022","Buy","CB","CHUBB LTD F","42.8591","$209.99","","-$8999.98"
"05/18/2022","Buy","BLK","BLACKROCK INC","15.0323","$598.7106","","-$9000.00"
"05/18/2022","Buy","C","CITIGROUP INC","179.434","$50.1577","","-$9000.00"
"05/18/2022","Buy","GS","GOLDMAN SACHS GROUP","25.8539","$309.431","","-$8000.00"
"05/18/2022","Buy","WFC","WELLS FARGO & CO","211.6889","$42.5152","","-$9000.00"
"05/18/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","48.3232","$310.4094","","-$14999.98"
"05/18/2022","Buy","CVX","CHEVRON CORP","47.3709","$168.88","","-$8000.00"
"05/18/2022","Buy","EOG","EOG RESOURCES INC","64.5164","$123.9994","","-$7999.99"
"05/18/2022","Buy","COP","CONOCOPHILLIPS","75.5672","$105.866","","-$8000.00"
"05/18/2022","Buy","SJM","J M SMUCKER CO","97.0743","$133.918","","-$13000.00"
"05/18/2022","Buy","HRL","HORMEL FOODS CORP","99.5539","$50.224","","-$5000.00"
"05/18/2022","Buy","ADM","ARCHER-DANIELS-MIDLN","58.6224","$85.2916","","-$5000.00"
"05/18/2022","Buy","TSN","TYSON FOODS INC CLASS A","57.2616","$87.3185","","-$5000.00"
"05/18/2022","Buy","GIS","GENERAL MILLS INC","72.1354","$69.314","","-$4999.99"
"05/18/2022","Buy","MNST","MONSTER BEVERAGE CORPORA","57.4276","$87.066","","-$4999.99"
"05/18/2022","Buy","HSY","HERSHEY CO","23.103","$216.4217","","-$4999.99"
"05/18/2022","Buy","PG","PROCTER & GAMBLE","33.5818","$148.89","","-$4999.99"
"05/18/2022","Buy","MDLZ","MONDELEZ INTL CLASS A","80.1054","$62.4177","","-$4999.99"
"05/18/2022","Buy","KO","THE COCA-COLA CO","79.7829","$62.67","","-$4999.99"
"05/18/2022","Buy","PEP","PEPSICO INC","30.0589","$166.34","","-$5000.00"
"05/18/2022","Buy","KMX","CARMAX INC","165.0056","$90.906","","-$15000.00"
"05/18/2022","Buy","AMCR","AMCOR PLC F","1,154.0503","$12.9977","","-$15000.00"
"05/18/2022","Buy","DPZ","DOMINOS PIZZA INC","46.2691","$324.19","","-$14999.98"
"05/18/2022","Buy","GM","GENERAL MOTORS CO","408.4967","$36.72","","-$15000.00"
"05/18/2022","Buy","HD","HOME DEPOT INC","52.1923","$287.3986","","-$14999.99"
"05/18/2022","Buy","TJX","TJX COMPANIES INC","248.0322","$60.476","","-$15000.00"
"05/18/2022","Buy","GPC","GENUINE PARTS CO","37.9453","$131.7686","","-$5000.00"
"05/18/2022","Buy","AZO","AUTOZONE INC","2.6835","$1863.204","","-$4999.91"
"05/18/2022","Buy","SEE","SEALED AIR CORP","79.9002","$62.578","","-$4999.99"
"05/18/2022","Buy","NVR","N V R INC","1.1897","$4202.594","","-$4999.83"
"05/18/2022","Buy","WRK","WESTROCK CO","107.9608","$46.3131","","-$5000.00"
"05/18/2022","Buy","ORLY","O REILLY AUTOMOTIVE","8.1185","$615.8729","","-$4999.96"
"05/18/2022","Buy","LEN","LENNAR CORP CLASS A","68.5344","$72.956","","-$5000.00"
"05/18/2022","Buy","CMG","CHIPOTLE MEXICAN GRL","0.7849","$1273.92","","-$999.90"
"05/18/2022","Buy","MAR","MARRIOTT INTL INC CLASS A","6.2422","$160.1978","","-$999.99"
"05/18/2022","Buy","MCD","MCDONALDS CORP","4.2733","$234.01","","-$999.99"
"05/18/2022","Buy","ROST","ROSS STORES INC","10.613","$94.224","","-$1000.00"
"05/18/2022","Buy","PARA","PARAMOUNT GLOBAL CLASS B","315.4036","$31.7054","","-$10000.00"
"05/18/2022","Buy","LUMN","LUMEN TECHNOLOGIES INC","1,305.7444","$11.4877","","-$15000.00"
"05/18/2022","Buy","OMC","OMNICOM GROUP INC","192.9066","$77.7578","","-$14999.99"
"05/18/2022","Buy","IPG","INTERPUBLIC GRP COS","469.807","$31.928","","-$15000.00"
"05/18/2022","Buy","CF","CF INDUSTRIES HLDG","76.4073","$104.702","","-$8000.00"
"05/18/2022","Buy","MOS","THE MOSAIC CO","127.551","$62.72","","-$8000.00"
"05/18/2022","Buy","LYB","LYONDELLBASELL INDS FCLASS A","53.9377","$111.2393","","-$5999.99"
"05/18/2022","Sell","CBOE","CBOE GLOBAL MKTS INC","0.2255","$107.1821","","$24.17"
"05/18/2022","Sell","CBOE","CBOE GLOBAL MKTS INC","87","$107.1821","$0.21","$9324.63"
"05/18/2022","Sell","F","FORD MOTOR CO","0.7405","$12.99","","$9.62"
"05/18/2022","Sell","F","FORD MOTOR CO","1,005","$12.99","$0.30","$13054.65"
"05/18/2022","Sell","EBAY","EBAY INC","0.9234","$45.6042","","$42.11"
"05/18/2022","Sell","EBAY","EBAY INC","103","$45.6042","$0.11","$4697.12"
"05/18/2022","Sell","EBAY","EBAY INC","100","$45.6042","$0.10","$4560.32"
"05/18/2022","Sell","HLT","HILTON WORLDWIDE HLD","0.717","$131.5167","","$94.30"
"05/18/2022","Sell","HLT","HILTON WORLDWIDE HLD","70","$131.5167","$0.21","$9205.96"
"05/18/2022","Sell","TDY","TELEDYNE TECHNOLOGIE","0.3639","$397.4401","","$144.63"
"05/18/2022","Sell","TDY","TELEDYNE TECHNOLOGIE","23","$397.4401","$0.21","$9140.91"
"05/18/2022","Sell","WBA","WALGREENS BOOTS ALLI","0.1034","$42.04","","$4.35"
"05/18/2022","Sell","WBA","WALGREENS BOOTS ALLI","221","$42.04","$0.21","$9290.63"
"05/18/2022","Sell","PSA","PUBLIC STORAGE REIT","0.595","$312.3901","","$185.87"
"05/18/2022","Sell","PSA","PUBLIC STORAGE REIT","29","$312.3901","$0.21","$9059.10"
"05/18/2022","Sell","ULTA","ULTA BEAUTY INC.","0.5986","$357.5515","","$214.03"
"05/18/2022","Sell","ULTA","ULTA BEAUTY INC.","25","$357.5515","$0.20","$8938.59"
"05/18/2022","Sell","TSCO","TRACTOR SUPPLY COMP","0.9054","$186.845","","$169.17"
"05/18/2022","Sell","TSCO","TRACTOR SUPPLY COMP","48","$186.845","$0.21","$8968.35"
"05/18/2022","Sell","IQV","IQVIA HOLDINGS INC","0.5232","$200.50","","$104.90"
"05/18/2022","Sell","IQV","IQVIA HOLDINGS INC","45","$200.50","$0.21","$9022.29"
"05/18/2022","Sell","TYL","TYLER TECHNOLOGIES","0.7838","$334.5001","$0.01","$262.17"
"05/18/2022","Sell","TYL","TYLER TECHNOLOGIES","26","$334.5001","$0.20","$8696.80"
"05/18/2022","Sell","BBY","BEST BUY INC","0.9217","$76.1542","","$70.19"
"05/18/2022","Sell","BBY","BEST BUY INC","155","$76.1542","$0.27","$11803.63"
"05/18/2022","Sell","WMT","WALMART INC","0.8362","$123.475","","$103.25"
"05/18/2022","Sell","WMT","WALMART INC","68","$123.475","$0.19","$8396.11"
"05/18/2022","Journal","","JOURNAL FRM 35602508","","","","$700000.00"
"05/17/2022","Qualified Dividend","CFG","CITIZENS FINL GROUP INC","","","","$18.02"
"05/16/2022","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$12.95"
"05/16/2022","Qualified Dividend","OKE","ONEOK INC","","","","$31.96"
"05/16/2022","Qualified Dividend","HRL","HORMEL FOODS CORP","","","","$12.34"
"05/16/2022","Qualified Dividend","ABBV","ABBVIE INC","","","","$26.23"
"05/16/2022","Qualified Dividend","ABT","ABBOTT LABORATORIES","","","","$7.31"
"05/16/2022","Qualified Dividend","KMI","KINDER MORGAN INC","","","","$35.18"
"05/16/2022","Buy","IBM","IBM CORP","74.2335","$134.71","","-$9999.99"
"05/16/2022","Buy","NTAP","NETAPP INC","139.8484","$71.506","","-$10000.00"
"05/16/2022","Buy","HPQ","HP INC.","269.1232","$37.1577","","-$10000.00"
"05/16/2022","Buy","JKHY","HENRY JACK & ASSOC","56.9201","$175.6848","","-$10000.00"
"05/16/2022","Buy","KIM","KIMCO REALTY CORP REIT","172.5796","$23.1777","","-$4000.00"
"05/16/2022","Buy","HST","HOST HOTELS & RESORT","200.4208","$19.958","","-$4000.00"
"05/16/2022","Buy","ABT","ABBOTT LABORATORIES","64.6233","$108.32","","-$7000.00"
"05/16/2022","Buy","C","CITIGROUP INC","126.3157","$47.50","","-$6000.00"
"05/16/2022","Buy","WFC","WELLS FARGO & CO","141.9859","$42.2577","","-$6000.00"
"05/16/2022","Buy","CB","CHUBB LTD F","28.8151","$208.2239","","-$5999.99"
"05/16/2022","Buy","BLK","BLACKROCK INC","10.0248","$598.51","","-$5999.94"
"05/16/2022","Buy","HRL","HORMEL FOODS CORP","150.4098","$53.188","","-$8000.00"
"05/16/2022","Buy","TMUS","T-MOBILE US INC","39.3148","$127.1785","","-$5000.00"
"05/16/2022","Buy","PARA","PARAMOUNT GLOBAL CLASS B","177.9486","$28.098","","-$5000.00"
"05/16/2022","Buy","VZ","VERIZON COMMUNICATN","102.4002","$48.828","","-$5000.00"
"05/16/2022","Buy","LYB","LYONDELLBASELL INDS FCLASS A","18.6934","$106.9894","","-$2000.00"
"05/16/2022","Sell","ORCL","ORACLE CORP","0.041","$69.7341","","$2.86"
"05/16/2022","Sell","ORCL","ORACLE CORP","274","$69.7341","$0.44","$19106.70"
"05/16/2022","Sell","AAPL","APPLE INC","0.9924","$145.81","","$144.70"
"05/16/2022","Sell","AAPL","APPLE INC","124","$145.81","$0.41","$18080.03"
"05/16/2022","Sell","SCHW","CHARLES SCHWAB CORP","0.6454","$64.2318","","$41.46"
"05/16/2022","Sell","SCHW","CHARLES SCHWAB CORP","248","$64.2318","$0.36","$15929.13"
"05/16/2022","Sell","CME","CME GROUP INC CLASS A","0.7799","$197.02","","$153.66"
"05/16/2022","Sell","CME","CME GROUP INC CLASS A","45","$197.02","$0.20","$8865.70"
"05/16/2022","Sell","PLD","PROLOGIS INC. REIT","0.7348","$125.4927","","$92.21"
"05/16/2022","Sell","PLD","PROLOGIS INC. REIT","71","$125.4927","$0.20","$8909.78"
"05/16/2022","Sell","TWTR","TWITTER INC","408","$38.2936","$0.36","$15623.43"
"05/16/2022 as of 05/15/2022","Bank Interest","","BANK INT 041622-051522 SCHWAB BANK","","","","$3.21"
"05/16/2022 as of 05/15/2022","Bank Interest","","BANK INT 041622-051522 SCHWAB PREMIER BANK","","","","$1.38"
"05/13/2022","Qualified Dividend","MS","MORGAN STANLEY","","","","$40.19"
"05/13/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$7.54"
"05/13/2022","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$6.88"
"05/13/2022","Qualified Dividend","ACN","ACCENTURE PLC FCLASS A","","","","$14.31"
"05/13/2022","Qualified Dividend","PKI","PERKINELMER INC","","","","$1.97"
"05/12/2022","Qualified Dividend","AAPL","APPLE INC","","","","$14.23"
"05/11/2022","Buy","GLW","CORNING INC","568.0575","$35.2077","","-$20000.00"
"05/11/2022","Buy","PTC","PTC INC","186.9158","$107.00","","-$19999.99"
"05/11/2022","Buy","MSI","MOTOROLA SOLUTIONS","49.0557","$203.8495","","-$9999.98"
"05/11/2022","Buy","TEL","TE CONNECTIVITY LTD F","80.4091","$124.364","","-$10000.00"
"05/11/2022","Buy","ANET","ARISTA NETWORKS INC","95.7505","$104.438","","-$9999.99"
"05/11/2022","Buy","HPE","HEWLETT PACKARD ENTERPRI","631.4048","$15.8377","","-$10000.00"
"05/11/2022","Buy","KEYS","KEYSIGHT TECH INC","74.7764","$133.732","","-$10000.00"
"05/11/2022","Buy","PFE","PFIZER INC","142.2041","$49.225","","-$7000.00"
"05/11/2022","Buy","SCHW","CHARLES SCHWAB CORP","106.5398","$65.7031","","-$7000.00"
"05/11/2022","Buy","GS","GOLDMAN SACHS GROUP","22.952","$304.984","","-$6999.99"
"05/11/2022","Buy","NKE","NIKE INC CLASS B","128.3932","$109.04","","-$13999.99"
"05/11/2022","Buy","MCD","MCDONALDS CORP","16.3839","$244.142","","-$4000.00"
"05/11/2022","Buy","CMG","CHIPOTLE MEXICAN GRL","3.0666","$1304.36","","-$3999.95"
"05/11/2022","Buy","ROST","ROSS STORES INC","45.3918","$88.1216","","-$4000.00"
"05/11/2022","Buy","BBY","BEST BUY INC","47.516","$84.182","","-$3999.99"
"05/11/2022","Buy","F","FORD MOTOR CO","307.503","$13.008","","-$4000.00"
"05/11/2022","Buy","MAR","MARRIOTT INTL INC CLASS A","23.574","$169.678","","-$3999.99"
"05/11/2022","Buy","TWTR","TWITTER INC","106.8261","$46.805","","-$5000.00"
"05/11/2022","Buy","T","A T & T INC","257.8954","$19.3877","","-$5000.00"
"05/11/2022","Buy","ATVI","ACTIVISION BLIZZARD","64.7182","$77.258","","-$5000.00"
"05/11/2022","Buy","TTWO","TAKE TWO INTERACTV","233.6228","$107.0101","","-$25000.00"
"05/11/2022","Sell","SBUX","STARBUCKS CORP","0.5342","$70.527","","$37.68"
"05/11/2022","Sell","SBUX","STARBUCKS CORP","126","$70.527","$0.05","$8886.35"
"05/11/2022","Sell","FOX","FOX CORP CLASS B","0.81","$30.5502","","$24.75"
"05/11/2022","Sell","FOX","FOX CORP CLASS B","302","$30.5502","$0.05","$9226.11"
"05/11/2022","Sell","SEDG","SOLAREDGE TECH","0.021","$224.0001","","$4.70"
"05/11/2022","Sell","SEDG","SOLAREDGE TECH","39","$224.0001","$0.04","$8735.96"
"05/11/2022","Sell","TSLA","TESLA INC","0.5185","$756.82","","$392.41"
"05/11/2022","Sell","TSLA","TESLA INC","11","$756.82","$0.04","$8324.98"
"05/11/2022","Sell","TROW","T ROWE PRICE GROUP","0.8816","$116.2901","","$102.52"
"05/11/2022","Sell","TROW","T ROWE PRICE GROUP","76","$116.2901","$0.05","$8838.00"
"05/11/2022","Sell","AMZN","AMAZON.COM INC","0.4874","$2110.99","$0.01","$1028.89"
"05/11/2022","Sell","AMZN","AMAZON.COM INC","8","$2110.99","$0.09","$16887.83"
"05/11/2022","Sell","FB","META PLATFORMS INC CLASS A","0.3587","$189.155","","$67.85"
"05/11/2022","Sell","FB","META PLATFORMS INC CLASS A","96","$189.155","$0.09","$18158.79"
"05/11/2022","Sell","CDNS","CADENCE DESIGN SYS","0.9935","$138.32","","$137.42"
"05/11/2022","Sell","CDNS","CADENCE DESIGN SYS","65","$138.32","$0.05","$8990.75"
"05/11/2022","Sell","AMAT","APPLIED MATERIALS","0.3368","$105.2138","","$35.44"
"05/11/2022","Sell","AMAT","APPLIED MATERIALS","175","$105.2138","$0.09","$18412.33"
"05/11/2022","Sell","ZBRA","ZEBRA TECHNOLOGIES CLASS A","0.7323","$325.09","","$238.06"
"05/11/2022","Sell","ZBRA","ZEBRA TECHNOLOGIES CLASS A","27","$325.09","$0.04","$8777.39"
"05/11/2022","Sell","TECH","BIO-TECHNE CORP","0.8013","$347.9605","","$278.82"
"05/11/2022","Sell","TECH","BIO-TECHNE CORP","25","$347.9605","$0.04","$8698.97"
"05/11/2022","Sell","REG","REGENCY CENTERS CORP REIT","0.4438","$65.76","","$29.18"
"05/11/2022","Sell","REG","REGENCY CENTERS CORP REIT","29","$65.76","$0.01","$1907.03"
"05/11/2022","Sell","RF","REGIONS FINL CO","0.5103","$20.2152","","$10.32"
"05/11/2022","Sell","RF","REGIONS FINL CO","93","$20.2152","$0.01","$1880.00"
"05/11/2022","Sell","VMC","VULCAN MATERIALS COM","0.1176","$160.11","","$18.83"
"05/11/2022","Sell","VMC","VULCAN MATERIALS COM","11","$160.11","$0.01","$1761.20"
"05/11/2022","Sell","MLM","MARTIN MARIETTA MATERIAL","0.7996","$324.512","","$259.48"
"05/11/2022","Sell","MLM","MARTIN MARIETTA MATERIAL","5","$324.512","$0.01","$1622.55"
"05/11/2022","Sell","LNC","LINCOLN NTNL CO","0.5556","$54.79","","$30.44"
"05/11/2022","Sell","LNC","LINCOLN NTNL CO","31","$54.79","$0.01","$1698.48"
"05/11/2022","Sell","MPWR","MONOLITHIC POWER SYS","0.5081","$404.228","","$205.39"
"05/11/2022","Sell","MPWR","MONOLITHIC POWER SYS","21","$404.228","$0.04","$8488.75"
"05/11/2022","Sell","NOW","SERVICE NOW INC","0.5954","$426.3634","","$253.86"
"05/11/2022","Sell","NOW","SERVICE NOW INC","21","$426.3634","$0.05","$8953.58"
"05/11/2022","Sell","CCL","CARNIVAL CORP F","0.145","$13.955","","$2.02"
"05/11/2022","Sell","CCL","CARNIVAL CORP F","606","$13.955","$0.04","$8456.69"
"05/11/2022","Sell","INTU","INTUIT INC","0.8792","$363.955","","$319.99"
"05/11/2022","Sell","INTU","INTUIT INC","48","$363.955","$0.09","$17469.75"
"05/10/2022","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$6.50"
"05/06/2022","Qualified Dividend","ATVI","ACTIVISION BLIZZARD","","","","$31.90"
"05/06/2022","Qualified Dividend","GD","GENERAL DYNAMICS CO","","","","$29.61"
"05/06/2022","Buy","NRG","NRG ENERGY INC","247.7577","$40.362","","-$10000.00"
"05/06/2022","Buy","ADI","ANALOG DEVICES INC","63.3464","$157.862","","-$9999.99"
"05/06/2022","Buy","AMAT","APPLIED MATERIALS","87.4355","$114.37","","-$10000.00"
"05/06/2022","Buy","NOW","SERVICE NOW INC","21.5954","$463.06","","-$9999.97"
"05/06/2022","Buy","IBM","IBM CORP","72.5531","$137.83","","-$9999.99"
"05/06/2022","Buy","FISV","FISERV INC","103.693","$96.4385","","-$10000.00"
"05/06/2022","Buy","MSI","MOTOROLA SOLUTIONS","47.8468","$209.00","","-$9999.98"
"05/06/2022","Buy","ORCL","ORACLE CORP","137.6972","$72.6231","","-$10000.00"
"05/06/2022","Buy","INTU","INTUIT INC","24.7863","$403.448","","-$9999.98"
"05/06/2022","Buy","AVGO","BROADCOM INC","17.0744","$585.67","","-$9999.96"
"05/06/2022","Buy","AAPL","APPLE INC","63.1043","$158.4677","","-$9999.99"
"05/06/2022","Buy","CDAY","CERIDIAN H C M HOLDING I","181.7454","$55.022","","-$10000.00"
"05/06/2022","Buy","IT","GARTNER INC","39.3165","$254.346","","-$9999.99"
"05/06/2022","Buy","TYL","TYLER TECHNOLOGIES","26.7838","$373.36","","-$10000.00"
"05/06/2022","Buy","IPGP","IPG PHOTONICS CORP","97.7897","$102.2602","","-$9999.99"
"05/06/2022","Buy","TRMB","TRIMBLE INC","155.6735","$64.237","","-$10000.00"
"05/06/2022","Buy","PLD","PROLOGIS INC. REIT","55.9698","$142.934","","-$7999.99"
"05/06/2022","Buy","SBAC","S B A COMMUNICATIONS CLASS A","23.4296","$341.448","","-$7999.99"
"05/06/2022","Buy","CHRW","C H ROBINSON WORLDWD","73.7194","$108.5196","","-$8000.00"
"05/06/2022","Buy","PCAR","PACCAR INC","95.2154","$84.02","","-$8000.00"
"05/06/2022","Buy","RSG","REPUBLIC SERVICES","59.3569","$134.7778","","-$7999.99"
"05/06/2022","Buy","ROP","ROPER TECHNOLOGIES","18.2203","$439.07","","-$7999.99"
"05/06/2022","Buy","NSC","NORFOLK SOUTHERN CO","31.5208","$253.8003","","-$7999.99"
"05/06/2022","Buy","PAYX","PAYCHEX INC","64.6464","$123.75","","-$7999.99"
"05/06/2022","Buy","MCK","MCKESSON CORP","24.4267","$327.51","","-$7999.99"
"05/06/2022","Buy","CNC","CENTENE CORP","95.4859","$83.782","","-$8000.00"
"05/06/2022","Buy","WBA","WALGREENS BOOTS ALLI","221.1034","$45.2277","","-$10000.00"
"05/06/2022","Buy","GILD","GILEAD SCIENCES INC","163.404","$61.198","","-$10000.00"
"05/06/2022","Buy","DHR","DANAHER CORP","40.2777","$248.276","","-$9999.99"
"05/06/2022","Buy","PFE","PFIZER INC","206.3983","$48.45","","-$10000.00"
"05/06/2022","Buy","MDT","MEDTRONIC PLC F","96.078","$104.082","","-$9999.99"
"05/06/2022","Buy","NDAQ","NASDAQ INC","65.2826","$153.18","","-$9999.99"
"05/06/2022","Buy","STT","STATE STREET CORP","142.7877","$70.034","","-$9999.99"
"05/06/2022","Buy","GS","GOLDMAN SACHS GROUP","32.2401","$310.172","","-$9999.98"
"05/06/2022","Buy","BLK","BLACKROCK INC","15.8397","$631.324","","-$9999.98"
"05/06/2022","Buy","PRU","PRUDENTIAL FINL","74.7537","$107.018","","-$7999.99"
"05/06/2022","Buy","MET","METLIFE INC","119.1717","$67.13","","-$8000.00"
"05/06/2022","Buy","PGR","PROGRESSIVE CO OHIO","72.649","$110.1185","","-$8000.00"
"05/06/2022","Buy","MTB","M & T BANK CORP","47.1937","$169.514","","-$7999.99"
"05/06/2022","Buy","MMC","MARSH & MC LENNAN CO","49.7041","$160.9524","","-$7999.99"
"05/06/2022","Buy","CB","CHUBB LTD F","38.2171","$209.33","","-$7999.99"
"05/06/2022","Buy","XOM","EXXON MOBIL CORP","110.0897","$90.835","","-$10000.00"
"05/06/2022","Buy","TSN","TYSON FOODS INC CLASS A","88.0921","$90.814","","-$8000.00"
"05/06/2022","Buy","ADM","ARCHER-DANIELS-MIDLN","89.5215","$89.364","","-$8000.00"
"05/06/2022","Buy","MDLZ","MONDELEZ INTL CLASS A","122.3091","$65.408","","-$7999.99"
"05/06/2022","Buy","CCL","CARNIVAL CORP F","606.145","$16.4977","","-$10000.00"
"05/06/2022","Buy","ULTA","ULTA BEAUTY INC.","25.5986","$390.646","","-$9999.99"
"05/06/2022","Buy","AMZN","AMAZON.COM INC","4.2439","$2356.274","","-$9999.79"
"05/06/2022","Buy","LEN","LENNAR CORP CLASS A","129.6253","$77.1454","","-$10000.00"
"05/06/2022","Buy","EBAY","EBAY INC","203.9234","$49.038","","-$10000.00"
"05/06/2022","Buy","BBY","BEST BUY INC","108.4057","$92.246","","-$9999.99"
"05/06/2022","Buy","CMG","CHIPOTLE MEXICAN GRL","7.4186","$1347.95","","-$9999.90"
"05/06/2022","Buy","LIN","LINDE PLC F","25.9912","$307.7963","","-$8000.00"
"05/06/2022","Buy","NEM","NEWMONT CORP","110.0014","$72.7263","","-$7999.99"
"05/06/2022","Buy","FOX","FOX CORP CLASS B","302.81","$33.024","","-$10000.00"
"05/06/2022","Buy","TWTR","TWITTER INC","200.04","$49.99","","-$10000.00"
"05/06/2022","Buy","TMUS","T-MOBILE US INC","77.7393","$128.635","","-$9999.99"
"05/06/2022","Buy","FB","META PLATFORMS INC CLASS A","48.0169","$208.26","","-$10000.00"
"05/06/2022","Buy","VZ","VERIZON COMMUNICATN","207.5636","$48.178","","-$10000.00"
"05/06/2022","Buy","T","A T & T INC","502.611","$19.8961","","-$10000.00"
"05/06/2022","Buy","ATVI","ACTIVISION BLIZZARD","127.9754","$78.14","","-$10000.00"
"05/06/2022","Journal","","JOURNAL FRM 35602508","","","","$200000.00"
"05/06/2022","Sell","AXP","AMERICAN EXPRESS CO","0.1963","$166.905","","$32.76"
"05/06/2022","Sell","AXP","AMERICAN EXPRESS CO","56","$166.905","$0.05","$9346.63"
"05/06/2022","Sell","GRMN","GARMIN LTD F","0.6908","$105.8508","","$73.12"
"05/06/2022","Sell","GRMN","GARMIN LTD F","88","$105.8508","$0.05","$9314.82"
"05/06/2022","Sell","ENPH","ENPHASE ENERGY INC","0.047","$169.95","","$7.99"
"05/06/2022","Sell","ENPH","ENPHASE ENERGY INC","54","$169.95","$0.05","$9177.25"
"05/06/2022","Sell","RL","RALPH LAUREN CORP CLASS A","0.8328","$98.2085","","$81.79"
"05/06/2022","Sell","RL","RALPH LAUREN CORP CLASS A","92","$98.2085","$0.05","$9035.13"
"05/06/2022","Sell","CTSH","COGNIZANT TECH SOLU CLASS A","0.0462","$74.525","","$3.44"
"05/06/2022","Sell","CTSH","COGNIZANT TECH SOLU CLASS A","154","$74.525","$0.06","$11476.79"
"05/06/2022","Sell","CTSH","COGNIZANT TECH SOLU CLASS A","100","$74.525","$0.04","$7452.46"
"05/06/2022","Sell","ICE","INTERCONTINENTAL EXC","0.8465","$100.2071","","$84.83"
"05/06/2022","Sell","ICE","INTERCONTINENTAL EXC","86","$100.2071","$0.04","$8617.77"
"05/05/2022","Qualified Dividend","PNC","PNC FINL SERVICES","","","","$15.21"
"05/05/2022","Buy","NI","NISOURCE INC 00500","273.224","$29.28","","-$8000.00"
"05/05/2022","Buy","CDNS","CADENCE DESIGN SYS","65.9935","$151.53","","-$10000.00"
"05/05/2022","Buy","CTSH","COGNIZANT TECH SOLU CLASS A","131.4058","$76.1001","","-$9999.99"
"05/05/2022","Buy","TEL","TE CONNECTIVITY LTD F","77.8246","$128.494","","-$9999.99"
"05/05/2022","Buy","MPWR","MONOLITHIC POWER SYS","21.5081","$464.94","","-$9999.98"
"05/05/2022","Buy","INTU","INTUIT INC","24.0929","$415.06","","-$10000.00"
"05/05/2022","Buy","ADP","AUTO DATA PROCESSING","36.075","$221.76","","-$7999.99"
"05/05/2022","Buy","LLY","LILLY ELI & CO","27.3263","$292.758","","-$7999.99"
"05/05/2022","Buy","AMZN","AMAZON.COM INC","4.2435","$2356.5361","","-$9999.96"
"05/05/2022","Buy","SBUX","STARBUCKS CORP","126.5342","$79.03","","-$10000.00"
"05/04/2022","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$7.80"
"05/04/2022","Buy","HSY","HERSHEY CO","35.8493","$223.156","","-$7999.99"
"05/04/2022","Buy","L","LOEWS CORP","126.1813","$63.4008","","-$8000.00"
"05/04/2022","Buy","AFL","AFLAC INC","137.5894","$58.144","","-$8000.00"
"05/04/2022","Buy","AMGN","AMGEN INC.","21.4182","$233.446","","-$4999.99"
"05/04/2022","Buy","ALL","ALLSTATE CORP","38.0998","$131.234","","-$4999.99"
"05/04/2022","Buy","WAT","WATERS CORP","15.0024","$333.278","","-$4999.97"
"05/04/2022","Buy","AMAT","APPLIED MATERIALS","87.9013","$113.7639","","-$9999.99"
"05/04/2022","Buy","ENPH","ENPHASE ENERGY INC","54.047","$185.024","","-$9999.99"
"05/04/2022","Buy","ORCL","ORACLE CORP","136.3438","$73.344","","-$10000.00"
"05/04/2022","Buy","NVR","N V R INC","1.1237","$4449.43","","-$4999.82"
"05/04/2022","Buy","WRK","WESTROCK CO","96.4431","$51.844","","-$5000.00"
"05/04/2022","Buy","PARA","PARAMOUNT GLOBAL CLASS B","341.227","$29.306","","-$10000.00"
"05/04/2022","Sell","KLAC","KLA CORP","0.0209","$331.05","","$6.92"
"05/04/2022","Sell","KLAC","KLA CORP","29","$331.05","$0.05","$9600.40"
"05/04/2022","Sell","FOX","FOX CORP CLASS B","0.6119","$33.5403","","$20.52"
"05/04/2022","Sell","FOX","FOX CORP CLASS B","286","$33.5403","$0.05","$9592.48"
"05/04/2022","Sell","TXN","TEXAS INSTRUMENTS","0.2588","$170.775","","$44.20"
"05/04/2022","Sell","TXN","TEXAS INSTRUMENTS","56","$170.775","$0.05","$9563.35"
"05/04/2022","Sell","QCOM","QUALCOMM INC","0.192","$142.64","","$27.39"
"05/04/2022","Sell","QCOM","QUALCOMM INC","33","$142.64","$0.02","$4707.10"
"05/04/2022","Sell","QCOM","QUALCOMM INC","8","$142.64","$0.01","$1141.11"
"05/04/2022","Sell","QCOM","QUALCOMM INC","15","$142.65","$0.01","$2139.74"
"05/04/2022","Sell","QCOM","QUALCOMM INC","8","$142.65","$0.01","$1141.19"
"05/04/2022","Sell","QCOM","QUALCOMM INC","3","$142.65","","$427.95"
"05/04/2022","Sell","MSFT","MICROSOFT CORP","0.0976","$281.405","","$27.47"
"05/04/2022","Sell","MSFT","MICROSOFT CORP","34","$281.405","$0.05","$9567.72"
"05/04/2022","Buy","CPB","CAMPBELL SOUP CO","105.0521","$47.5954","","-$5000.00"
"05/04/2022","Buy","WMT","WALMART INC","32.7706","$152.5754","","-$4999.99"
"05/04/2022","Buy","DGX","QUEST DIAGNOSTIC INC","36.5432","$136.824","","-$4999.99"
"05/04/2022","Buy","INCY","INCYTE CORP","63.2255","$79.082","","-$5000.00"
"05/04/2022","Buy","ZBRA","ZEBRA TECHNOLOGIES CLASS A","27.7323","$360.59","","-$9999.99"
"05/04/2022","Buy","STX","SEAGATE TECHNOLOGY HLD F","119.6744","$83.56","","-$9999.99"
"05/04/2022","Buy","JKHY","HENRY JACK & ASSOC","27.2409","$183.5472","","-$4999.99"
"05/04/2022","Buy","FTV","FORTIVE CORP DISC 00500","82.1503","$60.864","","-$5000.00"
"05/04/2022","Buy","PSA","PUBLIC STORAGE REIT","22.8884","$349.522","","-$8000.00"
"05/04/2022","Buy","ITW","ILLINOIS TOOL WORKS","23.9223","$209.0096","","-$4999.99"
"05/04/2022","Buy","JNJ","JOHNSON & JOHNSON","44.948","$177.9831","","-$7999.98"
"05/04/2022","Buy","CVS","CVS HEALTH CORP","80.9716","$98.80","","-$7999.99"
"05/04/2022","Buy","SEE","SEALED AIR CORP","118.6028","$67.452","","-$8000.00"
"05/04/2022","Buy","GPC","GENUINE PARTS CO","60.8143","$131.548","","-$8000.00"
"05/04/2022","Buy","HLT","HILTON WORLDWIDE HLD","55.1279","$145.117","","-$8000.00"
"05/04/2022","Buy","TSCO","TRACTOR SUPPLY COMP","38.8027","$206.171","","-$7999.99"
"05/04/2022","Sell","CRM","SALESFORCE INC","0.6841","$178.695","","$122.25"
"05/04/2022","Sell","CRM","SALESFORCE INC","53","$178.695","$0.05","$9470.79"
"05/04/2022","Sell","ANSS","ANSYS INC","0.6176","$277.20","","$171.20"
"05/04/2022","Sell","ANSS","ANSYS INC","34","$277.20","$0.05","$9424.75"
"05/04/2022","Sell","WST","WEST PHARM SRVC INC","0.8348","$310.15","","$258.91"
"05/04/2022","Sell","WST","WEST PHARM SRVC INC","30","$310.15","$0.05","$9304.45"
"05/04/2022","Sell","FLT","FLEETCOR TECHNOLOGIE","0.5583","$247.82","","$138.36"
"05/04/2022","Sell","FLT","FLEETCOR TECHNOLOGIE","38","$247.82","$0.05","$9417.11"
"05/04/2022","Sell","ROL","ROLLINS INC","0.1027","$33.105","","$3.40"
"05/04/2022","Sell","ROL","ROLLINS INC","288","$33.105","$0.05","$9534.19"
"05/04/2022","Sell","UA","UNDER ARMOUR INC CLASS C","0.8811","$13.96","","$12.30"
"05/04/2022","Sell","UA","UNDER ARMOUR INC CLASS C","680","$13.96","$0.05","$9492.75"
"05/04/2022","Sell","DXCM","DEXCOM INC","0.2522","$390.395","","$98.46"
"05/04/2022","Sell","DXCM","DEXCOM INC","24","$390.395","$0.05","$9369.43"
"05/04/2022","Sell","BLL","BALL CORP","0.5925","$81.1661","","$48.09"
"05/04/2022","Sell","BLL","BALL CORP","116","$81.1661","$0.05","$9415.22"
"05/04/2022","Sell","LYV","LIVE NATION ENTRTMNT","0.126","$95.88","","$12.08"
"05/04/2022","Sell","LYV","LIVE NATION ENTRTMNT","85","$95.88","$0.04","$8149.76"
"05/04/2022","Sell","LYV","LIVE NATION ENTRTMNT","12","$95.88","$0.01","$1150.55"
"05/04/2022","Sell","AKAM","AKAMAI TECHNOLOGIES INC","0.1561","$102.07","","$15.93"
"05/04/2022","Sell","AKAM","AKAMAI TECHNOLOGIES INC","89","$102.07","$0.05","$9084.18"
"05/04/2022","Buy","CTXS","CITRIX SYSTEMS INC","78.8646","$101.4396","","-$7999.99"
"05/04/2022","Buy","ANET","ARISTA NETWORKS INC","70.0893","$114.14","","-$7999.99"
"05/04/2022","Buy","BXP","BOSTON PROPERTIES REIT","66.5526","$120.2055","","-$7999.99"
"05/04/2022","Buy","NOC","NORTHROP GRUMMAN CORP","17.4807","$457.645","","-$7999.95"
"05/04/2022","Buy","HUM","HUMANA INC","11.5085","$434.458","","-$4999.96"
"05/04/2022","Buy","C","CITIGROUP INC","98.0244","$51.0077","","-$5000.00"
"05/04/2022","Buy","AZO","AUTOZONE INC","3.9962","$2001.90","","-$7999.99"
"05/04/2022","Buy","MAR","MARRIOTT INTL INC CLASS A","45.5041","$175.808","","-$7999.98"
"05/04/2022","Sell","KEY","KEYCORP INC","0.1617","$19.8248","","$3.21"
"05/04/2022","Sell","KEY","KEYCORP INC","100","$19.8248","$0.01","$1982.47"
"05/04/2022","Sell","FITB","FIFTH THIRD BANCORP","0.2715","$38.375","","$10.42"
"05/04/2022","Sell","FITB","FIFTH THIRD BANCORP","51","$38.375","$0.01","$1957.12"
"05/04/2022","Sell","LRCX","LAM RESEARCH CORP","0.0627","$484.98","","$30.41"
"05/04/2022","Sell","LRCX","LAM RESEARCH CORP","10","$484.98","$0.02","$4849.78"
"05/04/2022","Sell","DHI","D R HORTON CO","0.7492","$71.26","","$53.39"
"05/04/2022","Sell","DHI","D R HORTON CO","69","$71.26","$0.03","$4916.91"
"05/04/2022","Sell","AAP","ADVANCE AUTO PARTS","0.9485","$200.295","","$189.98"
"05/04/2022","Sell","AAP","ADVANCE AUTO PARTS","9","$200.295","$0.01","$1802.65"
"05/04/2022","Sell","WAB","WABTEC","0.4887","$92.3595","","$45.14"
"05/04/2022","Sell","WAB","WABTEC","21","$92.3595","$0.01","$1939.54"
"05/04/2022","Sell","FRT","FEDERAL REALTY INVT TR","0.7923","$118.8168","","$94.14"
"05/04/2022","Sell","FRT","FEDERAL REALTY INVT TR","16","$118.8168","$0.01","$1901.06"
"05/04/2022","Sell","ESS","ESSEX PROPERTY TR REIT","0.1686","$315.655","","$53.22"
"05/04/2022","Sell","ESS","ESSEX PROPERTY TR REIT","6","$315.655","$0.01","$1893.92"
"05/04/2022","Sell","LOW","LOWES COMPANIES INC","0.7499","$200.4795","","$150.34"
"05/04/2022","Sell","LOW","LOWES COMPANIES INC","9","$200.4795","$0.01","$1804.31"
"05/04/2022","Sell","DRI","DARDEN RESTAURANTS","0.882","$127.18","","$112.17"
"05/04/2022","Sell","DRI","DARDEN RESTAURANTS","38","$127.18","$0.02","$4832.82"
"05/04/2022","Sell","MAA","MID AMERICA APARTMENT COREIT","0.5792","$186.422","","$107.98"
"05/04/2022","Sell","MAA","MID AMERICA APARTMENT COREIT","10","$186.422","$0.01","$1864.21"
"05/04/2022","Sell","RHI","ROBERT HALF INTL","0.8341","$98.91","","$82.50"
"05/04/2022","Sell","RHI","ROBERT HALF INTL","19","$98.91","$0.01","$1879.28"
"05/04/2022","Sell","EXPE","EXPEDIA GROUP INC.","0.6267","$145.035","","$90.89"
"05/04/2022","Sell","EXPE","EXPEDIA GROUP INC.","13","$145.035","$0.01","$1885.45"
"05/04/2022","Sell","DXC","D X C TECHNOLOGY CO 0050","0.4994","$30.186","","$15.07"
"05/04/2022","Sell","DXC","D X C TECHNOLOGY CO 0050","6","$30.186","","$181.12"
"05/04/2022","Sell","DXC","D X C TECHNOLOGY CO 0050","58","$30.1801","$0.01","$1750.44"
"05/04/2022","Sell","PH","PARKER-HANNIFIN CORP","0.9843","$278.22","","$273.85"
"05/04/2022","Sell","PH","PARKER-HANNIFIN CORP","6","$278.22","$0.01","$1669.31"
"05/04/2022","Sell","BKNG","BOOKING HOLDINGS INC","0.3698","$2038.88","","$753.98"
"05/04/2022","Sell","BKNG","BOOKING HOLDINGS INC","2","$2038.88","$0.02","$4077.74"
"05/04/2022","Sell","APTV","APTIV PLC F","0.0525","$107.0376","","$5.62"
"05/04/2022","Sell","APTV","APTIV PLC F","45","$107.0376","$0.02","$4816.67"
"05/04/2022","Sell","MAS","MASCO CORP","0.6087","$54.11","","$32.94"
"05/04/2022","Sell","MAS","MASCO CORP","35","$54.11","$0.01","$1893.84"
"05/04/2022","Sell","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","0.1387","$149.326","","$20.71"
"05/04/2022","Sell","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","13","$149.326","$0.01","$1941.23"
"05/04/2022","Sell","TMO","THERMO FISHER SCNTFC","0.4641","$552.66","","$256.49"
"05/04/2022","Sell","TMO","THERMO FISHER SCNTFC","3","$552.66","$0.01","$1657.97"
"05/04/2022","Sell","MGM","MGM RESORTS INTL","0.1486","$39.7536","","$5.91"
"05/04/2022","Sell","MGM","MGM RESORTS INTL","48","$39.7536","$0.01","$1908.16"
"05/04/2022","Sell","APH","AMPHENOL CORP CLASS A","0.4984","$72.1607","","$35.96"
"05/04/2022","Sell","APH","AMPHENOL CORP CLASS A","26","$72.1607","$0.01","$1876.17"
"05/04/2022","Sell","LVS","LAS VEGAS SANDS CORP","0.2793","$35.826","","$10.01"
"05/04/2022","Sell","LVS","LAS VEGAS SANDS CORP","53","$35.826","$0.01","$1898.77"
"05/04/2022","Sell","FIS","FIDELITY NATL INFO","0.9668","$100.615","","$97.27"
"05/04/2022","Sell","FIS","FIDELITY NATL INFO","18","$100.615","$0.01","$1811.06"
"05/04/2022","Sell","EQR","EQUITY RESIDENTIAL REIT","0.338","$78.335","","$26.48"
"05/04/2022","Sell","EQR","EQUITY RESIDENTIAL REIT","24","$78.335","$0.01","$1880.03"
"05/04/2022","Sell","AVB","AVALONBAY CMNTYS INC REIT","0.7753","$216.965","","$168.21"
"05/04/2022","Sell","AVB","AVALONBAY CMNTYS INC REIT","8","$216.965","$0.01","$1735.71"
"05/04/2022","Sell","PEAK","HEALTHPEAK PPTYS INC REIT","0.2979","$31.7602","","$9.46"
"05/04/2022","Sell","PEAK","HEALTHPEAK PPTYS INC REIT","59","$31.7602","$0.01","$1873.84"
"05/04/2022","Sell","NTRS","NORTHERN TRUST CORP","0.7179","$106.333","","$76.34"
"05/04/2022","Sell","NTRS","NORTHERN TRUST CORP","17","$106.333","$0.01","$1807.65"
"05/04/2022","Sell","POOL","POOL CORP","0.6495","$399.6692","","$259.59"
"05/04/2022","Sell","POOL","POOL CORP","4","$399.6692","$0.01","$1598.67"
"05/04/2022","Sell","UDR","UDR INC. REIT","0.3385","$50.72","","$17.17"
"05/04/2022","Sell","UDR","UDR INC. REIT","36","$50.72","$0.01","$1825.91"
"05/03/2022","Buy","HON","HONEYWELL INTL INC","25.4121","$196.756","","-$4999.98"
"05/03/2022","Buy","TWTR","TWITTER INC","101.8744","$49.08","","-$5000.00"
"05/03/2022","Buy","ROST","ROSS STORES INC","50.3585","$99.288","","-$4999.99"
"05/03/2022","Buy","MNST","MONSTER BEVERAGE CORPORA","59.509","$84.0208","","-$4999.99"
"05/03/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","15.507","$322.434","","-$4999.98"
"05/03/2022","Buy","TMUS","T-MOBILE US INC","63.8761","$125.2424","","-$8000.00"
"05/03/2022","Buy","MCD","MCDONALDS CORP","32.6328","$245.1516","","-$7999.98"
"05/03/2022","Buy","MRK","MERCK & CO. INC.","91.1057","$87.81","","-$7999.99"
"05/03/2022","Buy","LMT","LOCKHEED MARTIN CORP","18.3732","$435.4149","","-$7999.97"
"05/03/2022","Buy","UNP","UNION PACIFIC CORP","34.4931","$231.9301","","-$7999.99"
"05/03/2022","Buy","HPQ","HP INC.","215.7631","$37.0777","","-$8000.00"
"05/03/2022","Sell","RCL","ROYAL CARIBBEAN GROUP F","0.1769","$76.8935","","$13.60"
"05/03/2022","Sell","RCL","ROYAL CARIBBEAN GROUP F","123","$76.8935","$0.05","$9457.85"
"05/03/2022","Sell","CTAS","CINTAS CORP","0.2771","$389.0767","","$107.81"
"05/03/2022","Sell","CTAS","CINTAS CORP","24","$389.0767","$0.05","$9337.79"
"05/03/2022","Sell","INTC","INTEL CORP","0.6801","$44.6234","","$30.35"
"05/03/2022","Sell","INTC","INTEL CORP","210","$44.6234","$0.05","$9370.86"
"05/03/2022","Sell","UPS","UNITED PARCEL SRVC CLASS B","0.4144","$178.20","","$73.85"
"05/03/2022","Sell","UPS","UNITED PARCEL SRVC CLASS B","52","$178.20","$0.05","$9266.35"
"05/03/2022","Sell","HCA","HCA HEALTHCARE INC","0.8508","$212.5721","","$180.86"
"05/03/2022","Sell","HCA","HCA HEALTHCARE INC","43","$212.5721","$0.05","$9140.55"
"05/03/2022","Sell","DISH","DISH NETWORK CORP CLASS A","0.7309","$27.7365","","$20.27"
"05/03/2022","Sell","DISH","DISH NETWORK CORP CLASS A","324","$27.7365","$0.05","$8986.58"
"05/03/2022","Sell","ROK","ROCKWELL AUTOMATION","0.2273","$216.62","","$49.24"
"05/03/2022","Sell","ROK","ROCKWELL AUTOMATION","12","$216.62","$0.01","$2599.43"
"05/03/2022","Sell","ROK","ROCKWELL AUTOMATION","25","$216.62","$0.03","$5415.47"
"05/03/2022","Buy","T","A T & T INC","320.8622","$19.298","","-$6192.00"
"05/03/2022","Buy","SCHW","CHARLES SCHWAB CORP","115.2073","$69.44","","-$7999.99"
"05/03/2022","Buy","ICE","INTERCONTINENTAL EXC","70.1101","$114.1062","","-$8000.00"
"05/03/2022","Buy","AIG","AMERICAN INTL GROUP","133.9066","$59.7431","","-$8000.00"
"05/03/2022","Buy","BMY","BRISTOL-MYERS SQUIBB","66.6089","$75.065","","-$5000.00"
"05/03/2022","Buy","CI","CIGNA CORP","20.1247","$248.45","","-$4999.98"
"05/03/2022","Buy","UAL","UNITED AIRLINES HLDGS","99.6055","$50.198","","-$5000.00"
"05/03/2022","Buy","GRMN","GARMIN LTD F","44.9034","$111.35","","-$4999.99"
"05/03/2022","Buy","LDOS","LEIDOS HOLDINGS INC","48.57","$102.944","","-$4999.99"
"05/03/2022","Buy","WDC","WESTERN DIGITAL CORP","83.1627","$60.1231","","-$5000.00"
"05/03/2022","Buy","CTSH","COGNIZANT TECH SOLU CLASS A","61.6364","$81.1208","","-$4999.99"
"05/03/2022","Buy","AVGO","BROADCOM INC","8.6726","$576.522","","-$4999.94"
"05/03/2022","Buy","TDY","TELEDYNE TECHNOLOGIE","11.7347","$426.084","","-$4999.97"
"05/03/2022","Buy","ADI","ANALOG DEVICES INC","31.8147","$157.16","","-$5000.00"
"05/03/2022","Sell","MS","MORGAN STANLEY","0.4118","$83.4516","","$34.37"
"05/03/2022","Sell","MS","MORGAN STANLEY","57","$83.4516","$0.02","$4756.72"
"05/03/2022","Sell","SYK","STRYKER CORP","0.9288","$237.9512","","$221.01"
"05/03/2022","Sell","SYK","STRYKER CORP","19","$237.9512","$0.02","$4521.05"
"05/03/2022","Sell","NCLH","NORWEGIAN CRUISE LIN F","0.223","$19.635","","$4.38"
"05/03/2022","Sell","NCLH","NORWEGIAN CRUISE LIN F","41","$19.635","","$805.04"
"05/03/2022","Sell","NCLH","NORWEGIAN CRUISE LIN F","100","$19.635","$0.01","$1963.49"
"05/03/2022","Sell","NCLH","NORWEGIAN CRUISE LIN F","100","$19.635","$0.01","$1963.49"
"05/03/2022","Sell","ADSK","AUTODESK INC","0.457","$190.50","","$87.06"
"05/03/2022","Sell","ADSK","AUTODESK INC","24","$190.50","$0.02","$4571.98"
"05/03/2022","Sell","PPG","PPG INDUSTRIES INC","0.9892","$133.145","","$131.71"
"05/03/2022","Sell","PPG","PPG INDUSTRIES INC","13","$133.145","$0.01","$1730.88"
"05/03/2022","Sell","CFG","CITIZENS FINL GROUP INC","0.2128","$39.825","","$8.47"
"05/03/2022","Sell","CFG","CITIZENS FINL GROUP INC","46","$39.825","$0.01","$1831.94"
"05/03/2022","Sell","YUM","YUM BRANDS INC","0.8318","$114.2912","","$95.07"
"05/03/2022","Sell","YUM","YUM BRANDS INC","15","$114.2912","$0.01","$1714.36"
"05/03/2022","Sell","AME","AMETEK INC","0.301","$125.4219","","$37.75"
"05/03/2022","Sell","AME","AMETEK INC","14","$125.4219","$0.01","$1755.90"
"05/03/2022","Sell","NWS","NEWS CORP NEW CLASS B","0.2566","$20.09","","$5.16"
"05/03/2022","Sell","NWS","NEWS CORP NEW CLASS B","89","$20.09","$0.01","$1788.00"
"05/03/2022","Sell","ZION","ZIONS BANCORP N A","0.1303","$57.5216","","$7.50"
"05/03/2022","Sell","ZION","ZIONS BANCORP N A","31","$57.5216","$0.01","$1783.16"
"05/03/2022","Sell","FTNT","FORTINET INC","0.1312","$289.0745","","$37.93"
"05/03/2022","Sell","FTNT","FORTINET INC","6","$289.0745","$0.01","$1734.44"
"05/03/2022","Sell","MCHP","MICROCHIP TECHNOLOGY","0.252","$67.408","","$16.99"
"05/03/2022","Sell","MCHP","MICROCHIP TECHNOLOGY","69","$67.408","$0.02","$4651.13"
"05/03/2022","Sell","USB","U S BANCORP","0.2364","$49.3712","","$11.67"
"05/03/2022","Sell","USB","U S BANCORP","94","$49.3712","$0.02","$4640.87"
"05/03/2022","Sell","VFC","VF CORP","0.1485","$51.5205","","$7.65"
"05/03/2022","Sell","VFC","VF CORP","90","$51.5205","$0.02","$4636.83"
"05/03/2022","Sell","TER","TERADYNE INCORPORATE","0.5198","$109.19","","$56.76"
"05/03/2022","Sell","TER","TERADYNE INCORPORATE","42","$109.19","$0.02","$4585.96"
"05/03/2022","Sell","SNPS","SYNOPSYS INC","0.8871","$291.35","","$258.46"
"05/03/2022","Sell","SNPS","SYNOPSYS INC","15","$291.35","$0.02","$4370.23"
"05/03/2022","Sell","SPGI","S&P GLOBAL INC","0.8547","$359.925","","$307.63"
"05/03/2022","Sell","SPGI","S&P GLOBAL INC","12","$359.925","$0.02","$4319.08"
"05/03/2022","Sell","NXPI","NXP SEMICONDUCTORS F","0.5313","$172.7601","","$91.79"
"05/03/2022","Sell","NXPI","NXP SEMICONDUCTORS F","26","$172.7601","$0.02","$4491.74"
"05/03/2022","Sell","BR","BROADRIDGE FINL SOLU","0.3747","$145.1801","","$54.40"
"05/03/2022","Sell","BR","BROADRIDGE FINL SOLU","31","$145.1801","$0.02","$4500.56"
"05/03/2022","Sell","MKTX","MARKETAXESS HOLDINGS","0.3208","$262.46","","$84.20"
"05/03/2022","Sell","MKTX","MARKETAXESS HOLDINGS","17","$262.46","$0.02","$4461.80"
"05/03/2022","Sell","ACN","ACCENTURE PLC FCLASS A","0.7526","$305.9999","","$230.30"
"05/03/2022","Sell","ACN","ACCENTURE PLC FCLASS A","14","$305.9999","$0.02","$4283.98"
"05/03/2022","Sell","FDS","FACTSET RESEARCH SYS","0.2663","$398.55","","$106.13"
"05/03/2022","Sell","FDS","FACTSET RESEARCH SYS","11","$398.55","$0.02","$4384.03"
"05/03/2022","Sell","VRSN","VERISIGN INC","0.109","$179.16","","$19.53"
"05/03/2022","Sell","VRSN","VERISIGN INC","23","$179.16","$0.02","$4120.66"
"05/02/2022","Reorganized Issue","CERN","CERNER CORP TENDER OFFER EXP: 05/11/22","-53","","",""
"05/02/2022","Reorganized Issue","156995334","CERNER CORP XXXSUBMITTED FOR TENDER EXP: 05/11/2022","53","","",""
"05/02/2022 as of 04/30/2022","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$12.97"
"05/02/2022","Qualified Dividend","T","A T & T INC","","","","$57.08"
"05/02/2022","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$17.47"
"05/02/2022","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$42.45"
"05/02/2022","Cash Dividend","UDR","UDR INC. REIT","","","","$13.81"
"05/02/2022","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$13.04"
"05/02/2022","Qualified Dividend","LNC","LINCOLN NTNL CO","","","","$14.20"
"05/02/2022","Qualified Dividend","DRI","DARDEN RESTAURANTS","","","","$42.77"
"05/02/2022","Qualified Dividend","VZ","VERIZON COMMUNICATN","","","","$24.03"
"05/02/2022","Buy","GIS","GENERAL MILLS INC","113.3868","$70.5549","","-$7999.99"
"05/02/2022","Buy","KO","THE COCA-COLA CO","124.5756","$64.218","","-$8000.00"
"05/02/2022","Buy","PG","PROCTER & GAMBLE","50.4719","$158.5039","","-$7999.99"
"05/02/2022","Buy","PEP","PEPSICO INC","46.9897","$170.25","","-$8000.00"
"05/02/2022","Buy","SHW","SHERWIN WILLIAMS CO","28.9402","$276.432","","-$8000.00"
"05/02/2022","Buy","XEL","XCEL ENERGY INC","109.1886","$73.2677","","-$8000.00"
"05/02/2022","Buy","WEC","W E C ENERGY GROUP INC","78.8643","$101.44","","-$7999.99"
"05/02/2022","Buy","CBOE","CBOE GLOBAL MKTS INC","71.13","$112.47","","-$7999.99"
"05/02/2022","Buy","AKAM","AKAMAI TECHNOLOGIES INC","70.8968","$112.84","","-$7999.99"
"05/02/2022","Buy","FISV","FISERV INC","83.1151","$96.252","","-$7999.99"
"05/02/2022","Buy","ANTM","ANTHEM INC","15.9753","$500.77","","-$7999.95"
"05/02/2022","Buy","ABT","ABBOTT LABORATORIES","70.6901","$113.17","","-$8000.00"
"05/02/2022","Buy","VZ","VERIZON COMMUNICATN","171.6001","$46.62","","-$8000.00"
"05/02/2022","Buy","IPG","INTERPUBLIC GRP COS","152.7743","$32.728","","-$5000.00"
"05/02/2022","Buy","LUMN","LUMEN TECHNOLOGIES INC","487.9143","$10.2477","","-$5000.00"
"05/02/2022","Buy","LYV","LIVE NATION ENTRTMNT","47.9864","$104.196","","-$4999.99"
"04/29/2022","Qualified Dividend","SYK","STRYKER CORP","","","","$13.85"
"04/29/2022","Qualified Dividend","HUM","HUMANA INC","","","","$9.26"
"04/29/2022","Cash Dividend","MAA","MID AMERICA APARTMENT COREIT","","","","$11.50"
"04/29/2022","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$22.16"
"04/29/2022","Cash Dividend","BXP","BOSTON PROPERTIES REIT","","","","$17.48"
"04/28/2022","Buy","DVN","DEVON ENERGY CORP","133.0501","$60.1277","","-$8000.00"
"04/28/2022","Buy","BSX","BOSTON SCIENTIFIC CO","187.2777","$42.7173","","-$8000.00"
"04/28/2022","Buy","HAL","HALLIBURTON CO HLDG","216.1694","$37.008","","-$8000.00"
"04/28/2022","Buy","IBM","IBM CORP","58.8005","$136.0531","","-$7999.99"
"04/28/2022","Buy","F","FORD MOTOR CO","542.4464","$14.748","","-$8000.00"
"04/28/2022","Buy","RL","RALPH LAUREN CORP CLASS A","74.954","$106.732","","-$7999.99"
"04/28/2022","Buy","CME","CME GROUP INC CLASS A","35.392","$226.0393","","-$7999.98"
"04/28/2022","Buy","ORLY","O REILLY AUTOMOTIVE","12.6351","$633.1538","","-$7999.96"
"04/28/2022","Buy","AXP","AMERICAN EXPRESS CO","43.7003","$183.065","","-$8000.00"
"04/28/2022","Buy","UPS","UNITED PARCEL SRVC CLASS B","42.0817","$190.1062","","-$7999.99"
"04/28/2022","Buy","HCA","HCA HEALTHCARE INC","22.7913","$219.3816","","-$4999.99"
"04/28/2022","Buy","EPAM","EPAM SYSTEMS INC","17.6638","$283.0642","","-$4999.99"
"04/28/2022","Buy","DISH","DISH NETWORK CORP CLASS A","164.0419","$30.48","","-$5000.00"
"04/28/2022","Buy","TAP","MOLSON COORS BEVERAGE CLCLASS B","90.6693","$55.1454","","-$4999.99"
"04/28/2022","Buy","UA","UNDER ARMOUR INC CLASS C","343.4537","$14.558","","-$5000.00"
"04/28/2022","Buy","UNH","UNITEDHEALTH GRP INC","9.5144","$525.516","","-$4999.97"
"04/28/2022","Buy","BLL","BALL CORP","60.2177","$83.032","","-$5000.00"
"04/28/2022","Buy","ROL","ROLLINS INC","145.1884","$34.438","","-$5000.00"
"04/28/2022","Buy","INTC","INTEL CORP","106.1848","$47.0877","","-$5000.00"
"04/28/2022","Buy","FOX","FOX CORP CLASS B","147.3405","$33.935","","-$5000.00"
"04/28/2022","Buy","K","KELLOGG CO","143.9511","$69.468","","-$10000.00"
"04/28/2022","Buy","AIZ","ASSURANT INC","53.7385","$186.0862","","-$9999.99"
"04/28/2022","Buy","HBAN","HUNTINGTON BANCSHS","734.3222","$13.618","","-$10000.00"
"04/28/2022","Buy","WFC","WELLS FARGO & CO","220.908","$45.2677","","-$10000.00"
"04/28/2022","Buy","TROW","T ROWE PRICE GROUP","76.8816","$130.07","","-$9999.99"
"04/28/2022","Buy","FB","META PLATFORMS INC CLASS A","48.3418","$206.86","","-$9999.98"
"04/28/2022","Buy","CRM","SALESFORCE INC","53.6841","$186.2747","","-$9999.99"
"04/28/2022","Buy","OMC","OMNICOM GROUP INC","126.818","$78.8531","","-$9999.99"
"04/28/2022","Buy","RCL","ROYAL CARIBBEAN GROUP F","123.1769","$81.184","","-$9999.99"
"04/28/2022","Buy","SEDG","SOLAREDGE TECH","39.021","$256.2717","","-$9999.98"
"04/28/2022","Buy","TSLA","TESLA INC","5.6265","$888.6372","","-$4999.92"
"04/28/2022","Buy","QCOM","QUALCOMM INC","33.5093","$149.212","","-$4999.99"
"04/28/2022","Buy","JNPR","JUNIPER NETWORKS INC","152.9145","$32.698","","-$5000.00"
"04/28/2022","Buy","MSFT","MICROSOFT CORP","17.201","$290.68","","-$4999.99"
"04/28/2022","Buy","TXN","TEXAS INSTRUMENTS","28.2981","$176.69","","-$4999.99"
"04/28/2022","Buy","ATVI","ACTIVISION BLIZZARD","65.0211","$76.898","","-$4999.99"
"04/28/2022","Buy","GD","GENERAL DYNAMICS CO","20.5916","$242.817","","-$4999.99"
"04/28/2022","Buy","ROK","ROCKWELL AUTOMATION","18.9257","$264.1909","","-$5000.00"
"04/28/2022","Buy","AAPL","APPLE INC","30.4052","$164.4454","","-$5000.00"
"04/28/2022","Buy","HPE","HEWLETT PACKARD ENTERPRI","316.0955","$15.818","","-$5000.00"
"04/28/2022","Buy","KEYS","KEYSIGHT TECH INC","68.5532","$145.872","","-$9999.99"
"04/28/2022","Buy","ANSS","ANSYS INC","34.6176","$288.87","","-$9999.99"
"04/28/2022","Buy","NTAP","NETAPP INC","132.4701","$75.4887","","-$10000.00"
"04/28/2022","Buy","FLT","FLEETCOR TECHNOLOGIE","38.5583","$259.3474","","-$9999.99"
"04/28/2022","Buy","TECH","BIO-TECHNE CORP","25.8013","$387.576","","-$9999.96"
"04/28/2022","Buy","OTIS","OTIS WORLDWIDE CORP","130.9572","$76.3608","","-$10000.00"
"04/28/2022","Buy","DXCM","DEXCOM INC","24.2522","$412.3321","","-$9999.96"
"04/28/2022","Buy","IQV","IQVIA HOLDINGS INC","45.5232","$219.668","","-$9999.99"
"04/28/2022","Buy","WST","WEST PHARM SRVC INC","30.8348","$324.308","","-$9999.97"
"04/28/2022","Buy","CTAS","CINTAS CORP","24.2771","$411.91","","-$9999.98"
"04/28/2022","Sell","BAC","BANK OF AMERICA CORP","0.7832","$36.801","","$28.82"
"04/28/2022","Sell","BAC","BANK OF AMERICA CORP","48","$36.801","$0.01","$1766.44"
"04/28/2022","Sell","AMP","AMERIPRISE FINL","0.5469","$273.79","","$149.74"
"04/28/2022","Sell","AMP","AMERIPRISE FINL","6","$273.79","$0.01","$1642.73"
"04/28/2022","Sell","CDW","CDW CORP","0.3864","$168.58","","$65.14"
"04/28/2022","Sell","CDW","CDW CORP","10","$168.58","$0.01","$1685.79"
"04/28/2022","Sell","CBRE","CBRE GROUP INC CLASS A","0.2566","$85.8067","","$22.02"
"04/28/2022","Sell","CBRE","CBRE GROUP INC CLASS A","20","$85.8067","$0.01","$1716.12"
"04/28/2022","Sell","PNC","PNC FINL SERVICES","0.1393","$170.99","","$23.82"
"04/28/2022","Sell","PNC","PNC FINL SERVICES","10","$170.99","$0.01","$1709.89"
"04/28/2022","Sell","GOOG","ALPHABET INC. CLASS C","0.7214","$2398.05","$0.01","$1729.94"
"04/28/2022","Sell","AMD","ADVANCED MICRO DEVIC","19","$90.045","$0.01","$1710.85"
"04/28/2022","Sell","CMCSA","COMCAST CORP CLASS A","0.5988","$41.895","","$25.09"
"04/28/2022","Sell","CMCSA","COMCAST CORP CLASS A","39","$41.895","$0.01","$1633.90"
"04/28/2022","Sell","WBD","WARNER BROTHERS DISCOVER","49","$18.38","","$900.62"
"04/28/2022","Sell","GOOGL","ALPHABET INC. CLASS A","0.1121","$2383.175","","$267.15"
"04/28/2022","Sell","GOOGL","ALPHABET INC. CLASS A","1","$2383.175","$0.01","$2383.17"
"04/28/2022","Sell","EA","ELECTRONIC ARTS INC","0.0661","$124.0744","","$8.20"
"04/28/2022","Sell","EA","ELECTRONIC ARTS INC","37","$124.0744","$0.02","$4590.73"
"04/28/2022","Sell","CSCO","CISCO SYSTEMS INC","0.7624","$50.625","","$38.60"
"04/28/2022","Sell","CSCO","CISCO SYSTEMS INC","90","$50.625","$0.02","$4556.23"
"04/28/2022","Sell","COO","COOPER COMPANIES","0.3072","$372.75","","$114.51"
"04/28/2022","Sell","COO","COOPER COMPANIES","12","$372.75","$0.02","$4472.98"
"04/28/2022","Sell","FFIV","F5 INC","0.0014","$176.2549","","$0.25"
"04/28/2022","Sell","FFIV","F5 INC","25","$176.2549","$0.02","$4406.35"
"04/28/2022","Sell","SWKS","SKYWORKS SOLUTIONS","0.1763","$118.305","","$20.86"
"04/28/2022","Sell","SWKS","SKYWORKS SOLUTIONS","37","$118.305","$0.02","$4377.27"
"04/28/2022","Sell","DIS","WALT DISNEY CO","0.7717","$115.4004","","$89.05"
"04/28/2022","Sell","DIS","WALT DISNEY CO","37","$115.4004","$0.02","$4269.79"
"04/28/2022","Sell","MSCI","MSCI INC","0.8773","$437.5938","","$383.90"
"04/28/2022","Sell","MSCI","MSCI INC","9","$437.5938","$0.02","$3938.32"
"04/28/2022","Sell","ADBE","ADOBE INC","0.4391","$413.028","","$181.36"
"04/28/2022","Sell","ADBE","ADOBE INC","10","$413.028","$0.02","$4130.26"
"04/28/2022","Sell","PAYC","PAYCOM SOFTWARE INC","0.3758","$295.94","","$111.21"
"04/28/2022","Sell","PAYC","PAYCOM SOFTWARE INC","14","$295.94","$0.02","$4143.14"
"04/28/2022","Sell","ILMN","ILLUMINA INC","0.9724","$303.465","","$295.09"
"04/28/2022","Sell","ILMN","ILLUMINA INC","13","$303.465","$0.02","$3945.03"
"04/28/2022","Sell","PKI","PERKINELMER INC","0.181","$146.9216","","$26.59"
"04/28/2022","Sell","PKI","PERKINELMER INC","28","$146.9216","$0.02","$4113.78"
"04/28/2022","Sell","ETSY","ETSY INC","0.0589","$102.8499","","$6.06"
"04/28/2022","Sell","ETSY","ETSY INC","40","$102.8499","$0.02","$4113.98"
"04/28/2022","Sell","NVDA","NVIDIA CORP","0.412","$199.4369","","$82.17"
"04/28/2022","Sell","NVDA","NVIDIA CORP","20","$199.4369","$0.02","$3988.72"
"04/28/2022","Sell","CHTR","CHARTER COMMUNICATN CLASS A","0.1949","$466.1701","","$90.86"
"04/28/2022","Sell","CHTR","CHARTER COMMUNICATN CLASS A","8","$466.1701","$0.02","$3729.34"
"04/28/2022","Sell","MTCH","MATCH GROUP INC NEW","0.221","$82.2404","","$18.18"
"04/28/2022","Sell","MTCH","MATCH GROUP INC NEW","45","$82.2404","$0.02","$3700.80"
"04/28/2022","Sell","NFLX","NETFLIX INC","0.6209","$200.57","","$124.53"
"04/28/2022","Sell","NFLX","NETFLIX INC","13","$200.57","$0.01","$2607.40"
"04/27/2022","Qualified Dividend","CMCSA","COMCAST CORP CLASS A","","","","$10.69"
"04/27/2022","Qualified Dividend","CSCO","CISCO SYSTEMS INC","","","","$34.49"
"04/22/2022","Qualified Dividend","ROP","ROPER TECHNOLOGIES","","","","$2.77"
"04/21/2022","Journal","","JOURNAL FRM 55247140","","","","$220384.76"
"04/20/2022","Qualified Dividend","XEL","XCEL ENERGY INC","","","","$15.18"
"04/18/2022","Qualified Dividend","FITB","FIFTH THIRD BANCORP","","","","$15.38"
"04/18/2022 as of 04/15/2022","Cash Dividend","AVB","AVALONBAY CMNTYS INC REIT","","","","$13.95"
"04/18/2022","Qualified Dividend","RJF","RAYMOND JAMES FINL","","","","$7.29"
"04/18/2022 as of 04/15/2022","Non-Qualified Div","HST","HOST HOTELS & RESORT","","","","$3.71"
"04/18/2022 as of 04/15/2022","Non-Qualified Div","FRT","FEDERAL REALTY INVT TR","","","","$17.97"
"04/18/2022 as of 04/15/2022","Qualified Dividend","RL","RALPH LAUREN CORP CLASS A","","","","$12.29"
"04/18/2022 as of 04/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$7.54"
"04/18/2022 as of 04/15/2022","Bank Interest","","BANK INT 031622-041522 SCHWAB PREMIER BANK","","","","$2.30"
"04/18/2022 as of 04/15/2022","Bank Interest","","BANK INT 031622-041522 SCHWAB BANK","","","","$4.23"
"04/14/2022","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$7.69"
"04/14/2022","Qualified Dividend","TMO","THERMO FISHER SCNTFC","","","","$1.04"
"04/14/2022","Cash Dividend","ESS","ESSEX PROPERTY TR REIT","","","","$13.57"
"04/14/2022","Qualified Dividend","MDLZ","MONDELEZ INTL CLASS A","","","","$11.60"
"04/14/2022","Special Qual Div","COP","CONOCOPHILLIPS","","","","$10.70"
"04/14/2022","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$2.20"
"04/13/2022 as of 04/08/2022","Cash In Lieu","WBD","WARNER BROTHERS DISCOVER","","","","$20.63"
"04/13/2022","Qualified Dividend","NWS","NEWS CORP NEW CLASS B","","","","$8.93"
"04/13/2022","Qualified Dividend","APH","AMPHENOL CORP CLASS A","","","","$5.30"
"04/11/2022 as of 04/08/2022","Spin-off","WBD","WARNER BROTHERS DISCOVER","49","","",""
"04/08/2022","Qualified Dividend","CB","CHUBB LTD F","","","","$8.80"
"04/08/2022","Cash Dividend","EQR","EQUITY RESIDENTIAL REIT","","","","$15.21"
"04/08/2022","Qualified Dividend","HPE","HEWLETT PACKARD ENTERPRI","","","","$40.28"
"04/07/2022","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$18.75"
"04/06/2022","Foreign Tax Paid","NXPI","NXP SEMICONDUCTORS F","","","","-$3.36"
"04/06/2022","Qualified Dividend","NXPI","NXP SEMICONDUCTORS F","","","","$22.42"
"04/06/2022","Qualified Dividend","HPQ","HP INC.","","","","$13.53"
"04/06/2022","Buy","VFC","VF CORP","90.1485","$55.464","","-$5000.00"
"04/06/2022","Buy","USB","U S BANCORP","94.2364","$53.058","","-$4999.99"
"04/06/2022","Buy","ETSY","ETSY INC","40.0589","$124.816","","-$4999.99"
"04/06/2022","Buy","ROST","ROSS STORES INC","52.7755","$94.7408","","-$4999.99"
"04/06/2022","Buy","NVR","N V R INC","1.1366","$4398.994","","-$4999.90"
"04/06/2022","Buy","KLAC","KLA CORP","14.4986","$344.86","","-$4999.99"
"04/06/2022","Buy","MKTX","MARKETAXESS HOLDINGS","17.3208","$288.6693","","-$4999.98"
"04/06/2022","Buy","C","CITIGROUP INC","98.701","$50.658","","-$5000.00"
"04/06/2022","Buy","MSCI","MSCI INC","9.8773","$506.208","","-$4999.97"
"04/06/2022","Buy","FDS","FACTSET RESEARCH SYS","11.2663","$443.798","","-$4999.96"
"04/06/2022","Buy","DRI","DARDEN RESTAURANTS","38.882","$128.594","","-$4999.99"
"04/06/2022","Buy","BLL","BALL CORP","56.3748","$88.692","","-$4999.99"
"04/06/2022","Buy","DHI","D R HORTON CO","69.7492","$71.6854","","-$5000.00"
"04/06/2022","Buy","NCLH","NORWEGIAN CRUISE LIN F","241.223","$20.7277","","-$5000.00"
"04/06/2022","Buy","APTV","APTIV PLC F","45.0525","$110.9816","","-$5000.00"
"04/06/2022","Buy","ROL","ROLLINS INC","142.9143","$34.986","","-$5000.00"
"04/06/2022","Buy","WRK","WESTROCK CO","107.0081","$46.7254","","-$5000.00"
"04/06/2022","Buy","LUMN","LUMEN TECHNOLOGIES INC","440.2183","$11.358","","-$5000.00"
"04/06/2022","Buy","UA","UNDER ARMOUR INC CLASS C","337.4274","$14.818","","-$5000.00"
"04/06/2022","Buy","NFLX","NETFLIX INC","13.6209","$367.082","","-$4999.99"
"04/06/2022","Buy","FTV","FORTIVE CORP DISC 00500","84.3837","$59.2531","","-$5000.00"
"04/06/2022","Buy","TXN","TEXAS INSTRUMENTS","27.9607","$178.822","","-$4999.99"
"04/06/2022","Buy","DIS","WALT DISNEY CO","37.7717","$132.374","","-$4999.99"
"04/06/2022","Buy","IPG","INTERPUBLIC GRP COS","143.7277","$34.788","","-$5000.00"
"04/06/2022","Buy","DISH","DISH NETWORK CORP CLASS A","160.689","$31.116","","-$5000.00"
"04/06/2022","Buy","LRCX","LAM RESEARCH CORP","10.0627","$496.88","","-$4999.95"
"04/06/2022","Buy","GRMN","GARMIN LTD F","43.7874","$114.188","","-$5000.00"
"04/06/2022","Buy","ADSK","AUTODESK INC","24.457","$204.44","","-$4999.99"
"04/06/2022","Buy","EPAM","EPAM SYSTEMS INC","18.2459","$274.0327","","-$4999.97"
"04/06/2022","Buy","KLAC","KLA CORP","14.5223","$344.298","","-$5000.00"
"04/06/2022","Buy","DGX","QUEST DIAGNOSTIC INC","37.3513","$133.8639","","-$4999.99"
"04/06/2022","Buy","BR","BROADRIDGE FINL SOLU","31.3747","$159.3639","","-$4999.99"
"04/06/2022","Buy","CERN","CERNER CORP TENDER OFFER EXP: 04/13/22","53.701","$93.108","","-$4999.99"
"04/06/2022","Buy","WDC","WESTERN DIGITAL CORP","105.6724","$47.316","","-$5000.00"
"04/06/2022","Buy","NVDA","NVIDIA CORP","20.412","$244.9531","","-$4999.98"
"04/06/2022","Buy","ILMN","ILLUMINA INC","13.9724","$357.848","","-$5000.00"
"04/06/2022","Buy","ITW","ILLINOIS TOOL WORKS","24.3019","$205.7447","","-$4999.99"
"04/06/2022","Buy","BMY","BRISTOL-MYERS SQUIBB","66.4584","$75.235","","-$5000.00"
"04/06/2022","Buy","ROK","ROCKWELL AUTOMATION","18.3016","$273.20","","-$5000.00"
"04/06/2022","Buy","ACN","ACCENTURE PLC FCLASS A","14.7526","$338.922","","-$4999.98"
"04/06/2022","Sell","PHM","PULTEGROUP INC","0.5894","$40.61","","$23.94"
"04/06/2022","Sell","ODFL","OLD DOMINION FREIGHT","0.795","$262.46","","$208.66"
"04/06/2022","Sell","NOW","SERVICE NOW INC","0.2903","$523.8997","","$152.09"
"04/06/2022","Sell","ODFL","OLD DOMINION FREIGHT","6","$262.46","$0.01","$1574.75"
"04/06/2022","Sell","HD","HOME DEPOT INC","0.9769","$297.3301","","$290.46"
"04/06/2022","Sell","HD","HOME DEPOT INC","5","$297.3301","$0.01","$1486.64"
"04/06/2022","Sell","LKQ","LKQ CORP","0.0753","$44.2272","","$3.33"
"04/06/2022","Sell","LKQ","LKQ CORP","40","$44.2272","$0.01","$1769.08"
"04/06/2022","Sell","BWA","BORG WARNER INC","0.9087","$37.30","","$33.89"
"04/06/2022","Sell","BWA","BORG WARNER INC","46","$37.30","$0.01","$1715.79"
"04/06/2022","Sell","PHM","PULTEGROUP INC","42","$40.61","$0.01","$1705.61"
"04/06/2022","Sell","TTWO","TAKE TWO INTERACTV","0.7613","$146.4975","","$111.53"
"04/06/2022","Sell","TTWO","TAKE TWO INTERACTV","11","$146.4975","$0.01","$1611.46"
"04/06/2022","Sell","NKE","NIKE INC CLASS B","0.4349","$127.4411","","$55.42"
"04/06/2022","Sell","NKE","NIKE INC CLASS B","13","$127.4411","$0.01","$1656.72"
"04/06/2022","Sell","JPM","JPMORGAN CHASE & CO","0.9735","$131.685","","$128.20"
"04/06/2022","Sell","JPM","JPMORGAN CHASE & CO","12","$131.685","$0.01","$1580.21"
"04/06/2022","Sell","WHR","WHIRLPOOL CORP","0.5174","$168.24","","$87.05"
"04/06/2022","Sell","WHR","WHIRLPOOL CORP","9","$168.24","$0.01","$1514.15"
"04/06/2022","Sell","GM","GENERAL MOTORS CO","0.779","$39.925","","$31.10"
"04/06/2022","Sell","GM","GENERAL MOTORS CO","39","$39.925","$0.01","$1557.07"
"04/06/2022","Sell","SIVB","SVB FINL GROUP","0.0566","$516.54","","$29.24"
"04/06/2022","Sell","SIVB","SVB FINL GROUP","3","$516.54","$0.01","$1549.61"
"04/06/2022","Sell","GLW","CORNING INC","0.9106","$34.8947","","$31.78"
"04/06/2022","Sell","GLW","CORNING INC","129","$34.8947","$0.02","$4501.40"
"04/06/2022","Sell","NLOK","NORTONLIFELOCK INC","0.8846","$26.755","","$23.67"
"04/06/2022","Sell","NLOK","NORTONLIFELOCK INC","168","$26.755","$0.02","$4494.82"
"04/06/2022","Sell","HAS","HASBRO INC","0.0887","$84.81","","$7.52"
"04/06/2022","Sell","HAS","HASBRO INC","53","$84.81","$0.02","$4494.91"
"04/06/2022","Sell","PTC","PTC INC","0.0871","$101.694","","$8.86"
"04/06/2022","Sell","PTC","PTC INC","43","$101.694","$0.02","$4372.82"
"04/06/2022","Sell","NOW","SERVICE NOW INC","8","$523.8997","$0.02","$4191.18"
"04/06/2022","Sell","QRVO","QORVO INC","0.5037","$115.40","","$58.13"
"04/06/2022","Sell","QRVO","QORVO INC","37","$115.40","$0.02","$4269.78"
"04/06/2022","Sell","CZR","CAESARS ENTMT INC NEW","0.6559","$72.4775","","$47.54"
"04/06/2022","Sell","CZR","CAESARS ENTMT INC NEW","59","$72.4775","$0.02","$4276.15"
"04/06/2022","Sell","MU","MICRON TECHNOLOGY","0.4247","$72.65","","$30.85"
"04/06/2022","Sell","MU","MICRON TECHNOLOGY","59","$72.65","$0.02","$4286.33"
"04/06/2022","Sell","PENN","PENN NTNL GAMING","0.98","$38.7701","","$37.99"
"04/06/2022","Sell","PENN","PENN NTNL GAMING","99","$38.7701","$0.02","$3838.22"
"04/05/2022","Non-Qualified Div","REG","REGENCY CENTERS CORP REIT","","","","$18.40"
"04/05/2022","Qualified Dividend","PHM","PULTEGROUP INC","","","","$6.39"
"04/04/2022","Qualified Dividend","WMT","WALMART INC","","","","$20.20"
"04/04/2022","Qualified Dividend","HIG","HARTFORD FINL SVC GP","","","","$11.10"
"04/01/2022","Reinvest Shares","RSP","INVSCO SP 500 EQUAL WEIGHT ETF","0.0541","$158.0895","","-$8.56"
"04/01/2022","Qualified Dividend","CHRW","C H ROBINSON WORLDWD","","","","$12.63"
"04/01/2022","Qualified Dividend","PPL","PPL CORP","","","","$14.33"
"04/01/2022","Qualified Dividend","NTRS","NORTHERN TRUST CORP","","","","$12.40"
"04/01/2022","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$14.96"
"04/01/2022","Qualified Dividend","AAP","ADVANCE AUTO PARTS","","","","$14.92"
"04/01/2022","Qualified Dividend","ALL","ALLSTATE CORP","","","","$33.49"
"04/01/2022","Qualified Dividend","MCK","MCKESSON CORP","","","","$4.68"
"04/01/2022","Qualified Dividend","NKE","NIKE INC CLASS B","","","","$4.10"
"04/01/2022","Qualified Dividend","KO","THE COCA-COLA CO","","","","$16.24"
"04/01/2022","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$10.21"
"04/01/2022","Qualified Dividend","RF","REGIONS FINL CO","","","","$15.90"
"04/01/2022","Qualified Dividend","CMA","COMERICA INCORPORATE","","","","$18.57"
"03/31/2022","Reinvest Dividend","RSP","INVSC S P 500 EQUAL WEIGHT ETF","","","","$8.56"
"03/31/2022","Qualified Dividend","AVGO","BROADCOM INC","","","","$38.15"
"03/31/2022","Qualified Dividend","PEG","PUB SVC ENTERPISE GP","","","","$17.62"
"03/31/2022","Qualified Dividend","MLM","MARTIN MARIETTA MATERIAL","","","","$3.54"
"03/31/2022","Qualified Dividend","AIG","AMERICAN INTL GROUP","","","","$11.67"
"03/31/2022","Qualified Dividend","UNP","UNION PACIFIC CORP","","","","$10.46"
"03/31/2022","Cash Dividend","PLD","PROLOGIS INC. REIT","","","","$12.45"
"03/31/2022","Non-Qualified Div","PSA","PUBLIC STORAGE REIT","","","","$13.41"
"03/31/2022","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$70.50"
"03/31/2022","Qualified Dividend","ICE","INTERCONTINENTAL EXC","","","","$6.36"
"03/31/2022","Qualified Dividend","MTB","M & T BANK CORP","","","","$16.85"
"03/31/2022","Qualified Dividend","AME","AMETEK INC","","","","$3.15"
"03/31/2022","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.19"
"03/31/2022","Qualified Dividend","PEP","PEPSICO INC","","","","$14.19"
"03/31/2022","Qualified Dividend","HCA","HCA HEALTHCARE INC","","","","$11.79"
"03/31/2022","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$20.75"
"03/31/2022","Qualified Dividend","AEE","AMEREN CORP","","","","$13.94"
"03/30/2022","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$12.43"
"03/30/2022","Qualified Dividend","HES","HESS CORP","","","","$11.03"
"03/30/2022","Qualified Dividend","FOX","FOX CORP CLASS B","","","","$14.30"
"03/29/2022","Special Qual Div","EOG","EOG RESOURCES INC","","","","$29.54"
"03/25/2022","Qualified Dividend","BAC","BANK OF AMERICA CORP","","","","$10.24"
"03/25/2022","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$16.50"
"03/25/2022","Qualified Dividend","LIN","LINDE PLC F","","","","$7.74"
"03/25/2022","Qualified Dividend","JKHY","HENRY JACK & ASSOC","","","","$13.77"
"03/25/2022","Qualified Dividend","FIS","FIDELITY NATL INFO","","","","$8.91"
"03/25/2022 as of 03/23/2022","Cash In Lieu","WRB","W R BERKLEY CORP","","","","$36.77"
"03/25/2022","Qualified Dividend","CME","CME GROUP INC CLASS A","","","","$10.39"
"03/25/2022","Qualified Dividend","SEE","SEALED AIR CORP","","","","$7.10"
"03/25/2022","Qualified Dividend","PFG","PRINCIPAL FINL","","","","$19.69"
"03/25/2022","Cash Dividend","SBAC","S B A COMMUNICATIONS CLASS A","","","","$4.28"
"03/25/2022","Qualified Dividend","ANTM","ANTHEM INC","","","","$6.87"
"03/24/2022","Qualified Dividend","NEM","NEWMONT CORP","","","","$20.31"
"03/24/2022","Qualified Dividend","LKQ","LKQ CORP","","","","$10.02"
"03/24/2022","Qualified Dividend","CI","CIGNA CORP","","","","$24.04"
"03/24/2022","Qualified Dividend","POOL","POOL CORP","","","","$3.72"
"03/24/2022","Qualified Dividend","HD","HOME DEPOT INC","","","","$11.36"
"03/24/2022","Cash Dividend","KIM","KIMCO REALTY CORP REIT","","","","$17.94"
"03/24/2022","Qualified Dividend","QCOM","QUALCOMM INC","","","","$22.90"
"03/24/2022 as of 03/23/2022","Stock Split","WRB","W R BERKLEY CORP","12","$65.30","",""
"03/23/2022","Qualified Dividend","EA","ELECTRONIC ARTS INC","","","","$6.30"
"03/23/2022","Qualified Dividend","WRB","W R BERKLEY CORP FORWARD SPLIT WITH STOCK SPLIT SHARES","","","","$3.27"
"03/23/2022","Qualified Dividend","HAL","HALLIBURTON CO HLDG","","","","$12.18"
"03/22/2022","Qualified Dividend","JNPR","JUNIPER NETWORKS INC","","","","$15.25"
"03/22/2022","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$16.00"
"03/18/2022","Qualified Dividend","TAP","MOLSON COORS BEVERAGE CLCLASS B","","","","$38.54"
"03/18/2022","Qualified Dividend","TER","TERADYNE INCORPORATE","","","","$4.68"
"03/18/2022","Cash Dividend","WY","WEYERHAEUSER CO REIT","","","","$9.83"
"03/18/2022","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$6.99"
"03/17/2022","Qualified Dividend","MOS","THE MOSAIC CO","","","","$6.92"
"03/17/2022","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$16.36"
"03/17/2022","Special Qual Div","CTRA","COTERRA ENERGY INC","","","","$44.72"
"03/16/2022","Qualified Dividend","NLOK","NORTONLIFELOCK INC","","","","$21.11"
"03/16/2022","Qualified Dividend","VTRS","VIATRIS INC","","","","$38.76"
"03/16/2022","Qualified Dividend","NOC","NORTHROP GRUMMAN CORP","","","","$8.85"
"03/16/2022","Qualified Dividend","ODFL","OLD DOMINION FREIGHT","","","","$2.04"
"03/16/2022 as of 03/15/2022","Bank Interest","","BANK INT 021622-031522 SCHWAB BANK","","","","$2.85"
"03/16/2022 as of 03/15/2022","Bank Interest","","BANK INT 021622-031522 SCHWAB PREMIER BANK","","","","$0.59"
"03/15/2022","Qualified Dividend","SWKS","SKYWORKS SOLUTIONS","","","","$20.82"
"03/15/2022","Qualified Dividend","CBOE","CBOE GLOBAL MKTS INC","","","","$7.73"
"03/15/2022","Qualified Dividend","MGM","MGM RESORTS INTL","","","","$0.12"
"03/15/2022","Qualified Dividend","HSY","HERSHEY CO","","","","$10.29"
"03/15/2022","Qualified Dividend","BWA","BORG WARNER INC","","","","$7.97"
"03/15/2022","Qualified Dividend","KEY","KEYCORP INC","","","","$19.53"
"03/15/2022","Qualified Dividend","RHI","ROBERT HALF INTL","","","","$8.53"
"03/15/2022","Qualified Dividend","TSN","TYSON FOODS INC CLASS A","","","","$11.54"
"03/15/2022","Qualified Dividend","MCD","MCDONALDS CORP","","","","$11.48"
"03/15/2022","Qualified Dividend","WHR","WHIRLPOOL CORP","","","","$16.66"
"03/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$7.53"
"03/14/2022","Qualified Dividend","VMC","VULCAN MATERIALS COM","","","","$4.45"
"03/14/2022","Qualified Dividend","MAS","MASCO CORP","","","","$9.97"
"03/14/2022","Qualified Dividend","PXD","PIONEER NATURAL RES","","","","$9.17"
"03/14/2022","Special Qual Div","PXD","PIONEER NATURAL RES","","","","$35.26"
"03/14/2022","Qualified Dividend","LYB","LYONDELLBASELL INDS FCLASS A","","","","$25.19"
"03/14/2022","Qualified Dividend","MET","METLIFE INC","","","","$16.35"
"03/11/2022","Qualified Dividend","SHW","SHERWIN WILLIAMS CO","","","","$4.19"
"03/11/2022","Qualified Dividend","PPG","PPG INDUSTRIES INC","","","","$8.25"
"03/11/2022","Qualified Dividend","PRU","PRUDENTIAL FINL","","","","$22.77"
"03/11/2022","Qualified Dividend","HON","HONEYWELL INTL INC","","","","$24.95"
"03/11/2022","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$15.75"
"03/11/2022","Qualified Dividend","YUM","YUM BRANDS INC","","","","$9.02"
"03/10/2022","Qualified Dividend","CVX","CHEVRON CORP","","","","$29.38"
"03/10/2022","Qualified Dividend","MSFT","MICROSOFT CORP","","","","$10.48"
"03/10/2022","Qualified Dividend","AEP","AMER ELECTRIC PWR CO","","","","$18.60"
"03/10/2022","Qualified Dividend","UPS","UNITED PARCEL SRVC CLASS B","","","","$15.71"
"03/10/2022","Qualified Dividend","LLY","LILLY ELI & CO","","","","$8.43"
"03/10/2022","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$11.17"
"03/10/2022","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$19.52"
"03/10/2022","Qualified Dividend","IBM","IBM CORP","","","","$27.77"
"03/10/2022","Qualified Dividend","ROK","ROCKWELL AUTOMATION","","","","$7.59"
"03/10/2022","Qualified Dividend","CDW","CDW CORP","","","","$5.19"
"03/08/2022","Qualified Dividend","AMGN","AMGEN INC.","","","","$42.32"
"03/08/2022","Qualified Dividend","MCHP","MICROCHIP TECHNOLOGY","","","","$17.52"
"03/08/2022","Qualified Dividend","L","LOEWS CORP","","","","$2.40"
"03/08/2022","Qualified Dividend","ADI","ANALOG DEVICES INC","","","","$8.96"
"03/08/2022","Qualified Dividend","TSCO","TRACTOR SUPPLY COMP","","","","$9.29"
"03/08/2022","Qualified Dividend","JNJ","JOHNSON & JOHNSON","","","","$12.93"
"03/08/2022","Journal","","JOURNAL FRM 35602508","","","","$500000.00"
"03/04/2022","Qualified Dividend","TEL","TE CONNECTIVITY LTD F","","","","$16.91"
"03/04/2022","Qualified Dividend","PH","PARKER-HANNIFIN CORP","","","","$7.19"
"03/03/2022","Qualified Dividend","WAB","WABTEC","","","","$3.22"
"03/01/2022","Qualified Dividend","ADM","ARCHER-DANIELS MIDLAND C","","","","$13.36"
"03/01/2022","Qualified Dividend","PSX","PHILLIPS 66","","","","$25.75"
"03/01/2022","Qualified Dividend","ZTS","ZOETIS INC CLASS A","","","","$3.02"
"03/01/2022","Qualified Dividend","V","VISA INC CLASS A","","","","$8.07"
"03/01/2022","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$16.40"
"03/01/2022","Qualified Dividend","AFL","AFLAC INC","","","","$14.44"
"03/01/2022","Qualified Dividend","INTC","INTEL CORP","","","","$14.58"
"03/01/2022","Qualified Dividend","SJM","J M SMUCKER CO","","","","$16.32"
"03/01/2022","Qualified Dividend","CTSH","COGNIZANT TECH SOLU CLASS A","","","","$7.00"
"03/01/2022","Qualified Dividend","F","FORD MOTOR CO","","","","$15.58"
"03/01/2022","Qualified Dividend","WEC","W E C ENERGY GROUP INC","","","","$15.92"
"03/01/2022","Qualified Dividend","PCAR","PACCAR INC","","","","$8.45"
"03/01/2022","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","9.4977","$315.8647","","-$2999.99"
"03/01/2022","Buy","HPE","HEWLETT PACKARD ENTERPRI","194.704","$15.408","","-$3000.00"
"03/01/2022","Buy","INTC","INTEL CORP","64.5577","$46.47","","-$3000.00"
"03/01/2022","Buy","ATVI","ACTIVISION BLIZZARD","37.005","$81.07","","-$3000.00"
"03/01/2022","Buy","UNH","UNITEDHEALTH GRP INC","6.3554","$472.034","","-$2999.96"
"03/01/2022","Buy","CSCO","CISCO SYSTEMS INC","54.8867","$54.658","","-$3000.00"
"03/01/2022","Buy","GOOGL","ALPHABET INC. CLASS A","1.1121","$2697.478","","-$2999.87"
"03/01/2022","Buy","TSLA","TESLA INC","3.4512","$869.2458","","-$2999.94"
"03/01/2022","Buy","AAPL","APPLE INC","18.2773","$164.1377","","-$2999.99"
"03/01/2022","Buy","LYV","LIVE NATION ENTRTMNT","25.7056","$116.706","","-$3000.00"
"03/01/2022","Buy","FOX","FOX CORP CLASS B","79.6685","$37.656","","-$3000.00"
"03/01/2022","Buy","JNPR","JUNIPER NETWORKS INC","90.6133","$33.1077","","-$3000.00"
"03/01/2022","Buy","ADI","ANALOG DEVICES INC","18.9571","$158.252","","-$3000.00"
"03/01/2022","Buy","NOW","SERVICE NOW INC","5.071","$591.59","","-$2999.95"
"03/01/2022","Buy","CTSH","COGNIZANT TECH SOLU CLASS A","35.0704","$85.542","","-$2999.99"
"03/01/2022","Buy","FFIV","F5 INC","15.1789","$197.642","","-$2999.99"
"03/01/2022","Buy","VRSN","VERISIGN INC","13.765","$217.944","","-$3000.00"
"03/01/2022","Buy","AVGO","BROADCOM INC","5.2632","$569.9866","","-$2999.95"
"03/01/2022","Buy","QCOM","QUALCOMM INC","17.977","$166.8796","","-$2999.99"
"03/01/2022","Buy","GLW","CORNING INC","129.9106","$38.488","","-$5000.00"
"03/01/2022","Buy","QRVO","QORVO INC","37.5037","$133.32","","-$4999.99"
"03/01/2022","Buy","JKHY","HENRY JACK & ASSOC","28.0936","$177.976","","-$4999.99"
"03/01/2022","Buy","BKNG","BOOKING HOLDINGS INC","2.3698","$2109.87","","-$4999.97"
"03/01/2022","Buy","MTCH","MATCH GROUP INC NEW","45.221","$110.568","","-$5000.00"
"03/01/2022","Buy","SPGI","S&P GLOBAL INC","12.8547","$388.96","","-$4999.96"
"03/01/2022","Buy","PKI","PERKINELMER INC","28.181","$177.4241","","-$4999.99"
"03/01/2022","Buy","MS","MORGAN STANLEY","57.4118","$87.09","","-$4999.99"
"03/01/2022","Buy","WAT","WATERS CORP","15.9222","$314.026","","-$4999.98"
"03/01/2022","Buy","UAL","UNITED AIRLINES HLDGS","120.9014","$41.356","","-$5000.00"
"03/01/2022","Sell","TYL","TYLER TECHNOLOGIES","0.0054","$424.1583","","$2.29"
"03/01/2022","Sell","TYL","TYLER TECHNOLOGIES","4","$424.1583","$0.01","$1696.62"
"03/01/2022","Sell","GILD","GILEAD SCIENCES INC","0.2644","$59.9617","","$15.85"
"03/01/2022","Sell","GILD","GILEAD SCIENCES INC","78","$59.9617","$0.02","$4676.99"
"03/01/2022","Sell","FB","META PLATFORMS INC CLASS A","0.6677","$206.3131","","$137.76"
"03/01/2022","Sell","FB","META PLATFORMS INC CLASS A","22","$206.3131","$0.02","$4538.87"
"03/01/2022","Sell","STX","SEAGATE TECHNOLOGY HLD F","0.7266","$100.9686","","$73.36"
"03/01/2022","Sell","STX","SEAGATE TECHNOLOGY HLD F","45","$100.9686","$0.02","$4543.57"
"03/01/2022","Sell","OMC","OMNICOM GROUP INC","0.5418","$81.6595","","$44.24"
"03/01/2022","Sell","OMC","OMNICOM GROUP INC","56","$81.6595","$0.02","$4572.91"
"03/01/2022","Sell","NTAP","NETAPP INC","0.3153","$77.29","","$24.37"
"03/01/2022","Sell","NTAP","NETAPP INC","21","$77.29","$0.01","$1623.08"
"03/01/2022","Sell","DISCA","DISCOVERY INC CLASS A","0.5772","$27.41","","$15.82"
"03/01/2022","Sell","DISCA","DISCOVERY INC CLASS A","168","$27.41","$0.02","$4604.86"
"03/01/2022","Sell","TEL","TE CONNECTIVITY LTD F","0.8238","$136.0477","","$112.08"
"03/01/2022","Sell","TEL","TE CONNECTIVITY LTD F","33","$136.0477","$0.02","$4489.55"
"03/01/2022","Sell","ORCL","ORACLE CORP","0.4565","$75.98","","$34.68"
"03/01/2022","Sell","ORCL","ORACLE CORP","60","$75.98","$0.02","$4558.78"
"03/01/2022","Sell","FLT","FLEETCOR TECHNOLOGIE","0.0498","$226.4658","","$11.28"
"03/01/2022","Sell","FLT","FLEETCOR TECHNOLOGIE","20","$226.4658","$0.02","$4529.30"
"03/01/2022","Sell","PARA","PARAMOUNT GLOBAL CLASS B","0.8163","$31.8304","","$25.98"
"03/01/2022","Sell","PARA","PARAMOUNT GLOBAL CLASS B","142","$31.8304","$0.02","$4519.90"
"03/01/2022","Sell","V","VISA INC CLASS A","0.5303","$209.435","","$111.06"
"03/01/2022","Sell","V","VISA INC CLASS A","21","$209.435","$0.02","$4398.12"
"03/01/2022","Sell","TJX","TJX COMPANIES INC","0.9119","$64.2588","","$58.60"
"03/01/2022","Sell","TJX","TJX COMPANIES INC","69","$64.2588","$0.02","$4433.84"
"03/01/2022","Sell","DAL","DELTA AIR LINES INC DEL","0.9086","$37.5324","","$34.10"
"03/01/2022","Sell","DAL","DELTA AIR LINES INC DEL","117","$37.5324","$0.02","$4391.27"
"03/01/2022","Sell","INTU","INTUIT INC","0.2737","$475.125","","$130.04"
"03/01/2022","Sell","INTU","INTUIT INC","9","$475.125","$0.02","$4276.11"
"03/01/2022","Sell","STT","STATE STREET CORP","0.0128","$80.4868","","$1.03"
"03/01/2022","Sell","STT","STATE STREET CORP","49","$80.4868","$0.02","$3943.83"
"03/01/2022","Sell","VTRS","VIATRIS INC","0.0391","$9.90","","$0.39"
"03/01/2022","Sell","VTRS","VIATRIS INC","323","$9.90","$0.02","$3197.68"
"02/28/2022","Qualified Dividend","AMP","AMERIPRISE FINL","","","","$7.40"
"02/28/2022","Special Dividend","WY","WEYERHAEUSER CO REIT","","","","$79.18"
"02/28/2022","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$13.21"
"02/25/2022","Qualified Dividend","SCHW","CHARLES SCHWAB CORP","","","","$5.38"
"02/24/2022","Qualified Dividend","ZION","ZIONS BANCORP N A","","","","$11.83"
"02/24/2022","Qualified Dividend","PAYX","PAYCHEX INC","","","","$11.66"
"02/22/2022","Qualified Dividend","APA","APA CORP","","","","$13.31"
"02/22/2022","Non-Qualified Div","PEAK","HEALTHPEAK PPTYS INC REIT","","","","$17.79"
"02/22/2022 as of 02/21/2022","Qualified Dividend","NSC","NORFOLK SOUTHERN CO","","","","$10.13"
"02/18/2022","Qualified Dividend","BKR","BAKER HUGHES CO. CLASS A","","","","$15.28"
"02/18/2022","Qualified Dividend","NI","NISOURCE INC 00500","","","","$19.53"
"02/16/2022","Cash In Lieu","AMD","ADVANCED MICRO DEVIC","","","","$25.60"
"02/16/2022 as of 02/15/2022","Bank Interest","","BANK INT 011622-021522 SCHWAB BANK","","","","$0.81"
"02/15/2022","Qualified Dividend","ACN","ACCENTURE PLC FCLASS A","","","","$5.29"
"02/15/2022","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$12.33"
"02/15/2022","Qualified Dividend","HRL","HORMEL FOODS CORP","","","","$12.34"
"02/15/2022","Qualified Dividend","ABBV","ABBVIE INC","","","","$26.23"
"02/15/2022","Qualified Dividend","KMI","KINDER MORGAN INC","","","","$34.23"
"02/15/2022","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$6.88"
"02/15/2022","Non-Qualified Div","O","REALTY INCOME CORP DISCOREIT","","","","$7.53"
"02/15/2022","Qualified Dividend","ABT","ABBOTT LABORATORIES","","","","$7.31"
"02/15/2022","Stock Merger","AMD","ADVANCED MICRO DEVIC","19","","",""
"02/15/2022","Stock Merger","983919101","XILINX INC XXXMANDATORY MERGER EFF: 02/15/22","-11.1528","","",""
"02/14/2022","Qualified Dividend","XLNX","XILINX INC MANDATORY MERGER EFF: 02/15/22","","","","$4.13"
"02/14/2022","Qualified Dividend","OKE","ONEOK INC","","","","$31.96"
"02/14/2022","Qualified Dividend","APD","AIR PROD & CHEMICALS","","","","$11.19"
"02/11/2022","Qualified Dividend","CFG","CITIZENS FINL GROUP INC","","","","$18.02"
"02/11/2022","Buy","MNST","MONSTER BEVERAGE CORPORA","60.3078","$82.908","","-$5000.00"
"02/11/2022","Buy","FB","META PLATFORMS INC CLASS A","22.6677","$220.578","","-$5000.00"
"02/11/2022","Buy","TAP","MOLSON COORS BEVERAGE CLCLASS B","101.4229","$49.2985","","-$5000.00"
"02/11/2022","Buy","HAS","HASBRO INC","53.0887","$94.182","","-$5000.00"
"02/11/2022","Buy","HUM","HUMANA INC","11.7602","$425.162","","-$4999.99"
"02/11/2022","Buy","AMGN","AMGEN INC.","21.8136","$229.214","","-$4999.98"
"02/11/2022","Buy","TWTR","TWITTER INC","139.1788","$35.925","","-$5000.00"
"02/11/2022","Buy","HCA","HCA HEALTHCARE INC","21.0595","$237.422","","-$4999.99"
"02/11/2022","Buy","DISCA","DISCOVERY INC CLASS A","168.5772","$29.66","","-$5000.00"
"02/11/2022","Buy","SYK","STRYKER CORP","19.9288","$250.892","","-$4999.98"
"02/11/2022","Buy","GD","GENERAL DYNAMICS CO","23.5039","$212.73","","-$4999.98"
"02/11/2022","Buy","DAL","DELTA AIR LINES INC DEL","117.9086","$42.4057","","-$5000.00"
"02/11/2022","Buy","ADBE","ADOBE INC","10.4391","$478.964","","-$4999.95"
"02/11/2022","Buy","NXPI","NXP SEMICONDUCTORS F","26.5313","$188.4563","","-$4999.99"
"02/11/2022","Buy","MCHP","MICROCHIP TECHNOLOGY","69.252","$72.20","","-$4999.99"
"02/11/2022","Buy","SWKS","SKYWORKS SOLUTIONS","37.1763","$134.494","","-$4999.99"
"02/11/2022","Buy","PAYC","PAYCOM SOFTWARE INC","14.3758","$347.806","","-$4999.99"
"02/11/2022","Buy","MSFT","MICROSOFT CORP","16.8966","$295.9162","","-$4999.98"
"02/11/2022","Buy","STX","SEAGATE TECHNOLOGY HLD F","45.7266","$109.3455","","-$5000.00"
"02/11/2022","Buy","INTU","INTUIT INC","9.2737","$539.158","","-$4999.99"
"02/11/2022","Sell","MTD","METTLER TOLEDO INTL","0.2443","$1445.70","","$353.18"
"02/11/2022","Sell","MTD","METTLER TOLEDO INTL","3","$1445.70","$0.02","$4337.08"
"02/11/2022","Sell","ADSK","AUTODESK INC","0.4013","$230.455","","$92.48"
"02/11/2022","Sell","ADSK","AUTODESK INC","20","$230.455","$0.02","$4609.08"
"02/11/2022","Sell","APD","AIR PROD & CHEMICALS","0.4612","$245.8056","","$113.37"
"02/11/2022","Sell","APD","AIR PROD & CHEMICALS","7","$245.8056","$0.01","$1720.63"
"02/11/2022","Sell","IT","GARTNER INC","0.3324","$289.295","","$96.16"
"02/11/2022","Sell","IT","GARTNER INC","6","$289.295","$0.01","$1735.76"
"02/11/2022","Sell","VRSK","VERISK ANALYTICS INC CLASS A","0.5033","$192.505","","$96.89"
"02/11/2022","Sell","VRSK","VERISK ANALYTICS INC CLASS A","9","$192.505","$0.01","$1732.54"
"02/11/2022","Sell","ROK","ROCKWELL AUTOMATION","0.7731","$268.56","","$207.62"
"02/11/2022","Sell","ROK","ROCKWELL AUTOMATION","6","$268.56","$0.01","$1611.35"
"02/11/2022","Sell","MSI","MOTOROLA SOLUTIONS","0.2867","$215.35","","$61.74"
"02/11/2022","Sell","MSI","MOTOROLA SOLUTIONS","8","$215.35","$0.01","$1722.79"
"02/11/2022","Sell","CDAY","CERIDIAN H C M HOLDING I","0.8504","$71.922","","$61.16"
"02/11/2022","Sell","CDAY","CERIDIAN H C M HOLDING I","63","$71.922","$0.02","$4531.07"
"02/11/2022","Sell","ILMN","ILLUMINA INC","0.6522","$333.58","","$217.56"
"02/11/2022","Sell","ILMN","ILLUMINA INC","13","$333.58","$0.02","$4336.52"
"02/11/2022","Sell","IPG","INTERPUBLIC GRP COS","0.3916","$34.8716","","$13.66"
"02/11/2022","Sell","IPG","INTERPUBLIC GRP COS","130","$34.8716","$0.02","$4533.29"
"02/11/2022","Sell","AMD","ADVANCED MICRO DEVIC","0.0759","$115.8933","","$8.80"
"02/11/2022","Sell","AMD","ADVANCED MICRO DEVIC","39","$115.8933","$0.02","$4519.82"
"02/11/2022","Sell","ENPH","ENPHASE ENERGY INC","0.658","$146.80","","$96.59"
"02/11/2022","Sell","ENPH","ENPHASE ENERGY INC","30","$146.80","$0.02","$4403.98"
"02/11/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","0.7814","$10.12","","$7.91"
"02/11/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","89","$10.12","","$900.68"
"02/11/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","100","$10.12","$0.01","$1011.99"
"02/11/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","100","$10.12","$0.01","$1011.99"
"02/11/2022","Sell","LUMN","LUMEN TECHNOLOGIES INC","100","$10.12","$0.01","$1011.99"
"02/10/2022","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$5.37"
"02/10/2022","Qualified Dividend","FRC","FIRST REPUBLIC BANK","","","","$2.21"
"02/10/2022","Qualified Dividend","AAPL","APPLE INC","","","","$2.91"
"02/09/2022","Sell","UAA","UNDER ARMOUR INC CLASS A","0.2398","$20.33","","$4.88"
"02/09/2022","Sell","UAA","UNDER ARMOUR INC CLASS A","97","$20.33","$0.01","$1972.00"
"02/09/2022","Sell","FOXA","FOX CORP CLASS A","0.2364","$43.855","","$10.37"
"02/09/2022","Sell","FOXA","FOX CORP CLASS A","55","$43.855","$0.01","$2412.02"
"02/09/2022","Sell","ONL","ORION OFFICE REIT INC","3","$17.82","","$53.46"
"02/09/2022","Sell","CP","CANADIAN PAC RAILWAY F","21","$73.205","$0.01","$1537.30"
"02/09/2022","Buy","V","VISA INC CLASS A","21.5303","$232.2301","","-$4999.98"
"02/09/2022","Buy","WMT","WALMART INC","36.0656","$138.636","","-$4999.99"
"02/09/2022","Buy","ALL","ALLSTATE CORP","39.4054","$126.886","","-$4999.99"
"02/09/2022","Buy","STT","STATE STREET CORP","49.0128","$102.014","","-$4999.99"
"02/09/2022","Buy","CPB","CAMPBELL SOUP CO","114.742","$43.576","","-$5000.00"
"02/09/2022","Buy","LUMN","LUMEN TECHNOLOGIES INC","389.7814","$12.8277","","-$5000.00"
"02/09/2022","Buy","PENN","PENN NTNL GAMING","99.98","$50.01","","-$5000.00"
"02/09/2022","Buy","TJX","TJX COMPANIES INC","69.9119","$71.5185","","-$4999.99"
"02/09/2022","Buy","CZR","CAESARS ENTMT INC NEW","59.6559","$83.814","","-$5000.00"
"02/09/2022","Buy","EA","ELECTRONIC ARTS INC","37.0661","$134.894","","-$4999.99"
"02/09/2022","Buy","CHTR","CHARTER COMMUNICATN CLASS A","8.1949","$610.13","","-$4999.95"
"02/09/2022","Buy","IPG","INTERPUBLIC GRP COS","130.3916","$38.346","","-$5000.00"
"02/09/2022","Buy","VIAC","VIACOMCBS INC CLASS B","142.8163","$35.01","","-$5000.00"
"02/09/2022","Buy","T","A T & T INC","205.6961","$24.3077","","-$5000.00"
"02/09/2022","Buy","OMC","OMNICOM GROUP INC","56.5418","$88.43","","-$4999.99"
"02/09/2022","Buy","ENPH","ENPHASE ENERGY INC","30.658","$163.0894","","-$4999.99"
"02/09/2022","Buy","ADSK","AUTODESK INC","20.4013","$245.082","","-$4999.99"
"02/09/2022","Buy","TDY","TELEDYNE TECHNOLOGIE","11.6292","$429.952","","-$5000.00"
"02/09/2022","Buy","MU","MICRON TECHNOLOGY","59.4247","$84.14","","-$4999.99"
"02/09/2022","Buy","LDOS","LEIDOS HOLDINGS INC","57.6435","$86.74","","-$5000.00"
"02/09/2022","Buy","CDAY","CERIDIAN H C M HOLDING I","63.8504","$78.308","","-$5000.00"
"02/09/2022","Buy","ORCL","ORACLE CORP","60.4565","$82.704","","-$4999.99"
"02/09/2022","Buy","SNPS","SYNOPSYS INC","15.8871","$314.72","","-$4999.99"
"02/09/2022","Buy","FLT","FLEETCOR TECHNOLOGIE","20.0498","$249.378","","-$4999.98"
"02/09/2022","Buy","NLOK","NORTONLIFELOCK INC","168.8846","$29.606","","-$5000.00"
"02/09/2022","Buy","TEL","TE CONNECTIVITY LTD F","33.8238","$147.8247","","-$4999.99"
"02/09/2022","Buy","PTC","PTC INC","43.0871","$116.044","","-$5000.00"
"02/09/2022","Buy","AMD","ADVANCED MICRO DEVIC","39.0759","$127.956","","-$5000.00"
"02/09/2022","Buy","TER","TERADYNE INCORPORATE","42.5198","$117.592","","-$4999.99"
"02/09/2022","Buy","GILD","GILEAD SCIENCES INC","78.2644","$63.886","","-$5000.00"
"02/09/2022","Buy","VTRS","VIATRIS INC","323.0391","$15.478","","-$5000.00"
"02/09/2022","Buy","INCY","INCYTE CORP","73.4689","$68.056","","-$5000.00"
"02/09/2022","Buy","ILMN","ILLUMINA INC","13.6522","$366.24","","-$4999.98"
"02/09/2022","Buy","COO","COOPER COMPANIES","12.3072","$406.2633","","-$4999.96"
"02/09/2022","Buy","MTD","METTLER TOLEDO INTL","3.2443","$1541.13","","-$4999.89"
"02/09/2022","Buy","CI","CIGNA CORP","21.4605","$232.986","","-$5000.00"
"02/09/2022","Buy","HON","HONEYWELL INTL INC","25.4582","$196.40","","-$4999.99"
"02/08/2022","Sell","ACN","ACCENTURE PLC FCLASS A","0.4547","$344.41","","$156.60"
"02/08/2022","Sell","ACN","ACCENTURE PLC FCLASS A","5","$344.41","$0.01","$1722.04"
"02/08/2022","Sell","UA","UNDER ARMOUR INC CLASS C","0.5573","$16.8039","","$9.36"
"02/08/2022","Sell","UA","UNDER ARMOUR INC CLASS C","111","$16.8039","$0.01","$1865.22"
"02/08/2022","Sell","WST","WEST PHARM SRVC INC","0.6844","$400.31","","$273.97"
"02/08/2022","Sell","WST","WEST PHARM SRVC INC","4","$400.31","$0.01","$1601.23"
"02/08/2022","Sell","TXT","TEXTRON INC","0.3449","$68.5174","","$23.63"
"02/08/2022","Sell","TXT","TEXTRON INC","27","$68.5174","$0.01","$1849.96"
"02/08/2022","Sell","PVH","PVH CORP","0.0792","$97.97","","$7.76"
"02/08/2022","Sell","PVH","PVH CORP","19","$97.97","$0.01","$1861.42"
"02/08/2022","Sell","ZTS","ZOETIS INC CLASS A","0.3033","$200.6454","","$60.86"
"02/08/2022","Sell","ZTS","ZOETIS INC CLASS A","9","$200.6454","$0.01","$1805.80"
"02/08/2022","Sell","NEE","NEXTERA ENERGY INC","0.6341","$75.325","","$47.76"
"02/08/2022","Sell","NEE","NEXTERA ENERGY INC","24","$75.325","$0.01","$1807.79"
"02/08/2022","Sell","ALLE","ALLEGION PUBLIC LTD F","0.252","$121.5331","","$30.63"
"02/08/2022","Sell","ALLE","ALLEGION PUBLIC LTD F","15","$121.5331","$0.01","$1822.99"
"02/08/2022","Sell","RMD","RESMED INC","0.6866","$239.86","","$164.69"
"02/08/2022","Sell","RMD","RESMED INC","7","$239.86","$0.01","$1679.01"
"02/08/2022","Sell","AMAT","APPLIED MATERIALS","0.3786","$137.5433","","$52.07"
"02/08/2022","Sell","AMAT","APPLIED MATERIALS","13","$137.5433","$0.01","$1788.05"
"02/08/2022","Sell","SWK","STANLEY BLACK & DECK","0.2515","$162.8966","","$40.97"
"02/08/2022","Sell","SWK","STANLEY BLACK & DECK","11","$162.8966","$0.01","$1791.85"
"02/08/2022","Sell","ZBRA","ZEBRA TECHNOLOGIES CLASS A","0.7319","$490.2138","","$358.79"
"02/08/2022","Sell","ZBRA","ZEBRA TECHNOLOGIES CLASS A","3","$490.2138","$0.01","$1470.63"
"02/08/2022","Sell","GRMN","GARMIN LTD F","0.5465","$125.49","","$68.58"
"02/08/2022","Sell","GRMN","GARMIN LTD F","14","$125.49","$0.01","$1756.85"
"02/08/2022","Sell","TT","TRANE TECHNOLOGIES PLC F","0.4627","$158.61","","$73.39"
"02/08/2022","Sell","TT","TRANE TECHNOLOGIES PLC F","11","$158.61","$0.01","$1744.70"
"02/08/2022","Sell","DIS","WALT DISNEY CO","0.7865","$141.9773","","$111.67"
"02/08/2022","Sell","DIS","WALT DISNEY CO","12","$141.9773","$0.01","$1703.72"
"02/08/2022","Sell","MMM","3M CO","0.2047","$161.8201","","$33.12"
"02/08/2022","Sell","MMM","3M CO","11","$161.8201","$0.01","$1780.01"
"02/08/2022","Sell","NVDA","NVIDIA CORP","0.2674","$249.0524","","$66.60"
"02/08/2022","Sell","NVDA","NVIDIA CORP","7","$249.0524","$0.01","$1743.36"
"02/08/2022","Sell","NDAQ","NASDAQ INC","0.1848","$177.4537","","$32.79"
"02/08/2022","Sell","NDAQ","NASDAQ INC","10","$177.4537","$0.01","$1774.53"
"02/08/2022","Sell","APTV","APTIV PLC F","0.4502","$133.86","","$60.26"
"02/08/2022","Sell","APTV","APTIV PLC F","13","$133.86","$0.01","$1740.17"
"02/08/2022","Sell","KLAC","KLA CORP","0.7027","$382.11","","$268.51"
"02/08/2022","Sell","KLAC","KLA CORP","4","$382.11","$0.01","$1528.43"
"02/08/2022","Sell","A","AGILENT TECHNOLOGIES","0.7395","$140.3501","","$103.79"
"02/08/2022","Sell","A","AGILENT TECHNOLOGIES","12","$140.3501","$0.01","$1684.19"
"02/08/2022","Sell","DISH","DISH NETWORK CORP CLASS A","0.3265","$30.63","","$10.00"
"02/08/2022","Sell","DISH","DISH NETWORK CORP CLASS A","58","$30.63","$0.01","$1776.53"
"02/08/2022","Sell","WM","WASTE MANAGEMENT INC","0.3066","$145.0215","","$44.46"
"02/08/2022","Sell","WM","WASTE MANAGEMENT INC","12","$145.0215","$0.01","$1740.25"
"02/08/2022","Sell","TXN","TEXAS INSTRUMENTS","0.4012","$171.402","","$68.77"
"02/08/2022","Sell","TXN","TEXAS INSTRUMENTS","10","$171.402","$0.01","$1714.01"
"02/08/2022","Sell","FRC","FIRST REPUBLIC BANK","0.0347","$176.4617","","$6.12"
"02/08/2022","Sell","FRC","FIRST REPUBLIC BANK","10","$176.4617","$0.01","$1764.61"
"02/08/2022","Sell","IPGP","IPG PHOTONICS CORP","0.8045","$149.8005","","$120.51"
"02/08/2022","Sell","IPGP","IPG PHOTONICS CORP","11","$149.8005","$0.01","$1647.80"
"02/08/2022","Sell","BR","BROADRIDGE FINL SOLU","0.6705","$148.28","","$99.42"
"02/08/2022","Sell","BR","BROADRIDGE FINL SOLU","11","$148.28","$0.01","$1631.07"
"02/08/2022","Sell","LRCX","LAM RESEARCH CORP","0.0225","$571.61","","$12.86"
"02/08/2022","Sell","LRCX","LAM RESEARCH CORP","3","$571.61","$0.01","$1714.82"
"02/08/2022","Sell","ROST","ROSS STORES INC","0.1976","$94.9008","","$18.75"
"02/08/2022","Sell","ROST","ROSS STORES INC","18","$94.9008","$0.01","$1708.20"
"02/08/2022","Sell","FTV","FORTIVE CORP DISC 00500","0.48","$65.16","","$31.28"
"02/08/2022","Sell","FTV","FORTIVE CORP DISC 00500","26","$65.16","$0.01","$1694.15"
"02/08/2022","Sell","SBUX","STARBUCKS CORP","0.0665","$94.606","","$6.29"
"02/08/2022","Sell","SBUX","STARBUCKS CORP","18","$94.606","$0.01","$1702.90"
"02/08/2022","Sell","TRMB","TRIMBLE INC","0.9914","$71.0927","","$70.48"
"02/08/2022","Sell","TRMB","TRIMBLE INC","23","$71.0927","$0.01","$1635.12"
"02/08/2022","Sell","KEYS","KEYSIGHT TECH INC","0.156","$167.455","","$26.12"
"02/08/2022","Sell","KEYS","KEYSIGHT TECH INC","10","$167.455","$0.01","$1674.54"
"02/08/2022","Sell","DGX","QUEST DIAGNOSTIC INC","0.6834","$133.80","","$91.44"
"02/08/2022","Sell","DGX","QUEST DIAGNOSTIC INC","12","$133.80","$0.01","$1605.59"
"02/08/2022","Sell","CRM","SALESFORCE COM","0.7537","$216.26","","$163.00"
"02/08/2022","Sell","CRM","SALESFORCE COM","7","$216.26","$0.01","$1513.81"
"02/08/2022","Sell","ANSS","ANSYS INC","0.0821","$328.7301","","$26.99"
"02/08/2022","Sell","ANSS","ANSYS INC","5","$328.7301","$0.01","$1643.64"
"02/08/2022","Sell","PNR","PENTAIR PLC F","0.4672","$60.8001","","$28.41"
"02/08/2022","Sell","PNR","PENTAIR PLC F","27","$60.8001","$0.01","$1641.59"
"02/08/2022","Sell","CDNS","CADENCE DESIGN SYS","0.0679","$147.7804","","$10.03"
"02/08/2022","Sell","CDNS","CADENCE DESIGN SYS","11","$147.7804","$0.01","$1625.57"
"02/08/2022","Sell","WDC","WESTERN DIGITAL CORP","0.7962","$52.235","","$41.59"
"02/08/2022","Sell","WDC","WESTERN DIGITAL CORP","30","$52.235","$0.01","$1567.04"
"02/08/2022","Sell","TROW","T ROWE PRICE GROUP","0.1908","$151.0035","","$28.81"
"02/08/2022","Sell","TROW","T ROWE PRICE GROUP","10","$151.0035","$0.01","$1510.03"
"02/08/2022","Sell","NFLX","NETFLIX INC","0.4144","$402.1296","","$166.64"
"02/08/2022","Sell","NFLX","NETFLIX INC","3","$402.1296","$0.01","$1206.38"
"02/08/2022","Journal","","JOURNAL FRM 35602508","","","","$500000.00"
"02/07/2022","Qualified Dividend","TXN","TEXAS INSTRUMENTS","","","","$11.96"
"02/07/2022 as of 02/05/2022","Qualified Dividend","PNC","PNC FINL SERVICES","","","","$12.67"
"02/04/2022","Qualified Dividend","PNR","PENTAIR PLC F","","","","$5.77"
"02/02/2022","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$7.80"
"02/02/2022","Qualified Dividend","WST","WEST PHARM SRVC INC","","","","$0.84"
"02/02/2022","Qualified Dividend","DGX","QUEST DIAGNOSTIC INC","","","","$7.86"
"02/01/2022","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$13.04"
"02/01/2022","Qualified Dividend","LNC","LINCOLN NTNL CO","","","","$14.20"
"02/01/2022","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$17.47"
"02/01/2022","Qualified Dividend","VZ","VERIZON COMMUNICATN","","","","$1.75"
"01/31/2022","Foreign Tax Paid","CP","CANADIAN PAC RAILWAY F","","","","-$0.47"
"01/31/2022","Qualified Dividend","CP","CANADIAN PAC RAILWAY F","","","","$3.13"
"01/31/2022","Cash Dividend","MAA","MID AMERICA APARTMENT COREIT","","","","$11.50"
"01/31/2022","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$12.97"
"01/31/2022","Cash Dividend","UDR","UDR INC. REIT","","","","$13.17"
"01/28/2022","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$22.16"
"01/28/2022","Pr Yr Cash Div","BXP","BOSTON PROPERTIES REIT","","","","$17.48"
"01/26/2022","Qualified Dividend","CMCSA","COMCAST CORP CLASS A","","","","$0.71"
"01/26/2022","Qualified Dividend","A","AGILENT TECHNOLOGIES","","","","$2.68"
"01/26/2022","Qualified Dividend","NTAP","NETAPP INC","","","","$0.78"
"01/26/2022","Qualified Dividend","CSCO","CISCO SYSTEMS INC","","","","$13.27"
"01/24/2022","Qualified Dividend","ROP","ROPER TECHNOLOGIES","","","","$2.77"
"01/20/2022","Qualified Dividend","XEL","XCEL ENERGY INC","","","","$14.25"
"01/18/2022","Qualified Dividend","RJF","RAYMOND JAMES FINL","","","","$7.29"
"01/18/2022","Non-Qualified Div","313747206","FEDERAL REALTY INVT TR REIT","","","","$17.97"
"01/18/2022","Pr Yr Cash Div","AVB","AVALONBAY CMNTYS INC REIT","","","","$13.95"
"01/18/2022","Qualified Dividend","FITB","FIFTH THIRD BANCORP","","","","$15.38"
"01/18/2022 as of 01/15/2022","Bank Interest","","BANK INT 121621-011522 SCHWAB BANK","","","","$0.08"
"01/14/2022","Special Qual Div","CME","CME GROUP INC CLASS A","","","","$33.76"
"01/14/2022","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$7.13"
"01/14/2022","Qualified Dividend","RSG","REPUBLIC SERVICES","","","","$7.69"
"01/14/2022","Cash Dividend","ESS","ESSEX PROPERTY TR REIT","","","","$12.89"
"01/14/2022","Cash Dividend","EQR","EQUITY RESIDENTIAL REIT","","","","$14.66"
"01/14/2022","Qualified Dividend","OXY","OCCIDENTAL PETROL CO","","","","$0.67"
"01/14/2022","Qualified Dividend","MDLZ","MONDELEZ INTL CLASS A","","","","$11.60"
"01/14/2022","Qualified Dividend","TMO","THERMO FISHER SCNTFC","","","","$0.90"
"01/14/2022","Qualified Dividend","MSI","MOTOROLA SOLUTIONS","","","","$6.55"
"01/14/2022","Qualified Dividend","PXD","PIONEER NATURAL RES","","","","$7.29"
"01/14/2022","Non-Qualified Div","O","REALTY INCM CORP REIT","","","","$7.53"
"01/14/2022","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$2.20"
"01/13/2022","Qualified Dividend","SLB","SCHLUMBERGER LTD F","","","","$7.98"
"01/12/2022","Qualified Dividend","APH","AMPHENOL CORP CLASS A","","","","$5.30"
"01/11/2022","Buy","LRCX","LAM RESEARCH CORP","2.8244","$657.5321","","-$1857.13"
"01/11/2022","Buy","VZ","VERIZON COMMUNICATN","34.8118","$53.348","","-$1857.14"
"01/11/2022","Buy","CMCSA","COMCAST CORP CLASS A","36.7692","$50.508","","-$1857.14"
"01/11/2022","Buy","TMUS","T-MOBILE US INC","17.5082","$106.072","","-$1857.13"
"01/11/2022","Buy","NWS","NEWS CORP NEW CLASS B","82.9621","$22.3854","","-$1857.14"
"01/11/2022","Buy","DIS","WALT DISNEY CO","11.8681","$156.4808","","-$1857.13"
"01/11/2022","Buy","DISH","DISH NETWORK CORP CLASS A","53.9333","$34.434","","-$1857.14"
"01/11/2022","Buy","WDC","WESTERN DIGITAL CORP","28.6171","$64.896","","-$1857.14"
"01/11/2022","Buy","ATVI","ACTIVISION BLIZZARD","28.7358","$64.628","","-$1857.14"
"01/11/2022","Buy","NVDA","NVIDIA CORP","6.7831","$273.786","","-$1857.12"
"01/11/2022","Buy","BSX","BOSTON SCIENTIFIC CO","43.6255","$42.57","","-$1857.14"
"01/11/2022","Buy","NTAP","NETAPP INC","19.7639","$93.966","","-$1857.13"
"01/11/2022","Buy","DGX","QUEST DIAGNOSTIC INC","11.8568","$156.6332","","-$1857.17"
"01/11/2022","Buy","GOOG","ALPHABET INC. CLASS C","0.6724","$2761.622","","-$1856.91"
"01/07/2022","Qualified Dividend","MRK","MERCK & CO. INC.","","","","$18.75"
"01/07/2022","Qualified Dividend","CB","CHUBB LTD F","","","","$8.80"
"01/07/2022","Qualified Dividend","HPE","HEWLETT PACKARD ENTERPRI","","","","$16.92"
"01/07/2022","Qualified Dividend","RL","RALPH LAUREN CORP CLASS A","","","","$12.29"
"01/07/2022","Qualified Dividend","PEP","PEPSICO INC","","","","$14.19"
"01/05/2022","Qualified Dividend","HPQ","HP INC.","","","","$13.53"
"01/05/2022","Pr Yr Non-Qual Div","REG","REGENCY CENTERS CORP REIT","","","","$18.40"
"01/05/2022","Special Qual Div","PCAR","PACCAR INC","","","","$37.30"
"01/05/2022","Qualified Dividend","BR","BROADRIDGE FINL SOLU","","","","$7.47"
"01/04/2022","Stock Merger","313745101","FEDERAL REALTY INVT TR REIT","16.7923","","",""
"01/04/2022","Stock Merger","313747206","FEDERAL REALTY INVT TR REIT","-16.7923","","",""
"01/04/2022","Qualified Dividend","PHM","PULTEGROUP INC","","","","$6.39"
"01/04/2022","Qualified Dividend","GPC","GENUINE PARTS CO","","","","$13.63"
"01/04/2022","Qualified Dividend","HIG","HARTFORD FINL SVC GP","","","","$11.10"
"01/03/2022","Reinvest Shares","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","0.0363","$162.9096","","-$5.92"
"01/03/2022","Qualified Dividend","CHRW","C H ROBINSON WORLDWD","","","","$12.63"
"01/03/2022","Qualified Dividend","PPL","PPL CORP","","","","$29.74"
"01/03/2022 as of 01/01/2022","Qualified Dividend","NTRS","NORTHERN TRUST CORP","","","","$12.40"
"01/03/2022 as of 01/01/2022","Qualified Dividend","ADP","AUTO DATA PROCESSING","","","","$10.21"
"01/03/2022 as of 01/01/2022","Qualified Dividend","TXT","TEXTRON INC","","","","$0.55"
"01/03/2022 as of 01/01/2022","Qualified Dividend","CMA","COMERICA INCORPORATE","","","","$18.57"
"01/03/2022","Qualified Dividend","MCK","MCKESSON CORP","","","","$4.68"
"01/03/2022","Qualified Dividend","RF","REGIONS FINL CO","","","","$15.90"
"01/03/2022","Qualified Dividend","AAP","ADVANCE AUTO PARTS","","","","$9.95"
"01/03/2022","Qualified Dividend","ALB","ALBEMARLE CORP","","","","$2.85"
"12/31/2021","Reinvest Dividend","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","","","","$5.92"
"12/31/2021","Qualified Dividend","BAC","BANK OF AMERICA CORP","","","","$10.24"
"12/31/2021","Qualified Dividend","TT","TRANE TECHNOLOGIES PLC F","","","","$6.76"
"12/31/2021","Qualified Dividend","PEG","PUB SVC ENTERPISE GP","","","","$16.64"
"12/31/2021","Qualified Dividend","AVGO","BROADCOM INC","","","","$16.57"
"12/31/2021","Qualified Dividend","GRMN","GARMIN LTD F","","","","$9.75"
"12/31/2021","Cash Dividend","PLD","PROLOGIS INC. REIT","","","","$9.93"
"12/31/2021","Qualified Dividend","AEE","AMEREN CORP","","","","$13.00"
"12/31/2021","Qualified Dividend","ICE","INTERCONTINENTAL EXC","","","","$5.52"
"12/31/2021","Qualified Dividend","VRSK","VERISK ANALYTICS INC CLASS A","","","","$2.76"
"12/31/2021","Qualified Dividend","MTB","M & T BANK CORP","","","","$16.85"
"12/31/2021","Qualified Dividend","MLM","MARTIN MARIETTA MATERIAL","","","","$3.54"
"12/31/2021","Qualified Dividend","TRV","TRAVELERS COMPANIES","","","","$11.19"
"12/31/2021","Qualified Dividend","ROST","ROSS STORES INC","","","","$5.19"
"12/31/2021","Buy","DGX","QUEST DIAGNOSTIC INC","0.8266","$172.824","","-$142.86"
"12/31/2021","Buy","NTAP","NETAPP INC","1.5514","$92.082","","-$142.86"
"12/31/2021","Buy","WDC","WESTERN DIGITAL CORP","2.1791","$65.5585","","-$142.86"
"12/31/2021","Buy","BSX","BOSTON SCIENTIFIC CO","3.3347","$42.84","","-$142.86"
"12/31/2021","Buy","GOOG","ALPHABET INC. CLASS C","0.049","$2910.70","","-$142.62"
"12/31/2021","Buy","LRCX","LAM RESEARCH CORP","0.1981","$720.986","","-$142.83"
"12/31/2021","Buy","NVDA","NVIDIA CORP","0.4843","$294.9708","","-$142.85"
"12/31/2021","Buy","CMCSA","COMCAST CORP CLASS A","2.8296","$50.4877","","-$142.86"
"12/31/2021","Buy","ATVI","ACTIVISION BLIZZARD","2.1319","$67.008","","-$142.85"
"12/31/2021","Buy","DISH","DISH NETWORK CORP CLASS A","4.3932","$32.518","","-$142.86"
"12/31/2021","Buy","NWS","NEWS CORP NEW CLASS B","6.2945","$22.696","","-$142.86"
"12/31/2021","Buy","DIS","WALT DISNEY CO","0.9184","$155.4931","","-$142.80"
"12/31/2021","Buy","TMUS","T-MOBILE US INC","1.2349","$115.68","","-$142.85"
"12/31/2021","Buy","VZ","VERIZON COMMUNICATN","2.7412","$52.115","","-$142.86"
"12/31/2021","Sell","OXY","OCCIDENTAL PETROL CO","0.0292","$28.925","","$0.84"
"12/31/2021","Sell","OXY","OCCIDENTAL PETROL CO","67","$28.925","$0.01","$1937.97"
"12/31/2021","Sell","GLW","CORNING INC","0.1294","$37.1812","","$4.81"
"12/31/2021","Sell","GLW","CORNING INC","52","$37.1812","$0.01","$1933.41"
"12/31/2021","Sell","AES","AES CORP","0.3713","$24.285","","$9.02"
"12/31/2021","Sell","AES","AES CORP","79","$24.285","$0.01","$1918.51"
"12/31/2021","Sell","INTU","INTUIT INC","0.9787","$642.96","","$629.26"
"12/31/2021","Sell","INTU","INTUIT INC","2","$642.96","$0.01","$1285.91"
"12/31/2021","Sell","LDOS","LEIDOS HOLDINGS INC","0.6398","$88.4132","","$56.57"
"12/31/2021","Sell","LDOS","LEIDOS HOLDINGS INC","21","$88.4132","$0.01","$1856.67"
"12/31/2021","Sell","ORCL","ORACLE CORP","0.7306","$87.515","","$63.94"
"12/31/2021","Sell","ORCL","ORACLE CORP","21","$87.515","$0.01","$1837.81"
"12/31/2021","Sell","WFC","WELLS FARGO & CO","0.2405","$48.014","","$11.55"
"12/31/2021","Sell","WFC","WELLS FARGO & CO","39","$48.014","$0.01","$1872.54"
"12/31/2021","Sell","WRK","WESTROCK CO","0.2582","$44.1623","","$11.40"
"12/31/2021","Sell","WRK","WESTROCK CO","42","$44.1623","$0.01","$1854.81"
"12/31/2021","Sell","URI","UNITED RENTALS INC","0.6732","$327.04","","$220.16"
"12/31/2021","Sell","URI","UNITED RENTALS INC","5","$327.04","$0.01","$1635.19"
"12/31/2021","Sell","AMD","ADVANCED MICRO DEVIC","0.6395","$146.09","","$93.42"
"12/31/2021","Sell","AMD","ADVANCED MICRO DEVIC","12","$146.09","$0.01","$1753.07"
"12/31/2021","Sell","WMB","WILLIAMS COMPANIES","0.0827","$25.891","","$2.14"
"12/31/2021","Sell","WMB","WILLIAMS COMPANIES","70","$25.891","$0.01","$1812.36"
"12/31/2021","Sell","ALB","ALBEMARLE CORP","0.2982","$235.2852","","$70.16"
"12/31/2021","Sell","ALB","ALBEMARLE CORP","7","$235.2852","$0.01","$1646.99"
"12/31/2021","Sell","ADBE","ADOBE INC","0.9688","$568.194","","$550.47"
"12/31/2021","Sell","ADBE","ADOBE INC","2","$568.194","$0.01","$1136.38"
"12/31/2021","Sell","ENPH","ENPHASE ENERGY INC","0.9476","$187.122","","$177.32"
"12/31/2021","Sell","ENPH","ENPHASE ENERGY INC","7","$187.122","$0.01","$1309.84"
"12/30/2021","Qualified Dividend","LDOS","LEIDOS HOLDINGS INC","","","","$7.79"
"12/30/2021","Qualified Dividend","HES","HESS CORP","","","","$7.35"
"12/30/2021","Qualified Dividend","AIG","AMERICAN INTL GROUP","","","","$11.67"
"12/30/2021","Qualified Dividend","TROW","T ROWE PRICE GROUP","","","","$11.01"
"12/30/2021","Qualified Dividend","DVN","DEVON ENERGY CORP","","","","$59.22"
"12/30/2021","Qualified Dividend","UNP","UNION PACIFIC CORP","","","","$10.46"
"12/30/2021","Non-Qualified Div","PSA","PUBLIC STORAGE REIT","","","","$13.41"
"12/30/2021","Special Qual Div","EOG","EOG RESOURCES INC","","","","$59.09"
"12/30/2021","Qualified Dividend","ALLE","ALLEGION PUBLIC LTD F","","","","$5.49"
"12/29/2021","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$32.93"
"12/28/2021","Qualified Dividend","NEM","NEWMONT CORP","","","","$20.31"
"12/28/2021 as of 12/27/2021","Qualified Dividend","WMB","WILLIAMS COMPANIES","","","","$28.73"
"12/28/2021","Qualified Dividend","CME","CME GROUP INC CLASS A","","","","$9.35"
"12/28/2021 as of 12/27/2021","Qualified Dividend","LMT","LOCKHEED MARTIN CORP","","","","$16.50"
"12/28/2021 as of 12/27/2021","Qualified Dividend","FIS","FIDELITY NATL INFO","","","","$7.40"
"12/28/2021","Qualified Dividend","NKE","NIKE INC CLASS B","","","","$4.10"
"12/27/2021 as of 12/24/2021","Qualified Dividend","AME","AMETEK INC","","","","$2.86"
"12/23/2021","Cash Dividend","KIM","KIMCO REALTY CORP REIT","","","","$16.05"
"12/22/2021","Cash Dividend","RE","EVEREST RE GROUP LTD F","","","","$12.43"
"12/22/2021","Special Qual Div","WRB","W R BERKLEY CORP","","","","$25.12"
"12/22/2021","Qualified Dividend","HAL","HALLIBURTON CO HLDG","","","","$4.57"
"12/22/2021","Qualified Dividend","JNPR","JUNIPER NETWORKS INC","","","","$14.52"
"12/22/2021","Qualified Dividend","WRB","W R BERKLEY CORP","","","","$3.27"
"12/21/2021","Qualified Dividend","SWK","STANLEY BLACK & DECK","","","","$8.89"
"12/21/2021","Qualified Dividend","XYL","XYLEM INC.","","","","$4.29"
"12/21/2021","Qualified Dividend","CTXS","CITRIX SYSTEMS INC","","","","$9.15"
"12/21/2021","Qualified Dividend","PFG","PRINCIPAL FINL","","","","$19.69"
"12/21/2021","Qualified Dividend","ANTM","ANTHEM INC","","","","$6.06"
"12/20/2021","Qualified Dividend","AIZ","ASSURANT INC","","","","$8.32"
"12/20/2021","Cash In Lieu","CP","CANADIAN PAC RAILWAY F","","","","$4.09"
"12/17/2021","Qualified Dividend","LIN","LINDE PLC F","","","","$7.01"
"12/17/2021","Qualified Dividend","SEE","SEALED AIR CORP","","","","$7.10"
"12/17/2021","Qualified Dividend","WM","WASTE MANAGEMENT INC","","","","$7.08"
"12/17/2021","Qualified Dividend","PVH","PVH CORP","","","","$0.72"
"12/17/2021","Qualified Dividend","NDAQ","NASDAQ INC","","","","$5.50"
"12/17/2021","Cash Dividend","WY","WEYERHAEUSER CO REIT","","","","$9.28"
"12/17/2021","Qualified Dividend","KHC","KRAFT HEINZ CO","","","","$21.88"
"12/17/2021","Qualified Dividend","AJG","ARTHUR J GALLAGHER&C","","","","$6.58"
"12/17/2021","Cash/Stock Merger","485170302","KANSAS CITY SOUTHERN XXXMANDATORY MERGER EFF: 12/14/21","","","","$657.13"
"12/17/2021","Cash/Stock Merger","CP","CANADIAN PAC RAILWAY F","21","","",""
"12/17/2021","Cash/Stock Merger","485170302","KANSAS CITY SOUTHERN XXXMANDATORY MERGER EFF: 12/14/21","-7.3014","","",""
"12/16/2021","Qualified Dividend","PRU","PRUDENTIAL FINL","","","","$21.82"
"12/16/2021","Qualified Dividend","RTX","RAYTHEON TECHNOLOGIES CO","","","","$11.62"
"12/16/2021","Qualified Dividend","OGN","ORGANON & CO","","","","$16.85"
"12/16/2021","Qualified Dividend","QCOM","QUALCOMM INC","","","","$10.68"
"12/16/2021","Qualified Dividend","MOS","THE MOSAIC CO","","","","$4.61"
"12/16/2021","Qualified Dividend","HD","HOME DEPOT INC","","","","$9.86"
"12/16/2021","Qualified Dividend","VTRS","VIATRIS INC","","","","$16.20"
"12/16/2021","Qualified Dividend","AMAT","APPLIED MATERIALS","","","","$3.21"
"12/16/2021","Cash Dividend","SBAC","S B A COMMUNICATIONS CLASS A","","","","$3.49"
"12/16/2021","Qualified Dividend","RMD","RESMED INC","","","","$3.23"
"12/16/2021 as of 12/15/2021","Bank Interest","","BANK INT 111621-121521 SCHWAB BANK","","","","$0.01"
"12/15/2021","Qualified Dividend","TSN","TYSON FOODS INC CLASS A","","","","$11.54"
"12/15/2021","Qualified Dividend","NEE","NEXTERA ENERGY INC","","","","$9.48"
"12/15/2021","Qualified Dividend","KEY","KEYCORP INC","","","","$19.53"
"12/15/2021","Qualified Dividend","WHR","WHIRLPOOL CORP","","","","$13.32"
"12/15/2021","Qualified Dividend","NOC","NORTHROP GRUMMAN CORP","","","","$8.85"
"12/15/2021","Non-Qualified Div","O","REALTY INCM CORP REIT","","","","$7.51"
"12/15/2021","Qualified Dividend","MGM","MGM RESORTS INTL","","","","$0.12"
"12/15/2021","Qualified Dividend","RHI","ROBERT HALF INTL","","","","$7.54"
"12/15/2021","Qualified Dividend","BWA","BORG WARNER INC","","","","$7.97"
"12/15/2021","Qualified Dividend","ODFL","OLD DOMINION FREIGHT","","","","$1.36"
"12/15/2021","Qualified Dividend","KO","THE COCA-COLA CO","","","","$15.50"
"12/15/2021","Qualified Dividend","MCD","MCDONALDS CORP","","","","$11.48"
"12/15/2021","Qualified Dividend","HSY","HERSHEY CO","","","","$10.29"
"12/15/2021","Qualified Dividend","CBOE","CBOE GLOBAL MKTS INC","","","","$7.73"
"12/14/2021","Qualified Dividend","UNH","UNITEDHEALTH GRP INC","","","","$6.78"
"12/14/2021","Qualified Dividend","ADI","ANALOG DEVICES INC","","","","$8.14"
"12/14/2021","Qualified Dividend","MET","METLIFE INC","","","","$16.35"
"12/14/2021","Special Qual Div","PXD","PIONEER NATURAL RES","","","","$35.49"
"12/13/2021 as of 12/12/2021","Qualified Dividend","MMM","3M CO","","","","$16.58"
"12/10/2021","Qualified Dividend","ROK","ROCKWELL AUTOMATION","","","","$7.59"
"12/10/2021","Qualified Dividend","MPC","MARATHON PETE CORP","","","","$19.52"
"12/10/2021","Qualified Dividend","MRO","MARATHON OIL CORP","","","","$9.57"
"12/10/2021","Qualified Dividend","CVX","CHEVRON CORP","","","","$27.73"
"12/10/2021","Qualified Dividend","AEP","AMER ELECTRIC PWR CO","","","","$18.60"
"12/10/2021","Qualified Dividend","LLY","LILLY ELI & CO","","","","$7.31"
"12/10/2021","Special Qual Div","ROL","ROLLINS INC","","","","$4.51"
"12/10/2021","Qualified Dividend","ROL","ROLLINS INC","","","","$5.64"
"12/10/2021","Qualified Dividend","YUM","YUM BRANDS INC","","","","$7.92"
"12/10/2021","Qualified Dividend","PPG","PPG INDUSTRIES INC","","","","$8.25"
"12/08/2021","Qualified Dividend","ADM","ARCHER DANIELS MIDLAND C","","","","$12.36"
"12/08/2021","Qualified Dividend","TSCO","TRACTOR SUPPLY COMP","","","","$5.25"
"12/08/2021","Qualified Dividend","UPS","UNITED PARCEL SRVC CLASS B","","","","$10.54"
"12/07/2021","Qualified Dividend","JNJ","JOHNSON & JOHNSON","","","","$12.93"
"12/07/2021","Qualified Dividend","PCAR","PACCAR INC","","","","$8.45"
"12/07/2021","Qualified Dividend","L","LOEWS CORP","","","","$2.40"
"12/06/2021","Qualified Dividend","LYB","LYONDELLBASELL INDS FCLASS A","","","","$25.19"
"12/03/2021","Qualified Dividend","PH","PARKER-HANNIFIN CORP","","","","$7.19"
"12/03/2021","Qualified Dividend","SHW","SHERWIN WILLIAMS CO","","","","$3.84"
"12/03/2021","Qualified Dividend","LHX","L3HARRIS TECHNOLOGIES IN","","","","$9.21"
"12/02/2021","Qualified Dividend","IVZ","INVESCO LTD F","","","","$13.70"
"12/02/2021","Qualified Dividend","VMC","VULCAN MATERIALS COM","","","","$4.11"
"12/02/2021","Qualified Dividend","LKQ","LKQ CORP","","","","$10.02"
"12/01/2021","Qualified Dividend","AFL","AFLAC INC","","","","$11.91"
"12/01/2021","Qualified Dividend","CAG","CONAGRA BRANDS INC","","","","$18.74"
"12/01/2021","Qualified Dividend","PSX","PHILLIPS 66","","","","$25.75"
"12/01/2021","Qualified Dividend","WFC","WELLS FARGO & CO","","","","$7.85"
"12/01/2021","Qualified Dividend","F","FORD MOTOR CO","","","","$15.58"
"12/01/2021","Qualified Dividend","SJM","J M SMUCKER CO","","","","$16.32"
"12/01/2021","Qualified Dividend","COP","CONOCOPHILLIPS","","","","$16.40"
"12/01/2021","Qualified Dividend","WEC","W E C ENERGY GROUP INC","","","","$14.83"
"12/01/2021","Buy","KLAC","KLA CORP","4.7027","$425.286","","-$1999.99"
"12/01/2021","Buy","GLW","CORNING INC","52.1294","$38.366","","-$2000.00"
"12/01/2021","Buy","KEYS","KEYSIGHT TECH INC","10.156","$196.926","","-$1999.98"
"12/01/2021","Buy","INTU","INTUIT INC","2.9787","$671.4287","","-$1999.98"
"12/01/2021","Buy","IPGP","IPG PHOTONICS CORP","11.8045","$169.426","","-$1999.99"
"12/01/2021","Buy","INTC","INTEL CORP","39.9376","$50.078","","-$2000.00"
"12/01/2021","Buy","HPQ","HP INC.","54.1012","$36.9677","","-$2000.00"
"12/01/2021","Buy","HPE","HEWLETT PACKARD ENTERPRI","140.994","$14.185","","-$2000.00"
"12/01/2021","Buy","GRMN","GARMIN LTD F","14.5465","$137.49","","-$2000.00"
"12/01/2021","Buy","FTV","FORTIVE CORP DISC 00500","26.48","$75.5285","","-$1999.99"
"12/01/2021","Buy","AMD","ADVANCED MICRO DEVIC","12.6395","$158.234","","-$2000.00"
"12/01/2021","Buy","CSCO","CISCO SYSTEMS INC","35.8757","$55.748","","-$2000.00"
"12/01/2021","Buy","FTNT","FORTINET INC","6.1312","$326.20","","-$2000.00"
"12/01/2021","Buy","ENPH","ENPHASE ENERGY INC","7.9476","$251.648","","-$2000.00"
"12/01/2021","Buy","DXC","D X C TECHNOLOGY CO 0050","64.4994","$31.008","","-$2000.00"
"12/01/2021","Buy","FIS","FIDELITY NATL INFO","18.9668","$105.447","","-$1999.99"
"12/01/2021","Buy","FISV","FISERV INC","20.4649","$97.728","","-$1999.99"
"12/01/2021","Buy","ANSS","ANSYS INC","5.0821","$393.536","","-$1999.99"
"12/01/2021","Buy","IBM","IBM CORP","16.9305","$118.13","","-$2000.00"
"12/01/2021","Buy","CDW","CDW CORP","10.3864","$192.558","","-$1999.98"
"12/01/2021","Buy","BR","BROADRIDGE FINL SOLU","11.6705","$171.372","","-$2000.00"
"12/01/2021","Buy","CDNS","CADENCE DESIGN SYS","11.0679","$180.7017","","-$1999.99"
"12/01/2021","Buy","CTXS","CITRIX SYSTEMS INC","24.7224","$80.898","","-$1999.99"
"12/01/2021","Sell","AIZ","ASSURANT INC","0.2414","$154.95","","$37.40"
"12/01/2021","Sell","AIZ","ASSURANT INC","12","$154.95","$0.01","$1859.39"
"12/01/2021","Sell","LHX","L3HARRIS TECHNOLOGIES IN","0.0305","$209.90","","$6.40"
"12/01/2021","Sell","LHX","L3HARRIS TECHNOLOGIES IN","9","$209.90","$0.01","$1889.09"
"12/01/2021","Sell","ROL","ROLLINS INC","0.357","$33.5804","","$11.99"
"12/01/2021","Sell","ROL","ROLLINS INC","56","$33.5804","$0.01","$1880.49"
"12/01/2021","Sell","XYL","XYLEM INC.","0.3284","$122.96","","$40.38"
"12/01/2021","Sell","XYL","XYLEM INC.","15","$122.96","$0.01","$1844.39"
"12/01/2021","Sell","MA","MASTERCARD INC CLASS A","0.9041","$318.0158","","$287.52"
"12/01/2021","Sell","MA","MASTERCARD INC CLASS A","5","$318.0158","$0.01","$1590.07"
"12/01/2021","Sell","SLB","SCHLUMBERGER LTD F","0.8202","$29.4001","","$24.11"
"12/01/2021","Sell","SLB","SCHLUMBERGER LTD F","63","$29.4001","$0.01","$1852.20"
"12/01/2021","Sell","WMT","WALMART INC","0.3384","$140.3926","","$47.51"
"12/01/2021","Sell","WMT","WALMART INC","13","$140.3926","$0.01","$1825.09"
"12/01/2021","Sell","BKNG","BOOKING HOLDINGS INC","0.8607","$2177.49","$0.01","$1874.16"
"12/01/2021","Sell","BA","BOEING CO","0.3641","$199.9401","","$72.80"
"12/01/2021","Sell","BA","BOEING CO","9","$199.9401","$0.01","$1799.45"
"12/01/2021","Sell","IVZ","INVESCO LTD F","0.5866","$23.231","","$13.63"
"12/01/2021","Sell","IVZ","INVESCO LTD F","80","$23.231","$0.01","$1858.47"
"12/01/2021","Sell","USB","U S BANCORP","0.8507","$56.665","","$48.20"
"12/01/2021","Sell","USB","U S BANCORP","32","$56.665","$0.01","$1813.27"
"12/01/2021","Sell","HSIC","SCHEIN HENRY INC","0.9963","$71.4435","","$71.18"
"12/01/2021","Sell","HSIC","SCHEIN HENRY INC","25","$71.4435","$0.01","$1786.08"
"12/01/2021","Sell","PTC","PTC INC","0.617","$111.85","","$69.01"
"12/01/2021","Sell","PTC","PTC INC","16","$111.85","$0.01","$1789.59"
"12/01/2021","Sell","RTX","RAYTHEON TECHNOLOGIES CO","0.7811","$81.475","","$63.64"
"12/01/2021","Sell","RTX","RAYTHEON TECHNOLOGIES CO","22","$81.475","$0.01","$1792.44"
"12/01/2021","Sell","KHC","KRAFT HEINZ CO","0.7075","$33.8751","","$23.97"
"12/01/2021","Sell","KHC","KRAFT HEINZ CO","54","$33.8751","$0.01","$1829.25"
"12/01/2021","Sell","SYK","STRYKER CORP","0.57","$243.67","","$138.89"
"12/01/2021","Sell","SYK","STRYKER CORP","7","$243.67","$0.01","$1705.68"
"12/01/2021","Sell","VTRS","VIATRIS INC","0.3034","$12.451","","$3.78"
"12/01/2021","Sell","VTRS","VIATRIS INC","147","$12.451","$0.01","$1830.29"
"12/01/2021","Sell","DAL","DELTA AIR LINES INC DEL","0.8628","$36.726","","$31.69"
"12/01/2021","Sell","DAL","DELTA AIR LINES INC DEL","49","$36.726","$0.01","$1799.56"
"12/01/2021","Sell","ADSK","AUTODESK INC","0.958","$262.52","","$251.49"
"12/01/2021","Sell","ADSK","AUTODESK INC","6","$262.52","$0.01","$1575.11"
"12/01/2021","Sell","ALGN","ALIGN TECHNOLOGY INC","0.9535","$614.445","","$585.87"
"12/01/2021","Sell","ALGN","ALIGN TECHNOLOGY INC","2","$614.445","$0.01","$1228.88"
"12/01/2021","Sell","WYNN","WYNN RESORTS","0.8756","$82.7465","","$72.45"
"12/01/2021","Sell","WYNN","WYNN RESORTS","21","$82.7465","$0.01","$1737.67"
"12/01/2021","Sell","NOV","NOV INC","0.5143","$12.2046","","$6.28"
"12/01/2021","Sell","NOV","NOV INC","147","$12.2046","$0.01","$1794.07"
"12/01/2021","Sell","OGN","ORGANON & CO","0.1648","$29.765","","$4.91"
"12/01/2021","Sell","OGN","ORGANON & CO","60","$29.765","$0.01","$1785.89"
"12/01/2021","Sell","PAYC","PAYCOM SOFTWARE INC","0.0087","$442.115","","$3.85"
"12/01/2021","Sell","PAYC","PAYCOM SOFTWARE INC","4","$442.115","$0.01","$1768.45"
"12/01/2021","Sell","ABMD","ABIOMED INC","0.5616","$319.7957","","$179.60"
"12/01/2021","Sell","ABMD","ABIOMED INC","5","$319.7957","$0.01","$1598.97"
"11/30/2021","Qualified Dividend","CTSH","COGNIZANT TECH SOLU CLASS A","","","","$6.22"
"11/30/2021","Qualified Dividend","CF","CF INDUSTRIES HLDG","","","","$13.21"
"11/29/2021","Qualified Dividend","WAB","WABTEC","","","","$2.58"
"11/29/2021","Qualified Dividend","PAYX","PAYCHEX INC","","","","$11.66"
"11/29/2021","Qualified Dividend","MAS","MASCO CORP","","","","$8.37"
"11/26/2021","Qualified Dividend","SCHW","CHARLES SCHWAB CORP","","","","$4.84"
"11/26/2021","Qualified Dividend","SBUX","STARBUCKS CORP","","","","$8.85"
"11/24/2021","Qualified Dividend","CTRA","COTERRA ENERGY INC","","","","$13.63"
"11/24/2021","Special Qual Div","CTRA","COTERRA ENERGY INC","","","","$19.09"
"11/24/2021","Qualified Dividend","POOL","POOL CORP","","","","$3.72"
"11/24/2021","Qualified Dividend","C","CITIGROUP INC","","","","$14.49"
"11/23/2021","Qualified Dividend","WRK","WESTROCK CO","","","","$10.56"
"11/22/2021","Qualified Dividend","APA","APA CORP","","","","$6.66"
"11/22/2021 as of 11/17/2021","Cash In Lieu","ANET","ARISTA NETWORKS INC","","","","$81.72"
"11/19/2021","Qualified Dividend","NI","NISOURCE INC 00500","","","","$18.29"
"11/19/2021","Qualified Dividend","NSC","NORFOLK SOUTHERN CO","","","","$8.90"
"11/19/2021","Qualified Dividend","UNM","UNUM GROUP","","","","$21.56"
"11/19/2021","Non-Qualified Div","PEAK","HEALTHPEAK PPTYS INC REIT","","","","$17.79"
"11/19/2021","Qualified Dividend","AMP","AMERIPRISE FINL","","","","$7.40"
"11/18/2021","Qualified Dividend","ZION","ZIONS BANCORP N A","","","","$11.83"
"11/18/2021","Qualified Dividend","FANG","DIAMONDBACK ENERGY","","","","$13.13"
"11/18/2021 as of 11/17/2021","Stock Split","ANET","ARISTA NETWORKS INC","16","$132.08","",""
"11/17/2021","Qualified Dividend","WST","WEST PHARM SRVC INC","","","","$0.84"
"11/16/2021 as of 11/12/2021","Cash In Lieu","ONL","ORION OFFICE REIT INC","","","","$1.14"
"11/16/2021 as of 11/15/2021","Bank Interest","","BANK INT 101621-111521 SCHWAB BANK","","","","$0.01"
"11/15/2021","Qualified Dividend","OKE","ONEOK INC","","","","$31.96"
"11/15/2021","Qualified Dividend","HRL","HORMEL FOODS CORP","","","","$11.63"
"11/15/2021","Qualified Dividend","ABBV","ABBVIE INC","","","","$24.18"
"11/15/2021","Non-Qualified Div","O","REALTY INCM CORP REIT","","","","$7.21"
"11/15/2021","Qualified Dividend","XLNX","XILINX INC","","","","$4.13"
"11/15/2021","Qualified Dividend","KMI","KINDER MORGAN INC","","","","$34.23"
"11/15/2021","Qualified Dividend","MMC","MARSH & MC LENNAN CO","","","","$6.88"
"11/15/2021","Qualified Dividend","PG","PROCTER & GAMBLE","","","","$12.33"
"11/15/2021","Qualified Dividend","TXN","TEXAS INSTRUMENTS","","","","$11.96"
"11/15/2021 as of 11/12/2021","Spin-off","ONL","ORION OFFICE REIT INC","3","","",""
"11/12/2021","Qualified Dividend","FRC","FIRST REPUBLIC BANK","","","","$2.21"
"11/12/2021","Qualified Dividend","CFG","CITIZENS FINL GROUP INC","","","","$18.02"
"11/12/2021","Qualified Dividend","BKR","BAKER HUGHES CO. CLASS A","","","","$15.28"
"11/11/2021","Qualified Dividend","AAPL","APPLE INC","","","","$2.91"
"11/10/2021","Qualified Dividend","AXP","AMERICAN EXPRESS CO","","","","$5.37"
"11/10/2021","Qualified Dividend","NUE","NUCOR CORP","","","","$7.91"
"11/09/2021","Qualified Dividend","MA","MASTERCARD INC CLASS A","","","","$2.60"
"11/08/2021","Qualified Dividend","APD","AIR PROD & CHEMICALS","","","","$11.19"
"11/05/2021","Qualified Dividend","PNR","PENTAIR PLC F","","","","$5.49"
"11/05/2021","Qualified Dividend","PNC","PNC FINL SERVICES","","","","$12.67"
"11/04/2021","Buy","AMAT","APPLIED MATERIALS","13.3786","$149.492","","-$1999.99"
"11/04/2021","Buy","AMP","AMERIPRISE FINL","6.5469","$305.4871","","-$1999.99"
"11/04/2021","Buy","ALGN","ALIGN TECHNOLOGY INC","2.9535","$677.154","","-$1999.97"
"11/04/2021","Buy","ALLE","ALLEGION PUBLIC LTD F","15.252","$131.13","","-$1999.99"
"11/04/2021","Buy","AME","AMETEK INC","14.301","$139.85","","-$1999.99"
"11/04/2021","Buy","AKAM","AKAMAI TECHNOLOGIES INC","18.2593","$109.5331","","-$2000.00"
"11/04/2021","Buy","ALB","ALBEMARLE CORP","7.2982","$274.04","","-$2000.00"
"11/04/2021","Buy","AEP","AMER ELECTRIC PWR CO","23.8509","$83.854","","-$1999.99"
"11/04/2021","Buy","AIZ","ASSURANT INC","12.2414","$163.3793","","-$1999.99"
"11/04/2021","Buy","AFL","AFLAC INC","36.0958","$55.408","","-$2000.00"
"11/04/2021","Buy","AES","AES CORP","79.3713","$25.198","","-$2000.00"
"11/04/2021","Buy","ZION","ZIONS BANCORP N A","31.1303","$64.246","","-$2000.00"
"11/04/2021","Buy","AEE","AMEREN CORP","23.6286","$84.6431","","-$2000.00"
"11/04/2021","Buy","ABT","ABBOTT LABORATORIES","15.5539","$128.585","","-$2000.00"
"11/04/2021","Buy","ADBE","ADOBE INC","2.9688","$673.67","","-$1999.99"
"11/04/2021","Buy","ACN","ACCENTURE PLC FCLASS A","5.4547","$366.65","","-$1999.97"
"11/04/2021","Buy","ABMD","ABIOMED INC","5.5616","$359.6058","","-$1999.98"
"11/04/2021","Buy","ZTS","ZOETIS INC CLASS A","9.3033","$214.976","","-$1999.99"
"11/04/2021","Buy","AAPL","APPLE INC","13.2056","$151.45","","-$1999.99"
"11/04/2021","Buy","A","AGILENT TECHNOLOGIES","12.7395","$156.992","","-$2000.00"
"11/04/2021","Sell","CAG","CONAGRA BRANDS INC","0.9556","$32.665","","$31.21"
"11/04/2021","Sell","CAG","CONAGRA BRANDS INC","59","$32.665","$0.01","$1927.23"
"11/04/2021","Sell","PM","PHILIP MORRIS INTL","0.865","$93.50","","$80.88"
"11/04/2021","Sell","PM","PHILIP MORRIS INTL","20","$93.50","$0.01","$1869.99"
"11/04/2021","Sell","VZ","VERIZON COMMUNICATN","0.686","$51.6425","","$35.43"
"11/04/2021","Sell","VZ","VERIZON COMMUNICATN","37","$51.6425","$0.01","$1910.76"
"11/04/2021","Sell","NLOK","NORTONLIFELOCK INC","0.7061","$24.995","","$17.65"
"11/04/2021","Sell","NLOK","NORTONLIFELOCK INC","77","$24.995","$0.01","$1924.61"
"11/04/2021","Sell","XOM","EXXON MOBIL CORP","0.3638","$63.935","","$23.26"
"11/04/2021","Sell","XOM","EXXON MOBIL CORP","30","$63.935","$0.01","$1918.04"
"11/04/2021","Sell","COF","CAPITAL ONE FC","0.7024","$152.5881","","$107.18"
"11/04/2021","Sell","COF","CAPITAL ONE FC","12","$152.5881","$0.01","$1831.05"
"11/04/2021","Sell","IPG","INTERPUBLIC GRP COS","0.5851","$35.47","","$20.75"
"11/04/2021","Sell","IPG","INTERPUBLIC GRP COS","54","$35.47","$0.01","$1915.37"
"11/04/2021","Sell","MHK","MOHAWK INDUSTRIES","0.0381","$174.5901","","$6.65"
"11/04/2021","Sell","MHK","MOHAWK INDUSTRIES","11","$174.5901","$0.01","$1920.48"
"11/04/2021","Sell","CZR","CAESARS ENTMT INC NEW","0.9498","$101.3951","","$96.31"
"11/04/2021","Sell","CZR","CAESARS ENTMT INC NEW","18","$101.3951","$0.01","$1825.10"
"11/04/2021","Sell","WU","WESTERN UNION CO","0.4229","$17.8746","","$7.56"
"11/04/2021","Sell","WU","WESTERN UNION CO","107","$17.8746","$0.01","$1912.57"
"11/04/2021","Sell","HII","HUNTINGTON INGALLS","0.0095","$190.717","","$1.81"
"11/04/2021","Sell","HII","HUNTINGTON INGALLS","10","$190.717","$0.01","$1907.16"
"11/04/2021","Sell","LEG","LEGGETT & PLATT INC","0.9463","$43.3833","","$41.05"
"11/04/2021","Sell","LEG","LEGGETT & PLATT INC","43","$43.3833","$0.01","$1865.47"
"11/04/2021","Sell","ZBH","ZIMMER BIOMET HLDGS","0.7831","$138.065","","$108.12"
"11/04/2021","Sell","ZBH","ZIMMER BIOMET HLDGS","13","$138.065","$0.01","$1794.84"
"11/04/2021","Sell","VLO","VALERO ENERGY CORP","0.2247","$75.4101","","$16.94"
"11/04/2021","Sell","VLO","VALERO ENERGY CORP","25","$75.4101","$0.01","$1885.24"
"11/04/2021","Sell","C","CITIGROUP INC","0.4058","$66.6439","","$27.04"
"11/04/2021","Sell","C","CITIGROUP INC","28","$66.6439","$0.01","$1866.02"
"11/04/2021","Sell","JKHY","HENRY JACK & ASSOC","0.8975","$159.0976","","$142.79"
"11/04/2021","Sell","JKHY","HENRY JACK & ASSOC","11","$159.0976","$0.01","$1750.06"
"11/04/2021","Sell","XRAY","DENTSPLY SIRONA INC","0.4376","$54.8836","","$24.02"
"11/04/2021","Sell","XRAY","DENTSPLY SIRONA INC","34","$54.8836","$0.01","$1866.03"
"11/04/2021","Sell","WAT","WATERS CORP","0.4833","$343.852","","$166.18"
"11/04/2021","Sell","WAT","WATERS CORP","5","$343.852","$0.01","$1719.25"
"11/04/2021","Sell","QRVO","QORVO INC","0.8655","$153.13","","$132.53"
"11/04/2021","Sell","QRVO","QORVO INC","11","$153.13","$0.01","$1684.42"
"11/04/2021","Sell","DISH","DISH NETWORK CORP CLASS A","0.2214","$36.9736","","$8.19"
"11/04/2021","Sell","DISH","DISH NETWORK CORP CLASS A","46","$36.9736","$0.01","$1700.78"
"11/04/2021","Sell","PENN","PENN NTNL GAMING","0.5753","$57.9815","","$33.36"
"11/04/2021","Sell","PENN","PENN NTNL GAMING","27","$57.9815","$0.01","$1565.49"
"11/03/2021","Qualified Dividend","LOW","LOWES COMPANIES INC","","","","$7.80"
"11/01/2021","Qualified Dividend","CVS","CVS HEALTH CORP","","","","$11.85"
"11/01/2021","Qualified Dividend","CPB","CAMPBELL SOUP CO","","","","$17.18"
"11/01/2021 as of 10/31/2021","Qualified Dividend","JPM","JPMORGAN CHASE & CO","","","","$12.97"
"11/01/2021 as of 10/31/2021","Qualified Dividend","EIX","EDISON INTERNTNL","","","","$22.76"
"11/01/2021","Qualified Dividend","LNC","LINCOLN NTNL CO","","","","$13.25"
"11/01/2021","Qualified Dividend","GIS","GENERAL MILLS INC","","","","$17.47"
"11/01/2021","Qualified Dividend","DRI","DARDEN RESTAURANTS","","","","$14.66"
"11/01/2021","Buy","WRB","W R BERKLEY CORP","25.1193","$79.62","","-$2000.00"
"11/01/2021","Buy","ZBRA","ZEBRA TECHNOLOGIES CLASS A","3.7319","$535.914","","-$1999.98"
"11/01/2021","Buy","ZBH","ZIMMER BIOMET HLDGS","13.7831","$145.1048","","-$1999.99"
"11/01/2021","Buy","YUM","YUM BRANDS INC","15.8318","$126.328","","-$2000.00"
"11/01/2021","Buy","XYL","XYLEM INC.","15.3284","$130.476","","-$1999.99"
"11/01/2021","Buy","XRAY","DENTSPLY SIRONA INC","34.4376","$58.076","","-$2000.00"
"11/01/2021","Buy","XOM","EXXON MOBIL CORP","30.3638","$65.8677","","-$1999.99"
"11/01/2021","Buy","XLNX","XILINX INC","11.1528","$179.326","","-$1999.99"
"11/01/2021","Buy","WY","WEYERHAEUSER CO REIT","54.606","$36.626","","-$2000.00"
"11/01/2021","Buy","XEL","XCEL ENERGY INC MINN","31.1451","$64.2154","","-$2000.00"
"11/01/2021","Buy","WYNN","WYNN RESORTS","21.8756","$91.426","","-$2000.00"
"11/01/2021","Buy","WRK","WESTROCK CO","42.2582","$47.328","","-$2000.00"
"11/01/2021","Buy","WST","WEST PHARM SRVC INC","4.6844","$426.9442","","-$1999.98"
"11/01/2021","Buy","WU","WESTERN UNION CO","107.4229","$18.618","","-$2000.00"
"11/01/2021","Buy","WMT","WALMART INC","13.3384","$149.942","","-$1999.99"
"11/01/2021","Sell","VNO","VORNADO REALTY TRUST REIT","0.7279","$43.225","","$31.46"
"11/01/2021","Sell","VNO","VORNADO REALTY TRUST REIT","44","$43.225","$0.01","$1901.89"
"11/01/2021","Sell","WELL","WELLTOWER INC REIT","0.9934","$80.615","","$80.08"
"11/01/2021","Sell","WELL","WELLTOWER INC REIT","17","$80.615","$0.01","$1370.45"
"11/01/2021","Sell","WELL","WELLTOWER INC REIT","6","$80.615","","$483.69"
"11/01/2021","Sell","VTR","VENTAS INC REIT","0.9091","$53.6377","","$48.76"
"11/01/2021","Sell","VTR","VENTAS INC REIT","35","$53.6377","$0.01","$1877.31"
"11/01/2021","Sell","TDG","TRANSDIGM GROUP INC","0.078","$624.01","","$48.67"
"11/01/2021","Sell","TDG","TRANSDIGM GROUP INC","3","$624.01","$0.01","$1872.02"
"11/01/2021","Sell","OTIS","OTIS WORLDWIDE CORP","0.9611","$80.245","","$77.12"
"11/01/2021","Sell","OTIS","OTIS WORLDWIDE CORP","23","$80.245","$0.01","$1845.63"
"11/01/2021","Sell","UHS","UNIVERSAL HLTH SVCS CLASS B","0.2935","$125.425","","$36.81"
"11/01/2021","Sell","UHS","UNIVERSAL HLTH SVCS CLASS B","15","$125.425","$0.01","$1881.37"
"11/01/2021","Sell","WBA","WALGREENS BOOTS ALLI","0.4059","$47.3719","","$19.23"
"11/01/2021","Sell","WBA","WALGREENS BOOTS ALLI","40","$47.3719","$0.01","$1894.87"
"11/01/2021","Sell","WLTW","WILLIS TOWERS WATSON P F","0.0468","$237.802","","$11.13"
"11/01/2021","Sell","WLTW","WILLIS TOWERS WATSON P F","8","$237.802","$0.01","$1902.41"
"11/01/2021","Sell","NWS","NEWS CORP NEW CLASS B","0.9771","$22.7718","","$22.25"
"11/01/2021","Sell","NWS","NEWS CORP NEW CLASS B","83","$22.7718","$0.01","$1890.05"
"11/01/2021","Sell","SNA","SNAP ON INC","0.3682","$203.83","","$75.05"
"11/01/2021","Sell","SNA","SNAP ON INC","9","$203.83","$0.01","$1834.46"
"11/01/2021","Sell","FLT","FLEETCOR TECHNOLOGIE","0.5908","$249.6873","","$147.52"
"11/01/2021","Sell","FLT","FLEETCOR TECHNOLOGIE","7","$249.6873","$0.01","$1747.80"
"11/01/2021","Sell","DFS","DISCOVER FINL S","0.4133","$114.7419","","$47.42"
"11/01/2021","Sell","DFS","DISCOVER FINL S","16","$114.7419","$0.01","$1835.86"
"11/01/2021","Sell","WDC","WESTERN DIGITAL CORP","0.6296","$53.7329","","$33.83"
"11/01/2021","Sell","WDC","WESTERN DIGITAL CORP","34","$53.7329","$0.01","$1826.91"
"11/01/2021","Sell","UNM","UNUM GROUP","0.8822","$25.8804","","$22.83"
"11/01/2021","Sell","UNM","UNUM GROUP","71","$25.8804","$0.01","$1837.50"
"11/01/2021","Sell","V","VISA INC CLASS A","0.6122","$213.88","","$130.94"
"11/01/2021","Sell","V","VISA INC CLASS A","8","$213.88","$0.01","$1711.03"
"11/01/2021","Sell","TWTR","TWITTER INC","0.6267","$54.6792","","$34.27"
"11/01/2021","Sell","TWTR","TWITTER INC","31","$54.6792","$0.01","$1695.05"
"10/29/2021","Qualified Dividend","EOG","EOG RESOURCES INC","","","","$12.19"
"10/29/2021","Cash Dividend","MAA","MID AMERICA APARTMENT COREIT","","","","$10.84"
"10/29/2021","Cash Dividend","BXP","BOSTON PROPERTIES REIT","","","","$17.48"
"10/29/2021","Qualified Dividend","HUM","HUMANA INC","","","","$3.44"
"10/27/2021","Qualified Dividend","NTAP","NETAPP INC","","","","$10.74"
"10/26/2021","Qualified Dividend","ORCL","ORACLE CORP","","","","$6.95"
"10/22/2021","Special Qual Div","CTRA","COTERRA ENERGY INC","","","","$54.53"
"10/22/2021","Buy","WHR","WHIRLPOOL CORP","9.5174","$210.14","","-$1999.99"
"10/22/2021","Buy","WMB","WILLIAMS COMPANIES","70.0827","$28.5377","","-$2000.00"
"10/22/2021","Buy","WLTW","WILLIS TOWERS WATSON P F","8.0468","$248.544","","-$1999.98"
"10/22/2021","Buy","WM","WASTE MANAGEMENT INC","12.3066","$162.514","","-$1999.99"
"10/22/2021","Buy","WAT","WATERS CORP","5.4833","$364.7391","","-$1999.97"
"10/22/2021","Buy","VZ","VERIZON COMMUNICATN","37.686","$53.07","","-$2000.00"
"10/22/2021","Buy","WDC","WESTERN DIGITAL CORP","34.6296","$57.754","","-$2000.00"
"10/22/2021","Buy","WFC","WELLS FARGO & CO","39.2405","$50.9677","","-$2000.00"
"10/22/2021","Buy","WELL","WELLTOWER INC REIT","23.9934","$83.356","","-$1999.99"
"10/22/2021","Buy","WAB","WABTEC","21.4887","$93.072","","-$2000.00"
"10/22/2021","Buy","WEC","W E C ENERGY GROUP INC","21.888","$91.374","","-$1999.99"
"10/22/2021","Buy","WBA","WALGREENS BOOTS ALLI","40.4059","$49.4977","","-$2000.00"
"10/22/2021","Sell","NLSN","NIELSEN HOLDINGS PLC F","0.4116","$19.76","","$8.13"
"10/22/2021","Sell","NLSN","NIELSEN HOLDINGS PLC F","100","$19.76","$0.01","$1975.99"
"10/22/2021","Sell","NVR","N V R INC","0.4033","$4904.20","$0.01","$1977.85"
"10/22/2021","Sell","LUV","SOUTHWEST AIRLINES","0.8847","$48.01","","$42.47"
"10/22/2021","Sell","LUV","SOUTHWEST AIRLINES","40","$48.01","$0.01","$1920.39"
"10/22/2021","Sell","TMUS","T-MOBILE US INC","0.7202","$116.84","","$84.15"
"10/22/2021","Sell","TMUS","T-MOBILE US INC","16","$116.84","$0.01","$1869.43"
"10/22/2021","Sell","VFC","VF CORP","0.4378","$71.06","","$31.11"
"10/22/2021","Sell","VFC","VF CORP","27","$71.06","$0.01","$1918.61"
"10/22/2021","Sell","VIAC","VIACOMCBS INC CLASS B","0.3355","$37.54","","$12.59"
"10/22/2021","Sell","VIAC","VIACOMCBS INC CLASS B","51","$37.54","$0.01","$1914.53"
"10/22/2021","Sell","DRI","DARDEN RESTAURANTS","0.3275","$144.53","","$47.33"
"10/22/2021","Sell","DRI","DARDEN RESTAURANTS","13","$144.53","$0.01","$1878.88"
"10/22/2021","Sell","OMC","OMNICOM GROUP INC","0.5322","$72.3931","","$38.53"
"10/22/2021","Sell","OMC","OMNICOM GROUP INC","26","$72.3931","$0.01","$1882.21"
"10/22/2021","Sell","ALK","ALASKA AIR GROUP INC","0.4024","$54.71","","$22.02"
"10/22/2021","Sell","ALK","ALASKA AIR GROUP INC","34","$54.71","$0.01","$1860.13"
"10/22/2021","Sell","PYPL","PAYPAL HOLDINGS INCORPOR","0.6556","$244.26","","$160.14"
"10/22/2021","Sell","PYPL","PAYPAL HOLDINGS INCORPOR","7","$244.26","$0.01","$1709.81"
"10/22/2021","Sell","IBM","IBM CORP","0.4812","$129.14","","$62.14"
"10/22/2021","Sell","IBM","IBM CORP","14","$129.14","$0.01","$1807.95"
"10/22/2021","Sell","INTC","INTEL CORP","0.6851","$50.0799","","$34.31"
"10/22/2021","Sell","INTC","INTEL CORP","27","$50.0799","$0.01","$1352.15"
"10/22/2021","Sell","INTC","INTEL CORP","9","$50.0799","","$450.72"
"10/19/2021","Qualified Dividend","DG","DOLLAR GENERAL CORP","","","","$3.83"
"10/19/2021","Buy","VTR","VENTAS INC REIT","33.7897","$55.7077","","-$1882.35"
"10/19/2021","Buy","USB","U S BANCORP","30.9159","$60.886","","-$1882.35"
"10/19/2021","Buy","VTRS","VIATRIS INC","138.6323","$13.578","","-$1882.35"
"10/19/2021","Buy","VNO","VORNADO REALTY TRUST REIT","42.0994","$44.712","","-$1882.35"
"10/19/2021","Buy","VRSN","VERISIGN INC","8.7937","$214.0555","","-$1882.34"
"10/19/2021","Buy","VRSK","VERISK ANALYTICS INC CLASS A","8.9439","$210.46","","-$1882.33"
"10/19/2021","Buy","VRTX","VERTEX PHARMACEUTICA","10.2326","$183.956","","-$1882.35"
"10/19/2021","Buy","VMC","VULCAN MATERIALS COM","10.4636","$179.894","","-$1882.34"
"10/19/2021","Buy","VLO","VALERO ENERGY CORP","23.731","$79.32","","-$1882.34"
"10/19/2021","Buy","VIAC","VIACOMCBS INC CLASS B","48.3149","$38.96","","-$1882.35"
"10/19/2021","Buy","UNP","UNION PACIFIC CORP","8.3444","$225.58","","-$1882.33"
"10/19/2021","Buy","V","VISA INC CLASS A","8.1037","$232.28","","-$1882.33"
"10/19/2021","Buy","UNH","UNITEDHEALTH GRP INC","4.4021","$427.606","","-$1882.36"
"10/19/2021","Buy","UNM","UNUM GROUP","67.6423","$27.828","","-$1882.35"
"10/19/2021","Buy","UPS","UNITED PARCEL SRVC CLASS B","9.725","$193.5562","","-$1882.33"
"10/19/2021","Buy","VFC","VF CORP","25.8238","$72.892","","-$1882.35"
"10/19/2021","Buy","URI","UNITED RENTALS INC","5.3392","$352.552","","-$1882.35"
"10/19/2021","Buy","VTR","VENTAS INC REIT","2.1194","$55.5108","","-$117.65"
"10/19/2021","Buy","VTRS","VIATRIS INC","8.6711","$13.568","","-$117.65"
"10/19/2021","Buy","VRTX","VERTEX PHARMACEUTICA","0.642","$183.254","","-$117.65"
"10/19/2021","Buy","VRSN","VERISIGN INC","0.5503","$213.7602","","-$117.63"
"10/19/2021","Buy","VRSK","VERISK ANALYTICS INC CLASS A","0.5594","$210.302","","-$117.64"
"10/19/2021","Buy","VNO","VORNADO REALTY TRUST REIT","2.6285","$44.758","","-$117.65"
"10/19/2021","Buy","VLO","VALERO ENERGY CORP","1.4937","$78.76","","-$117.64"
"10/19/2021","Buy","VMC","VULCAN MATERIALS COM","0.654","$179.8771","","-$117.64"
"10/19/2021","Buy","VIAC","VIACOMCBS INC CLASS B","3.0206","$38.948","","-$117.65"
"10/19/2021","Buy","UPS","UNITED PARCEL SRVC CLASS B","0.6077","$193.592","","-$117.65"
"10/19/2021","Buy","UNH","UNITEDHEALTH GRP INC","0.2757","$426.4378","","-$117.57"
"10/19/2021","Buy","VFC","VF CORP","1.614","$72.892","","-$117.65"
"10/19/2021","Buy","UNM","UNUM GROUP","4.2399","$27.748","","-$117.65"
"10/19/2021","Buy","V","VISA INC CLASS A","0.5085","$231.3239","","-$117.63"
"10/19/2021","Buy","URI","UNITED RENTALS INC","0.334","$352.218","","-$117.64"
"10/19/2021","Buy","USB","U S BANCORP","1.9348","$60.806","","-$117.65"
"10/19/2021","Buy","UNP","UNION PACIFIC CORP","0.5207","$225.934","","-$117.64"
"10/19/2021","Sell","AAL","AMERICAN AIRLS GROUP","0.5619","$19.735","","$11.09"
"10/19/2021","Sell","AAL","AMERICAN AIRLS GROUP","99","$19.735","$0.01","$1953.76"
"10/19/2021","Sell","CCL","CARNIVAL CORP F","0.2154","$22.7723","","$4.91"
"10/19/2021","Sell","CCL","CARNIVAL CORP F","86","$22.7723","$0.01","$1958.41"
"10/19/2021","Sell","TPR","TAPESTRY INC","0.8001","$38.5808","","$30.87"
"10/19/2021","Sell","TPR","TAPESTRY INC","50","$38.5808","$0.01","$1929.03"
"10/19/2021","Sell","PBCT","PEOPLES UNITED FINL","0.6196","$17.5803","","$10.89"
"10/19/2021","Sell","PBCT","PEOPLES UNITED FINL","111","$17.5803","$0.01","$1951.40"
"10/19/2021","Sell","PWR","QUANTA SERVICES INC","0.484","$112.075","","$54.24"
"10/19/2021","Sell","PWR","QUANTA SERVICES INC","17","$112.075","$0.01","$1905.27"
"10/19/2021","Sell","DXC","D X C TECHNOLOGY CO 0050","0.9875","$34.33","","$33.90"
"10/19/2021","Sell","DXC","D X C TECHNOLOGY CO 0050","56","$34.33","$0.01","$1922.47"
"10/19/2021","Sell","AMCR","AMCOR PLC F","0.0958","$11.9031","","$1.14"
"10/19/2021","Sell","AMCR","AMCOR PLC F","164","$11.9031","$0.01","$1952.10"
"10/19/2021","Sell","ED","CONSOLIDATED EDISON","0.6887","$72.94","","$50.23"
"10/19/2021","Sell","ED","CONSOLIDATED EDISON","26","$72.94","$0.01","$1896.43"
"10/19/2021","Sell","NTAP","NETAPP INC","0.4799","$90.6515","","$43.50"
"10/19/2021","Sell","NTAP","NETAPP INC","21","$90.6515","$0.01","$1903.67"
"10/19/2021","Sell","CHD","CHURCH & DWIGHT CO","0.8441","$81.585","","$68.87"
"10/19/2021","Sell","CHD","CHURCH & DWIGHT CO","23","$81.585","$0.01","$1876.45"
"10/19/2021","Sell","REGN","REGENERON PHARMS INC","0.5259","$549.6409","","$289.06"
"10/19/2021","Sell","REGN","REGENERON PHARMS INC","3","$549.6409","$0.01","$1648.91"
"10/19/2021","Sell","K","KELLOGG CO","0.4554","$61.3804","","$27.95"
"10/19/2021","Sell","K","KELLOGG CO","31","$61.3804","$0.01","$1902.78"
"10/19/2021","Sell","UAL","UNITED AIRLINES HLDGS","0.3496","$46.6509","","$16.31"
"10/19/2021","Sell","UAL","UNITED AIRLINES HLDGS","41","$46.6509","$0.01","$1912.68"
"10/19/2021","Sell","NRG","NRG ENERGY INC","0.5239","$40.545","","$21.24"
"10/19/2021","Sell","NRG","NRG ENERGY INC","47","$40.545","$0.01","$1905.61"
"10/19/2021","Sell","HWM","HOWMET AEROSPACE INC","0.9168","$30.624","","$28.08"
"10/19/2021","Sell","HWM","HOWMET AEROSPACE INC","62","$30.624","$0.01","$1898.68"
"10/19/2021","Sell","KMB","KIMBERLY CLARK CORP","0.7964","$129.755","","$103.34"
"10/19/2021","Sell","KMB","KIMBERLY CLARK CORP","14","$129.755","$0.01","$1816.56"
"10/19/2021","Sell","ULTA","ULTA BEAUTY INC.","0.9334","$385.31","","$359.65"
"10/19/2021","Sell","ULTA","ULTA BEAUTY INC.","4","$385.31","$0.01","$1541.23"
"10/19/2021","Sell","PKG","PACKAGING CORP OF AM","0.2356","$133.0996","","$31.36"
"10/19/2021","Sell","PKG","PACKAGING CORP OF AM","14","$133.0996","$0.01","$1863.38"
"10/18/2021","Qualified Dividend","MU","MICRON TECHNOLOGY","","","","$2.68"
"10/15/2021","Qualified Dividend","MDT","MEDTRONIC PLC F","","","","$9.83"
"10/15/2021","Qualified Dividend","CAH","CARDINAL HEALTH INC","","","","$18.34"
"10/15/2021","Qualified Dividend","CINF","CINCINNATI FINL","","","","$10.50"
"10/15/2021","Qualified Dividend","ECL","ECOLAB INC","","","","$4.23"
"10/15/2021","Qualified Dividend","DTE","DTE ENERGY CO","","","","$13.84"
"10/15/2021","Non-Qualified Div","FRT","FEDERAL REALTY INVT TR REIT","","","","$17.97"
"10/15/2021","Qualified Dividend","PGR","PROGRESSIVE CO OHIO","","","","$2.20"
"10/15/2021","Non-Qualified Div","O","REALTY INCM CORP REIT","","","","$7.21"
"10/15/2021","Cash Dividend","AVB","AVALONBAY CMNTYS INC REIT","","","","$13.95"
"10/15/2021","Cash Dividend","ESS","ESSEX PROPERTY TR REIT","","","","$12.89"
"10/15/2021","Qualified Dividend","JCI","JOHNSON CONTROLS INTER F","","","","$7.41"
"10/15/2021","Qualified Dividend","FITB","FIFTH THIRD BANCORP","","","","$15.38"
"10/15/2021","Qualified Dividend","MPWR","MONOLITHIC POWER SYS","","","","$2.40"
"10/14/2021","Qualified Dividend","ITW","ILLINOIS TOOL WORKS","","","","$11.05"
"10/14/2021","Qualified Dividend","MDLZ","MONDELEZ INTL CLASS A","","","","$11.60"
"10/14/2021","Buy","ULTA","ULTA BEAUTY INC.","4.9334","$405.392","","-$1999.96"
"10/14/2021","Buy","UHS","UNIVERSAL HLTH SVCS CLASS B","15.2935","$130.774","","-$1999.99"
"10/14/2021","Buy","UAA","UNDER ARMOUR INC CLASS A","97.2398","$20.5677","","-$2000.00"
"10/14/2021","Buy","UA","UNDER ARMOUR INC CLASS C","111.5573","$17.928","","-$2000.00"
"10/14/2021","Buy","UDR","UDR INC. REIT","36.3385","$55.038","","-$2000.00"
"10/14/2021","Buy","TXT","TEXTRON INC","27.3449","$73.1396","","-$2000.00"
"10/14/2021","Buy","TXN","TEXAS INSTRUMENTS","10.4012","$192.284","","-$1999.98"
"10/14/2021","Buy","UAL","UNITED AIRLINES HLDGS","41.3496","$48.368","","-$2000.00"
"10/14/2021","Buy","TTWO","TAKE TWO INTERACTV","11.7613","$170.048","","-$1999.99"
"10/14/2021","Buy","TYL","TYLER TECHNOLOGIES","4.0054","$499.3137","","-$1999.95"
"10/14/2021","Buy","TSLA","TESLA INC","2.4408","$819.40","","-$1999.99"
"10/14/2021","Buy","TT","TRANE TECHNOLOGIES PLC F","11.4627","$174.4783","","-$1999.99"
"10/14/2021","Buy","TWTR","TWITTER INC","31.6267","$63.2377","","-$2000.00"
"10/14/2021","Buy","TRV","TRAVELERS COMPANIES","12.7186","$157.25","","-$2000.00"
"10/14/2021","Buy","TSN","TYSON FOODS INC CLASS A","25.0834","$79.734","","-$2000.00"
"10/14/2021","Buy","TRMB","TRIMBLE INC","23.9914","$83.3631","","-$2000.00"
"10/14/2021","Buy","TSCO","TRACTOR SUPPLY COMP","10.1027","$197.966","","-$1999.99"
"10/14/2021","Buy","TPR","TAPESTRY INC","50.8001","$39.37","","-$2000.00"
"10/14/2021","Buy","TROW","T ROWE PRICE GROUP","10.1908","$196.254","","-$1999.99"
"10/14/2021","Buy","TMUS","T-MOBILE US INC","16.7202","$119.6154","","-$1999.99"
"10/14/2021","Sell","BAX","BAXTER INTERNTNL","0.3849","$79.7308","","$30.69"
"10/14/2021","Sell","BAX","BAXTER INTERNTNL","24","$79.7308","$0.01","$1913.53"
"10/14/2021","Sell","MDT","MEDTRONIC PLC F","0.6064","$124.562","","$75.53"
"10/14/2021","Sell","MDT","MEDTRONIC PLC F","15","$124.562","$0.01","$1868.42"
"10/14/2021","Sell","PKI","PERKINELMER INC","0.3604","$171.0433","","$61.64"
"10/14/2021","Sell","PKI","PERKINELMER INC","11","$171.0433","$0.01","$1881.47"
"10/14/2021","Sell","FIS","FIDELITY NATL INFO","0.0377","$120.785","","$4.55"
"10/14/2021","Sell","FIS","FIDELITY NATL INFO","16","$120.785","$0.01","$1932.55"
"10/14/2021","Sell","LNT","ALLIANT ENERGY CORP","0.4435","$56.115","","$24.89"
"10/14/2021","Sell","LNT","ALLIANT ENERGY CORP","34","$56.115","$0.01","$1907.90"
"10/14/2021","Sell","CPB","CAMPBELL SOUP CO","0.4274","$41.5824","","$17.77"
"10/14/2021","Sell","CPB","CAMPBELL SOUP CO","46","$41.5824","$0.01","$1912.78"
"10/14/2021","Sell","LUMN","LUMEN TECHNOLOGIES INC","0.0065","$12.2135","","$0.08"
"10/14/2021","Sell","LUMN","LUMEN TECHNOLOGIES INC","158","$12.2135","$0.01","$1929.72"
"10/14/2021","Sell","PRGO","PERRIGO CO PLC F","0.8585","$46.0601","","$39.54"
"10/14/2021","Sell","PRGO","PERRIGO CO PLC F","41","$46.0601","$0.01","$1888.45"
"10/14/2021","Sell","FISV","FISERV INC","0.9243","$107.465","","$99.33"
"10/14/2021","Sell","FISV","FISERV INC","17","$107.465","$0.01","$1826.90"
"10/14/2021","Sell","KR","KROGER CO","0.7234","$39.5034","","$28.58"
"10/14/2021","Sell","KR","KROGER CO","48","$39.5034","$0.01","$1896.15"
"10/14/2021","Sell","NCLH","NORWEGIAN CRUISE LIN F","0.4089","$26.8753","","$10.99"
"10/14/2021","Sell","NCLH","NORWEGIAN CRUISE LIN F","71","$26.8753","$0.01","$1908.14"
"10/14/2021","Sell","PFE","PFIZER INC","0.9263","$41.7702","","$38.69"
"10/14/2021","Sell","PFE","PFIZER INC","45","$41.7702","$0.01","$1879.65"
"10/14/2021","Sell","AMGN","AMGEN INC.","0.2336","$207.25","","$48.41"
"10/14/2021","Sell","AMGN","AMGEN INC.","9","$207.25","$0.01","$1865.24"
"10/14/2021","Sell","TFX","TELEFLEX INCORPORATE","0.2934","$361.409","","$106.04"
"10/14/2021","Sell","TFX","TELEFLEX INCORPORATE","5","$361.409","$0.01","$1807.04"
"10/14/2021","Sell","RCL","ROYAL CARIBBEAN GROUP F","0.7864","$87.78","","$69.03"
"10/14/2021","Sell","RCL","ROYAL CARIBBEAN GROUP F","21","$87.78","$0.01","$1843.37"
"10/14/2021","Sell","ALL","ALLSTATE CORP","0.0749","$126.6889","","$9.49"
"10/14/2021","Sell","ALL","ALLSTATE CORP","15","$126.6889","$0.01","$1900.32"
"10/14/2021","Sell","LW","LAMB WESTON HOLDINGS INC","0.7987","$57.4575","","$45.89"
"10/14/2021","Sell","LW","LAMB WESTON HOLDINGS INC","32","$57.4575","$0.01","$1838.63"
"10/14/2021","Sell","PNW","PINNACLE WEST CAP","0.7192","$67.5601","","$48.59"
"10/14/2021","Sell","PNW","PINNACLE WEST CAP","27","$67.5601","$0.01","$1824.11"
"10/14/2021","Sell","MNST","MONSTER BEVERAGE CORPORA","0.6468","$85.8929","","$55.56"
"10/14/2021","Sell","MNST","MONSTER BEVERAGE CORPORA","21","$85.8929","$0.01","$1803.74"
"10/14/2021","Sell","CTXS","CITRIX SYSTEMS INC","0.6668","$95.185","","$63.47"
"10/14/2021","Sell","CTXS","CITRIX SYSTEMS INC","18","$95.185","$0.01","$1713.32"
"10/14/2021","Sell","MKTX","MARKETAXESS HOLDINGS","0.6967","$402.8442","","$280.66"
"10/14/2021","Sell","MKTX","MARKETAXESS HOLDINGS","4","$402.8442","$0.01","$1611.37"
"10/13/2021","Qualified Dividend","LRCX","LAM RESEARCH CORP","","","","$5.12"
"10/13/2021","Qualified Dividend","APH","AMPHENOL CORP CLASS A","","","","$3.84"
"10/12/2021","Qualified Dividend","CERN","CERNER CORP","","","","$5.84"
"10/08/2021","Qualified Dividend","CB","CHUBB LTD F","","","","$8.80"
"10/08/2021","Cash Dividend","EQR","EQUITY RESIDENTIAL REIT","","","","$14.66"
"10/06/2021","Cash Dividend","IRM","IRON MTN INC NEW REIT","","","","$26.07"
"10/05/2021","Qualified Dividend","BR","BROADRIDGE FINL SOLU","","","","$7.47"
"10/05/2021","Qualified Dividend","BBY","BEST BUY INC","","","","$12.48"
"10/05/2021","Buy","TDG","TRANSDIGM GROUP INC","3.078","$649.7516","","-$1999.94"
"10/05/2021","Buy","TMO","THERMO FISHER SCNTFC","3.4641","$577.336","","-$1999.95"
"10/05/2021","Buy","SYK","STRYKER CORP","7.57","$264.20","","-$1999.99"
"10/05/2021","Buy","TFX","TELEFLEX INCORPORATE","5.2934","$377.825","","-$1999.98"
"10/05/2021","Buy","SWK","STANLEY BLACK & DECK","11.2515","$177.754","","-$2000.00"
"10/05/2021","Sell","FAST","FASTENAL CO","0.2093","$51.90","","$10.86"
"10/05/2021","Sell","FAST","FASTENAL CO","37","$51.90","$0.01","$1920.29"
"10/05/2021","Sell","ABC","AMERISOURCEBERGEN CORP","0.1214","$119.0744","","$14.46"
"10/05/2021","Sell","ABC","AMERISOURCEBERGEN CORP","16","$119.0744","$0.01","$1905.18"
"10/05/2021","Sell","EXC","EXELON CORP","0.8644","$48.315","","$41.76"
"10/05/2021","Sell","EXC","EXELON CORP","39","$48.315","$0.01","$1884.28"
"10/05/2021","Sell","CL","COLGATE-PALMOLIVE CO","0.8281","$74.665","","$61.83"
"10/05/2021","Sell","CL","COLGATE-PALMOLIVE CO","25","$74.665","$0.01","$1866.62"
"10/05/2021","Sell","EIX","EDISON INTERNTNL","0.3477","$55.80","","$19.40"
"10/05/2021","Sell","EIX","EDISON INTERNTNL","34","$55.80","$0.01","$1897.19"
"10/05/2021","Buy","SNA","SNAP ON INC","9.3682","$213.488","","-$2000.00"
"10/05/2021","Buy","SJM","J M SMUCKER CO","16.4875","$121.3033","","-$1999.99"
"10/05/2021","Buy","SLB","SCHLUMBERGER LTD F","63.8202","$31.338","","-$2000.00"
"10/05/2021","Buy","SHW","SHERWIN WILLIAMS CO","6.9753","$286.726","","-$2000.00"
"10/05/2021","Buy","SIVB","SVB FINL GROUP","3.0566","$654.31","","-$1999.96"
"10/05/2021","Buy","SBUX","STARBUCKS CORP","18.0665","$110.702","","-$2000.00"
"10/05/2021","Buy","ROST","ROSS STORES INC","18.1976","$109.904","","-$1999.99"
"10/05/2021","Buy","SCHW","CHARLES SCHWAB CORP","26.8983","$74.354","","-$2000.00"
"10/05/2021","Buy","SEE","SEALED AIR CORP","35.5012","$56.336","","-$2000.00"
"10/05/2021","Buy","RSG","REPUBLIC SERVICES","16.7084","$119.70","","-$2000.00"
"10/05/2021","Buy","SBAC","S B A COMMUNICATIONS CLASS A","6.023","$332.0576","","-$1999.98"
"10/05/2021","Buy","ROP","ROPER TECHNOLOGIES","4.4727","$447.1558","","-$1999.99"
"10/05/2021","Buy","RTX","RAYTHEON TECHNOLOGIES CO","22.7811","$87.792","","-$2000.00"
"10/05/2021","Buy","ROL","ROLLINS INC","56.357","$35.488","","-$2000.00"
"10/05/2021","Buy","ROK","ROCKWELL AUTOMATION","6.7731","$295.2834","","-$1999.98"
"10/04/2021","Sell","GILD","GILEAD SCIENCES INC","0.1381","$67.4021","","$9.31"
"10/04/2021","Sell","GILD","GILEAD SCIENCES INC","28","$67.4021","$0.01","$1887.25"
"10/04/2021","Sell","BR","BROADRIDGE FINL SOLU","0.6713","$162.2555","","$108.92"
"10/04/2021","Sell","BR","BROADRIDGE FINL SOLU","11","$162.2555","$0.01","$1784.80"
"10/04/2021","Sell","HCA","HCA HEALTHCARE INC","0.7449","$244.415","","$182.06"
"10/04/2021","Sell","HCA","HCA HEALTHCARE INC","7","$244.415","$0.01","$1710.90"
"10/04/2021","Sell","MU","MICRON TECHNOLOGY","0.824","$70.485","","$58.08"
"10/04/2021","Sell","MU","MICRON TECHNOLOGY","26","$70.485","$0.01","$1832.60"
"10/04/2021","Sell","DXCM","DEXCOM INC","0.5953","$525.465","","$312.81"
"10/04/2021","Sell","DXCM","DEXCOM INC","3","$525.465","$0.01","$1576.39"
"10/04/2021","Sell","MCO","MOODYS CORP","0.4056","$349.25","","$141.66"
"10/04/2021","Sell","MCO","MOODYS CORP","5","$349.25","$0.01","$1746.24"
"10/04/2021","Sell","NUE","NUCOR CORP","0.5327","$96.65","","$51.49"
"10/04/2021","Sell","NUE","NUCOR CORP","19","$96.65","$0.01","$1836.34"
"10/04/2021","Sell","LEN","LENNAR CORP CLASS A","0.4064","$92.232","","$37.48"
"10/04/2021","Sell","LEN","LENNAR CORP CLASS A","20","$92.232","$0.01","$1844.63"
"10/04/2021","Sell","NVDA","NVIDIA CORP","0.5753","$196.5579","","$113.08"
"10/04/2021","Sell","NVDA","NVIDIA CORP","9","$196.5579","$0.01","$1769.01"
"10/04/2021","Sell","AMD","ADVANCED MICRO DEVIC","0.7603","$100.10","","$76.11"
"10/04/2021","Sell","AMD","ADVANCED MICRO DEVIC","18","$100.10","$0.01","$1801.79"
"10/04/2021","Sell","INFO","IHS MARKIT LTD F","0.401","$114.41","","$45.88"
"10/04/2021","Sell","INFO","IHS MARKIT LTD F","16","$114.41","$0.01","$1830.55"
"10/04/2021","Sell","DG","DOLLAR GENERAL CORP","0.1135","$205.94","","$23.37"
"10/04/2021","Sell","DG","DOLLAR GENERAL CORP","9","$205.94","$0.01","$1853.45"
"10/04/2021","Sell","COST","COSTCO WHOLESALE CO","0.2747","$438.895","","$120.56"
"10/04/2021","Sell","COST","COSTCO WHOLESALE CO","4","$438.895","$0.01","$1755.57"
"10/04/2021","Sell","LRCX","LAM RESEARCH CORP","0.4134","$549.224","","$227.05"
"10/04/2021","Sell","LRCX","LAM RESEARCH CORP","3","$549.224","$0.01","$1647.66"
"10/04/2021","Sell","BSX","BOSTON SCIENTIFIC CO","0.9367","$42.43","","$39.74"
"10/04/2021","Sell","BSX","BOSTON SCIENTIFIC CO","43","$42.43","$0.01","$1824.48"
"10/04/2021","Sell","MCHP","MICROCHIP TECHNOLOGY TRADES WITH DUE BILLS","0.6974","$146.2372","","$101.99"
"10/04/2021","Sell","MCHP","MICROCHIP TECHNOLOGY TRADES WITH DUE BILLS","12","$146.2372","$0.01","$1754.84"
"10/01/2021","Reinvest Shares","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","0.0483","$149.9636","","-$7.24"
"10/01/2021","Qualified Dividend","ALB","ALBEMARLE CORP","","","","$3.19"
"10/01/2021","Qualified Dividend","EMN","EASTMAN CHEMICAL CO","","","","$12.44"
"10/01/2021","Qualified Dividend","AAP","ADVANCE AUTO PARTS","","","","$9.95"
"10/01/2021","Qualified Dividend","HBAN","HUNTINGTON BANCSHS","","","","$19.45"
"10/01/2021","Qualified Dividend","CMA","COMERICA INCORPORATE","","","","$18.57"
"10/01/2021","Buy","RMD","RESMED INC","7.6866","$260.192","","-$1999.99"
"10/01/2021","Buy","RJF","RAYMOND JAMES FINL","21.4324","$93.3163","","-$1999.99"
"10/01/2021","Buy","RL","RALPH LAUREN CORP CLASS A","17.8788","$111.864","","-$1999.99"
"10/01/2021","Buy","RF","REGIONS FINL CO","93.5103","$21.388","","-$2000.00"
"10/01/2021","Buy","RHI","ROBERT HALF INTL","19.8341","$100.8364","","-$2000.00"
"10/01/2021","Buy","REG","REGENCY CENTERS CORP REIT","29.4438","$67.926","","-$2000.00"
"10/01/2021","Buy","REGN","REGENERON PHARMS INC","3.5259","$567.226","","-$1999.98"
"10/01/2021","Buy","RE","EVEREST RE GROUP LTD F","8.0189","$249.408","","-$1999.98"
"10/01/2021","Buy","QRVO","QORVO INC","11.8655","$168.5548","","-$1999.99"
"10/01/2021","Buy","RCL","ROYAL CARIBBEAN GROUP F","21.7864","$91.80","","-$1999.99"
"10/01/2021","Buy","QCOM","QUALCOMM INC","15.7057","$127.342","","-$2000.00"
"10/01/2021","Buy","PXD","PIONEER NATURAL RES","11.7519","$170.1849","","-$2000.00"
"10/01/2021","Buy","PYPL","PAYPAL HOLDINGS INCORPOR","7.6556","$261.244","","-$1999.98"
"10/01/2021","Buy","PVH","PVH CORP","19.0792","$104.826","","-$2000.00"
"10/01/2021","Buy","PWR","QUANTA SERVICES INC","17.484","$114.3902","","-$2000.00"
"10/01/2021","Buy","PSX","PHILLIPS 66","27.9916","$71.45","","-$2000.00"
"10/01/2021","Buy","PTC","PTC INC","16.617","$120.358","","-$1999.99"
"10/01/2021","Buy","PPL","PPL CORP","71.6589","$27.91","","-$2000.00"
"10/01/2021","Buy","PSA","PUBLIC STORAGE REIT","6.7066","$298.212","","-$1999.99"
"10/01/2021","Buy","PRU","PRUDENTIAL FINL","18.9742","$105.406","","-$1999.99"
"10/01/2021","Buy","PRGO","PERRIGO CO PLC F","41.8585","$47.78","","-$2000.00"
"10/01/2021","Buy","PPG","PPG INDUSTRIES INC","13.9892","$142.967","","-$1999.99"
"10/01/2021","Buy","PNR","PENTAIR PLC F","27.4672","$72.814","","-$2000.00"
"10/01/2021","Buy","POOL","POOL CORP","4.6495","$430.15","","-$1999.98"
"10/01/2021","Buy","PNW","PINNACLE WEST CAP","27.7192","$72.1519","","-$1999.99"
"10/01/2021","Sell","MS","MORGAN STANLEY","0.3633","$98.135","","$35.65"
"10/01/2021","Sell","MS","MORGAN STANLEY","19","$98.135","$0.01","$1864.56"
"10/01/2021","Sell","ISRG","INTUITIVE SURGICAL TRADES WITH DUE BILLS","0.9379","$978.55","","$917.78"
"10/01/2021","Sell","ISRG","INTUITIVE SURGICAL TRADES WITH DUE BILLS","1","$978.55","","$978.55"
"10/01/2021","Sell","CPRT","COPART INC","0.818","$137.19","","$112.22"
"10/01/2021","Sell","CPRT","COPART INC","13","$137.19","$0.01","$1783.46"
"10/01/2021","Sell","HUM","HUMANA INC","0.9133","$385.845","","$352.39"
"10/01/2021","Sell","HUM","HUMANA INC","4","$385.845","$0.01","$1543.37"
"10/01/2021","Sell","JBHT","J B HUNT TRANSPORT","0.3852","$166.1151","","$63.99"
"10/01/2021","Sell","JBHT","J B HUNT TRANSPORT","11","$166.1151","$0.01","$1827.26"
"10/01/2021","Sell","MPWR","MONOLITHIC POWER SYS","0.9996","$472.1101","","$471.92"
"10/01/2021","Sell","MPWR","MONOLITHIC POWER SYS","3","$472.1101","$0.01","$1416.32"
"10/01/2021","Sell","CINF","CINCINNATI FINL","0.6708","$113.52","","$76.15"
"10/01/2021","Sell","CINF","CINCINNATI FINL","16","$113.52","$0.01","$1816.31"
"10/01/2021","Sell","EBAY","EBAY INC","0.109","$69.7401","","$7.60"
"10/01/2021","Sell","EBAY","EBAY INC","27","$69.7401","$0.01","$1882.97"
"10/01/2021","Sell","INCY","INCYTE CORP","0.9721","$67.62","","$65.73"
"10/01/2021","Sell","INCY","INCYTE CORP","27","$67.62","$0.01","$1825.73"
"10/01/2021","Sell","CMG","CHIPOTLE MEXICAN GRL","0.0446","$1807.02","","$80.59"
"10/01/2021","Sell","CMG","CHIPOTLE MEXICAN GRL","1","$1807.02","$0.01","$1807.01"
"10/01/2021","Sell","KEYS","KEYSIGHT TECH INC","0.4946","$164.0518","","$81.14"
"10/01/2021","Sell","KEYS","KEYSIGHT TECH INC","11","$164.0518","$0.01","$1804.56"
"10/01/2021","Sell","AMAT","APPLIED MATERIALS","0.7503","$127.8027","","$95.89"
"10/01/2021","Sell","AMAT","APPLIED MATERIALS","14","$127.8027","$0.01","$1789.23"
"10/01/2021","Sell","INTU","INTUIT INC","0.4992","$538.2461","","$268.69"
"10/01/2021","Sell","INTU","INTUIT INC","3","$538.2461","$0.01","$1614.73"
"10/01/2021","Sell","MKC","MC CORMICK & CO INC","0.3867","$80.405","","$31.09"
"10/01/2021","Sell","MKC","MC CORMICK & CO INC","23","$80.405","$0.01","$1849.31"
"10/01/2021","Sell","DVA","DAVITA INC","0.1914","$115.9685","","$22.20"
"10/01/2021","Sell","DVA","DAVITA INC","16","$115.9685","$0.01","$1855.49"
"10/01/2021","Sell","JCI","JOHNSON CONTROLS INTER F","0.4423","$68.4651","","$30.28"
"10/01/2021","Sell","JCI","JOHNSON CONTROLS INTER F","27","$68.4651","$0.01","$1848.55"
"10/01/2021","Sell","IEX","IDEX CORP","0.1145","$206.1167","","$23.60"
"10/01/2021","Sell","IEX","IDEX CORP","9","$206.1167","$0.01","$1855.04"
"10/01/2021","Sell","GWW","WW GRAINGER INC","0.7961","$391.4585","","$311.64"
"10/01/2021","Sell","GWW","WW GRAINGER INC","4","$391.4585","$0.01","$1565.82"
"10/01/2021","Sell","BIIB","BIOGEN INC","0.661","$281.4582","","$186.04"
"10/01/2021","Sell","BIIB","BIOGEN INC","6","$281.4582","$0.01","$1688.74"
"10/01/2021","Sell","AME","AMETEK INC","0.151","$123.3903","","$18.63"
"10/01/2021","Sell","AME","AMETEK INC","15","$123.3903","$0.01","$1850.84"
"10/01/2021","Sell","ITW","ILLINOIS TOOL WORKS","0.0612","$205.86","","$12.60"
"10/01/2021","Sell","ITW","ILLINOIS TOOL WORKS","9","$205.86","$0.01","$1852.73"
"10/01/2021","Sell","BDX","BECTON DICKINSON&CO","0.6642","$243.31","","$161.61"
"10/01/2021","Sell","BDX","BECTON DICKINSON&CO","7","$243.31","$0.01","$1703.16"
"10/01/2021","Sell","EXPD","EXPEDITORS INTL WASH","0.8848","$117.2757","","$103.77"
"10/01/2021","Sell","EXPD","EXPEDITORS INTL WASH","15","$117.2757","$0.01","$1759.13"
"10/01/2021","Sell","MO","ALTRIA GROUP INC","0.1963","$45.226","","$8.88"
"10/01/2021","Sell","MO","ALTRIA GROUP INC","39","$45.226","$0.01","$1763.80"
"10/01/2021","Sell","MO","ALTRIA GROUP INC","2","$45.226","","$90.45"
"10/01/2021","Sell","LH","LAB CO OF AMER HLDG","0.7661","$275.6562","","$211.18"
"10/01/2021","Sell","LH","LAB CO OF AMER HLDG","6","$275.6562","$0.01","$1653.93"
"10/01/2021","Sell","CTLT","CATALENT INC","0.3845","$128.0818","","$49.25"
"10/01/2021","Sell","CTLT","CATALENT INC","14","$128.0818","$0.01","$1793.14"
"09/30/2021","Qualified Dividend","AVGO","BROADCOM INC","","","","$14.55"
"09/30/2021","Qualified Dividend","AME","AMETEK INC","","","","$3.03"
"09/30/2021","Qualified Dividend","AIG","AMERICAN INTL GROUP","","","","$11.67"
"09/30/2021","Qualified Dividend","HES","HESS CORP","","","","$7.35"
"09/30/2021","Non-Qualified Div","DLR","DIGITAL REALTY TRUST REIT","","","","$14.87"
"09/30/2021","Qualified Dividend","HCA","HCA HEALTHCARE INC","","","","$3.72"
"09/30/2021","Qualified Dividend","ES","EVERSOURCE ENERGY","","","","$13.65"
"09/30/2021","Cash Dividend","EXR","EXTRA SPACE STORAGE REIT","","","","$13.29"
"09/30/2021","Qualified Dividend","ALLE","ALLEGION PUBLIC LTD F","","","","$5.02"
"09/30/2021","Qualified Dividend","GRMN","GARMIN LTD F","","","","$7.67"
"09/30/2021","Cash Dividend","CCI","CROWN CASTLE INTL CO REIT","","","","$13.75"
"09/30/2021","Qualified Dividend","DPZ","DOMINOS PIZZA INC","","","","$3.67"
"09/30/2021","Qualified Dividend","ICE","INTERCONTINENTAL EXC","","","","$5.52"
"09/30/2021","Reinvest Dividend","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","","","","$7.24"
"09/30/2021","Buy","PM","PHILIP MORRIS INTL","20.865","$95.854","","-$1999.99"
"09/30/2021","Buy","PKI","PERKINELMER INC","11.3604","$176.05","","-$2000.00"
"09/30/2021","Buy","PHM","PULTEGROUP INC","42.5894","$46.96","","-$2000.00"
"09/30/2021","Buy","PNC","PNC FINL SERVICES","10.1393","$197.252","","-$2000.00"
"09/30/2021","Buy","PFG","PRINCIPAL FINL","30.7588","$65.022","","-$2000.00"
"09/30/2021","Buy","PLD","PROLOGIS INC. REIT","15.765","$126.8631","","-$2000.00"
"09/30/2021","Buy","PG","PROCTER & GAMBLE","14.1753","$141.09","","-$1999.99"
"09/30/2021","Buy","PKG","PACKAGING CORP OF AM","14.2356","$140.492","","-$1999.99"
"09/30/2021","Buy","PEP","PEPSICO INC","13.1984","$151.5331","","-$1999.99"
"09/30/2021","Buy","PH","PARKER-HANNIFIN CORP","6.9843","$286.354","","-$1999.98"
"09/30/2021","Buy","PGR","PROGRESSIVE CO OHIO","21.9538","$91.10","","-$1999.99"
"09/30/2021","Buy","PCAR","PACCAR INC","24.8651","$80.434","","-$2000.00"
"09/30/2021","Buy","PEG","PUB SVC ENTERPISE GP","32.6265","$61.2997","","-$1999.99"
"09/30/2021","Buy","PFE","PFIZER INC","45.9263","$43.548","","-$2000.00"
"09/30/2021","Buy","PEAK","HEALTHPEAK PPTYS INC REIT","59.2979","$33.728","","-$2000.00"
"09/30/2021","Buy","PENN","PENN NTNL GAMING","27.5753","$72.5285","","-$2000.00"
"09/30/2021","Buy","PAYC","PAYCOM SOFTWARE INC","4.0087","$498.906","","-$1999.96"
"09/30/2021","Buy","PBCT","PEOPLES UNITED FINL","111.6196","$17.918","","-$2000.00"
"09/30/2021","Buy","OXY","OCCIDENTAL PETROL CO","67.0292","$29.8377","","-$2000.00"
"09/30/2021","Buy","PAYX","PAYCHEX INC","17.6687","$113.194","","-$1999.99"
"09/30/2021","Sell","ETSY","ETSY INC","0.0763","$209.8502","","$16.01"
"09/30/2021","Sell","ETSY","ETSY INC","9","$209.8502","$0.01","$1888.64"
"09/30/2021","Sell","GLW","CORNING INC","0.361","$37.01","","$13.36"
"09/30/2021","Sell","GLW","CORNING INC","51","$37.01","$0.01","$1887.50"
"09/30/2021","Sell","FE","FIRSTENERGY CORP","0.8852","$35.9108","","$31.79"
"09/30/2021","Sell","FE","FIRSTENERGY CORP","52","$35.9108","$0.01","$1867.35"
"09/30/2021","Sell","HON","HONEYWELL INTL INC","0.8967","$213.52","","$191.46"
"09/30/2021","Sell","HON","HONEYWELL INTL INC","8","$213.52","$0.01","$1708.15"
"09/30/2021","Sell","MSFT","MICROSOFT CORP","0.6539","$285.36","","$186.60"
"09/30/2021","Sell","MSFT","MICROSOFT CORP","6","$285.36","$0.01","$1712.15"
"09/30/2021","Sell","GPS","GAP INC","0.0411","$23.105","","$0.95"
"09/30/2021","Sell","GPS","GAP INC","82","$23.105","$0.01","$1894.60"
"09/30/2021","Sell","GOOGL","ALPHABET INC. CLASS A","0.7038","$2693.53","$0.01","$1895.70"
"09/30/2021","Sell","KLAC","KLA CORP","0.5841","$339.2099","","$198.13"
"09/30/2021","Sell","KLAC","KLA CORP","5","$339.2099","$0.01","$1696.04"
"09/30/2021","Sell","FBHS","FORTUNE BRANDS HM&S","0.7973","$91.16","","$72.68"
"09/30/2021","Sell","FBHS","FORTUNE BRANDS HM&S","20","$91.16","$0.01","$1823.19"
"09/30/2021","Sell","NXPI","NXP SEMICONDUCTORS F","0.5338","$198.8652","","$106.15"
"09/30/2021","Sell","NXPI","NXP SEMICONDUCTORS F","9","$198.8652","$0.01","$1789.78"
"09/30/2021","Sell","COO","COOPER COMPANIES","0.4922","$420.8651","","$207.15"
"09/30/2021","Sell","COO","COOPER COMPANIES","4","$420.8651","$0.01","$1683.45"
"09/30/2021","Sell","AES","AES CORP","0.8912","$22.7822","","$20.30"
"09/30/2021","Sell","AES","AES CORP","82","$22.7822","$0.01","$1868.13"
"09/30/2021","Sell","CERN","CERNER CORP","0.5612","$71.0817","","$39.89"
"09/30/2021","Sell","CERN","CERNER CORP","26","$71.0817","$0.01","$1848.11"
"09/30/2021","Sell","AMZN","AMAZON.COM INC","0.5707","$3304.41","$0.01","$1885.82"
"09/30/2021","Sell","CTAS","CINTAS CORP","0.8976","$385.04","","$345.61"
"09/30/2021","Sell","CTAS","CINTAS CORP","4","$385.04","$0.01","$1540.15"
"09/30/2021","Sell","GOOG","ALPHABET INC. CLASS C","0.6988","$2694.66","$0.01","$1883.02"
"09/30/2021","Sell","ACN","ACCENTURE PLC FCLASS A","0.8652","$320.5817","","$277.37"
"09/30/2021","Sell","ACN","ACCENTURE PLC FCLASS A","5","$320.5817","$0.01","$1602.90"
"09/30/2021","Sell","NWL","NEWELL BRANDS INC","0.6582","$22.725","","$14.96"
"09/30/2021","Sell","NWL","NEWELL BRANDS INC","82","$22.725","$0.01","$1863.44"
"09/30/2021","Sell","KMX","CARMAX INC","0.4142","$129.58","","$53.67"
"09/30/2021","Sell","KMX","CARMAX INC","14","$129.58","$0.01","$1814.11"
"09/30/2021","Sell","CAH","CARDINAL HEALTH INC","0.3708","$49.8701","","$18.49"
"09/30/2021","Sell","CAH","CARDINAL HEALTH INC","37","$49.8701","$0.01","$1845.18"
"09/30/2021","Sell","HBI","HANESBRANDS INC","0.7753","$17.427","","$13.51"
"09/30/2021","Sell","HBI","HANESBRANDS INC","105","$17.427","$0.01","$1829.83"
"09/29/2021","Qualified Dividend","GILD","GILEAD SCIENCES INC","","","","$19.98"
"09/28/2021","Buy","OTIS","OTIS WORLDWIDE CORP","23.9611","$83.4685","","-$2000.00"
"09/28/2021","Buy","OMC","OMNICOM GROUP INC","26.5322","$75.38","","-$2000.00"
"09/28/2021","Buy","OGN","ORGANON & CO","60.1648","$33.242","","-$2000.00"
"09/28/2021","Buy","ORLY","O REILLY AUTOMOTIVE","3.2487","$615.6198","","-$1999.96"
"09/28/2021","Buy","O","REALTY INCM CORP REIT","30.5343","$65.50","","-$2000.00"
"09/28/2021","Buy","ORCL","ORACLE CORP","21.7306","$92.036","","-$2000.00"
"09/28/2021","Buy","OKE","ONEOK INC","34.1803","$58.5131","","-$2000.00"
"09/28/2021","Buy","ODFL","OLD DOMINION FREIGHT","6.795","$294.332","","-$1999.99"
"09/28/2021","Buy","NVDA","NVIDIA CORP","9.5753","$208.87","","-$1999.99"
"09/28/2021","Buy","NWL","NEWELL BRANDS INC","82.6582","$24.196","","-$2000.00"
"09/28/2021","Buy","NXPI","NXP SEMICONDUCTORS F","9.5338","$209.7794","","-$1999.99"
"09/28/2021","Buy","NOV","NOV INC","147.5143","$13.558","","-$2000.00"
"09/28/2021","Buy","NWS","NEWS CORP NEW CLASS B","83.9771","$23.816","","-$2000.00"
"09/28/2021","Buy","NVR","N V R INC","0.4033","$4958.74","","-$1999.86"
"09/28/2021","Buy","NRG","NRG ENERGY INC","47.5239","$42.084","","-$2000.00"
"09/28/2021","Buy","NTAP","NETAPP INC","21.4799","$93.11","","-$1999.99"
"09/28/2021","Buy","NOW","SERVICE NOW INC","3.2193","$621.2395","","-$1999.96"
"09/28/2021","Buy","NSC","NORFOLK SOUTHERN CO","8.1674","$244.874","","-$1999.98"
"09/28/2021","Buy","NUE","NUCOR CORP","19.5327","$102.392","","-$1999.99"
"09/28/2021","Buy","NTRS","NORTHERN TRUST CORP","17.7179","$112.88","","-$2000.00"
"09/28/2021","Sell","IR","INGERSOLL RAND INC","0.5323","$51.9505","","$27.65"
"09/28/2021","Sell","IR","INGERSOLL RAND INC","36","$51.9505","$0.01","$1870.21"
"09/28/2021","Sell","ETN","EATON CORP PLC F","0.3194","$153.7766","","$49.12"
"09/28/2021","Sell","ETN","EATON CORP PLC F","12","$153.7766","$0.01","$1845.31"
"09/28/2021","Sell","ECL","ECOLAB INC","0.8103","$214.85","","$174.09"
"09/28/2021","Sell","ECL","ECOLAB INC","8","$214.85","$0.01","$1718.79"
"09/28/2021","Sell","EQIX","EQUINIX INC REIT","0.3635","$801.76","","$291.44"
"09/28/2021","Sell","EQIX","EQUINIX INC REIT","2","$801.76","$0.01","$1603.51"
"09/28/2021","Sell","DGX","QUEST DIAGNOSTIC INC","0.8473","$146.9377","","$124.50"
"09/28/2021","Sell","DGX","QUEST DIAGNOSTIC INC","12","$146.9377","$0.01","$1763.24"
"09/28/2021","Sell","BLL","BALL CORP","0.9065","$89.9948","","$81.58"
"09/28/2021","Sell","BLL","BALL CORP","20","$89.9948","$0.01","$1799.89"
"09/28/2021","Sell","EW","EDWARDS LIFESCIENCES","0.5166","$113.835","","$58.81"
"09/28/2021","Sell","EW","EDWARDS LIFESCIENCES","16","$113.835","$0.01","$1821.35"
"09/28/2021","Sell","CRL","CHARLES RIVER LABS","0.5055","$416.1926","","$210.39"
"09/28/2021","Sell","CRL","CHARLES RIVER LABS","4","$416.1926","$0.01","$1664.76"
"09/28/2021","Sell","ALGN","ALIGN TECHNOLOGY INC","0.7496","$679.82","","$509.59"
"09/28/2021","Sell","ALGN","ALIGN TECHNOLOGY INC","2","$679.82","$0.01","$1359.63"
"09/28/2021","Sell","DLR","DIGITAL REALTY TRUST REIT","0.8191","$145.9118","","$119.52"
"09/28/2021","Sell","DLR","DIGITAL REALTY TRUST REIT","12","$145.9118","$0.01","$1750.93"
"09/28/2021","Sell","MSCI","MSCI INC","0.074","$608.16","","$45.00"
"09/28/2021","Sell","MSCI","MSCI INC","3","$608.16","$0.01","$1824.47"
"09/28/2021","Sell","FTNT","FORTINET INC","0.3928","$291.0501","","$114.32"
"09/28/2021","Sell","FTNT","FORTINET INC","6","$291.0501","$0.01","$1746.29"
"09/28/2021","Sell","CDNS","CADENCE DESIGN SYS","0.0423","$154.1264","","$6.52"
"09/28/2021","Sell","CDNS","CADENCE DESIGN SYS","12","$154.1264","$0.01","$1849.51"
"09/28/2021","Sell","ABT","ABBOTT LABORATORIES","0.6132","$118.4601","","$72.64"
"09/28/2021","Sell","ABT","ABBOTT LABORATORIES","15","$118.4601","$0.01","$1776.89"
"09/28/2021","Sell","BIO","BIO-RAD LABS INC CLASS A","0.4641","$745.085","","$345.79"
"09/28/2021","Sell","BIO","BIO-RAD LABS INC CLASS A","2","$745.085","$0.01","$1490.16"
"09/28/2021","Sell","IDXX","IDEXX LABS INC","0.9317","$625.87","","$583.12"
"09/28/2021","Sell","IDXX","IDEXX LABS INC","2","$625.87","$0.01","$1251.73"
"09/28/2021","Sell","DHR","DANAHER CORP","0.016","$304.2139","","$4.87"
"09/28/2021","Sell","DHR","DANAHER CORP","6","$304.2139","$0.01","$1825.27"
"09/28/2021","Sell","IQV","IQVIA HOLDINGS INC","0.6356","$239.88","","$152.47"
"09/28/2021","Sell","IQV","IQVIA HOLDINGS INC","7","$239.88","$0.01","$1679.15"
"09/28/2021","Sell","MTD","METTLER TOLEDO INTL","0.2778","$1422.725","","$395.23"
"09/28/2021","Sell","MTD","METTLER TOLEDO INTL","1","$1422.725","$0.01","$1422.72"
"09/28/2021","Sell","GRMN","GARMIN LTD F","0.448","$158.185","","$70.87"
"09/28/2021","Sell","GRMN","GARMIN LTD F","11","$158.185","$0.01","$1740.03"
"09/28/2021","Sell","A","AGILENT TECHNOLOGIES","0.2202","$160.765","","$35.40"
"09/28/2021","Sell","A","AGILENT TECHNOLOGIES","11","$160.765","$0.01","$1768.41"
"09/28/2021","Sell","MRNA","MODERNA INC","0.4049","$382.785","","$154.99"
"09/28/2021","Sell","MRNA","MODERNA INC","4","$382.785","$0.01","$1531.13"
"09/27/2021","Journal","","JOURNAL TO 38742116","","","","-$500277.54"
"09/27/2021","Journal","","JOURNAL FRM 35602508","","","","$500277.54"
"09/27/2021","Journaled Shares","LYV","LIVE NATION ENTRTMNT","23.434","$95.51","",""
"09/27/2021","Journaled Shares","CTAS","CINTAS CORP","4.8976","$402.52","",""
"09/27/2021","Journaled Shares","IEX","IDEX CORP","9.1145","$218.02","",""
"09/27/2021","Journaled Shares","LDOS","LEIDOS HOLDINGS INC","21.6398","$96.185","",""
"09/27/2021","Journaled Shares","K","KELLOGG CO","31.4554","$64.5124","",""
"09/27/2021","Journaled Shares","ANTM","ANTHEM INC","5.3646","$385.18","",""
"09/27/2021","Journaled Shares","DHR","DANAHER CORP","6.016","$315.4772","",""
"09/27/2021","Journaled Shares","CTLT","CATALENT INC","14.3845","$136.9334","",""
"09/27/2021","Journaled Shares","EQR","EQUITY RESIDENTIAL REIT","24.338","$82.11","",""
"09/27/2021","Journaled Shares","DVA","DAVITA INC","16.1914","$121.2942","",""
"09/27/2021","Journaled Shares","CHRW","C H ROBINSON WORLDWD","22.9647","$89.96","",""
"09/27/2021","Journaled Shares","CFG","CITIZENS FINL GROUP INC","46.2128","$46.76","",""
"09/27/2021","Journaled Shares","AMGN","AMGEN INC.","9.2336","$213.7322","",""
"09/27/2021","Journaled Shares","KSU","KANSAS CITY SOUTHERN","7.3014","$275.10","",""
"09/27/2021","Journaled Shares","CERN","CERNER CORP","26.5612","$73.26","",""
"09/27/2021","Journaled Shares","HUM","HUMANA INC","4.9133","$403.78","",""
"09/27/2021","Journaled Shares","MRK","MERCK & CO. INC.","27.1709","$74.0213","",""
"09/27/2021","Journaled Shares","CDNS","CADENCE DESIGN SYS","12.0423","$158.27","",""
"09/27/2021","Journaled Shares","MS","MORGAN STANLEY","19.3633","$104.97","",""
"09/27/2021","Journaled Shares","CB","CHUBB LTD F","11.0035","$179.069","",""
"09/27/2021","Journaled Shares","GLW","CORNING INC","51.361","$38.60","",""
"09/27/2021","Journaled Shares","JNPR","JUNIPER NETWORKS INC","72.6005","$28.70","",""
"09/27/2021","Journaled Shares","MA","MASTERCARD INC CLASS A","5.9041","$362.00","",""
"09/27/2021","Journaled Shares","ANET","ARISTA NETWORKS INC","5.5429","$355.11","",""
"09/27/2021","Journaled Shares","AMZN","AMAZON.COM INC","0.5707","$3353.8201","",""
"09/27/2021","Journaled Shares","MPC","MARATHON PETE CORP","33.6613","$63.21","",""
"09/27/2021","Journaled Shares","GRMN","GARMIN LTD F","11.448","$167.71","",""
"09/27/2021","Journaled Shares","INCY","INCYTE CORP","27.9721","$68.33","",""
"09/27/2021","Journaled Shares","BA","BOEING CO","9.3641","$227.28","",""
"09/27/2021","Journaled Shares","AZO","AUTOZONE INC","1.2908","$1688.62","",""
"09/27/2021","Journaled Shares","CTSH","COGNIZANT TECH SOLU CLASS A","25.9336","$77.75","",""
"09/27/2021","Journaled Shares","INTC","INTEL CORP","36.6851","$54.68","",""
"09/27/2021","Journaled Shares","MPWR","MONOLITHIC POWER SYS","3.9996","$512.33","",""
"09/27/2021","Journaled Shares","AME","AMETEK INC","15.151","$130.97","",""
"09/27/2021","Journaled Shares","EIX","EDISON INTERNTNL","34.3477","$58.32","",""
"09/27/2021","Journaled Shares","AAL","AMERICAN AIRLS GROUP","99.5619","$21.89","",""
"09/27/2021","Journaled Shares","ACN","ACCENTURE PLC FCLASS A","5.8652","$336.335","",""
"09/27/2021","Journaled Shares","JCI","JOHNSON CONTROLS INTER F","27.4423","$73.12","",""
"09/27/2021","Journaled Shares","DFS","DISCOVER FINL S","16.4133","$131.68","",""
"09/27/2021","Journaled Shares","LRCX","LAM RESEARCH CORP","3.4134","$619.03","",""
"09/27/2021","Journaled Shares","ICE","INTERCONTINENTAL EXC","16.7364","$119.00","",""
"09/27/2021","Journaled Shares","FRT","FEDERAL REALTY INVT TR REIT","16.7923","$121.46","",""
"09/27/2021","Journaled Shares","MTB","M & T BANK CORP","14.0413","$148.67","",""
"09/27/2021","Journaled Shares","DLR","DIGITAL REALTY TRUST REIT","12.8191","$152.06","",""
"09/27/2021","Journaled Shares","HST","HOST HOTELS & RESORT","123.533","$17.395","",""
"09/27/2021","Journaled Shares","HBI","HANESBRANDS INC","105.7753","$18.88","",""
"09/27/2021","Journaled Shares","BXP","BOSTON PROPERTIES REIT","17.838","$114.8423","",""
"09/27/2021","Journaled Shares","KMB","KIMBERLY CLARK CORP","14.7964","$133.19","",""
"09/27/2021","Journaled Shares","FISV","FISERV INC","17.9243","$110.405","",""
"09/27/2021","Journaled Shares","MSCI","MSCI INC","3.074","$646.78","",""
"09/27/2021","Journaled Shares","MSFT","MICROSOFT CORP","6.6539","$295.83","",""
"09/27/2021","Journaled Shares","JKHY","HENRY JACK & ASSOC","11.8975","$171.55","",""
"09/27/2021","Journaled Shares","BLL","BALL CORP","20.9065","$91.59","",""
"09/27/2021","Journaled Shares","JNJ","JOHNSON & JOHNSON","12.2028","$163.87","",""
"09/27/2021","Journaled Shares","ADSK","AUTODESK INC","6.958","$292.77","",""
"09/27/2021","Journaled Shares","MMM","3M CO","11.2047","$182.47","",""
"09/27/2021","Journaled Shares","HON","HONEYWELL INTL INC","8.8967","$219.54","",""
"09/27/2021","Journaled Shares","MRNA","MODERNA INC","4.4049","$412.30","",""
"09/27/2021","Journaled Shares","CBRE","CBRE GROUP INC CLASS A","20.2566","$97.625","",""
"09/27/2021","Journaled Shares","HD","HOME DEPOT INC","5.9769","$340.80","",""
"09/27/2021","Journaled Shares","EQIX","EQUINIX INC REIT","2.3635","$817.46","",""
"09/27/2021","Journaled Shares","MDT","MEDTRONIC PLC F","15.6064","$129.315","",""
"09/27/2021","Journaled Shares","FITB","FIFTH THIRD BANCORP","51.2715","$42.97","",""
"09/27/2021","Journaled Shares","DG","DOLLAR GENERAL CORP","9.1135","$218.1191","",""
"09/27/2021","Journaled Shares","KEYS","KEYSIGHT TECH INC","11.4946","$175.925","",""
"09/27/2021","Journaled Shares","HII","HUNTINGTON INGALLS","10.0095","$199.13","",""
"09/27/2021","Journaled Shares","MCK","MCKESSON CORP","9.9501","$204.68","",""
"09/27/2021","Journaled Shares","MOS","THE MOSAIC CO","61.4758","$36.83","",""
"09/27/2021","Journaled Shares","JPM","JPMORGAN CHASE & CO","12.9735","$166.23","",""
"09/27/2021","Journaled Shares","CVS","CVS HEALTH CORP","23.7022","$86.03","",""
"09/27/2021","Journaled Shares","MRO","MARATHON OIL CORP","159.5188","$13.5822","",""
"09/27/2021","Journaled Shares","EXC","EXELON CORP","39.8644","$49.63","",""
"09/27/2021","Journaled Shares","CVX","CHEVRON CORP","20.6932","$102.9697","",""
"09/27/2021","Journaled Shares","AMD","ADVANCED MICRO DEVIC","18.7603","$105.16","",""
"09/27/2021","Journaled Shares","AMAT","APPLIED MATERIALS","14.7503","$142.88","",""
"09/27/2021","Journaled Shares","FIS","FIDELITY NATL INFO","16.0377","$123.505","",""
"09/27/2021","Journaled Shares","INTU","INTUIT INC","3.4992","$568.195","",""
"09/27/2021","Journaled Shares","HSIC","SCHEIN HENRY INC","25.9963","$79.04","",""
"09/27/2021","Journaled Shares","IPG","INTERPUBLIC GRP COS","54.5851","$38.99","",""
"09/27/2021","Journaled Shares","BSX","BOSTON SCIENTIFIC CO","43.9367","$44.60","",""
"09/27/2021","Journaled Shares","CRM","SALESFORCE COM","7.7537","$283.22","",""
"09/27/2021","Journaled Shares","MAS","MASCO CORP","35.6087","$56.47","",""
"09/27/2021","Journaled Shares","HIG","HARTFORD FINL SVC GP","28.8234","$70.32","",""
"09/27/2021","Journaled Shares","EXPD","EXPEDITORS INTL WASH","15.8848","$124.57","",""
"09/27/2021","Journaled Shares","FBHS","FORTUNE BRANDS HM&S","20.7973","$92.95","",""
"09/27/2021","Journaled Shares","FAST","FASTENAL CO","37.2093","$53.765","",""
"09/27/2021","Journaled Shares","DAL","DELTA AIR LINES INC DEL","49.8628","$44.545","",""
"09/27/2021","Journaled Shares","ABC","AMERISOURCEBERGEN CORP","16.1214","$122.96","",""
"09/27/2021","Journaled Shares","BIO","BIO-RAD LABS INC CLASS A","2.4641","$767.36","",""
"09/27/2021","Journaled Shares","DGX","QUEST DIAGNOSTIC INC","12.8473","$151.55","",""
"09/27/2021","Journaled Shares","BDX","BECTON DICKINSON&CO","7.6642","$250.48","",""
"09/27/2021","Journaled Shares","ADM","ARCHER DANIELS MIDLAND C","33.4082","$60.38","",""
"09/27/2021","Journaled Shares","AVB","AVALONBAY CMNTYS INC REIT","8.7753","$227.61","",""
"09/27/2021","Journaled Shares","ECL","ECOLAB INC","8.8103","$223.111","",""
"09/27/2021","Journaled Shares","EW","EDWARDS LIFESCIENCES","16.5166","$117.55","",""
"09/27/2021","Journaled Shares","CME","CME GROUP INC CLASS A","10.3879","$200.79","",""
"09/27/2021","Journaled Shares","EBAY","EBAY INC","27.109","$73.56","",""
"09/27/2021","Journaled Shares","CMG","CHIPOTLE MEXICAN GRL","1.0446","$1918.3785","",""
"09/27/2021","Journaled Shares","ED","CONSOLIDATED EDISON","26.6887","$73.91","",""
"09/27/2021","Journaled Shares","GIS","GENERAL MILLS INC","34.2553","$60.64","",""
"09/27/2021","Journaled Shares","HSY","HERSHEY CO","11.4195","$174.355","",""
"09/27/2021","Journaled Shares","MCO","MOODYS CORP","5.4056","$370.305","",""
"09/27/2021","Journaled Shares","COO","COOPER COMPANIES","4.4922","$435.06","",""
"09/27/2021","Journaled Shares","CF","CF INDUSTRIES HLDG","44.0451","$55.367","",""
"09/27/2021","Journaled Shares","KMI","KINDER MORGAN INC","126.7611","$16.94","",""
"09/27/2021","Journaled Shares","HES","HESS CORP","29.4178","$78.27","",""
"09/27/2021","Journaled Shares","CHD","CHURCH & DWIGHT CO","23.8441","$82.8478","",""
"09/27/2021","Journaled Shares","MKC","MC CORMICK & CO INC","23.3867","$84.99","",""
"09/27/2021","Journaled Shares","AIG","AMERICAN INTL GROUP","36.4644","$56.615","",""
"09/27/2021","Journaled Shares","MMC","MARSH & MC LENNAN CO","12.8561","$158.22","",""
"09/27/2021","Journaled Shares","FTNT","FORTINET INC","6.3928","$302.6084","",""
"09/27/2021","Journaled Shares","KIM","KIMCO REALTY CORP REIT","94.4376","$21.925","",""
"09/27/2021","Journaled Shares","ETN","EATON CORP PLC F","12.3194","$156.28","",""
"09/27/2021","Journaled Shares","MSI","MOTOROLA SOLUTIONS","8.2867","$239.5757","",""
"09/27/2021","Journaled Shares","COP","CONOCOPHILLIPS","35.652","$66.56","",""
"09/27/2021","Journaled Shares","F","FORD MOTOR CO","155.7911","$14.15","",""
"09/27/2021","Journaled Shares","DISH","DISH NETWORK CORP CLASS A","46.2214","$44.77","",""
"09/27/2021","Journaled Shares","ITW","ILLINOIS TOOL WORKS","9.0612","$217.7301","",""
"09/27/2021","Journaled Shares","LUV","SOUTHWEST AIRLINES","40.8847","$54.03","",""
"09/27/2021","Journaled Shares","LEN","LENNAR CORP CLASS A","20.4064","$99.18","",""
"09/27/2021","Journaled Shares","ABT","ABBOTT LABORATORIES","15.6132","$121.8325","",""
"09/27/2021","Journaled Shares","IT","GARTNER INC","6.3324","$316.35","",""
"09/27/2021","Journaled Shares","HAL","HALLIBURTON CO HLDG","101.5331","$22.0719","",""
"09/27/2021","Journaled Shares","CNC","CENTENE CORP","33.1807","$64.47","",""
"09/27/2021","Journaled Shares","BAC","BANK OF AMERICA CORP","48.7832","$43.19","",""
"09/27/2021","Journaled Shares","MGM","MGM RESORTS INTL","48.1486","$45.79","",""
"09/27/2021","Journaled Shares","DVN","DEVON ENERGY CORP","70.5027","$34.505","",""
"09/27/2021","Journaled Shares","BWA","BORG WARNER INC","46.9087","$44.6739","",""
"09/27/2021","Journaled Shares","MHK","MOHAWK INDUSTRIES","11.0381","$187.19","",""
"09/27/2021","Journaled Shares","GM","GENERAL MOTORS CO","39.779","$53.0749","",""
"09/27/2021","Journaled Shares","MU","MICRON TECHNOLOGY","26.824","$75.23","",""
"09/27/2021","Journaled Shares","CAH","CARDINAL HEALTH INC","37.3708","$51.719","",""
"09/27/2021","Journaled Shares","ADI","ANALOG DEVICES INC","11.7935","$177.88","",""
"09/27/2021","Journaled Shares","APD","AIR PROD & CHEMICALS","7.4612","$265.99","",""
"09/27/2021","Journaled Shares","KEY","KEYCORP INC","100.1617","$21.785","",""
"09/27/2021","Journaled Shares","JBHT","J B HUNT TRANSPORT","11.3852","$176.10","",""
"09/27/2021","Journaled Shares","AJG","ARTHUR J GALLAGHER&C","13.7112","$152.7075","",""
"09/27/2021","Journaled Shares","CPRT","COPART INC","13.818","$147.26","",""
"09/27/2021","Journaled Shares","ALL","ALLSTATE CORP","15.0749","$131.445","",""
"09/27/2021","Journaled Shares","DRI","DARDEN RESTAURANTS","13.3275","$159.13","",""
"09/27/2021","Journaled Shares","CINF","CINCINNATI FINL","16.6708","$117.89","",""
"09/27/2021","Journaled Shares","MTD","METTLER TOLEDO INTL","1.2778","$1487.00","",""
"09/27/2021","Journaled Shares","BRKB","BERKSHIRE HATHAWAY CLASS B","7.1669","$279.7455","",""
"09/27/2021","Journaled Shares","L","LOEWS CORP","38.3995","$54.06","",""
"09/27/2021","Journaled Shares","COG","CABOT OIL & GAS CORP","109.0649","$21.2614","",""
"09/27/2021","Journaled Shares","KLAC","KLA CORP","5.5841","$368.483","",""
"09/27/2021","Journaled Shares","GWW","WW GRAINGER INC","4.7961","$409.00","",""
"09/27/2021","Journaled Shares","ESS","ESSEX PROPERTY TR REIT","6.1686","$329.90","",""
"09/27/2021","Journaled Shares","IDXX","IDEXX LABS INC","2.9317","$646.8999","",""
"09/27/2021","Journaled Shares","GPC","GENUINE PARTS CO","16.7205","$124.10","",""
"09/27/2021","Journaled Shares","MET","METLIFE INC","34.0612","$63.55","",""
"09/27/2021","Journaled Shares","APH","AMPHENOL CORP CLASS A","26.4984","$77.5781","",""
"09/27/2021","Journaled Shares","AXP","AMERICAN EXPRESS CO","12.496","$176.89","",""
"09/27/2021","Journaled Shares","MKTX","MARKETAXESS HOLDINGS","4.6967","$423.05","",""
"09/27/2021","Journaled Shares","MAA","MID AMERICA APARTMENT COREIT","10.5792","$190.785","",""
"09/27/2021","Journaled Shares","MDLZ","MONDELEZ INTL CLASS A","33.1521","$60.355","",""
"09/27/2021","Journaled Shares","ALGN","ALIGN TECHNOLOGY INC","2.7496","$703.95","",""
"09/27/2021","Journaled Shares","MCD","MCDONALDS CORP","8.3193","$248.83","",""
"09/27/2021","Journaled Shares","FE","FIRSTENERGY CORP","52.8852","$37.22","",""
"09/27/2021","Journaled Shares","LKQ","LKQ CORP","40.0753","$52.42","",""
"09/27/2021","Journaled Shares","BIIB","BIOGEN INC","6.661","$289.07","",""
"09/27/2021","Journaled Shares","AAP","ADVANCE AUTO PARTS","9.9485","$217.67","",""
"09/27/2021","Journaled Shares","A","AGILENT TECHNOLOGIES","11.2202","$165.74","",""
"09/27/2021","Journaled Shares","FLT","FLEETCOR TECHNOLOGIE","7.5908","$271.62","",""
"09/27/2021","Journaled Shares","FANG","DIAMONDBACK ENERGY","26.2567","$94.1142","",""
"09/27/2021","Journaled Shares","C","CITIGROUP INC","28.4058","$72.3512","",""
"09/27/2021","Journaled Shares","AES","AES CORP","82.8912","$23.69","",""
"09/27/2021","Journaled Shares","DXCM","DEXCOM INC","3.5953","$546.35","",""
"09/27/2021","Journaled Shares","CPB","CAMPBELL SOUP CO","46.4274","$42.76","",""
"09/27/2021","Journaled Shares","MLM","MARTIN MARIETTA MATERIAL","5.7996","$356.345","",""
"09/27/2021","Journaled Shares","LOW","LOWES COMPANIES INC","9.7499","$211.43","",""
"09/27/2021","Journaled Shares","CMA","COMERICA INCORPORATE","27.3119","$81.44","",""
"09/27/2021","Journaled Shares","FFIV","F5 NETWORKS INC","9.8225","$203.16","",""
"09/27/2021","Journaled Shares","KO","THE COCA-COLA CO","36.9003","$54.08","",""
"09/27/2021","Journaled Shares","COF","CAPITAL ONE FC","12.7024","$168.805","",""
"09/27/2021","Journaled Shares","HRL","HORMEL FOODS CORP","47.4608","$41.17","",""
"09/27/2021","Journaled Shares","LNT","ALLIANT ENERGY CORP","34.4435","$57.46","",""
"09/27/2021","Journaled Shares","MCHP","MICROCHIP TECHNOLOGY TRADES WITH DUE BILLS","12.6974","$165.14","",""
"09/27/2021","Journaled Shares","ADP","AUTO DATA PROCESSING","9.8161","$202.6686","",""
"09/27/2021","Journaled Shares","ALK","ALASKA AIR GROUP INC","34.4024","$62.28","",""
"09/27/2021","Journaled Shares","HCA","HCA HEALTHCARE INC","7.7449","$258.48","",""
"09/27/2021","Journaled Shares","LMT","LOCKHEED MARTIN CORP","5.8931","$356.10","",""
"09/27/2021","Journaled Shares","KMX","CARMAX INC","14.4142","$146.50","",""
"09/27/2021","Journaled Shares","LNC","LINCOLN NTNL CO","31.5556","$71.99","",""
"09/27/2021","Journaled Shares","IVZ","INVESCO LTD F","80.5866","$25.43","",""
"09/27/2021","Journaled Shares","KR","KROGER CO","48.7234","$40.525","",""
"09/27/2021","Journaled Shares","CAG","CONAGRA BRANDS INC","59.9556","$33.79","",""
"09/27/2021","Journaled Shares","BR","BROADRIDGE FINL SOLU","11.6713","$168.63","",""
"09/27/2021","Journaled Shares","FRC","FIRST REPUBLIC BANK","10.0347","$200.59","",""
"09/27/2021","Journaled Shares","ISRG","INTUITIVE SURGICAL TRADES WITH DUE BILLS","1.9379","$1017.4099","",""
"09/27/2021","Journaled Shares","GPS","GAP INC","82.0411","$24.445","",""
"09/27/2021","Journaled Shares","MAR","MARRIOTT INTL INC CLASS A","14.0118","$155.21","",""
"09/27/2021","Journaled Shares","EOG","EOG RESOURCES INC","29.5438","$81.70","",""
"09/27/2021","Journaled Shares","CL","COLGATE-PALMOLIVE CO","25.8281","$76.40","",""
"09/27/2021","Journaled Shares","EXPE","EXPEDIA GROUP INC.","13.6267","$172.41","",""
"09/27/2021","Journaled Shares","ABBV","ABBVIE INC","18.6011","$107.9429","",""
"09/27/2021","Journaled Shares","BAX","BAXTER INTERNTNL","24.3849","$80.47","",""
"09/27/2021","Journaled Shares","LLY","LILLY ELI & CO","8.6045","$227.8399","",""
"09/27/2021","Journaled Shares","IBM","IBM CORP","14.4812","$138.45","",""
"09/27/2021","Journaled Shares","MO","ALTRIA GROUP INC","41.1963","$48.6783","",""
"09/27/2021","Journaled Shares","LYB","LYONDELLBASELL INDS FCLASS A","22.2888","$95.9789","",""
"09/27/2021","Journaled Shares","LEG","LEGGETT & PLATT INC","43.9463","$47.47","",""
"09/27/2021","Journaled Shares","COST","COSTCO WHOLESALE CO","4.2747","$463.4239","",""
"09/27/2021","Journaled Shares","APA","APA CORP","106.5093","$23.10","",""
"09/27/2021","Journaled Shares","LUMN","LUMEN TECHNOLOGIES INC","158.0065","$13.257","",""
"09/27/2021","Journaled Shares","CZR","CAESARS ENTMT INC NEW","18.9498","$114.10","",""
"09/27/2021","Journaled Shares","HWM","HOWMET AEROSPACE INC","62.9168","$32.64","",""
"09/27/2021","Journaled Shares","IR","INGERSOLL RAND INC","36.5323","$54.48","",""
"09/27/2021","Journaled Shares","AMCR","AMCOR PLC F","164.0958","$11.895","",""
"09/27/2021","Journaled Shares","LHX","L3HARRIS TECHNOLOGIES IN","9.0305","$224.39","",""
"09/27/2021","Journaled Shares","FOXA","FOX CORP CLASS A","55.2364","$39.76","",""
"09/27/2021","Journaled Shares","FOX","FOX CORP CLASS B","59.6029","$36.76","",""
"09/27/2021","Journaled Shares","CBOE","CBOE GLOBAL MKTS INC","16.0955","$123.48","",""
"09/27/2021","Journaled Shares","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","13","$154.98","",""
"09/27/2021","Journaled Shares","CCL","CARNIVAL CORP F","86.2154","$26.70","",""
"09/27/2021","Journaled Shares","AVGO","BROADCOM INC","4.0407","$504.26","",""
"09/27/2021","Journaled Shares","BKNG","BOOKING HOLDINGS INC","0.8607","$2494.0549","",""
"09/27/2021","Journaled Shares","APTV","APTIV PLC F","13.4502","$152.82","",""
"09/27/2021","Journaled Shares","IQV","IQVIA HOLDINGS INC","7.6356","$250.3867","",""
"09/27/2021","Journaled Shares","LIN","LINDE PLC F","6.616","$311.925","",""
"09/27/2021","Journaled Shares","GILD","GILEAD SCIENCES INC","28.1381","$70.86","",""
"09/27/2021","Journaled Shares","BKR","BAKER HUGHES CO. CLASS A","84.8968","$24.97","",""
"09/27/2021","Journaled Shares","DXC","D X C TECHNOLOGY CO 0050","56.9875","$35.525","",""
"09/27/2021","Journaled Shares","LW","LAMB WESTON HOLDINGS INC","32.7987","$62.12","",""
"09/27/2021","Journaled Shares","HLT","HILTON WORLDWIDE HLD","15.5891","$138.1678","",""
"09/27/2021","Journaled Shares","INFO","IHS MARKIT LTD F","16.401","$122.84","",""
"09/27/2021","Journaled Shares","GOOG","ALPHABET INC. CLASS C","0.6988","$2839.1001","",""
"09/27/2021","Journaled Shares","GOOGL","ALPHABET INC. CLASS A","0.7038","$2831.7451","",""
"09/27/2021","Journaled Shares","MNST","MONSTER BEVERAGE CORPORA","21.6468","$92.34","",""
"09/27/2021","Journaled Shares","KHC","KRAFT HEINZ CO","54.7075","$37.11","",""
"09/27/2021","Journaled Shares","ETSY","ETSY INC","9.0763","$221.265","",""
"09/27/2021","Journaled Shares","LH","LAB CO OF AMER HLDG","6.7661","$291.24","",""
"09/27/2021","Journaled Shares","CTXS","CITRIX SYSTEMS INC","18.6668","$109.80","",""
"09/27/2021","Journaled Shares","CRL","CHARLES RIVER LABS","4.5055","$434.79","",""
"09/27/2021","Journaled Shares","LVS","LAS VEGAS SANDS CORP","53.2793","$38.2011","",""
"09/27/2021","Journaled Shares","LYV","LIVE NATION ENTRTMNT","-23.434","$95.165","",""
"09/27/2021","Journaled Shares","CTAS","CINTAS CORP","-4.8976","$400.66","",""
"09/27/2021","Journaled Shares","IEX","IDEX CORP","-9.1145","$217.55","",""
"09/27/2021","Journaled Shares","LDOS","LEIDOS HOLDINGS INC","-21.6398","$95.64","",""
"09/27/2021","Journaled Shares","K","KELLOGG CO","-31.4554","$64.59","",""
"09/27/2021","Journaled Shares","ANTM","ANTHEM INC","-5.3646","$384.89","",""
"09/27/2021","Journaled Shares","DHR","DANAHER CORP","-6.016","$315.39","",""
"09/27/2021","Journaled Shares","CTLT","CATALENT INC","-14.3845","$137.28","",""
"09/27/2021","Journaled Shares","EQR","EQUITY RESIDENTIAL REIT","-24.338","$81.9464","",""
"09/27/2021","Journaled Shares","DVA","DAVITA INC","-16.1914","$121.87","",""
"09/27/2021","Journaled Shares","CHRW","C H ROBINSON WORLDWD","-22.9647","$89.35","",""
"09/27/2021","Journaled Shares","CFG","CITIZENS FINL GROUP INC","-46.2128","$46.98","",""
"09/27/2021","Journaled Shares","AMGN","AMGEN INC.","-9.2336","$213.45","",""
"09/27/2021","Journaled Shares","KSU","KANSAS CITY SOUTHERN","-7.3014","$273.565","",""
"09/27/2021","Journaled Shares","CERN","CERNER CORP","-26.5612","$73.25","",""
"09/27/2021","Journaled Shares","HUM","HUMANA INC","-4.9133","$404.05","",""
"09/27/2021","Journaled Shares","MRK","MERCK & CO. INC.","-27.1709","$73.95","",""
"09/27/2021","Journaled Shares","CDNS","CADENCE DESIGN SYS","-12.0423","$157.80","",""
"09/27/2021","Journaled Shares","MS","MORGAN STANLEY","-19.3633","$105.48","",""
"09/27/2021","Journaled Shares","CB","CHUBB LTD F","-11.0035","$178.42","",""
"09/27/2021","Journaled Shares","GLW","CORNING INC","-51.361","$38.5105","",""
"09/27/2021","Journaled Shares","JNPR","JUNIPER NETWORKS INC","-72.6005","$28.585","",""
"09/27/2021","Journaled Shares","MA","MASTERCARD INC CLASS A","-5.9041","$358.3669","",""
"09/27/2021","Journaled Shares","ANET","ARISTA NETWORKS INC","-5.5429","$354.89","",""
"09/27/2021","Journaled Shares","AMZN","AMAZON.COM INC","-0.5707","$3343.385","",""
"09/27/2021","Journaled Shares","MPC","MARATHON PETE CORP","-33.6613","$63.495","",""
"09/27/2021","Journaled Shares","GRMN","GARMIN LTD F","-11.448","$169.3265","",""
"09/27/2021","Journaled Shares","INCY","INCYTE CORP","-27.9721","$68.44","",""
"09/27/2021","Journaled Shares","BA","BOEING CO","-9.3641","$227.935","",""
"09/27/2021","Journaled Shares","AZO","AUTOZONE INC","-1.2908","$1700.01","",""
"09/27/2021","Journaled Shares","CTSH","COGNIZANT TECH SOLU CLASS A","-25.9336","$77.37","",""
"09/27/2021","Journaled Shares","INTC","INTEL CORP","-36.6851","$54.4289","",""
"09/27/2021","Journaled Shares","MPWR","MONOLITHIC POWER SYS","-3.9996","$506.79","",""
"09/27/2021","Journaled Shares","AME","AMETEK INC","-15.151","$130.37","",""
"09/27/2021","Journaled Shares","EIX","EDISON INTERNTNL","-34.3477","$58.22","",""
"09/27/2021","Journaled Shares","AAL","AMERICAN AIRLS GROUP","-99.5619","$22.0709","",""
"09/27/2021","Journaled Shares","ACN","ACCENTURE PLC FCLASS A","-5.8652","$334.6824","",""
"09/27/2021","Journaled Shares","JCI","JOHNSON CONTROLS INTER F","-27.4423","$73.43","",""
"09/27/2021","Journaled Shares","DFS","DISCOVER FINL S","-16.4133","$132.05","",""
"09/27/2021","Journaled Shares","LRCX","LAM RESEARCH CORP","-3.4134","$609.745","",""
"09/27/2021","Journaled Shares","ICE","INTERCONTINENTAL EXC","-16.7364","$119.3674","",""
"09/27/2021","Journaled Shares","FRT","FEDERAL REALTY INVT TR REIT","-16.7923","$121.02","",""
"09/27/2021","Journaled Shares","MTB","M & T BANK CORP","-14.0413","$148.1945","",""
"09/27/2021","Journaled Shares","DLR","DIGITAL REALTY TRUST REIT","-12.8191","$152.23","",""
"09/27/2021","Journaled Shares","HST","HOST HOTELS & RESORT","-123.533","$17.43","",""
"09/27/2021","Journaled Shares","HBI","HANESBRANDS INC","-105.7753","$18.9199","",""
"09/27/2021","Journaled Shares","BXP","BOSTON PROPERTIES REIT","-17.838","$114.2561","",""
"09/27/2021","Journaled Shares","KMB","KIMBERLY CLARK CORP","-14.7964","$133.06","",""
"09/27/2021","Journaled Shares","FISV","FISERV INC","-17.9243","$109.94","",""
"09/27/2021","Journaled Shares","MSCI","MSCI INC","-3.074","$648.835","",""
"09/27/2021","Journaled Shares","MSFT","MICROSOFT CORP","-6.6539","$294.14","",""
"09/27/2021","Journaled Shares","JKHY","HENRY JACK & ASSOC","-11.8975","$171.30","",""
"09/27/2021","Journaled Shares","BLL","BALL CORP","-20.9065","$91.52","",""
"09/27/2021","Journaled Shares","JNJ","JOHNSON & JOHNSON","-12.2028","$163.76","",""
"09/27/2021","Journaled Shares","ADSK","AUTODESK INC","-6.958","$291.3099","",""
"09/27/2021","Journaled Shares","MMM","3M CO","-11.2047","$181.8621","",""
"09/27/2021","Journaled Shares","HON","HONEYWELL INTL INC","-8.8967","$219.57","",""
"09/27/2021","Journaled Shares","MRNA","MODERNA INC","-4.4049","$414.92","",""
"09/27/2021","Journaled Shares","CBRE","CBRE GROUP INC CLASS A","-20.2566","$97.15","",""
"09/27/2021","Journaled Shares","HD","HOME DEPOT INC","-5.9769","$343.49","",""
"09/27/2021","Journaled Shares","EQIX","EQUINIX INC REIT","-2.3635","$819.765","",""
"09/27/2021","Journaled Shares","MDT","MEDTRONIC PLC F","-15.6064","$129.80","",""
"09/27/2021","Journaled Shares","FITB","FIFTH THIRD BANCORP","-51.2715","$42.9101","",""
"09/27/2021","Journaled Shares","DG","DOLLAR GENERAL CORP","-9.1135","$218.6934","",""
"09/27/2021","Journaled Shares","KEYS","KEYSIGHT TECH INC","-11.4946","$175.75","",""
"09/27/2021","Journaled Shares","HII","HUNTINGTON INGALLS","-10.0095","$198.77","",""
"09/27/2021","Journaled Shares","MCK","MCKESSON CORP","-9.9501","$203.93","",""
"09/27/2021","Journaled Shares","MOS","THE MOSAIC CO","-61.4758","$37.19","",""
"09/27/2021","Journaled Shares","JPM","JPMORGAN CHASE & CO","-12.9735","$166.64","",""
"09/27/2021","Journaled Shares","CVS","CVS HEALTH CORP","-23.7022","$85.79","",""
"09/27/2021","Journaled Shares","MRO","MARATHON OIL CORP","-159.5188","$13.6107","",""
"09/27/2021","Journaled Shares","EXC","EXELON CORP","-39.8644","$49.573","",""
"09/27/2021","Journaled Shares","CVX","CHEVRON CORP","-20.6932","$103.5771","",""
"09/27/2021","Journaled Shares","AMD","ADVANCED MICRO DEVIC","-18.7603","$103.785","",""
"09/27/2021","Journaled Shares","AMAT","APPLIED MATERIALS","-14.7503","$141.4143","",""
"09/27/2021","Journaled Shares","FIS","FIDELITY NATL INFO","-16.0377","$122.93","",""
"09/27/2021","Journaled Shares","INTU","INTUIT INC","-3.4992","$567.50","",""
"09/27/2021","Journaled Shares","HSIC","SCHEIN HENRY INC","-25.9963","$78.75","",""
"09/27/2021","Journaled Shares","IPG","INTERPUBLIC GRP COS","-54.5851","$38.915","",""
"09/27/2021","Journaled Shares","BSX","BOSTON SCIENTIFIC CO","-43.9367","$44.70","",""
"09/27/2021","Journaled Shares","CRM","SALESFORCE COM","-7.7537","$282.165","",""
"09/27/2021","Journaled Shares","MAS","MASCO CORP","-35.6087","$56.26","",""
"09/27/2021","Journaled Shares","HIG","HARTFORD FINL SVC GP","-28.8234","$70.26","",""
"09/27/2021","Journaled Shares","EXPD","EXPEDITORS INTL WASH","-15.8848","$124.5425","",""
"09/27/2021","Journaled Shares","FBHS","FORTUNE BRANDS HM&S","-20.7973","$92.535","",""
"09/27/2021","Journaled Shares","FAST","FASTENAL CO","-37.2093","$53.9178","",""
"09/27/2021","Journaled Shares","DAL","DELTA AIR LINES INC DEL","-49.8628","$44.92","",""
"09/27/2021","Journaled Shares","ABC","AMERISOURCEBERGEN CORP","-16.1214","$122.535","",""
"09/27/2021","Journaled Shares","BIO","BIO-RAD LABS INC CLASS A","-2.4641","$775.88","",""
"09/27/2021","Journaled Shares","DGX","QUEST DIAGNOSTIC INC","-12.8473","$152.3512","",""
"09/27/2021","Journaled Shares","BDX","BECTON DICKINSON&CO","-7.6642","$250.93","",""
"09/27/2021","Journaled Shares","ADM","ARCHER DANIELS MIDLAND C","-33.4082","$60.3515","",""
"09/27/2021","Journaled Shares","AVB","AVALONBAY CMNTYS INC REIT","-8.7753","$227.345","",""
"09/27/2021","Journaled Shares","ECL","ECOLAB INC","-8.8103","$222.68","",""
"09/27/2021","Journaled Shares","EW","EDWARDS LIFESCIENCES","-16.5166","$117.745","",""
"09/27/2021","Journaled Shares","CME","CME GROUP INC CLASS A","-10.3879","$201.25","",""
"09/27/2021","Journaled Shares","EBAY","EBAY INC","-27.109","$72.79","",""
"09/27/2021","Journaled Shares","CMG","CHIPOTLE MEXICAN GRL","-1.0446","$1916.1949","",""
"09/27/2021","Journaled Shares","ED","CONSOLIDATED EDISON","-26.6887","$73.779","",""
"09/27/2021","Journaled Shares","GIS","GENERAL MILLS INC","-34.2553","$60.81","",""
"09/27/2021","Journaled Shares","HSY","HERSHEY CO","-11.4195","$174.62","",""
"09/27/2021","Journaled Shares","MCO","MOODYS CORP","-5.4056","$371.25","",""
"09/27/2021","Journaled Shares","COO","COOPER COMPANIES","-4.4922","$434.455","",""
"09/27/2021","Journaled Shares","CF","CF INDUSTRIES HLDG","-44.0451","$56.92","",""
"09/27/2021","Journaled Shares","KMI","KINDER MORGAN INC","-126.7611","$16.9056","",""
"09/27/2021","Journaled Shares","HES","HESS CORP","-29.4178","$78.1701","",""
"09/27/2021","Journaled Shares","CHD","CHURCH & DWIGHT CO","-23.8441","$82.84","",""
"09/27/2021","Journaled Shares","MKC","MC CORMICK & CO INC","-23.3867","$85.0931","",""
"09/27/2021","Journaled Shares","AIG","AMERICAN INTL GROUP","-36.4644","$56.3699","",""
"09/27/2021","Journaled Shares","MMC","MARSH & MC LENNAN CO","-12.8561","$158.50","",""
"09/27/2021","Journaled Shares","FTNT","FORTINET INC","-6.3928","$301.69","",""
"09/27/2021","Journaled Shares","KIM","KIMCO REALTY CORP REIT","-94.4376","$21.98","",""
"09/27/2021","Journaled Shares","ETN","EATON CORP PLC F","-12.3194","$156.0542","",""
"09/27/2021","Journaled Shares","MSI","MOTOROLA SOLUTIONS","-8.2867","$240.11","",""
"09/27/2021","Journaled Shares","COP","CONOCOPHILLIPS","-35.652","$66.305","",""
"09/27/2021","Journaled Shares","F","FORD MOTOR CO","-155.7911","$14.13","",""
"09/27/2021","Journaled Shares","DISH","DISH NETWORK CORP CLASS A","-46.2214","$44.635","",""
"09/27/2021","Journaled Shares","ITW","ILLINOIS TOOL WORKS","-9.0612","$216.6117","",""
"09/27/2021","Journaled Shares","LUV","SOUTHWEST AIRLINES","-40.8847","$54.1001","",""
"09/27/2021","Journaled Shares","LEN","LENNAR CORP CLASS A","-20.4064","$98.935","",""
"09/27/2021","Journaled Shares","ABT","ABBOTT LABORATORIES","-15.6132","$121.57","",""
"09/27/2021","Journaled Shares","IT","GARTNER INC","-6.3324","$320.88","",""
"09/27/2021","Journaled Shares","HAL","HALLIBURTON CO HLDG","-101.5331","$22.045","",""
"09/27/2021","Journaled Shares","CNC","CENTENE CORP","-33.1807","$64.01","",""
"09/27/2021","Journaled Shares","BAC","BANK OF AMERICA CORP","-48.7832","$43.2784","",""
"09/27/2021","Journaled Shares","MGM","MGM RESORTS INTL","-48.1486","$45.565","",""
"09/27/2021","Journaled Shares","DVN","DEVON ENERGY CORP","-70.5027","$34.4117","",""
"09/27/2021","Journaled Shares","BWA","BORG WARNER INC","-46.9087","$44.4511","",""
"09/27/2021","Journaled Shares","MHK","MOHAWK INDUSTRIES","-11.0381","$187.66","",""
"09/27/2021","Journaled Shares","GM","GENERAL MOTORS CO","-39.779","$53.1427","",""
"09/27/2021","Journaled Shares","MU","MICRON TECHNOLOGY","-26.824","$74.41","",""
"09/27/2021","Journaled Shares","CAH","CARDINAL HEALTH INC","-37.3708","$51.615","",""
"09/27/2021","Journaled Shares","ADI","ANALOG DEVICES INC","-11.7935","$176.9909","",""
"09/27/2021","Journaled Shares","APD","AIR PROD & CHEMICALS","-7.4612","$265.2599","",""
"09/27/2021","Journaled Shares","KEY","KEYCORP INC","-100.1617","$21.815","",""
"09/27/2021","Journaled Shares","JBHT","J B HUNT TRANSPORT","-11.3852","$174.64","",""
"09/27/2021","Journaled Shares","AJG","ARTHUR J GALLAGHER&C","-13.7112","$153.205","",""
"09/27/2021","Journaled Shares","CPRT","COPART INC","-13.818","$147.0001","",""
"09/27/2021","Journaled Shares","ALL","ALLSTATE CORP","-15.0749","$131.705","",""
"09/27/2021","Journaled Shares","DRI","DARDEN RESTAURANTS","-13.3275","$160.20","",""
"09/27/2021","Journaled Shares","CINF","CINCINNATI FINL","-16.6708","$117.96","",""
"09/27/2021","Journaled Shares","MTD","METTLER TOLEDO INTL","-1.2778","$1493.91","",""
"09/27/2021","Journaled Shares","BRKB","BERKSHIRE HATHAWAY CLASS B","-7.1669","$280.31","",""
"09/27/2021","Journaled Shares","L","LOEWS CORP","-38.3995","$53.99","",""
"09/27/2021","Journaled Shares","COG","CABOT OIL & GAS CORP","-109.0649","$21.24","",""
"09/27/2021","Journaled Shares","KLAC","KLA CORP","-5.5841","$364.635","",""
"09/27/2021","Journaled Shares","GWW","WW GRAINGER INC","-4.7961","$407.344","",""
"09/27/2021","Journaled Shares","ESS","ESSEX PROPERTY TR REIT","-6.1686","$330.065","",""
"09/27/2021","Journaled Shares","IDXX","IDEXX LABS INC","-2.9317","$653.957","",""
"09/27/2021","Journaled Shares","GPC","GENUINE PARTS CO","-16.7205","$124.3894","",""
"09/27/2021","Journaled Shares","MET","METLIFE INC","-34.0612","$63.40","",""
"09/27/2021","Journaled Shares","APH","AMPHENOL CORP CLASS A","-26.4984","$77.18","",""
"09/27/2021","Journaled Shares","AXP","AMERICAN EXPRESS CO","-12.496","$178.39","",""
"09/27/2021","Journaled Shares","MKTX","MARKETAXESS HOLDINGS","-4.6967","$420.46","",""
"09/27/2021","Journaled Shares","MAA","MID AMERICA APARTMENT COREIT","-10.5792","$189.98","",""
"09/27/2021","Journaled Shares","MDLZ","MONDELEZ INTL CLASS A","-33.1521","$60.455","",""
"09/27/2021","Journaled Shares","ALGN","ALIGN TECHNOLOGY INC","-2.7496","$710.4699","",""
"09/27/2021","Journaled Shares","MCD","MCDONALDS CORP","-8.3193","$247.81","",""
"09/27/2021","Journaled Shares","FE","FIRSTENERGY CORP","-52.8852","$37.1789","",""
"09/27/2021","Journaled Shares","LKQ","LKQ CORP","-40.0753","$52.65","",""
"09/27/2021","Journaled Shares","BIIB","BIOGEN INC","-6.661","$290.63","",""
"09/27/2021","Journaled Shares","AAP","ADVANCE AUTO PARTS","-9.9485","$219.43","",""
"09/27/2021","Journaled Shares","A","AGILENT TECHNOLOGIES","-11.2202","$166.22","",""
"09/27/2021","Journaled Shares","FLT","FLEETCOR TECHNOLOGIE","-7.5908","$269.775","",""
"09/27/2021","Journaled Shares","FANG","DIAMONDBACK ENERGY","-26.2567","$93.43","",""
"09/27/2021","Journaled Shares","C","CITIGROUP INC","-28.4058","$72.28","",""
"09/27/2021","Journaled Shares","AES","AES CORP","-82.8912","$23.60","",""
"09/27/2021","Journaled Shares","DXCM","DEXCOM INC","-3.5953","$543.4201","",""
"09/27/2021","Journaled Shares","CPB","CAMPBELL SOUP CO","-46.4274","$42.86","",""
"09/27/2021","Journaled Shares","MLM","MARTIN MARIETTA MATERIAL","-5.7996","$356.0186","",""
"09/27/2021","Journaled Shares","LOW","LOWES COMPANIES INC","-9.7499","$211.94","",""
"09/27/2021","Journaled Shares","CMA","COMERICA INCORPORATE","-27.3119","$81.5292","",""
"09/27/2021","Journaled Shares","FFIV","F5 NETWORKS INC","-9.8225","$203.79","",""
"09/27/2021","Journaled Shares","KO","THE COCA-COLA CO","-36.9003","$54.095","",""
"09/27/2021","Journaled Shares","COF","CAPITAL ONE FC","-12.7024","$169.25","",""
"09/27/2021","Journaled Shares","HRL","HORMEL FOODS CORP","-47.4608","$41.295","",""
"09/27/2021","Journaled Shares","LNT","ALLIANT ENERGY CORP","-34.4435","$57.38","",""
"09/27/2021","Journaled Shares","MCHP","MICROCHIP TECHNOLOGY TRADES WITH DUE BILLS","-12.6974","$163.32","",""
"09/27/2021","Journaled Shares","ADP","AUTO DATA PROCESSING","-9.8161","$202.3405","",""
"09/27/2021","Journaled Shares","ALK","ALASKA AIR GROUP INC","-34.4024","$62.75","",""
"09/27/2021","Journaled Shares","HCA","HCA HEALTHCARE INC","-7.7449","$258.53","",""
"09/27/2021","Journaled Shares","LMT","LOCKHEED MARTIN CORP","-5.8931","$356.765","",""
"09/27/2021","Journaled Shares","KMX","CARMAX INC","-14.4142","$146.73","",""
"09/27/2021","Journaled Shares","LNC","LINCOLN NTNL CO","-31.5556","$71.43","",""
"09/27/2021","Journaled Shares","IVZ","INVESCO LTD F","-80.5866","$25.43","",""
"09/27/2021","Journaled Shares","KR","KROGER CO","-48.7234","$40.75","",""
"09/27/2021","Journaled Shares","CAG","CONAGRA BRANDS INC","-59.9556","$33.77","",""
"09/27/2021","Journaled Shares","BR","BROADRIDGE FINL SOLU","-11.6713","$168.36","",""
"09/27/2021","Journaled Shares","FRC","FIRST REPUBLIC BANK","-10.0347","$199.16","",""
"09/27/2021","Journaled Shares","ISRG","INTUITIVE SURGICAL TRADES WITH DUE BILLS","-1.9379","$1023.03","",""
"09/27/2021","Journaled Shares","GPS","GAP INC","-82.0411","$24.72","",""
"09/27/2021","Journaled Shares","MAR","MARRIOTT INTL INC CLASS A","-14.0118","$155.28","",""
"09/27/2021","Journaled Shares","EOG","EOG RESOURCES INC","-29.5438","$82.05","",""
"09/27/2021","Journaled Shares","CL","COLGATE-PALMOLIVE CO","-25.8281","$76.4391","",""
"09/27/2021","Journaled Shares","EXPE","EXPEDIA GROUP INC.","-13.6267","$174.33","",""
"09/27/2021","Journaled Shares","ABBV","ABBVIE INC","-18.6011","$107.5805","",""
"09/27/2021","Journaled Shares","BAX","BAXTER INTERNTNL","-24.3849","$80.37","",""
"09/27/2021","Journaled Shares","LLY","LILLY ELI & CO","-8.6045","$228.07","",""
"09/27/2021","Journaled Shares","IBM","IBM CORP","-14.4812","$138.255","",""
"09/27/2021","Journaled Shares","MO","ALTRIA GROUP INC","-41.1963","$48.695","",""
"09/27/2021","Journaled Shares","LYB","LYONDELLBASELL INDS FCLASS A","-22.2888","$95.51","",""
"09/27/2021","Journaled Shares","LEG","LEGGETT & PLATT INC","-43.9463","$47.75","",""
"09/27/2021","Journaled Shares","COST","COSTCO WHOLESALE CO","-4.2747","$466.59","",""
"09/27/2021","Journaled Shares","APA","APA CORP","-106.5093","$23.1434","",""
"09/27/2021","Journaled Shares","LUMN","LUMEN TECHNOLOGIES INC","-158.0065","$13.2923","",""
"09/27/2021","Journaled Shares","CZR","CAESARS ENTMT INC NEW","-18.9498","$114.34","",""
"09/27/2021","Journaled Shares","HWM","HOWMET AEROSPACE INC","-62.9168","$32.48","",""
"09/27/2021","Journaled Shares","IR","INGERSOLL RAND INC","-36.5323","$54.37","",""
"09/27/2021","Journaled Shares","AMCR","AMCOR PLC F","-164.0958","$11.835","",""
"09/27/2021","Journaled Shares","LHX","L3HARRIS TECHNOLOGIES IN","-9.0305","$224.6184","",""
"09/27/2021","Journaled Shares","FOXA","FOX CORP CLASS A","-55.2364","$39.64","",""
"09/27/2021","Journaled Shares","FOX","FOX CORP CLASS B","-59.6029","$36.6001","",""
"09/27/2021","Journaled Shares","CBOE","CBOE GLOBAL MKTS INC","-16.0955","$125.10","",""
"09/27/2021","Journaled Shares","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","-13","$154.815","",""
"09/27/2021","Journaled Shares","CCL","CARNIVAL CORP F","-86.2154","$26.94","",""
"09/27/2021","Journaled Shares","AVGO","BROADCOM INC","-4.0407","$499.9999","",""
"09/27/2021","Journaled Shares","BKNG","BOOKING HOLDINGS INC","-0.8607","$2523.6951","",""
"09/27/2021","Journaled Shares","APTV","APTIV PLC F","-13.4502","$151.85","",""
"09/27/2021","Journaled Shares","IQV","IQVIA HOLDINGS INC","-7.6356","$254.43","",""
"09/27/2021","Journaled Shares","LIN","LINDE PLC F","-6.616","$311.45","",""
"09/27/2021","Journaled Shares","GILD","GILEAD SCIENCES INC","-28.1381","$70.94","",""
"09/27/2021","Journaled Shares","BKR","BAKER HUGHES CO. CLASS A","-84.8968","$25.055","",""
"09/27/2021","Journaled Shares","DXC","D X C TECHNOLOGY CO 0050","-56.9875","$35.34","",""
"09/27/2021","Journaled Shares","LW","LAMB WESTON HOLDINGS INC","-32.7987","$61.51","",""
"09/27/2021","Journaled Shares","HLT","HILTON WORLDWIDE HLD","-15.5891","$138.51","",""
"09/27/2021","Journaled Shares","INFO","IHS MARKIT LTD F","-16.401","$123.495","",""
"09/27/2021","Journaled Shares","GOOG","ALPHABET INC. CLASS C","-0.6988","$2815.54","",""
"09/27/2021","Journaled Shares","GOOGL","ALPHABET INC. CLASS A","-0.7038","$2807.4199","",""
"09/27/2021","Journaled Shares","MNST","MONSTER BEVERAGE CORPORA","-21.6468","$92.36","",""
"09/27/2021","Journaled Shares","KHC","KRAFT HEINZ CO","-54.7075","$36.95","",""
"09/27/2021","Journaled Shares","ETSY","ETSY INC","-9.0763","$220.75","",""
"09/27/2021","Journaled Shares","LH","LAB CO OF AMER HLDG","-6.7661","$292.57","",""
"09/27/2021","Journaled Shares","CTXS","CITRIX SYSTEMS INC","-18.6668","$109.755","",""
"09/27/2021","Journaled Shares","CRL","CHARLES RIVER LABS","-4.5055","$442.00","",""
"09/27/2021","Journaled Shares","LVS","LAS VEGAS SANDS CORP","-53.2793","$37.79","",""
"09/27/2021","Journal","","JOURNAL TO 35602508","","","","-$277.54"
"09/24/2021","Buy","NCLH","NORWEGIAN CRUISE LIN F","71.4089","$28.0077","","-$2000.00"
"09/24/2021","Buy","NLOK","NORTONLIFELOCK INC","77.7061","$25.738","","-$2000.00"
"09/24/2021","Buy","NOC","NORTHROP GRUMMAN CORP","5.6368","$354.81","","-$1999.99"
"09/24/2021","Buy","NDAQ","NASDAQ INC","10.1848","$196.37","","-$1999.99"
"09/24/2021","Buy","NLSN","NIELSEN HOLDINGS PLC F","100.4116","$19.918","","-$2000.00"
"09/24/2021","Buy","NKE","NIKE INC CLASS B","13.4349","$148.866","","-$2000.00"
"09/24/2021","Buy","NFLX","NETFLIX INC","3.4144","$585.7456","","-$1999.97"
"09/24/2021","Buy","NI","NISOURCE INC 00500","83.1255","$24.06","","-$2000.00"
"09/24/2021","Buy","NEE","NEXTERA ENERGY INC","24.6341","$81.188","","-$1999.99"
"09/24/2021","Buy","NEM","NEWMONT CORP","36.9221","$54.168","","-$2000.00"
"09/24/2021","Sell","D","DOMINION ENERGY INC","0.7898","$74.555","","$58.88"
"09/24/2021","Sell","D","DOMINION ENERGY INC","25","$74.555","$0.01","$1863.87"
"09/24/2021","Sell","FMC","F M C CORP","0.3364","$94.491","","$31.79"
"09/24/2021","Sell","FMC","F M C CORP","20","$94.491","$0.01","$1889.81"
"09/24/2021","Sell","BFB","BROWN FORMAN CORP CLASS B","0.0292","$68.5533","","$2.00"
"09/24/2021","Sell","BFB","BROWN FORMAN CORP CLASS B","28","$68.5533","$0.01","$1919.48"
"09/24/2021","Sell","ARE","ALEXANDRIA REAL EST REIT","0.8081","$195.6673","","$158.12"
"09/24/2021","Sell","ARE","ALEXANDRIA REAL EST REIT","9","$195.6673","$0.01","$1761.00"
"09/24/2021","Sell","ANSS","ANSYS INC","0.3657","$357.65","","$130.79"
"09/24/2021","Sell","ANSS","ANSYS INC","5","$357.65","$0.01","$1788.24"
"09/24/2021","Sell","ENPH","ENPHASE ENERGY INC","0.4395","$154.22","","$67.78"
"09/24/2021","Sell","ENPH","ENPHASE ENERGY INC","12","$154.22","$0.01","$1850.63"
"09/24/2021","Sell","DISCK","DISCOVERY INC CLASS C","0.3453","$24.391","","$8.42"
"09/24/2021","Sell","DISCK","DISCOVERY INC CLASS C","78","$24.391","$0.01","$1902.49"
"09/24/2021","Sell","DISCA","DISCOVERY INC CLASS A","0.1371","$25.45","","$3.49"
"09/24/2021","Sell","DISCA","DISCOVERY INC CLASS A","75","$25.45","$0.01","$1908.74"
"09/24/2021","Sell","DPZ","DOMINOS PIZZA INC","0.8997","$488.1655","","$439.20"
"09/24/2021","Sell","DPZ","DOMINOS PIZZA INC","3","$488.1655","$0.01","$1464.49"
"09/24/2021","Sell","DHI","D R HORTON CO","0.9159","$86.8903","","$79.58"
"09/24/2021","Sell","DHI","D R HORTON CO","21","$86.8903","$0.01","$1824.69"
"09/24/2021","Sell","AMT","AMERN TOWER CORP REIT","0.7073","$283.48","","$200.51"
"09/24/2021","Sell","AMT","AMERN TOWER CORP REIT","6","$283.48","$0.01","$1700.87"
"09/23/2021","Buy","MU","MICRON TECHNOLOGY","26.824","$74.56","","-$2000.00"
"09/23/2021","Buy","MSI","MOTOROLA SOLUTIONS","8.2867","$241.35","","-$2000.00"
"09/23/2021","Buy","MTB","M & T BANK CORP","14.0413","$142.4362","","-$1999.99"
"09/23/2021","Buy","MTD","METTLER TOLEDO INTL","1.2778","$1565.128","","-$1999.92"
"09/23/2021","Buy","MSFT","MICROSOFT CORP","6.6539","$300.575","","-$2000.00"
"09/23/2021","Buy","MRNA","MODERNA INC","4.4049","$454.0325","","-$1999.97"
"09/23/2021","Buy","MSCI","MSCI INC","3.074","$650.608","","-$1999.97"
"09/23/2021","Buy","MS","MORGAN STANLEY","19.3633","$103.288","","-$2000.00"
"09/23/2021","Buy","MRO","MARATHON OIL CORP","159.5188","$12.5377","","-$2000.00"
"09/23/2021","Buy","MRK","MERCK & CO. INC.","27.1709","$73.608","","-$2000.00"
"09/23/2021","Sell","DRE","DUKE REALTY CORP REIT","0.9817","$49.4401","","$48.54"
"09/23/2021","Sell","DRE","DUKE REALTY CORP REIT","38","$49.4401","$0.01","$1878.71"
"09/23/2021","Sell","CMS","C M S ENERGY CORP","0.3234","$61.441","","$19.87"
"09/23/2021","Sell","CMS","C M S ENERGY CORP","31","$61.441","$0.01","$1904.66"
"09/23/2021","Sell","DTE","DTE ENERGY CO","0.7768","$114.38","","$88.85"
"09/23/2021","Sell","DTE","DTE ENERGY CO","16","$114.38","$0.01","$1830.07"
"09/23/2021","Sell","BBY","BEST BUY INC","0.8332","$107.5453","","$89.61"
"09/23/2021","Sell","BBY","BEST BUY INC","17","$107.5453","$0.01","$1828.26"
"09/23/2021","Sell","CLX","CLOROX CO","0.8165","$162.205","","$132.44"
"09/23/2021","Sell","CLX","CLOROX CO","11","$162.205","$0.01","$1784.25"
"09/23/2021","Sell","CCI","CROWN CASTLE INTL CO REIT","0.3361","$185.175","","$62.24"
"09/23/2021","Sell","CCI","CROWN CASTLE INTL CO REIT","10","$185.175","$0.01","$1851.74"
"09/23/2021","Sell","DUK","DUKE ENERGY CORP","0.3824","$98.77","","$37.77"
"09/23/2021","Sell","DUK","DUKE ENERGY CORP","19","$98.77","$0.01","$1876.62"
"09/23/2021","Sell","CHTR","CHARTER COMMUNICATN CLASS A","0.5437","$752.23","","$408.99"
"09/23/2021","Sell","CHTR","CHARTER COMMUNICATN CLASS A","2","$752.23","$0.01","$1504.45"
"09/23/2021","Sell","EXR","EXTRA SPACE STORAGE REIT","0.6327","$178.3801","","$112.86"
"09/23/2021","Sell","EXR","EXTRA SPACE STORAGE REIT","10","$178.3801","$0.01","$1783.79"
"09/23/2021","Sell","ETR","ENTERGY CORP","0.8366","$104.43","","$87.37"
"09/23/2021","Sell","ETR","ENTERGY CORP","17","$104.43","$0.01","$1775.30"
"09/22/2021","Buy","MPC","MARATHON PETE CORP","33.6613","$59.4154","","-$2000.00"
"09/22/2021","Buy","MO","ALTRIA GROUP INC","41.1963","$48.548","","-$2000.00"
"09/22/2021","Buy","MPWR","MONOLITHIC POWER SYS","3.9996","$500.044","","-$1999.98"
"09/22/2021","Buy","MOS","THE MOSAIC CO","61.4758","$32.5331","","-$2000.00"
"09/22/2021","Buy","MNST","MONSTER BEVERAGE CORPORA","21.6468","$92.392","","-$1999.99"
"09/22/2021","Sell","DLTR","DOLLAR TREE INC","0.01","$86.22","","$0.86"
"09/22/2021","Sell","DLTR","DOLLAR TREE INC","22","$86.22","$0.01","$1896.83"
"09/22/2021","Sell","EVRG","EVERGY INC","0.8436","$63.5497","","$53.61"
"09/22/2021","Sell","EVRG","EVERGY INC","29","$63.5497","$0.01","$1842.93"
"09/22/2021","Sell","AWK","AMERICAN WATER WORKS","0.6005","$177.852","","$106.80"
"09/22/2021","Sell","AWK","AMERICAN WATER WORKS","10","$177.852","$0.01","$1778.51"
"09/22/2021","Sell","ADBE","ADOBE INC","0.02","$622.30","","$12.45"
"09/22/2021","Sell","ADBE","ADOBE INC","3","$622.30","$0.01","$1866.89"
"09/22/2021","Sell","DIS","WALT DISNEY CO","0.7501","$174.4516","","$130.86"
"09/22/2021","Sell","DIS","WALT DISNEY CO","10","$174.4516","$0.01","$1744.51"
"09/22/2021","Sell","FDX","FEDEX CORP","0.7052","$230.5182","","$162.56"
"09/22/2021","Sell","FDX","FEDEX CORP","7","$230.5182","$0.01","$1613.62"
"09/21/2021","Buy","MMM","3M CO","11.2047","$178.4962","","-$2000.00"
"09/21/2021","Buy","MGM","MGM RESORTS INTL","48.1486","$41.538","","-$2000.00"
"09/21/2021","Buy","MMC","MARSH & MC LENNAN CO","12.8561","$155.568","","-$2000.00"
"09/21/2021","Buy","MLM","MARTIN MARIETTA MATERIAL","5.7996","$344.8465","","-$1999.97"
"09/21/2021","Buy","MHK","MOHAWK INDUSTRIES","11.0381","$181.19","","-$1999.99"
"09/21/2021","Buy","MKTX","MARKETAXESS HOLDINGS","4.6967","$425.822","","-$1999.96"
"09/21/2021","Buy","MKC","MC CORMICK & CO INC","23.3867","$85.5185","","-$2000.00"
"09/21/2021","Buy","MDT","MEDTRONIC PLC F","15.6064","$128.152","","-$1999.99"
"09/21/2021","Buy","MCK","MCKESSON CORP","9.9501","$201.002","","-$1999.99"
"09/21/2021","Buy","MDLZ","MONDELEZ INTL CLASS A","33.1521","$60.328","","-$2000.00"
"09/21/2021","Buy","MET","METLIFE INC","34.0612","$58.7177","","-$2000.00"
"09/21/2021","Buy","MCO","MOODYS CORP","5.4056","$369.984","","-$1999.99"
"09/21/2021","Buy","MAR","MARRIOTT INTL INC CLASS A","14.0118","$142.736","","-$1999.99"
"09/21/2021","Buy","MA","MASTERCARD INC CLASS A","5.9041","$338.7439","","-$1999.98"
"09/21/2021","Buy","MCHP","MICROCHIP TECHNOLOGY TRADES WITH DUE BILLS","12.6974","$157.512","","-$1999.99"
"09/21/2021","Buy","LYV","LIVE NATION ENTRTMNT","23.434","$85.346","","-$2000.00"
"09/21/2021","Buy","LYB","LYONDELLBASELL INDS FCLASS A","22.2888","$89.7308","","-$1999.99"
"09/21/2021","Buy","MAS","MASCO CORP","35.6087","$56.166","","-$2000.00"
"09/21/2021","Buy","MCD","MCDONALDS CORP","8.3193","$240.402","","-$1999.98"
"09/21/2021","Buy","MAA","MID AMERICA APARTMENT COREIT","10.5792","$189.05","","-$2000.00"
"09/21/2021","Sell","CSCO","CISCO SYSTEMS INC","0.3006","$55.341","","$16.64"
"09/21/2021","Sell","CSCO","CISCO SYSTEMS INC","34","$55.341","$0.01","$1881.58"
"09/21/2021","Sell","ES","EVERSOURCE ENERGY","0.6541","$83.7761","","$54.80"
"09/21/2021","Sell","ES","EVERSOURCE ENERGY","22","$83.7761","$0.01","$1843.06"
"09/21/2021","Sell","EFX","EQUIFAX INC","0.2781","$260.8019","","$72.53"
"09/21/2021","Sell","EFX","EQUIFAX INC","7","$260.8019","$0.01","$1825.60"
"09/21/2021","Sell","BMY","BRISTOL-MYERS SQUIBB","0.4377","$60.3637","","$26.42"
"09/21/2021","Sell","BMY","BRISTOL-MYERS SQUIBB","31","$60.3637","$0.01","$1871.26"
"09/21/2021","Sell","HPQ","HP INC.","0.7513","$26.8201","","$20.15"
"09/21/2021","Sell","HPQ","HP INC.","70","$26.8201","$0.01","$1877.40"
"09/21/2021","Sell","CSX","CSX CORP","0.882","$29.7021","","$26.20"
"09/21/2021","Sell","CSX","CSX CORP","63","$29.7021","$0.01","$1871.22"
"09/21/2021","Sell","HAS","HASBRO INC","0.2527","$93.6435","","$23.66"
"09/21/2021","Sell","HAS","HASBRO INC","20","$93.6435","$0.01","$1872.86"
"09/21/2021","Sell","HOLX","HOLOGIC INC","0.8112","$76.3309","","$61.92"
"09/21/2021","Sell","HOLX","HOLOGIC INC","24","$76.3309","$0.01","$1831.93"
"09/21/2021","Sell","J","JACOBS ENGINEERING","0.8726","$127.07","","$110.88"
"09/21/2021","Sell","J","JACOBS ENGINEERING","14","$127.07","$0.01","$1778.97"
"09/21/2021","Sell","GPN","GLOBAL PAYMENTS INC","0.9468","$157.85","","$149.45"
"09/21/2021","Sell","GPN","GLOBAL PAYMENTS INC","11","$157.85","$0.01","$1736.34"
"09/21/2021","Sell","AKAM","AKAMAI TECHNOLOGIES INC","0.5839","$107.27","","$62.63"
"09/21/2021","Sell","AKAM","AKAMAI TECHNOLOGIES INC","17","$107.27","$0.01","$1823.58"
"09/21/2021","Sell","CMI","CUMMINS INC","0.5931","$219.1519","","$129.98"
"09/21/2021","Sell","CMI","CUMMINS INC","8","$219.1519","$0.01","$1753.21"
"09/21/2021","Sell","ILMN","ILLUMINA INC","0.3145","$436.6206","","$137.32"
"09/21/2021","Sell","ILMN","ILLUMINA INC","4","$436.6206","$0.01","$1746.47"
"09/21/2021","Sell","GE","GENERAL ELECTRIC CO","0.4103","$97.06","","$39.82"
"09/21/2021","Sell","GE","GENERAL ELECTRIC CO","19","$97.06","$0.01","$1844.13"
"09/21/2021","Sell","ALLE","ALLEGION PUBLIC LTD F","0.9467","$135.015","","$127.82"
"09/21/2021","Sell","ALLE","ALLEGION PUBLIC LTD F","13","$135.015","$0.01","$1755.19"
"09/21/2021","Sell","AMP","AMERIPRISE FINL","0.4043","$254.42","","$102.86"
"09/21/2021","Sell","AMP","AMERIPRISE FINL","7","$254.42","$0.01","$1780.93"
"09/21/2021","Sell","ATVI","ACTIVISION BLIZZARD","0.616","$73.48","","$45.26"
"09/21/2021","Sell","ATVI","ACTIVISION BLIZZARD","25","$73.48","$0.01","$1836.99"
"09/21/2021","Sell","AEE","AMEREN CORP","0.5949","$83.29","","$49.55"
"09/21/2021","Sell","AEE","AMEREN CORP","22","$83.29","$0.01","$1832.37"
"09/21/2021","Sell","GD","GENERAL DYNAMICS CO","0.8129","$191.5042","","$155.67"
"09/21/2021","Sell","GD","GENERAL DYNAMICS CO","9","$191.5042","$0.01","$1723.53"
"09/21/2021","Sell","ABMD","ABIOMED INC","0.427","$345.40","","$147.49"
"09/21/2021","Sell","ABMD","ABIOMED INC","5","$345.40","$0.01","$1726.99"
"09/21/2021","Sell","CARR","CARRIER GLOBAL CORP","0.2435","$52.20","","$12.71"
"09/21/2021","Sell","CARR","CARRIER GLOBAL CORP","35","$52.20","$0.01","$1826.99"
"09/20/2021","Buy","LW","LAMB WESTON HOLDINGS INC","32.7987","$60.978","","-$2000.00"
"09/20/2021","Buy","LUV","SOUTHWEST AIRLINES","40.8847","$48.918","","-$2000.00"
"09/20/2021","Buy","LVS","LAS VEGAS SANDS CORP","53.2793","$37.538","","-$2000.00"
"09/20/2021","Buy","LUMN","LUMEN TECHNOLOGIES INC","158.0065","$12.6577","","-$2000.00"
"09/20/2021","Buy","LMT","LOCKHEED MARTIN CORP","5.8931","$339.378","","-$1999.99"
"09/20/2021","Buy","LRCX","LAM RESEARCH CORP","3.4134","$585.9119","","-$1999.95"
"09/20/2021","Buy","LNC","LINCOLN NTNL CO","31.5556","$63.38","","-$1999.99"
"09/20/2021","Buy","LOW","LOWES COMPANIES INC","9.7499","$205.13","","-$2000.00"
"09/20/2021","Buy","LNT","ALLIANT ENERGY CORP","34.4435","$58.066","","-$2000.00"
"09/20/2021","Buy","LLY","LILLY ELI & CO","8.6045","$232.4355","","-$1999.99"
"09/20/2021","Buy","LH","LAB CO OF AMER HLDG","6.7661","$295.59","","-$1999.99"
"09/20/2021","Buy","LKQ","LKQ CORP","40.0753","$49.906","","-$2000.00"
"09/20/2021","Buy","LIN","LINDE PLC F","6.616","$302.294","","-$1999.98"
"09/20/2021","Buy","LHX","L3HARRIS TECHNOLOGIES IN","9.0305","$221.47","","-$1999.98"
"09/20/2021","Buy","LEN","LENNAR CORP CLASS A","20.4064","$98.008","","-$1999.99"
"09/20/2021","Sell","CMCSA","COMCAST CORP CLASS A","0.5683","$56.2802","","$31.98"
"09/20/2021","Sell","CMCSA","COMCAST CORP CLASS A","33","$56.2802","$0.01","$1857.24"
"09/20/2021","Sell","FTV","FORTIVE CORP DISC 00500","0.2964","$71.685","","$21.25"
"09/20/2021","Sell","FTV","FORTIVE CORP DISC 00500","26","$71.685","$0.01","$1863.80"
"09/20/2021","Sell","CI","CIGNA CORP","0.3283","$201.695","","$66.22"
"09/20/2021","Sell","CI","CIGNA CORP","9","$201.695","$0.01","$1815.25"
"09/20/2021","Sell","AFL","AFLAC INC","0.147","$52.0301","","$7.65"
"09/20/2021","Sell","AFL","AFLAC INC","36","$52.0301","$0.01","$1873.07"
"09/20/2021","Sell","BEN","FRANKLIN RESOURCES","0.5122","$29.5857","","$15.15"
"09/20/2021","Sell","BEN","FRANKLIN RESOURCES","63","$29.5857","$0.01","$1863.89"
"09/20/2021","Sell","CDW","CDW CORP","0.9949","$187.8629","","$186.90"
"09/20/2021","Sell","CDW","CDW CORP","9","$187.8629","$0.01","$1690.76"
"09/20/2021","Sell","AVY","AVERY DENNISON CORP","0.864","$211.6919","","$182.90"
"09/20/2021","Sell","AVY","AVERY DENNISON CORP","8","$211.6919","$0.01","$1693.53"
"09/20/2021","Sell","CTVA","CORTEVA INC","0.5809","$41.0716","","$23.86"
"09/20/2021","Sell","CTVA","CORTEVA INC","45","$41.0716","$0.01","$1848.21"
"09/20/2021","Sell","CNP","CENTERPOINT ENERGY","0.8495","$24.6738","","$20.96"
"09/20/2021","Sell","CNP","CENTERPOINT ENERGY","75","$24.6738","$0.01","$1850.53"
"09/20/2021","Sell","DD","DUPONT DE NEMOURS INC","0.0414","$66.678","","$2.76"
"09/20/2021","Sell","DD","DUPONT DE NEMOURS INC","28","$66.678","$0.01","$1866.97"
"09/20/2021","Sell","GL","GLOBE LIFE INC","0.5335","$86.7475","","$46.28"
"09/20/2021","Sell","GL","GLOBE LIFE INC","21","$86.7475","$0.01","$1821.69"
"09/20/2021","Sell","IP","INTERNTNL PAPER TRADES WITH DUE BILLS","0.8764","$55.075","","$48.27"
"09/20/2021","Sell","IP","INTERNTNL PAPER TRADES WITH DUE BILLS","33","$55.075","$0.01","$1817.47"
"09/20/2021","Sell","CE","CELANESE CORP","0.0314","$142.8723","","$4.49"
"09/20/2021","Sell","CE","CELANESE CORP","13","$142.8723","$0.01","$1857.33"
"09/20/2021","Sell","GS","GOLDMAN SACHS GROUP","0.9352","$375.7501","","$351.40"
"09/20/2021","Sell","GS","GOLDMAN SACHS GROUP","4","$375.7501","$0.01","$1502.99"
"09/20/2021","Sell","FB","FACEBOOK INC CLASS A","0.2376","$354.1429","","$84.14"
"09/20/2021","Sell","FB","FACEBOOK INC CLASS A","5","$354.1429","$0.01","$1770.70"
"09/20/2021","Sell","BK","BANK OF NY MELLON CO","0.7038","$48.925","","$34.43"
"09/20/2021","Sell","BK","BANK OF NY MELLON CO","37","$48.925","$0.01","$1810.22"
"09/20/2021","Buy","KO","THE COCA-COLA CO","36.9003","$54.20","","-$2000.00"
"09/20/2021","Buy","LDOS","LEIDOS HOLDINGS INC","21.6398","$92.422","","-$1999.99"
"09/20/2021","Buy","LEG","LEGGETT & PLATT INC","43.9463","$45.51","","-$2000.00"
"09/20/2021","Buy","L","LOEWS CORP","38.3995","$52.0839","","-$2000.00"
"09/20/2021","Buy","KR","KROGER CO","48.7234","$41.048","","-$2000.00"
"09/20/2021","Buy","KSU","KANSAS CITY SOUTHERN","7.3014","$273.92","","-$2000.00"
"09/20/2021","Buy","KMI","KINDER MORGAN INC","126.7611","$15.7777","","-$2000.00"
"09/20/2021","Buy","KMX","CARMAX INC","14.4142","$138.752","","-$2000.00"
"09/20/2021","Buy","KMB","KIMBERLY CLARK CORP","14.7964","$135.168","","-$2000.00"
"09/20/2021","Buy","KEYS","KEYSIGHT TECH INC","11.4946","$173.9947","","-$2000.00"
"09/20/2021","Buy","KHC","KRAFT HEINZ CO","54.7075","$36.558","","-$2000.00"
"09/20/2021","Buy","KIM","KIMCO REALTY CORP REIT","94.4376","$21.178","","-$2000.00"
"09/20/2021","Buy","JNPR","JUNIPER NETWORKS INC","72.6005","$27.548","","-$2000.00"
"09/20/2021","Buy","KLAC","KLA CORP","5.5841","$358.1582","","-$1999.99"
"09/20/2021","Buy","JCI","JOHNSON CONTROLS INTER F","27.4423","$72.88","","-$1999.99"
"09/20/2021","Buy","K","KELLOGG CO","31.4554","$63.582","","-$2000.00"
"09/20/2021","Buy","JNJ","JOHNSON & JOHNSON","12.2028","$163.8962","","-$1999.99"
"09/20/2021","Buy","JKHY","HENRY JACK & ASSOC","11.8975","$168.102","","-$1999.99"
"09/20/2021","Buy","KEY","KEYCORP INC","100.1617","$19.9677","","-$2000.00"
"09/20/2021","Buy","JPM","JPMORGAN CHASE & CO","12.9735","$154.16","","-$1999.99"
"09/20/2021","Sell","IRM","IRON MTN INC NEW REIT","0.1514","$44.25","","$6.70"
"09/20/2021","Sell","IRM","IRON MTN INC NEW REIT","42","$44.25","$0.01","$1858.49"
"09/20/2021","Sell","IPGP","IPG PHOTONICS CORP","0.4571","$162.8032","","$74.42"
"09/20/2021","Sell","IPGP","IPG PHOTONICS CORP","11","$162.8032","$0.01","$1790.83"
"09/20/2021","Sell","EMR","EMERSON ELECTRIC CO","0.7726","$94.27","","$72.83"
"09/20/2021","Sell","EMR","EMERSON ELECTRIC CO","19","$94.27","$0.01","$1791.12"
"09/20/2021","Sell","HBAN","HUNTINGTON BANCSHS","0.6344","$14.3829","","$9.12"
"09/20/2021","Sell","HBAN","HUNTINGTON BANCSHS","129","$14.3829","$0.01","$1855.38"
"09/20/2021","Sell","CAT","CATERPILLAR INC","0.7264","$191.485","","$139.09"
"09/20/2021","Sell","CAT","CATERPILLAR INC","9","$191.485","$0.01","$1723.36"
"09/20/2021","Sell","DOW","DOW INC","0.8083","$56.7419","","$45.86"
"09/20/2021","Sell","DOW","DOW INC","32","$56.7419","$0.01","$1815.73"
"09/20/2021","Sell","AAPL","APPLE INC","0.9407","$143.905","","$135.37"
"09/20/2021","Sell","AAPL","APPLE INC","12","$143.905","$0.01","$1726.85"
"09/20/2021","Sell","AIZ","ASSURANT INC","0.7182","$158.45","","$113.80"
"09/20/2021","Sell","AIZ","ASSURANT INC","11","$158.45","$0.01","$1742.94"
"09/20/2021","Sell","GNRC","GENERAC HOLDINGS INC","0.3576","$424.15","","$151.68"
"09/20/2021","Sell","GNRC","GENERAC HOLDINGS INC","4","$424.15","$0.01","$1696.59"
"09/20/2021","Sell","HPE","HEWLETT PACKARD ENTERPRI","0.4274","$13.37","","$5.71"
"09/20/2021","Sell","HPE","HEWLETT PACKARD ENTERPRI","138","$13.37","$0.01","$1845.05"
"09/20/2021","Sell","DE","DEERE & CO","0.428","$340.7104","","$145.82"
"09/20/2021","Sell","DE","DEERE & CO","5","$340.7104","$0.01","$1703.54"
"09/20/2021","Sell","ATO","ATMOS ENERGY CORP","0.6953","$89.0465","","$61.91"
"09/20/2021","Sell","ATO","ATMOS ENERGY CORP","20","$89.0465","$0.01","$1780.92"
"09/20/2021","Sell","EL","ESTEE LAUDER CO INC CLASS A","0.9148","$311.7601","","$285.20"
"09/20/2021","Sell","EL","ESTEE LAUDER CO INC CLASS A","5","$311.7601","$0.01","$1558.79"
"09/20/2021","Sell","AEP","AMER ELECTRIC PWR CO","0.0634","$83.495","","$5.29"
"09/20/2021","Sell","AEP","AMER ELECTRIC PWR CO","22","$83.495","$0.01","$1836.88"
"09/20/2021","Sell","BLK","BLACKROCK INC","0.159","$850.1945","","$135.18"
"09/20/2021","Sell","BLK","BLACKROCK INC","2","$850.1945","$0.01","$1700.38"
"09/20/2021","Sell","DOV","DOVER CORP","0.396","$160.7445","","$63.65"
"09/20/2021","Sell","DOV","DOVER CORP","11","$160.7445","$0.01","$1768.18"
"09/20/2021","Sell","IFF","INTL FLAVORS& FRAGRA","0.3953","$136.115","","$53.81"
"09/20/2021","Sell","IFF","INTL FLAVORS& FRAGRA","13","$136.115","$0.01","$1769.49"
"09/20/2021","Sell","EMN","EASTMAN CHEMICAL CO","0.032","$100.8001","","$3.23"
"09/20/2021","Sell","EMN","EASTMAN CHEMICAL CO","18","$100.8001","$0.01","$1814.39"
"09/20/2021","Sell","EA","ELECTRONIC ARTS INC","0.6485","$132.0303","","$85.62"
"09/20/2021","Sell","EA","ELECTRONIC ARTS INC","13","$132.0303","$0.01","$1716.38"
"09/20/2021","Sell","AOS","SMITH A O","0.0465","$64.27","","$2.99"
"09/20/2021","Sell","AOS","SMITH A O","28","$64.27","$0.01","$1799.55"
"09/20/2021","Sell","ALB","ALBEMARLE CORP","0.1791","$217.5825","","$38.97"
"09/20/2021","Sell","ALB","ALBEMARLE CORP","8","$217.5825","$0.01","$1740.65"
"09/20/2021","Sell","FCX","FREEPORT-MCMORAN INC","0.18","$31.3907","","$5.65"
"09/20/2021","Sell","FCX","FREEPORT-MCMORAN INC","55","$31.3907","$0.01","$1726.48"
"09/16/2021 as of 09/15/2021","Bank Interest","","BANK INT 081621-091521 SCHWAB PREMIER BANK","","","","$3.41"
"09/16/2021 as of 09/15/2021","Bank Interest","","BANK INT 081621-091521 SCHWAB BANK","","","","$3.55"
"09/10/2021","Buy","JBHT","J B HUNT TRANSPORT","11.3852","$175.666","","-$1999.99"
"09/10/2021","Buy","J","JACOBS ENGINEERING","14.8726","$134.4747","","-$1999.99"
"09/10/2021","Buy","IVZ","INVESCO LTD F","80.5866","$24.818","","-$2000.00"
"09/10/2021","Buy","IR","INGERSOLL RAND INC","36.5323","$54.746","","-$2000.00"
"09/10/2021","Buy","ITW","ILLINOIS TOOL WORKS","9.0612","$220.7193","","-$1999.98"
"09/10/2021","Buy","IT","GARTNER INC","6.3324","$315.832","","-$1999.97"
"09/10/2021","Buy","ISRG","INTUITIVE SURGICAL","1.9379","$1032.0067","","-$1999.93"
"09/10/2021","Buy","IRM","IRON MTN INC NEW REIT","42.1514","$47.448","","-$2000.00"
"09/10/2021","Buy","IPGP","IPG PHOTONICS CORP","11.4571","$174.564","","-$2000.00"
"09/10/2021","Buy","IQV","IQVIA HOLDINGS INC","7.6356","$261.93","","-$1999.99"
"09/10/2021","Buy","HRL","HORMEL FOODS CORP","47.4608","$42.14","","-$2000.00"
"09/10/2021","Buy","HPQ","HP INC.","70.7513","$28.268","","-$2000.00"
"09/10/2021","Buy","HPE","HEWLETT PACKARD ENTERPRI","138.4274","$14.448","","-$2000.00"
"09/10/2021","Buy","HSY","HERSHEY CO","11.4195","$175.1385","","-$1999.99"
"09/10/2021","Buy","HSIC","SCHEIN HENRY INC","25.9963","$76.934","","-$2000.00"
"09/10/2021","Buy","HST","HOST HOTELS & RESORT","123.533","$16.19","","-$2000.00"
"09/10/2021","Buy","HUM","HUMANA INC","4.9133","$407.0533","","-$1999.97"
"09/10/2021","Buy","HWM","HOWMET AEROSPACE INC","62.9168","$31.788","","-$2000.00"
"09/10/2021","Buy","IBM","IBM CORP","14.4812","$138.11","","-$2000.00"
"09/10/2021","Buy","ICE","INTERCONTINENTAL EXC","16.7364","$119.50","","-$2000.00"
"09/10/2021","Buy","IEX","IDEX CORP","9.1145","$219.4296","","-$1999.99"
"09/10/2021","Buy","IDXX","IDEXX LABS INC","2.9317","$682.182","","-$1999.95"
"09/10/2021","Buy","IFF","INTL FLAVORS& FRAGRA","13.3953","$149.306","","-$2000.00"
"09/10/2021","Buy","ILMN","ILLUMINA INC","4.3145","$463.5456","","-$1999.97"
"09/10/2021","Buy","INTC","INTEL CORP","36.6851","$54.518","","-$2000.00"
"09/10/2021","Buy","IP","INTERNTNL PAPER","33.8764","$59.038","","-$1999.99"
"09/10/2021","Buy","INFO","IHS MARKIT LTD F","16.401","$121.9431","","-$1999.99"
"09/10/2021","Buy","INCY","INCYTE CORP","27.9721","$71.4996","","-$1999.99"
"09/10/2021","Buy","IPG","INTERPUBLIC GRP COS","54.5851","$36.64","","-$2000.00"
"09/10/2021","Buy","INTU","INTUIT INC","3.4992","$571.554","","-$1999.98"
"09/10/2021","Buy","GOOG","ALPHABET INC. CLASS C","0.6988","$2861.77","","-$1999.80"
"09/10/2021","Buy","GOOGL","ALPHABET INC. CLASS A","0.7038","$2841.368","","-$1999.75"
"09/10/2021","Buy","GPC","GENUINE PARTS CO","16.7205","$119.6131","","-$1999.99"
"09/10/2021","Buy","HAS","HASBRO INC","20.2527","$98.752","","-$1999.99"
"09/10/2021","Buy","GPN","GLOBAL PAYMENTS INC","11.9468","$167.408","","-$1999.99"
"09/10/2021","Buy","GRMN","GARMIN LTD F","11.448","$174.7016","","-$1999.98"
"09/10/2021","Buy","GS","GOLDMAN SACHS GROUP","4.9352","$405.25","","-$1999.99"
"09/10/2021","Buy","GPS","GAP INC","82.0411","$24.378","","-$2000.00"
"09/10/2021","Buy","HAL","HALLIBURTON CO HLDG","101.5331","$19.698","","-$2000.00"
"09/10/2021","Buy","GWW","WW GRAINGER INC","4.7961","$416.9987","","-$1999.97"
"09/10/2021","Buy","HBAN","HUNTINGTON BANCSHS","129.6344","$15.428","","-$2000.00"
"09/10/2021","Buy","HBI","HANESBRANDS INC","105.7753","$18.908","","-$2000.00"
"09/10/2021","Buy","HCA","HCA HEALTHCARE INC","7.7449","$258.2332","","-$1999.99"
"09/10/2021","Buy","HIG","HARTFORD FINL SVC GP","28.8234","$69.388","","-$2000.00"
"09/10/2021","Buy","HD","HOME DEPOT INC","5.9769","$334.62","","-$1999.99"
"09/10/2021","Buy","HOLX","HOLOGIC INC","24.8112","$80.6085","","-$1999.99"
"09/10/2021","Buy","HON","HONEYWELL INTL INC","8.8967","$224.80","","-$1999.98"
"09/10/2021","Buy","HES","HESS CORP","29.4178","$67.986","","-$2000.00"
"09/10/2021","Buy","HII","HUNTINGTON INGALLS","10.0095","$199.8086","","-$1999.98"
"09/10/2021","Buy","HLT","HILTON WORLDWIDE HLD","15.5891","$128.294","","-$1999.99"
"09/10/2021","Buy","GNRC","GENERAC HOLDINGS INC","4.3576","$458.968","","-$2000.00"
"09/10/2021","Buy","GIS","GENERAL MILLS INC","34.2553","$58.385","","-$2000.00"
"09/10/2021","Buy","GM","GENERAL MOTORS CO","39.779","$50.2777","","-$2000.00"
"09/10/2021","Buy","GLW","CORNING INC","51.361","$38.94","","-$2000.00"
"09/10/2021","Buy","GILD","GILEAD SCIENCES INC","28.1381","$71.078","","-$2000.00"
"09/10/2021","Buy","GL","GLOBE LIFE INC","21.5335","$92.8785","","-$2000.00"
"09/10/2021","Buy","FTV","FORTIVE CORP DISC 00500","26.2964","$76.056","","-$2000.00"
"09/10/2021","Buy","GD","GENERAL DYNAMICS CO","9.8129","$203.812","","-$1999.99"
"09/10/2021","Buy","FTNT","FORTINET INC","6.3928","$312.8502","","-$1999.99"
"09/10/2021","Buy","GE","GENERAL ELECTRIC CO","19.4103","$103.038","","-$2000.00"
"09/10/2021","Buy","FRC","FIRST REPUBLIC BANK","10.0347","$199.308","","-$2000.00"
"09/10/2021","Buy","FFIV","F5 NETWORKS INC","9.8225","$203.614","","-$2000.00"
"09/10/2021","Buy","FOX","FOX CORP CLASS B","59.6029","$33.5554","","-$2000.00"
"09/10/2021","Buy","FRT","FEDERAL REALTY INVT TR REIT","16.7923","$119.102","","-$2000.00"
"09/10/2021","Buy","FITB","FIFTH THIRD BANCORP","51.2715","$39.008","","-$2000.00"
"09/10/2021","Buy","FMC","F M C CORP","20.3364","$98.3454","","-$1999.99"
"09/10/2021","Buy","FOXA","FOX CORP CLASS A","55.2364","$36.208","","-$2000.00"
"09/10/2021","Buy","FISV","FISERV INC","17.9243","$111.58","","-$1999.99"
"09/10/2021","Buy","FLT","FLEETCOR TECHNOLOGIE","7.5908","$263.4749","","-$1999.99"
"09/10/2021","Buy","FIS","FIDELITY NATL INFO","16.0377","$124.7055","","-$1999.99"
"09/10/2021","Buy","FE","FIRSTENERGY CORP","52.8852","$37.8177","","-$2000.00"
"09/10/2021","Buy","FDX","FEDEX CORP","7.7052","$259.564","","-$1999.99"
"09/10/2021","Buy","FCX","FREEPORT-MCMORAN INC","55.18","$36.245","","-$2000.00"
"09/10/2021","Buy","FBHS","FORTUNE BRANDS HM&S","20.7973","$96.1662","","-$2000.00"
"09/10/2021","Buy","FB","FACEBOOK INC CLASS A","5.2376","$381.85","","-$1999.98"
"09/10/2021","Buy","FAST","FASTENAL CO","37.2093","$53.75","","-$2000.00"
"09/10/2021","Buy","EXPE","EXPEDIA GROUP INC.","13.6267","$146.77","","-$1999.99"
"09/10/2021","Buy","FANG","DIAMONDBACK ENERGY","26.2567","$76.1708","","-$1999.99"
"09/10/2021","Buy","EXPD","EXPEDITORS INTL WASH","15.8848","$125.906","","-$1999.99"
"09/10/2021","Buy","EXR","EXTRA SPACE STORAGE REIT","10.6327","$188.098","","-$1999.99"
"09/10/2021","Buy","F","FORD MOTOR CO","155.7911","$12.8377","","-$2000.00"
"09/10/2021","Buy","EXC","EXELON CORP","39.8644","$50.17","","-$2000.00"
"09/10/2021","Buy","EW","EDWARDS LIFESCIENCES","16.5166","$121.09","","-$2000.00"
"09/10/2021","Buy","ETR","ENTERGY CORP","17.8366","$112.1285","","-$1999.99"
"09/10/2021","Buy","ETN","EATON CORP PLC F","12.3194","$162.345","","-$1999.99"
"09/10/2021","Buy","EVRG","EVERGY INC","29.8436","$67.016","","-$2000.00"
"09/10/2021","Buy","ESS","ESSEX PROPERTY TR REIT","6.1686","$324.2179","","-$1999.97"
"09/10/2021","Buy","ETSY","ETSY INC","9.0763","$220.352","","-$1999.98"
"09/10/2021","Buy","EQR","EQUITY RESIDENTIAL REIT","24.338","$82.176","","-$2000.00"
"09/10/2021","Buy","ES","EVERSOURCE ENERGY","22.6541","$88.284","","-$1999.99"
"09/10/2021","Buy","ENPH","ENPHASE ENERGY INC","12.4395","$160.778","","-$2000.00"
"09/10/2021","Buy","EMR","EMERSON ELECTRIC CO","19.7726","$101.15","","-$2000.00"
"09/10/2021","Buy","EQIX","EQUINIX INC REIT","2.3635","$846.1951","","-$1999.98"
"09/10/2021","Buy","EIX","EDISON INTERNTNL","34.3477","$58.228","","-$2000.00"
"09/10/2021","Buy","EOG","EOG RESOURCES INC","29.5438","$67.696","","-$2000.00"
"09/10/2021","Buy","EMN","EASTMAN CHEMICAL CO","18.032","$110.9139","","-$2000.00"
"09/10/2021","Buy","EFX","EQUIFAX INC","7.2781","$274.794","","-$1999.98"
"09/10/2021","Buy","EL","ESTEE LAUDER CO INC CLASS A","5.9148","$338.132","","-$1999.98"
"09/10/2021","Buy","ECL","ECOLAB INC","8.8103","$227.0062","","-$1999.99"
"09/10/2021","Buy","ED","CONSOLIDATED EDISON","26.6887","$74.938","","-$2000.00"
"09/10/2021","Buy","DXC","D X C TECHNOLOGY CO 0050","56.9875","$35.0954","","-$2000.00"
"09/10/2021","Buy","DXCM","DEXCOM INC","3.5953","$556.272","","-$1999.96"
"09/10/2021","Buy","EA","ELECTRONIC ARTS INC","13.6485","$146.536","","-$2000.00"
"09/10/2021","Buy","EBAY","EBAY INC","27.109","$73.776","","-$1999.99"
"09/10/2021","Buy","DVA","DAVITA INC","16.1914","$123.522","","-$1999.99"
"09/10/2021","Buy","DVN","DEVON ENERGY CORP","70.5027","$28.3677","","-$2000.00"
"09/10/2021","Buy","DUK","DUKE ENERGY CORP","19.3824","$103.186","","-$1999.99"
"09/10/2021","Buy","DRE","DUKE REALTY CORP REIT","38.9817","$51.306","","-$2000.00"
"09/10/2021","Buy","DRI","DARDEN RESTAURANTS","13.3275","$150.0647","","-$1999.99"
"09/10/2021","Buy","DTE","DTE ENERGY CO","16.7768","$119.212","","-$2000.00"
"09/10/2021","Buy","DPZ","DOMINOS PIZZA INC","3.8997","$512.852","","-$1999.97"
"09/10/2021","Buy","DOV","DOVER CORP","11.396","$175.50","","-$2000.00"
"09/10/2021","Buy","DLTR","DOLLAR TREE INC","22.01","$90.8677","","-$2000.00"
"09/10/2021","Buy","DOW","DOW INC","32.8083","$60.96","","-$1999.99"
"09/10/2021","Buy","DLR","DIGITAL REALTY TRUST REIT","12.8191","$156.0162","","-$1999.99"
"09/10/2021","Buy","DISH","DISH NETWORK CORP CLASS A","46.2214","$43.27","","-$2000.00"
"09/10/2021","Buy","DISCK","DISCOVERY INC CLASS C","78.3453","$25.528","","-$2000.00"
"09/10/2021","Buy","DISCA","DISCOVERY INC CLASS A","75.1371","$26.618","","-$2000.00"
"09/10/2021","Buy","DIS","WALT DISNEY CO","10.7501","$186.0431","","-$1999.98"
"09/10/2021","Buy","DHR","DANAHER CORP","6.016","$332.442","","-$1999.97"
"09/10/2021","Buy","DHI","D R HORTON CO","21.9159","$91.2577","","-$1999.99"
"09/10/2021","Buy","DGX","QUEST DIAGNOSTIC INC","12.8473","$155.674","","-$1999.99"
"09/10/2021","Buy","DG","DOLLAR GENERAL CORP","9.1135","$219.4539","","-$1999.99"
"09/10/2021","Buy","DE","DEERE & CO","5.428","$368.456","","-$1999.98"
"09/10/2021","Buy","DD","DUPONT DE NEMOURS INC","28.0414","$71.3231","","-$2000.00"
"09/10/2021","Buy","CZR","CAESARS ENTMT INC NEW","18.9498","$105.542","","-$2000.00"
"09/10/2021","Buy","D","DOMINION ENERGY INC","25.7898","$77.55","","-$2000.00"
"09/10/2021","Buy","CVX","CHEVRON CORP","20.6932","$96.65","","-$2000.00"
"09/10/2021","Buy","DFS","DISCOVER FINL S","16.4133","$121.852","","-$1999.99"
"09/10/2021","Buy","DAL","DELTA AIR LINES INC DEL","49.8628","$40.11","","-$2000.00"
"09/10/2021","Buy","CTXS","CITRIX SYSTEMS INC","18.6668","$107.142","","-$2000.00"
"09/10/2021","Buy","CTSH","COGNIZANT TECH SOLU CLASS A","25.9336","$77.12","","-$2000.00"
"09/10/2021","Buy","CSCO","CISCO SYSTEMS INC","34.3006","$58.308","","-$2000.00"
"09/10/2021","Buy","CTAS","CINTAS CORP","4.8976","$408.36","","-$1999.98"
"09/10/2021","Buy","CVS","CVS HEALTH CORP","23.7022","$84.38","","-$1999.99"
"09/10/2021","Buy","CSX","CSX CORP","63.882","$31.3077","","-$2000.00"
"09/10/2021","Buy","CTVA","CORTEVA INC","45.5809","$43.878","","-$2000.00"
"09/10/2021","Buy","CTLT","CATALENT INC","14.3845","$139.038","","-$1999.99"
"09/10/2021","Buy","COF","CAPITAL ONE FC","12.7024","$157.45","","-$1999.99"
"09/10/2021","Buy","CRM","SALESFORCE COM","7.7537","$257.94","","-$1999.99"
"09/10/2021","Buy","CPRT","COPART INC","13.818","$144.738","","-$1999.99"
"09/10/2021","Buy","COG","CABOT OIL & GAS CORP","109.0649","$18.3377","","-$2000.00"
"09/10/2021","Buy","CRL","CHARLES RIVER LABS","4.5055","$443.894","","-$1999.96"
"09/10/2021","Buy","CPB","CAMPBELL SOUP CO","46.4274","$43.078","","-$2000.00"
"09/10/2021","Buy","COST","COSTCO WHOLESALE CO","4.2747","$467.868","","-$2000.00"
"09/10/2021","Buy","COP","CONOCOPHILLIPS","35.652","$56.0977","","-$2000.00"
"09/10/2021","Buy","CNP","CENTERPOINT ENERGY","75.8495","$26.368","","-$2000.00"
"09/10/2021","Buy","CNC","CENTENE CORP","33.1807","$60.276","","-$2000.00"
"09/10/2021","Buy","COO","COOPER COMPANIES","4.4922","$445.2103","","-$1999.97"
"09/10/2021","Buy","CMS","C M S ENERGY CORP","31.3234","$63.85","","-$2000.00"
"09/10/2021","Journal","","JOURNAL FRM 38742116","","","","$300000.00"
"09/09/2021","Journal","","JOURNAL TO 38742116","","","","-$798000.00"
"09/09/2021","Buy","RSP","INVESCO S&P 500 EQUAL WEIGHT ETF","13","$155.314","","-$2019.08"
"09/09/2021","Buy","CMI","CUMMINS INC","8.5931","$232.744","","-$1999.99"
"09/09/2021","Buy","CDW","CDW CORP","9.9949","$200.102","","-$2000.00"
"09/09/2021","Buy","CINF","CINCINNATI FINL","16.6708","$119.9696","","-$1999.99"
"09/09/2021","Buy","CF","CF INDUSTRIES HLDG","44.0451","$45.408","","-$2000.00"
"09/09/2021","Buy","CFG","CITIZENS FINL GROUP INC","46.2128","$43.278","","-$2000.00"
"09/09/2021","Buy","CME","CME GROUP INC CLASS A","10.3879","$192.53","","-$1999.98"
"09/09/2021","Buy","CMG","CHIPOTLE MEXICAN GRL","1.0446","$1914.438","","-$1999.82"
"09/09/2021","Buy","CMA","COMERICA INCORPORATE","27.3119","$73.228","","-$2000.00"
"09/09/2021","Buy","CMCSA","COMCAST CORP CLASS A","33.5683","$59.58","","-$2000.00"
"09/09/2021","Buy","CLX","CLOROX CO","11.8165","$169.254","","-$1999.99"
"09/09/2021","Buy","CL","COLGATE-PALMOLIVE CO","25.8281","$77.435","","-$2000.00"
"09/09/2021","Buy","CHTR","CHARTER COMMUNICATN CLASS A","2.5437","$786.226","","-$1999.92"
"09/09/2021","Buy","CI","CIGNA CORP","9.3283","$214.40","","-$1999.99"
"09/09/2021","Buy","CHD","CHURCH & DWIGHT CO","23.8441","$83.8779","","-$1999.99"
"09/09/2021","Buy","CHRW","C H ROBINSON WORLDWD","22.9647","$87.09","","-$2000.00"
"09/09/2021","Buy","CCL","CARNIVAL CORP F","86.2154","$23.1977","","-$2000.00"
"09/09/2021","Buy","CDNS","CADENCE DESIGN SYS","12.0423","$166.08","","-$1999.99"
"09/09/2021","Buy","CCI","CROWN CASTLE INTL CO REIT","10.3361","$193.496","","-$1999.99"
"09/09/2021","Buy","CERN","CERNER CORP","26.5612","$75.2977","","-$2000.00"
"09/09/2021","Buy","CE","CELANESE CORP","13.0314","$153.475","","-$1999.99"
"09/09/2021","Buy","CBRE","CBRE GROUP INC CLASS A","20.2566","$98.7331","","-$2000.00"
"09/09/2021","Buy","BLL","BALL CORP","20.9065","$95.664","","-$2000.00"
"09/09/2021","Buy","CB","CHUBB LTD F","11.0035","$181.76","","-$2000.00"
"09/09/2021","Buy","CBOE","CBOE GLOBAL MKTS INC","16.0955","$124.258","","-$1999.99"
"09/09/2021","Buy","CAT","CATERPILLAR INC","9.7264","$205.6254","","-$1999.99"
"09/09/2021","Buy","CARR","CARRIER GLOBAL CORP","35.2435","$56.748","","-$2000.00"
"09/09/2021","Buy","BWA","BORG WARNER INC","46.9087","$42.636","","-$2000.00"
"09/09/2021","Buy","CAH","CARDINAL HEALTH INC","37.3708","$53.5177","","-$2000.00"
"09/09/2021","Buy","BXP","BOSTON PROPERTIES REIT","17.838","$112.12","","-$2000.00"
"09/09/2021","Buy","C","CITIGROUP INC","28.4058","$70.408","","-$2000.00"
"09/09/2021","Buy","BSX","BOSTON SCIENTIFIC CO","43.9367","$45.52","","-$2000.00"
"09/09/2021","Buy","CAG","CONAGRA BRANDS INC","59.9556","$33.358","","-$2000.00"
"09/09/2021","Buy","BIO","BIO-RAD LABS INC CLASS A","2.4641","$811.64","","-$1999.96"
"09/09/2021","Buy","BRKB","BERKSHIRE HATHAWAY CLASS B","7.1669","$279.06","","-$2000.00"
"09/09/2021","Buy","BR","BROADRIDGE FINL SOLU","11.6713","$171.36","","-$1999.99"
"09/09/2021","Buy","BK","BANK OF NY MELLON CO","37.7038","$53.045","","-$2000.00"
"09/09/2021","Buy","BMY","BRISTOL-MYERS SQUIBB","31.4377","$63.6177","","-$1999.99"
"09/09/2021","Buy","BKR","BAKER HUGHES CO. CLASS A","84.8968","$23.558","","-$2000.00"
"09/09/2021","Buy","BLK","BLACKROCK INC","2.159","$926.334","","-$1999.96"
"09/09/2021","Buy","BKNG","BOOKING HOLDINGS INC","0.8607","$2323.644","","-$1999.96"
"09/09/2021","Buy","BIIB","BIOGEN INC","6.661","$300.2541","","-$1999.99"
"09/09/2021","Buy","BDX","BECTON DICKINSON&CO","7.6642","$260.952","","-$1999.99"
"09/09/2021","Buy","BEN","FRANKLIN RESOURCES","63.5122","$31.49","","-$2000.00"
"09/09/2021","Buy","BFB","BROWN FORMAN CORP CLASS B","28.0292","$71.354","","-$2000.00"
"09/09/2021","Buy","BAX","BAXTER INTERNTNL","24.3849","$82.0177","","-$1999.99"
"09/09/2021","Buy","BBY","BEST BUY INC","17.8332","$112.15","","-$1999.99"
"09/09/2021","Buy","BA","BOEING CO","9.3641","$213.58","","-$1999.98"
"09/09/2021","Buy","BAC","BANK OF AMERICA CORP","48.7832","$40.9977","","-$2000.00"
"09/09/2021","Buy","APD","AIR PROD & CHEMICALS","7.4612","$268.052","","-$1999.99"
"09/09/2021","Buy","AZO","AUTOZONE INC","1.2908","$1549.406","","-$1999.97"
"09/09/2021","Buy","AWK","AMERICAN WATER WORKS","10.6005","$188.6693","","-$1999.99"
"09/09/2021","Buy","AXP","AMERICAN EXPRESS CO","12.496","$160.05","","-$1999.98"
"09/09/2021","Buy","AVGO","BROADCOM INC","4.0407","$494.954","","-$1999.96"
"09/09/2021","Buy","AVY","AVERY DENNISON CORP","8.864","$225.63","","-$1999.98"
"09/09/2021","Buy","ATO","ATMOS ENERGY CORP","20.6953","$96.64","","-$1999.99"
"09/09/2021","Buy","AVB","AVALONBAY CMNTYS INC REIT","8.7753","$227.91","","-$1999.98"
"09/09/2021","Buy","ATVI","ACTIVISION BLIZZARD","25.616","$78.076","","-$1999.99"
"09/09/2021","Buy","ARE","ALEXANDRIA REAL EST REIT","9.8081","$203.9124","","-$1999.99"
"09/09/2021","Buy","APTV","APTIV PLC F","13.4502","$148.696","","-$1999.99"
"09/09/2021","Buy","APH","AMPHENOL CORP CLASS A","26.4984","$75.476","","-$1999.99"
"09/09/2021","Buy","AOS","SMITH A O","28.0465","$71.31","","-$2000.00"
"09/09/2021","Buy","APA","APA CORP","106.5093","$18.7777","","-$2000.00"
"09/09/2021","Buy","ANTM","ANTHEM INC","5.3646","$372.81","","-$1999.98"
"09/09/2021","Buy","ANET","ARISTA NETWORKS INC","5.5429","$360.818","","-$1999.98"
"09/09/2021","Buy","ANSS","ANSYS INC","5.3657","$372.7356","","-$1999.99"
"09/09/2021","Buy","AMZN","AMAZON.COM INC","0.5707","$3504.078","","-$1999.78"
"09/09/2021","Buy","AMP","AMERIPRISE FINL","7.4043","$270.1124","","-$1999.99"
"09/09/2021","Buy","AMT","AMERN TOWER CORP REIT","6.7073","$298.182","","-$2000.00"
"09/09/2021","Buy","AME","AMETEK INC","15.151","$132.004","","-$1999.99"
"09/09/2021","Buy","AMGN","AMGEN INC.","9.2336","$216.598","","-$1999.98"
"09/09/2021","Buy","ALL","ALLSTATE CORP","15.0749","$132.67","","-$1999.99"
"09/09/2021","Buy","AMD","ADVANCED MICRO DEVIC","18.7603","$106.6077","","-$1999.99"
"09/09/2021","Buy","AMCR","AMCOR PLC F","164.0958","$12.188","","-$2000.00"
"09/09/2021","Buy","AKAM","AKAMAI TECHNOLOGIES INC","17.5839","$113.74","","-$1999.99"
"09/09/2021","Buy","AMAT","APPLIED MATERIALS","14.7503","$135.59","","-$1999.99"
"09/09/2021","Buy","ALGN","ALIGN TECHNOLOGY INC","2.7496","$727.368","","-$1999.97"
"09/09/2021","Buy","ALLE","ALLEGION PUBLIC LTD F","13.9467","$143.4021","","-$1999.99"
"09/09/2021","Buy","ALK","ALASKA AIR GROUP INC","34.4024","$58.1354","","-$2000.00"
"09/09/2021","Buy","ALB","ALBEMARLE CORP","8.1791","$244.524","","-$1999.99"
"09/09/2021","Buy","AJG","ARTHUR J GALLAGHER&C","13.7112","$145.866","","-$2000.00"
"09/09/2021","Buy","AEP","AMER ELECTRIC PWR CO","22.0634","$90.6477","","-$2000.00"
"09/09/2021","Buy","AFL","AFLAC INC","36.147","$55.3295","","-$2000.00"
"09/09/2021","Buy","AIG","AMERICAN INTL GROUP","36.4644","$54.848","","-$2000.00"
"09/09/2021","Buy","ADM","ARCHER DANIELS MIDLAND C","33.4082","$59.8654","","-$2000.00"
"09/09/2021","Buy","AIZ","ASSURANT INC","11.7182","$170.674","","-$1999.99"
"09/09/2021","Buy","AES","AES CORP","82.8912","$24.128","","-$2000.00"
"09/09/2021","Buy","AEE","AMEREN CORP","22.5949","$88.5154","","-$2000.00"
"09/09/2021","Buy","ACN","ACCENTURE PLC FCLASS A","5.8652","$340.99","","-$1999.97"
"09/09/2021","Buy","ADP","AUTO DATA PROCESSING","9.8161","$203.746","","-$1999.99"
"09/09/2021","Buy","ADSK","AUTODESK INC","6.958","$287.436","","-$1999.98"
"09/09/2021","Buy","ADBE","ADOBE INC","3.02","$662.23","","-$1999.93"
"09/09/2021","Buy","ADI","ANALOG DEVICES INC","11.7935","$169.584","","-$1999.99"
"09/09/2021","Buy","ABT","ABBOTT LABORATORIES","15.6132","$128.096","","-$1999.99"
"09/09/2021","Buy","ABMD","ABIOMED INC","5.427","$368.5257","","-$1999.99"
"09/09/2021","Buy","ABC","AMERISOURCEBERGEN CORP","16.1214","$124.058","","-$1999.99"
"09/09/2021","Buy","ABBV","ABBVIE INC","18.6011","$107.52","","-$1999.99"
"09/09/2021","Buy","A","AGILENT TECHNOLOGIES","11.2202","$178.2485","","-$1999.98"
"09/09/2021","Buy","AAP","ADVANCE AUTO PARTS","9.9485","$201.034","","-$1999.99"
"09/09/2021","Buy","AAL","AMERICAN AIRLS GROUP","99.5619","$20.088","","-$2000.00"
"09/09/2021","Buy","AAPL","APPLE INC","12.9407","$154.55","","-$1999.99"
"08/16/2021 as of 08/15/2021","Bank Interest","","BANK INT 071621-081521 SCHWAB BANK","","","","$4.26"
"08/16/2021 as of 08/15/2021","Bank Interest","","BANK INT 071621-081521 SCHWAB PREMIER BANK","","","","$4.23"
"07/16/2021 as of 07/15/2021","Bank Interest","","BANK INT 061621-071521 SCHWAB BANK","","","","$6.16"
"07/16/2021 as of 07/15/2021","Bank Interest","","BANK INT 061621-071521 SCHWAB PREMIER BANK","","","","$4.09"
"06/22/2021","Journal","","JOURNAL TO 38742116","","","","-$1000000.00"
"06/16/2021","Journal","","JOURNAL TO 38742116","","","","-$450032.17"
"06/16/2021 as of 06/15/2021","Bank Interest","","BANK INT 051621-061521 SCHWAB PREMIER BANK","","","","$4.23"
"06/16/2021 as of 06/15/2021","Bank Interest","","BANK INT 051621-061521 SCHWAB BANK","","","","$27.94"
"06/15/2021","Journal","","JOURNAL TO 38742116","","","","-$40001.88"
"06/10/2021","Journal","","JOURNAL TO 91985836","","","","-$10000.00"
"06/10/2021","Journaled Shares","NOC","NORTHROP GRUMMAN CO","-3.01","$372.1033","",""
"06/10/2021","Journaled Shares","HIFS","HINGHAM INSTN SVGS","-17","$295.16","",""
"06/10/2021","Journaled Shares","RDFN","REDFIN CORP 00500","-30","$59.1252","",""
"06/10/2021","Journaled Shares","MS","MORGAN STANLEY","-28.199","$92.465","",""
"06/10/2021","Journaled Shares","GLW","CORNING INC","-12.169","$43.1833","",""
"06/10/2021","Journaled Shares","AAPL","APPLE INC","-41.784","$126.5485","",""
"06/10/2021","Journaled Shares","MA","MASTERCARD INC CLASS A","-3.008","$363.3406","",""
"06/10/2021","Journaled Shares","AMZN","AMAZON.COM INC","-1.511","$3327.9326","",""
"06/10/2021","Journaled Shares","PD","PAGERDUTY INC","-30","$39.27","",""
"06/10/2021","Journaled Shares","PFE","PFIZER INC","-30.802","$40.4041","",""
"06/10/2021","Journaled Shares","INTC","INTEL CORP","-10.164","$57.37","",""
"06/10/2021","Journaled Shares","MDB","MONGODB INC CLASS A","-6","$325.365","",""
"06/10/2021","Journaled Shares","FB","FACEBOOK INC CLASS A","-7","$330.43","",""
"06/10/2021","Journaled Shares","SWYMX","SCHWAB TARGET 2050 INDEX FUND","-7.233","$16.73","",""
"06/10/2021","Journaled Shares","BYND","BEYOND MEAT INC","-7","$148.28","",""
"06/10/2021","Journaled Shares","MSFT","MICROSOFT CORP","-14.661","$256.77","",""
"06/10/2021","Journaled Shares","TWTR","TWITTER INC","-5","$59.1187","",""
"06/10/2021","Journaled Shares","JNJ","JOHNSON & JOHNSON","-3.059","$167.1199","",""
"06/10/2021","Journaled Shares","HD","HOME DEPOT INC","-4.016","$307.0889","",""
"06/10/2021","Journaled Shares","ILMN","ILLUMINA INC","-2","$443.66","",""
"06/10/2021","Journaled Shares","VZ","VERIZON COMMUNICATN","-20.505","$57.59","",""
"06/10/2021","Journaled Shares","JPM","JPMORGAN CHASE & CO","-10.162","$161.67","",""
"06/10/2021","Journaled Shares","CSCO","CISCO SYSTEMS INC","-11.206","$54.70","",""
"06/10/2021","Journaled Shares","AMD","ADVANCED MICRO DEVIC","-20","$81.2831","",""
"06/10/2021","Journaled Shares","BUD","ANHEUSER BUSCH INBEV S FSPONSORED ADR 1 ADR REPS 1 ORD SHS","-15","$78.56","",""
"06/10/2021","Journaled Shares","GS","GOLDMAN SACHS GROUP","-10.113","$383.0584","",""
"06/10/2021","Journaled Shares","UL","UNILEVER PLC FSPONSORED ADR 1 ADR REPS 1 ORD SHS","-4.076","$60.595","",""
"06/10/2021","Journaled Shares","V","VISA INC CLASS A","-5.02","$233.08","",""
"06/10/2021","Journaled Shares","PCG","P G & E CORP","-25","$10.505","",""
"06/10/2021","Journaled Shares","SWNRX","SCHWAB TARGET 2050 FUND","-7.74","$17.81","",""
"06/10/2021","Journaled Shares","BAC","BANK OF AMERICA CORP","-8.109","$42.0424","",""
"06/10/2021","Journaled Shares","APD","AIR PROD & CHEMICALS","-2.019","$299.39","",""
"06/10/2021","Journaled Shares","VFIFX","VANGUARD TARGET RETIREMENT 2050 INV","-2.838","$50.38","",""
"06/10/2021","Journaled Shares","AWK","AMERICAN WATER WORKS","-4.047","$158.9457","",""
"06/10/2021","Journaled Shares","XOM","EXXON MOBIL CORP","-46.347","$63.06","",""
"06/10/2021","Journaled Shares","BRKB","BERKSHIRE HATHAWAY CLASS B","-6.288","$287.43","",""
"06/10/2021","Journaled Shares","AMT","AMERN TOWER CORP REIT","-41","$268.8697","",""
"06/10/2021","Journaled Shares","PEP","PEPSICO INC","-5.083","$147.97","",""
"06/10/2021","Journaled Shares","CMCSA","COMCAST CORP CLASS A","-15.162","$56.705","",""
"06/10/2021","Journaled Shares","PG","PROCTER & GAMBLE","-4.072","$136.22","",""
"06/10/2021","Journaled Shares","TSN","TYSON FOODS INC CLASS A","-13.138","$77.4415","",""
"06/10/2021","Journaled Shares","AXP","AMERICAN EXPRESS CO","-10.076","$163.1403","",""
"06/10/2021","Journaled Shares","WMT","WALMART INC","-10.117","$140.055","",""
"06/10/2021","Journaled Shares","WM","WASTE MANAGEMENT INC","-4.042","$139.725","",""
"06/10/2021","Journaled Shares","KO","THE COCA-COLA CO","-17.311","$56.075","",""
"06/10/2021","Journaled Shares","UNH","UNITEDHEALTH GRP INC","-10.086","$398.6704","",""
"06/10/2021","Journaled Shares","NVDA","NVIDIA CORP","-16","$694.85","",""
"06/10/2021","Journaled Shares","LMT","LOCKHEED MARTIN CORP","-4.062","$387.96","",""
"06/10/2021","Journaled Shares","BR","BROADRIDGE FINL SOLU","-1","$161.22","",""
"06/10/2021","Journaled Shares","ISRG","INTUITIVE SURGICAL","-1","$850.50","",""
"06/10/2021","Journaled Shares","NFLX","NETFLIX INC","-4","$485.62","",""
"06/10/2021","Journaled Shares","T","A T & T INC","-51.904","$29.165","",""
"06/10/2021","Journaled Shares","COST","COSTCO WHOLESALE CO","-4.012","$382.79","",""
"06/10/2021","Journaled Shares","WWE","WORLD WRESTLING ENTM CLASS A","-10","$64.825","",""
"06/10/2021","Journaled Shares","DASH","DOORDASH INC CLASS A","-16","$142.5544","",""
"06/10/2021","Journaled Shares","ABNB","AIRBNB INC CLASS A","-16","$144.9399","",""
"06/10/2021","Journaled Shares","RBLX","ROBLOX CORP CLASS A","-70","$89.1899","",""
"06/10/2021","Journaled Shares","ASAN","ASANA INC CLASS A","-14","$43.745","",""
"06/10/2021","Journaled Shares","SNOW","SNOWFLAKE INC CLASS A","-3","$246.27","",""
"06/10/2021","Journaled Shares","RTX","RAYTHEON TECHNOLOGIES CO","-20.093","$88.70","",""
"06/10/2021","Journaled Shares","TOKE","CAMBRIA CANNABIS ETF","-60.991","$18.8757","",""
"06/10/2021","Journaled Shares","WORK","SLACK TECHNOLOGIES INC CLASS A","-30","$44.23","",""
"06/10/2021","Journaled Shares","SI","SILVERGATE CAP CORP","-4","$101.78","",""
"06/10/2021","Journaled Shares","CRSR","CORSAIR GAMING INC","-76","$31.135","",""
"06/10/2021","Journaled Shares","CNRG","SPDR S&P KENSHO CLEAN POWER ETF IV","-25.062","$101.88","",""
"06/10/2021","Journaled Shares","CSX","CSX CORP","-10.069","$96.89","",""
"06/10/2021","Journaled Shares","HAIL","SPDR S&P KENSHO SMART MOB ETF IV","-34.147","$63.06","",""
"06/10/2021","Journaled Shares","TWLO","TWILIO INC CLASS A","-4","$319.23","",""
"06/10/2021","Journaled Shares","SQ","SQUARE INC CLASS A","-10","$212.935","",""
"06/10/2021","Journaled Shares","GOOG","ALPHABET INC. CLASS C","-3.46","$2512.4331","",""
"06/10/2021","Journaled Shares","GOOGL","ALPHABET INC. CLASS A","-0.58","$2424.6125","",""
"06/10/2021","Journaled Shares","Z","ZILLOW GROUP INC","-12","$107.17","",""
"06/10/2021","Journaled Shares","KHC","KRAFT HEINZ CO","-25.666","$43.2542","",""
"06/10/2021","Journaled Shares","NOC","NORTHROP GRUMMAN CO","3.01","$371.90","",""
"06/10/2021","Journaled Shares","HIFS","HINGHAM INSTN SVGS","17","$297.4899","",""
"06/10/2021","Journaled Shares","RDFN","REDFIN CORP 00500","30","$58.9998","",""
"06/10/2021","Journaled Shares","MS","MORGAN STANLEY","28.199","$92.51","",""
"06/10/2021","Journaled Shares","GLW","CORNING INC","12.169","$43.20","",""
"06/10/2021","Journaled Shares","AAPL","APPLE INC","41.784","$126.5591","",""
"06/10/2021","Journaled Shares","MA","MASTERCARD INC CLASS A","3.008","$363.60","",""
"06/10/2021","Journaled Shares","AMZN","AMAZON.COM INC","1.511","$3331.5349","",""
"06/10/2021","Journaled Shares","PD","PAGERDUTY INC","30","$39.02","",""
"06/10/2021","Journaled Shares","PFE","PFIZER INC","30.802","$40.355","",""
"06/10/2021","Journaled Shares","INTC","INTEL CORP","10.164","$57.39","",""
"06/10/2021","Journaled Shares","MDB","MONGODB INC CLASS A","6","$326.60","",""
"06/10/2021","Journaled Shares","FB","FACEBOOK INC CLASS A","7","$330.50","",""
"06/10/2021","Journaled Shares","SWYMX","SCHWAB TARGET 2050 INDEX FUND","7.233","$16.73","",""
"06/10/2021","Journaled Shares","BYND","BEYOND MEAT INC","7","$147.83","",""
"06/10/2021","Journaled Shares","MSFT","MICROSOFT CORP","14.661","$256.68","",""
"06/10/2021","Journaled Shares","TWTR","TWITTER INC","5","$59.0843","",""
"06/10/2021","Journaled Shares","JNJ","JOHNSON & JOHNSON","3.059","$167.035","",""
"06/10/2021","Journaled Shares","HD","HOME DEPOT INC","4.016","$307.145","",""
"06/10/2021","Journaled Shares","ILMN","ILLUMINA INC","2","$443.50","",""
"06/10/2021","Journaled Shares","VZ","VERIZON COMMUNICATN","20.505","$57.5543","",""
"06/10/2021","Journaled Shares","JPM","JPMORGAN CHASE & CO","10.162","$161.70","",""
"06/10/2021","Journaled Shares","CSCO","CISCO SYSTEMS INC","11.206","$54.685","",""
"06/10/2021","Journaled Shares","AMD","ADVANCED MICRO DEVIC","20","$81.13","",""
"06/10/2021","Journaled Shares","BUD","ANHEUSER BUSCH INBEV S FSPONSORED ADR 1 ADR REPS 1 ORD SHS","15","$78.57","",""
"06/10/2021","Journaled Shares","GS","GOLDMAN SACHS GROUP","10.113","$383.20","",""
"06/10/2021","Journaled Shares","UL","UNILEVER PLC FSPONSORED ADR 1 ADR REPS 1 ORD SHS","4.076","$60.53","",""
"06/10/2021","Journaled Shares","V","VISA INC CLASS A","5.02","$233.03","",""
"06/10/2021","Journaled Shares","PCG","P G & E CORP","25","$10.515","",""
"06/10/2021","Journaled Shares","SWNRX","SCHWAB TARGET 2050 FUND","7.74","$17.81","",""
"06/10/2021","Journaled Shares","BAC","BANK OF AMERICA CORP","8.109","$42.035","",""
"06/10/2021","Journaled Shares","APD","AIR PROD & CHEMICALS","2.019","$299.48","",""
"06/10/2021","Journaled Shares","VFIFX","VANGUARD TARGET RETIREMENT 2050 INV","2.838","$50.38","",""
"06/10/2021","Journaled Shares","AWK","AMERICAN WATER WORKS","4.047","$159.03","",""
"06/10/2021","Journaled Shares","XOM","EXXON MOBIL CORP","46.347","$63.1255","",""
"06/10/2021","Journaled Shares","BRKB","BERKSHIRE HATHAWAY CLASS B","6.288","$287.5278","",""
"06/10/2021","Journaled Shares","AMT","AMERN TOWER CORP REIT","41","$268.31","",""
"06/10/2021","Journaled Shares","PEP","PEPSICO INC","5.083","$147.94","",""
"06/10/2021","Journaled Shares","CMCSA","COMCAST CORP CLASS A","15.162","$56.625","",""
"06/10/2021","Journaled Shares","PG","PROCTER & GAMBLE","4.072","$136.055","",""
"06/10/2021","Journaled Shares","TSN","TYSON FOODS INC CLASS A","13.138","$77.485","",""
"06/10/2021","Journaled Shares","AXP","AMERICAN EXPRESS CO","10.076","$163.1252","",""
"06/10/2021","Journaled Shares","WMT","WALMART INC","10.117","$140.095","",""
"06/10/2021","Journaled Shares","WM","WASTE MANAGEMENT INC","4.042","$139.69","",""
"06/10/2021","Journaled Shares","KO","THE COCA-COLA CO","17.311","$56.08","",""
"06/10/2021","Journaled Shares","UNH","UNITEDHEALTH GRP INC","10.086","$398.97","",""
"06/10/2021","Journaled Shares","NVDA","NVIDIA CORP","16","$695.565","",""
"06/10/2021","Journaled Shares","LMT","LOCKHEED MARTIN CORP","4.062","$387.76","",""
"06/10/2021","Journaled Shares","BR","BROADRIDGE FINL SOLU","1","$161.24","",""
"06/10/2021","Journaled Shares","ISRG","INTUITIVE SURGICAL","1","$850.7718","",""
"06/10/2021","Journaled Shares","NFLX","NETFLIX INC","4","$485.235","",""
"06/10/2021","Journaled Shares","T","A T & T INC","51.904","$29.145","",""
"06/10/2021","Journaled Shares","COST","COSTCO WHOLESALE CO","4.012","$382.6801","",""
"06/10/2021","Journaled Shares","WWE","WORLD WRESTLING ENTM CLASS A","10","$64.825","",""
"06/10/2021","Journaled Shares","DASH","DOORDASH INC CLASS A","16","$142.55","",""
"06/10/2021","Journaled Shares","ABNB","AIRBNB INC CLASS A","16","$144.835","",""
"06/10/2021","Journaled Shares","RBLX","ROBLOX CORP CLASS A","70","$88.415","",""
"06/10/2021","Journaled Shares","ASAN","ASANA INC CLASS A","14","$43.39","",""
"06/10/2021","Journaled Shares","SNOW","SNOWFLAKE INC CLASS A","3","$246.85","",""
"06/10/2021","Journaled Shares","RTX","RAYTHEON TECHNOLOGIES CO","20.093","$88.565","",""
"06/10/2021","Journaled Shares","TOKE","CAMBRIA CANNABIS ETF","60.991","$18.885","",""
"06/10/2021","Journaled Shares","WORK","SLACK TECHNOLOGIES INC CLASS A","30","$44.20","",""
"06/10/2021","Journaled Shares","SI","SILVERGATE CAP CORP","4","$101.685","",""
"06/10/2021","Journaled Shares","CRSR","CORSAIR GAMING INC","76","$31.16","",""
"06/10/2021","Journaled Shares","CNRG","SPDR S&P KENSHO CLEAN POWER ETF IV","25.062","$101.945","",""
"06/10/2021","Journaled Shares","CSX","CSX CORP","10.069","$97.05","",""
"06/10/2021","Journaled Shares","HAIL","SPDR S&P KENSHO SMART MOB ETF IV","34.147","$63.085","",""
"06/10/2021","Journaled Shares","TWLO","TWILIO INC CLASS A","4","$319.92","",""
"06/10/2021","Journaled Shares","SQ","SQUARE INC CLASS A","10","$213.14","",""
"06/10/2021","Journaled Shares","GOOG","ALPHABET INC. CLASS C","3.46","$2512.6799","",""
"06/10/2021","Journaled Shares","GOOGL","ALPHABET INC. CLASS A","0.58","$2422.8701","",""
"06/10/2021","Journaled Shares","Z","ZILLOW GROUP INC","12","$107.63","",""
"06/10/2021","Journaled Shares","KHC","KRAFT HEINZ CO","25.666","$43.24","",""
"06/10/2021","Journal","","JOURNAL FRM 91985836","","","","$1.88"
"06/09/2021","Journal","","JOURNAL TO 38742116","","","","-$314000.00"
"06/08/2021","Journal","","JOURNAL TO 38742116","","","","-$36000.00"
"06/08/2021","Journal","","JOURNAL TO 38742116","","","","-$50000.00"
"06/03/2021","Journal","","JOURNAL TO 38742116","","","","-$95000.00"
"06/02/2021","Journal","","JOURNAL TO 91985836","","","","-$5000.00"
"06/01/2021","Journal","","JOURNAL TO 38742116","","","","-$800000.00"
"06/01/2021","Journal","","JOURNAL TO 38742116","","","","-$200000.00"
"06/01/2021","Journal","","JOURNAL TO 38742116","","","","-$500000.00"
"05/19/2021","Journal","","JOURNAL TO 38742116","","","","-$200000.00"
"05/18/2021","Journal","","JOURNAL TO 38742116","","","","-$50000.00"
"05/17/2021","Journal","","JOURNAL TO 38742116","","","","-$250000.00"
"05/17/2021","Journal","","JOURNAL TO 38742116","","","","-$200000.00"
"05/17/2021","Journal","","JOURNAL TO 38742116","","","","-$315284.39"
"05/17/2021","Wire Sent","","WIRED FUNDS DISBURSED","","","","-$80823.39"
"05/17/2021","Service Fee","","WIRED FUNDS FEE","","","","-$15.00"
"05/17/2021 as of 05/15/2021","Bank Interest","","BANK INT 041621-051521 SCHWAB PREMIER BANK","","","","$3.55"
"05/17/2021 as of 05/15/2021","Bank Interest","","BANK INT 041621-051521 SCHWAB BANK","","","","$54.43"
"05/13/2021","Wire Received","","WIRED FUNDS RECEIVED","","","","$155089.80"
"05/13/2021","Journal","","JOURNAL TO 91985836","","","","-$10000.00"
"05/13/2021","Wire Received","","WIRED FUNDS RECEIVED","","","","$975.00"
"05/13/2021","Journal","","JOURNAL TO 94195569","","","","-$1200000.00"
"05/12/2021","Journal","","JOURNAL TO 38742116","","","","-$50000.00"
"05/12/2021","Journal","","JOURNAL TO 38742116","","","","-$100000.00"
"05/11/2021","Journal","","JOURNAL TO 34113092","","","","-$25000.00"
"05/11/2021","Journal","","JOURNAL TO 38742116","","","","-$25000.00"
"05/05/2021","Wire Sent","","WIRED FUNDS DISBURSED","","","","-$50000.00"
"05/05/2021","Misc Cash Entry","","WAIVE WIRE FEE","","","","$15.00"
"05/05/2021","Service Fee","","WIRED FUNDS FEE","","","","-$15.00"
"05/04/2021","Journal","","JOURNAL TO 38742116","","","","-$100000.00"
"05/03/2021","Journal","","JOURNAL TO 38742116","","","","-$1000000.00"
"04/28/2021","Journal","","JOURNAL TO 38742116","","","","-$280000.50"
"04/28/2021","Wire Sent","","WIRED FUNDS DISBURSED","","","","-$1500000.00"
"04/28/2021","Misc Cash Entry","","WAIVE WIRE FEE","","","","$15.00"
"04/28/2021","Service Fee","","WIRED FUNDS FEE","","","","-$15.00"
"04/27/2021","MoneyLink Transfer","","Tfr GOLDMAN SACHS BANK, ALEXANDER SIEKE","","","","-$10000.00"
"04/27/2021","Wire Sent","","WIRED FUNDS DISBURSED","","","","-$10000.00"
"04/27/2021","Misc Cash Entry","","WAIVE WIRE FEE","","","","$15.00"
"04/27/2021","Service Fee","","WIRED FUNDS FEE","","","","-$15.00"
"04/26/2021","Journal","","JOURNAL TO 38742116","","","","-$210999.98"
"04/26/2021","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$80433.50"
"04/23/2021","Journal","","JOURNAL FRM 55247140","","","","$11000.48"
"04/23/2021","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"04/23/2021","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"04/22/2021","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"04/22/2021","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"04/20/2021","Journal","","JOURNAL TO 55247140","","","","-$11000.00"
"04/19/2021","Journal","","JOURNAL FRM 55247140","","","","$41433.50"
"04/19/2021","Journal","","JOURNAL TO 55247140","","","","-$50000.00"
"04/19/2021","Journal","","JOURNAL FRM 38742116","","","","$10500000.00"
"03/24/2021","Journal","","JOURNAL TO 55247140","","","","-$4.12"
"03/03/2021","Security Transfer","NO NUMBER","TOA ACAT 0235","","","","$4.12"
"03/01/2021","Journal","","JOURNAL TO 38742116","","","","-$88.96"
"02/23/2021","Security Transfer","NO NUMBER","TOA ACAT 0235","","","","$19.03"
"02/16/2021","Security Transfer","NO NUMBER","TOA ACAT 0235","","","","$12.92"
"02/05/2021","Security Transfer","NO NUMBER","TOA ACAT 0235","","","","$57.01"
"02/02/2021","Journaled Shares","VWO","VANGUARD FTSE EMERGING MARKETS ETF","-1,027","$52.99","",""
"02/02/2021","Journaled Shares","VEA","VANGUARD FTSE DEVELOPED MARKETS ETF","-1,811","$47.53","",""
"02/02/2021","Journaled Shares","SCHD","SCHWAB US DIVIDEND EQUITY ETF","-56","$64.23","",""
"02/02/2021","Journaled Shares","SCHF","SCHWAB INTERNATIONAL EQUITY ETF","-1,001","$36.25","",""
"02/02/2021","Journaled Shares","VTI","VANGUARD TOTAL STOCK MARKET ETF","-1,024","$197.30","",""
"02/02/2021","Journaled Shares","IEMG","ISHARES CORE MSCI EMERGING ETF","-560","$65.62","",""
"02/02/2021","Journaled Shares","VIG","VANGUARD DIVIDEND APPRECIATION ETF","-236","$138.57","",""
"02/02/2021","Journaled Shares","TFI","SPDR NUVEEN BLOOMBERG BARCLAYS MUNICIPAL BOND ETF","-52","$52.49","",""
"02/02/2021","Journaled Shares","VTEB","VANGUARD MUNI BND TAX EXEMPT ETF","-2,972","$55.32","",""
"02/02/2021","Journal","","JOURNAL TO 38742116","","","","-$746.23"
"02/01/2021","Security Transfer","NO NUMBER","TOA ACAT 0235","","","","$744.89"
"02/01/2021","Security Transfer","VTI","VANGUARD TOTAL STOCK MARKET ETF","1,024","","",""
"02/01/2021","Security Transfer","VTEB","VANGUARD MUNI BND TAX EXEMPT ETF","2,972","","",""
"02/01/2021","Security Transfer","VWO","VANGUARD FTSE EMERGING MARKETS ETF","1,027","","",""
"02/01/2021","Security Transfer","VEA","VANGUARD FTSE DEVELOPED MARKETS ETF","1,811","","",""
"02/01/2021","Security Transfer","VIG","VANGUARD DIVIDEND APPRECIATION ETF","236","","",""
"02/01/2021","Security Transfer","SCHF","SCHWAB INTERNATIONAL EQUITY ETF","1,001","","",""
"02/01/2021","Security Transfer","SCHD","SCHWAB US DIVIDEND EQUITY ETF","56","","",""
"02/01/2021","Security Transfer","TFI","SPDR NUVEEN BLOOMBERG BARCLAYS MUNICIPAL BOND ETF","52","","",""
"02/01/2021","Security Transfer","IEMG","ISHARES CORE MSCI EMERGING ETF","560","","",""
"01/19/2021 as of 01/15/2021","Bank Interest","","BANK INT 121620-011521 SCHWAB BANK","","","","$1.34"
"12/29/2020","Journal","","JOURNAL TO 38742116","","","","-$350003.05"
"12/16/2020 as of 12/15/2020","Bank Interest","","BANK INT 111620-121520 SCHWAB BANK","","","","$3.05"
"12/03/2020","Journal","","JOURNAL TO 38742116","","","","-$24701.64"
"11/23/2020","Journal","","JOURNAL TO 91985836","","","","-$298.36"
"11/23/2020","Journal","","JOURNAL TO 38742116","","","","-$25005.98"
"11/16/2020 as of 11/15/2020","Bank Interest","","BANK INT 101620-111520 SCHWAB BANK","","","","$3.42"
"10/20/2020","Journal","","JOURNAL TO 38742116","","","","-$25000.00"
"10/16/2020 as of 10/15/2020","Bank Interest","","BANK INT 091620-101520 SCHWAB BANK","","","","$2.56"
"10/12/2020","Journal","","JOURNAL TO 38742116","","","","-$24999.89"
"09/29/2020","Margin Interest","","INTEREST 08/28THRU 09/28","","","","-$0.11"
"09/24/2020","Journal","","JOURNAL FRM 38742116","","","","$450000.00"
"08/31/2020","Journal","","JOURNAL FRM 38742116","","","","$0.08"
"08/31/2020","Journal","","JOURNAL FRM 38742116","","","","$152.00"
"08/28/2020","Margin Interest","","INTEREST 07/30THRU 08/27","","","","-$153.13"
"08/24/2020","Journaled Shares","SWNRX","SCHWAB TARGET 2050 FUND","-7.604","$14.41","",""
"08/24/2020","Journaled Shares","VFIFX","VANGUARD TARGET RETIREMENT 2050 INV","-2.798","$40.87","",""
"08/20/2020","Journal","","JOURNAL TO 91985836","","","","-$1930.00"
"08/20/2020","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"08/20/2020","MoneyLink Transfer","","Tfr ALLY BANK, ALEXANDER T SIEK","","","","-$100000.00"
"08/20/2020","Sell","TFI","SPDR NUVEEN BLOOMBERG BARCLAYS MUNICIPAL BOND ETF","543","$52.264","$0.63","$28378.72"
"08/20/2020","Sell","SCHA","SCHWAB US SMALL CAP ETF","343","$70.937","$0.54","$24330.85"
"08/20/2020","Sell","SCHX","SCHWAB US LARGE CAP ETF IV","651","$81.1533","$1.17","$52829.63"
"08/20/2020","Sell","SCHF","SCHWAB INTERNATIONAL EQUITY E ETF IV","1,200","$31.755","$0.84","$38105.16"
"08/20/2020","Sell","SCHE","SCHWAB EMERGING MARKETS EQUITY ETF","443","$26.681","$0.26","$11819.42"
"08/20/2020","Sell","CMF","ISHARES CALIFORNIA MUNI BOND ETF","450","$62.7283","$0.62","$28227.12"
"08/20/2020","Sell","SCHM","CHARLES SCHWAB US MC ETF","320","$56.8028","$0.40","$18176.50"
"08/18/2020","Journaled Shares","SCHX","SCHWAB US LARGE CAP ETF IV","651","$81.405","",""
"08/18/2020","Journaled Shares","SCHE","SCHWAB EMERGING MARKETS EQUITY ETF","443","$27.0801","",""
"08/18/2020","Journaled Shares","SCHM","CHARLES SCHWAB US MC ETF","320","$57.41","",""
"08/18/2020","Journaled Shares","SWNRX","SCHWAB TARGET 2050 FUND","7.604","$14.43","",""
"08/18/2020","Journaled Shares","SCHF","SCHWAB INTERNATIONAL EQUITY E ETF IV","1,200","$32.05","",""
"08/18/2020","Journaled Shares","VFIFX","VANGUARD TARGET RETIREMENT 2050 INV","2.798","$40.92","",""
"08/18/2020","Journaled Shares","CMF","ISHARES CALIFORNIA MUNI BOND ETF","450","$62.88","",""
"08/18/2020","Journaled Shares","SCHA","SCHWAB US SMALL CAP ETF","343","$71.3255","",""
"08/18/2020","Journaled Shares","TFI","SPDR NUVEEN BLOOMBERG BARCLAYS MUNICIPAL BOND ETF","543","$52.4152","",""
"08/18/2020","Journal","","JOURNAL FRM 52262081","","","","$63.65"
"Transactions Total","","","","","","","-$1782.58",
`;

const transactionsCrypto = [
	{
		date: '2014-01-01',
		action: 'deposit',
		amount: 33000,
		symbol: null
	},
	{
		date: '2014-04-14',
		action: 'buy',
		amount: 30000,
		symbol: 'BTC-USD.CC'
	},
	{
		date: '2017-01-06',
		action: 'buy',
		amount: 3000,
		symbol: 'ETH-USD.CC'
	}
];

const transactionsEquity = [
	{
		date: '2008-07-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2008-07-02', action: 'buy', amount: 5000, symbol: 'MCD' },
	{ date: '2008-07-03', action: 'buy', amount: 5000, symbol: 'SPY' },
	{ date: '2008-07-07', action: 'sell', amount: 2000, symbol: 'SPY' },
	{ date: '2008-07-10', action: 'buy', amount: 2000, symbol: 'GLD' },
	{
		date: '2008-07-31',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2008-08-01', action: 'buy', amount: 10000, symbol: 'VEA' },
	{
		date: '2008-08-30',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2008-09-03', action: 'buy', amount: 5000, symbol: 'VB' },
	{ date: '2008-09-04', action: 'buy', amount: 5000, symbol: 'TIP' },
	{
		date: '2008-09-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2008-10-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2008-11-06', action: 'buy', amount: 5000, symbol: 'MCD' },
	{ date: '2008-11-07', action: 'buy', amount: 15000, symbol: 'GOOGL' },
	{
		date: '2008-11-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2008-12-06', action: 'buy', amount: 10000, symbol: 'BND' },
	{
		date: '2008-12-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-01-10', action: 'buy', amount: 10000, symbol: 'QQQ' },
	{
		date: '2009-01-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2009-02-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-03-13', action: 'buy', amount: 20000, symbol: 'IEF' },
	{
		date: '2009-03-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2009-04-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-04-30', action: 'buy', amount: 20000, symbol: 'VNQ' },
	{
		date: '2009-05-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-06-15', action: 'buy', amount: 10000, symbol: 'MCD' },
	{
		date: '2009-06-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-07-10', action: 'buy', amount: 10000, symbol: 'SPY' },
	{ date: '2009-07-16', action: 'sell', amount: 10000, symbol: 'MCD' },
	{ date: '2009-07-18', action: 'buy', amount: 10000, symbol: 'GLD' },
	{
		date: '2009-07-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2009-08-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-09-08', action: 'buy', amount: 20000, symbol: 'VB' },
	{
		date: '2009-09-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-10-18', action: 'buy', amount: 10000, symbol: 'SPY' },
	{
		date: '2009-10-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2009-11-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2009-12-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2009-12-28', action: 'buy', amount: 30000, symbol: 'SPY' },
	{
		date: '2010-01-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-02-04', action: 'buy', amount: 10000, symbol: 'SPY' },
	{
		date: '2010-02-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2010-03-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-03-26', action: 'buy', amount: 20000, symbol: 'BND' },
	{
		date: '2010-04-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-05-17', action: 'buy', amount: 10000, symbol: 'GSG' },
	{
		date: '2010-05-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2010-06-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2010-07-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-08-04', action: 'buy', amount: 30000, symbol: 'MUB' },
	{
		date: '2010-08-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-08-20', action: 'buy', amount: 10000, symbol: 'VT' },
	{
		date: '2010-09-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2010-10-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-10-25', action: 'buy', amount: 20000, symbol: 'AAPL' },
	{ date: '2010-11-13', action: 'sell', amount: 50000, symbol: 'SPY' },
	{
		date: '2010-11-14',
		action: 'withdraw',
		amount: -50000,
		symbol: null
	},
	{
		date: '2010-11-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2010-12-01', action: 'buy', amount: 10000, symbol: 'GOOGL' },
	{
		date: '2010-12-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-01-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-02-01', action: 'buy', amount: 10000, symbol: 'VWO' },
	{ date: '2011-02-02', action: 'buy', amount: 10000, symbol: 'IEF' },
	{
		date: '2011-02-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-03-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-04-06', action: 'buy', amount: 1000, symbol: 'TSLA' },
	{ date: '2011-04-07', action: 'buy', amount: 15000, symbol: 'SHV' },
	{ date: '2011-04-08', action: 'buy', amount: 4000, symbol: 'TIP' },
	{
		date: '2011-04-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-05-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-05-28', action: 'buy', amount: 20000, symbol: 'QQQ' },
	{
		date: '2011-06-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-07-05', action: 'buy', amount: 10000, symbol: 'SPY' },
	{
		date: '2011-07-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-08-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-08-21', action: 'buy', amount: 20000, symbol: 'SPY' },
	{
		date: '2011-09-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-10-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-10-16', action: 'buy', amount: 20000, symbol: 'GOOGL' },
	{
		date: '2011-11-13',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2011-12-13',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2011-12-24', action: 'buy', amount: 20000, symbol: 'VB' },
	{
		date: '2012-01-12',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-02-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-03-12',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-03-25', action: 'buy', amount: 30000, symbol: 'SPY' },
	{
		date: '2012-04-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-04-18', action: 'buy', amount: 10000, symbol: 'VT' },
	{
		date: '2012-05-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-06-02', action: 'buy', amount: 1000, symbol: 'TSLA' },
	{
		date: '2012-06-03',
		action: 'sell',
		amount: 50000,
		symbol: 'GOOGL'
	},
	{ date: '2012-06-04', action: 'buy', amount: 50000, symbol: 'SPY' },
	{ date: '2012-06-05', action: 'buy', amount: 9000, symbol: 'MCD' },
	{
		date: '2012-06-10',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-06-24', action: 'buy', amount: 10000, symbol: 'VNQ' },
	{
		date: '2012-07-10',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-08-09',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-09-08',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-10-08',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-10-15', action: 'buy', amount: 40000, symbol: 'BND' },
	{
		date: '2012-11-07',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2012-12-07',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2012-12-19', action: 'sell', amount: 30000, symbol: 'VB' },
	{
		date: '2012-12-20',
		action: 'withdraw',
		amount: -30000,
		symbol: null
	},
	{ date: '2012-12-28', action: 'sell', amount: 10000, symbol: 'QQQ' },
	{
		date: '2012-12-29',
		action: 'withdraw',
		amount: -10000,
		symbol: null
	},
	{
		date: '2013-01-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2013-01-11', action: 'buy', amount: 30000, symbol: 'SPY' },
	{
		date: '2013-02-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-03-07',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-04-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2013-04-29', action: 'buy', amount: 30000, symbol: 'VB' },
	{
		date: '2013-05-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-06-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2013-06-13', action: 'buy', amount: 20000, symbol: 'VNQ' },
	{
		date: '2013-07-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-08-04',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2013-08-28', action: 'buy', amount: 20000, symbol: 'MUB' },
	{
		date: '2013-09-03',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-10-03',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-11-02',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2013-12-02',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2013-12-03', action: 'buy', amount: 40000, symbol: 'SHV' },
	{
		date: '2014-01-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-01-31',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-03-02',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2014-03-30', action: 'buy', amount: 30000, symbol: 'VT' },
	{
		date: '2014-04-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-05-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-05-31',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-06-30',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2014-07-01', action: 'buy', amount: 40000, symbol: 'GLD' },
	{
		date: '2014-07-14',
		action: 'deposit',
		amount: 75000,
		symbol: null
	},
	{ date: '2014-07-15', action: 'buy', amount: 75000, symbol: 'MCD' },
	{
		date: '2014-07-30',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-08-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-09-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2014-10-08', action: 'sell', amount: 10000, symbol: 'TSLA' },
	{ date: '2014-10-09', action: 'buy', amount: 40000, symbol: 'AAPL' },
	{
		date: '2014-10-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-11-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2014-12-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2015-01-17', action: 'buy', amount: 30000, symbol: 'SPY' },
	{
		date: '2015-01-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-02-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-03-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-04-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2015-04-27', action: 'buy', amount: 40000, symbol: 'VT' },
	{
		date: '2015-05-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-06-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-07-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2015-08-22', action: 'buy', amount: 30000, symbol: 'GOOGL' },
	{
		date: '2015-08-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-09-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-10-03',
		action: 'deposit',
		amount: 60000,
		symbol: null
	},
	{ date: '2015-10-06', action: 'buy', amount: 50000, symbol: 'BND' },
	{
		date: '2015-10-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2015-11-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2015-11-26', action: 'buy', amount: 40000, symbol: 'SPY' },
	{
		date: '2015-12-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-01-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-02-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2016-03-14', action: 'buy', amount: 30000, symbol: 'VEA' },
	{
		date: '2016-03-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-04-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2016-05-18', action: 'buy', amount: 20000, symbol: 'GSG' },
	{
		date: '2016-05-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-06-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-07-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-08-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2016-09-14', action: 'buy', amount: 10000, symbol: 'MCD' },
	{ date: '2016-09-15', action: 'buy', amount: 30000, symbol: 'SHV' },
	{
		date: '2016-09-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-10-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-11-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2016-12-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-01-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2017-02-13', action: 'buy', amount: 50000, symbol: 'VT' },
	{
		date: '2017-02-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-03-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-04-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-05-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-06-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2017-06-21', action: 'buy', amount: 50000, symbol: 'GLD' },
	{
		date: '2017-07-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-08-13',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-09-12',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-10-12',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2017-11-07', action: 'buy', amount: 40000, symbol: 'QQQ' },
	{
		date: '2017-11-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2017-12-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-01-10',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2018-01-18', action: 'buy', amount: 30000, symbol: 'VWO' },
	{
		date: '2018-02-09',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-03-11',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2018-03-16', action: 'buy', amount: 20000, symbol: 'BND' },
	{
		date: '2018-04-10',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-05-10',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-06-09',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2018-06-19', action: 'buy', amount: 30000, symbol: 'SPY' },
	{
		date: '2018-07-09',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-08-08',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-09-07',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-10-07',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2018-10-10', action: 'buy', amount: 40000, symbol: 'VB' },
	{ date: '2018-10-11', action: 'sell', amount: 5000, symbol: 'TIP' },
	{ date: '2018-10-12', action: 'buy', amount: 5500, symbol: 'MUB' },
	{
		date: '2018-11-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2018-12-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-01-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-02-04',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2019-02-07', action: 'buy', amount: 40000, symbol: 'BND' },
	{
		date: '2019-03-06',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-04-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-05-05',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-06-04',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2019-07-03', action: 'buy', amount: 40000, symbol: 'QQQ' },
	{
		date: '2019-07-04',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-08-03',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-09-02',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-10-02',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-11-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2019-12-01',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2019-12-14', action: 'buy', amount: 20000, symbol: 'TSLA' },
	{ date: '2019-12-15', action: 'buy', amount: 10000, symbol: 'SHV' },
	{ date: '2019-12-16', action: 'buy', amount: 30000, symbol: 'VEA' },
	{
		date: '2019-12-31',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-01-30',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-02-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-03-30',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-04-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2020-05-20', action: 'buy', amount: 10000, symbol: 'MCD' },
	{
		date: '2020-05-21',
		action: 'sell',
		amount: 100000,
		symbol: 'AAPL'
	},
	{ date: '2020-05-22', action: 'buy', amount: 140000, symbol: 'SPY' },
	{
		date: '2020-05-29',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-06-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-07-28',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-08-27',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-09-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2020-09-29', action: 'buy', amount: 50000, symbol: 'SPY' },
	{
		date: '2020-10-26',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-11-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2020-12-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-01-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-02-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-03-25',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2021-04-03', action: 'buy', amount: 60000, symbol: 'TIP' },
	{
		date: '2021-04-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-05-04',
		action: 'sell',
		amount: 150000,
		symbol: 'TSLA'
	},
	{
		date: '2021-05-05',
		action: 'buy',
		amount: 150000,
		symbol: 'GOOGL'
	},
	{ date: '2021-05-06', action: 'buy', amount: 10000, symbol: 'MCD' },
	{
		date: '2021-05-24',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-06-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-07-23',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-08-22',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2021-09-15', action: 'buy', amount: 40000, symbol: 'SPY' },
	{
		date: '2021-09-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-10-21',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2021-11-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2021-11-28', action: 'buy', amount: 30000, symbol: 'QQQ' },
	{
		date: '2021-12-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-01-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-02-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2022-03-04', action: 'buy', amount: 30000, symbol: 'VNQ' },
	{
		date: '2022-03-20',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-04-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-05-19',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2022-05-23', action: 'buy', amount: 30000, symbol: 'ARKK' },
	{
		date: '2022-06-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-07-18',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2022-08-15', action: 'buy', amount: 20000, symbol: 'GSG' },
	{
		date: '2022-08-17',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-09-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-10-16',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2022-11-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2022-11-27', action: 'buy', amount: 40000, symbol: 'BND' },
	{
		date: '2022-12-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2023-01-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2023-02-13',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2023-02-19', action: 'buy', amount: 30000, symbol: 'BND' },
	{
		date: '2023-03-15',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2023-04-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{
		date: '2023-05-14',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2023-06-10', action: 'buy', amount: 31000, symbol: 'IEF' },
	{
		date: '2023-06-13',
		action: 'deposit',
		amount: 10000,
		symbol: null
	},
	{ date: '2023-06-17', action: 'buy', amount: 10000, symbol: 'MCD' }
];

export const sampleTransactions = [
	...transactionsEquity.map((t) => ({ ...t, portfolio_id: 92 })),
	...transactionsCrypto.map((t) => ({ ...t, portfolio_id: 93 }))
];
