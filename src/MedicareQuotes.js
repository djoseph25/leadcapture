import React from 'react';
import { Col, Row, Form, Label, Input } from 'reactstrap';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import Submenu from './Submenu';

const Medicare = () => {
	const {
		AddPost,
		handleFullName,
		handleGender,
		handleBirthDay,
		handlePhone,
		handleEmail,
		handleMedicareProducts,
		handleMedicareStatus,
		handleZipCode,
		handleType,
		Type,
		FullName,
		Gender,
		BirthDay,
		ZipCode,
		Phone,
		Email,
		MedicareStatus,
		MedicareProducts,
	} = useGlobalContext();

	return (
		<>
			<Navbar />
			<SideBar />
			<Submenu />
			<section className="contact-page">
				<article className="contact-form">
					<h2 className="health-form">Medicare Insurance Quotes</h2>
					<p className="info-needed">
						We need some information to provide you with quotes and coverage options:
					</p>
					<Form className="form-group" onSubmit={AddPost}>
						<Row form id="form">
							<Col>
								<Input
									type="text"
									name="ZipCode"
									pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
									className="input"
									placeholder="Zip Code"
									value={ZipCode}
									onChange={handleZipCode}
									required
								/>
							</Col>
						</Row>

						<Row form id="form">
							<Col md={6} id="form">
								<select
									id="input"
									type="select"
									name="MedicareStatus"
									className="input"
									placeholder="Household Size"
									value={MedicareStatus}
									onChange={handleMedicareStatus}
									required="required"
								>
									<option value="" disabled selected hidden>
										Medicare Status
									</option>
									<option value="Enroll in Part B">Enroll in Part B</option>
									<option value="Not Enroll">Not Enroll</option>
									<option value="Not Sure">Not Sure</option>
								</select>
							</Col>
							<Col md={6} id="form">
								<select
									id="input"
									type="select"
									name="MedicareProducts"
									className="input"
									placeholder="Household Size"
									value={MedicareProducts}
									onChange={handleMedicareProducts}
									required="required"
								>
									<option value="" disabled selected hidden>
										Medicare Products
									</option>
									<option value="Advantage">Advantage</option>
									<option value="Drug Plan">Drug Plan</option>
									<option value="Supplement">Supplement</option>
									<option value="Not Sure">Not Sure</option>
								</select>
							</Col>
						</Row>
						<Label style={{ color: 'whitesmoke' }}>
							Your Contact Info will be used to give you quotes
						</Label>
						<Row form id="form">
							<Col md={4}>
								<Input
									type="phone"
									name="Phone"
									className="input"
									placeholder="Phone Number"
									value={Phone}
									onChange={handlePhone}
									required
								/>
							</Col>
							<Col md={4} id="form">
								<select
									id="input"
									type="select"
									name="Smoker"
									className="input"
									placeholder="Household Size"
									value={Type}
									onChange={handleType}
									required="required"
								>
									<option value="" disabled selected hidden>
										Type
									</option>
									<option value="Medicare">Medicare</option>
								</select>
							</Col>
							<Col md={4}>
								<Input
									type="email"
									name="Email"
									className="input"
									placeholder="Email Address"
									value={Email}
									onChange={handleEmail}
									required
								/>
							</Col>
						</Row>
						<Label style={{ color: 'white' }}>Please provide info for each person to be covered.</Label>
						<Row form id="form">
							<Col md={4}>
								<Input
									type="text"
									name="FullName"
									className="input"
									placeholder="Full Name"
									value={FullName}
									onChange={handleFullName}
									required
								/>
							</Col>
							<Col md={4} id="form">
								<select
									id="input"
									type="select"
									name="Gender"
									className="input"
									value={Gender}
									onChange={handleGender}
									required="required"
								>
									<option value="" disabled selected hidden>
										Gender
									</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</Col>
							<Col md={4} id="form">
								<Input
									type="text"
									name="DOB"
									className="input"
									placeholder="Date Of Birth"
									value={BirthDay}
									onChange={handleBirthDay}
									required
								/>
							</Col>
						</Row>

						<div className="submit-quote">
							<div id="white">
								By submitting this request, I agree to this website's Privacy Notice and Legal Disclaimer.
								By submitting this request, I provide my electronic consent to receive marketing &
								telemarketing contact via automatic telephone dialing system, artificial/pre-recorded
								messages, email, and text message from Liberty Mutual, at the telephone number and email
								address I provide. I understand that my consent to receive communications in this way is not
								required as a condition of purchasing goods or services.
							</div>{' '}
							<Input className="submit-input" type="submit" value="Submit" href="/ThankYou" />
						</div>
					</Form>
				</article>
			</section>
		</>
	);
};

export default Medicare;
