import puppeteer from 'puppeteer';

const getBondPrice = async (obj) => {
	const url = 'https://www.bondview.com/bond/016249SJ4';

	console.log(obj); // Create a new browser instance

	// Create a new browser instance
	const browser = await puppeteer.launch();

	// Create a new page
	const page = await browser.newPage();

	// Go to the page
	await page.goto(url, { waitUntil: 'networkidle0' });

	// Get the HTML of the page
	const html = await page.content();

	console.log(html);

	// Close the browser
	await browser.close();
};

export { getBondPrice };

/*

<div class="details normal-links about-bond hidden-sm hidden-xs">
                        <h3>About</h3>
	                                                This municipal bond, <strong>ALIEF TEX INDPT SCH DIST REF-SCH BLDG</strong> is issued
                                                                                                                         within the state of <strong>Texas</strong>
		                                                    by <a target="_blank" href="https://muniprofile.com/alief-independent-school-district-097ccd"><strong>Alief Independent School District</strong></a>
		                    		                                                    and has a market sector associated with
                                <strong><a href="/account/plans"><i class="glyphicon glyphicon-lock"></i></a></strong>.
		                    	                    <strong>Bond Price:</strong>
                        When <a href="/buy-municipal-bonds/buy-list" target="_blank">buying municipal bonds</a>, it is often best to rely on an independent price estimate
                        rather than the last traded municipal bond price because most bonds do not trade regularly.

                                                    For example this bond last traded <strong>37</strong>
                            days ago on <strong>2023-05-19</strong>
                            at a price of <strong><span>$</span>110.84</strong>
                            and a yield to worst of <strong>2.930%</strong>.
                                                <strong><a href="/trends/estimated-price-info" target="_blank">BondView’s recent estimated price</a></strong> for this bond was
                        <strong>$112.845</strong>


							                                which is
	                                                            <strong>1.78%</strong> higher than
                                                                    the last trade price ( $110.84 )
                                                        .

                                                    <strong><a href="/credit-rating" target="_blank">BondView’s Credit Score</a></strong> is our curated opinion based upon numerous muni bond risk
                            factors focused on credit, interest and default risk.
                            This bond is rated a <strong>9</strong> on a 1-10 scale. (10 is Great and 1 is Poor).

                                                <strong>Municipal Bond Rate:</strong>
                        This bond’s coupon is <strong>5.000%</strong> annualized and the bond
                        matures on <strong>02/15/2029</strong>.
                                                    This bond last traded on <strong>2023-05-19</strong> with a
                            municipal bond yield to worst of <strong>2.930%</strong>.

                        <br><br>
                        <a target="_blank" href="/products/single-bond"><strong>More information available on single bond report.</strong></a>

	                                                <div onclick="window.open('https://muniprofile.com/alief-independent-school-district-097ccd', '_blank');" class="item" style="margin-top: 25px;cursor: pointer;">
                                <span>VIEW ISSUER PROFILE</span>
                                <img src="/img/bonds/popup.svg" class="text-right" style="margin-top:-4px;">
                            </div>
	                                        </div>

                                          */
