import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithub, FaPaste } from 'react-icons/fa';

const Data = [
	{
		id: 1,
		icon: <FaLinkedin className="social-icon"></FaLinkedin>,
		Question: 'What Marketplace health insurance plans cover?',
		Answer: `Ambulatory patient services (outpatient care, or care you get without being admitted to a hospital)
       Emergency services
Hospitalization (like surgery and overnight stays)
Prescription drugs
Laboratory services`,
		url: 'https://www.healthcare.gov/coverage/',
	},

	{
		id: 2,
		icon: <FaPaste className="social-icon"></FaPaste>,
		Question: 'Who should buy health insurance?',
		Answer: `Literally everyone should buy health insurance because medical expenses are simply too high to cover out of pocket. Medical bills are a leading cause of consumer debt and related financial problems (e.g., bankruptcy and home foreclosure).`,
		url:
			'https://www.policygenius.com/health-insurance/learn/health-insurance-basics-and-guide/#who-should-buy-health-insurance',
	},
	{
		id: 3,
		icon: <FaGithub className="social-icon"></FaGithub>,
		Question: 'Can you enroll outside of Open Enrollment??',
		Answer: `Since the 2021 Open Enrollment Period is over, you can now enroll in or change a Health Insurance Marketplace® plan only if you have a life event that qualifies you for a Special Enrollment Period.`,
		url: 'https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/',
	},

	{
		id: 5,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'How to cancel your Marketplace plan?',
		Answer: `If you’re ending coverage for everyone on the application, your termination can take effect as soon as the day you cancel, or you can set the Marketplace coverage end date to a day in the future — like if you know your new coverage will start on the first day of the following month.`,
		url: 'https://www.healthcare.gov/how-to-cancel-a-marketplace-plan/',
	},
	{
		id: 6,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'How to pick a health insurance plan?',
		Answer: `Choosing a health insurance plan can be complicated. Knowing just a few things before you compare plans can make it simpler.`,
		url: 'https://www.healthcare.gov/choose-a-plan/',
	},
	{
		id: 7,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'How can I learn about the quality of care doctors and hospitals provide??',
		Answer: `Most health plans give you the best deal on services when you see a doctor who has a contract with your health plan. While you may be able to see doctors who don’t contract with your plan, visiting an “in-network” provider usually means you’ll have lower out-of-pocket costs`,
		url: 'https://www.healthcare.gov/using-marketplace-coverage/getting-medical-care/',
	},
	{
		id: 8,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'Are you self Emloyed?',
		Answer: `If you're self-employed, you can use the individual Health Insurance Marketplace® to enroll in flexible, high-quality health coverage that works well for people who run their own businesses.`,
		url: 'https://www.healthcare.gov/self-employed/',
	},
	{
		id: 9,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'What if I have COBRA coverage?',
		Answer: `If you currently have COBRA continuation coverage, your options are different during the annual health insurance Open Enrollment period and outside Open Enrollment. Learn about COBRA and the Marketplace.`,
		url: 'https://www.healthcare.gov/unemployed/cobra-coverage/',
	},
	{
		id: 10,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'What if I’m self-employed and then get a job that offers health coverage?',
		Answer: `You can cancel your Marketplace plan any time and enroll in your employer’s insurance.
Once you have an offer of job-based coverage, in most cases you’ll no longer qualify for a premium tax credit and other savings on a Marketplace plan. This is true whether you enroll in the job-based coverage or not.`,
		url: 'https://www.healthcare.gov/have-job-based-coverage/',
	},
	{
		id: 11,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question:
			'Learn the rules that apply to Flexible Savings Accounts (FSAs) for job-based health insurance.',
		Answer: `If you have a health plan through a job, you can use a Flexible Spending Account (FSA) to pay for copayments, deductibles, some drugs, and some other health care costs. Using an FSA can reduce your taxes.`,
		url: 'https://www.healthcare.gov/have-job-based-coverage/flexible-spending-accounts/',
	},
	{
		id: 12,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'How can I tell if I qualify for Medicaid?',
		Answer: `Medicaid and the Children’s Health Insurance Program (CHIP) provide free or low-cost health coverage to millions of Americans, including some low-income people, families and children, pregnant women, the elderly, and people with disabilities.`,
		url: 'https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/',
	},
	{
		id: 13,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'What services does Medicaid cover?',
		Answer: `Mandatory benefits include services including inpatient and outpatient hospital services, physician services, laboratory and x-ray services, and home health services, among others. Optional benefits include services including prescription drugs, case management, physical therapy, and occupational therapy.`,
		url: 'https://www.medicaid.gov/medicaid/benefits/index.html',
	},
	{
		id: 12,
		icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
		Question: 'How to report changes to the Marketplace',
		Answer: `You report changes to the Marketplace by updating your application. You can update your application, by phone, or in person — but not by mail.
              Note: If you’ve moved to a new address in the same state, follow the directions below. If you move to a different state, you’ll have to start a new application. See what to do if you move out of state.`,
		url: 'https://www.healthcare.gov/reporting-changes/how-to-report-changes/',
	},
];

export default Data;
