<div>
	<h1>Information Security Policy</h1>

	<p>The organization is committed to implementing and maintaining a robust security framework to protect users' data and ensure compliance with the highest industry standards.</p>

	<h2>Data Encryption</h2>
	<p>
		Industry-leading encryption methods for data at rest and in transit are employed. All data is encrypted using AES-256, and all data in transit uses TLS encryption. Sensitive information, including
		access tokens, is encrypted at the application level before storage.
	</p>

	<h2>Risk Management</h2>
	<p>A risk management framework is established to identify, assess, and mitigate risks in a timely manner. This framework is continually updated and reviewed for improvements.</p>

	<h2>Access Control</h2>
	<p>
		Role-based access control is utilized to manage permissions to resources. Only authorized personnel have access to sensitive information and systems, and two-factor authentication (2FA) is
		required for enhanced security.
	</p>

	<h2>Automated Backups</h2>
	<p>
		Data resiliency is ensured by executing automated backups of all databases on a daily basis. Point in Time Recovery is also provided, allowing for database restoration to any specific point in
		time.
	</p>

	<h2>Payment Processing</h2>
	<p>
		Stripe is employed for all payment processing. Stripe is a PCI Service Provider Level 1, ensuring the highest level of security in the payments industry. No personal credit card information is
		stored for any of the users.
	</p>

	<h2>DDoS Mitigation</h2>
	<p>Scalable DDoS mitigation systems that automatically detect and block malicious attacks are in place, protecting the services and the users' data.</p>

	<h2>Vulnerability Management</h2>
	<p>
		The organization is committed to identifying and addressing vulnerabilities. Regular internal security reviews are conducted, tools are used to scan code for vulnerabilities, and industry experts
		are employed for regular penetration tests.
	</p>

	<h2>HTTPS/SSL by default</h2>
	<p>HTTPS/SSL is provided by default, enforcing industry standard encryption for all data communications.</p>

	<h2>Global Resiliency</h2>
	<p>Global infrastructure is leveraged to prevent downtime with automatic failovers to the nearest region, ensuring services remain accessible and reliable for users worldwide.</p>

	<h2>Continuous Monitoring</h2>
	<p>Systems are monitored 24/7 for any abnormal activities. A combination of automated systems and manual review is used to identify potential security incidents.</p>

	<p>
		This information security policy is actively maintained and updated in response to emerging threats and changes in the systems and operations. Users are encouraged to review this policy regularly
		to stay informed about security practices.
	</p>
</div>

<style>
	div {
		@apply mx-auto mt-16 max-w-3xl;
	}
	h1 {
		@apply mb-5 text-2xl font-bold text-slate-900;
	}
	h2 {
		@apply mb-2 mt-5 text-xl font-semibold text-slate-700;
	}

	p {
		@apply text-sm leading-relaxed tracking-tight text-slate-600;
	}
</style>
