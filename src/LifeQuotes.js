import React from 'react';
import { Col, Row, Form, Label, Input } from 'reactstrap';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import Submenu from './Submenu';

const Health = () => {
	const {
		AddPost,
		handleFullName,
		handleGender,
		handleBirthDay,
		handleHeight,
		handleWeight,
		handlePhone,
		handleEmail,
		handleSmoker,
		handleQualify,
		handleHouseHoldIncome,
		handleHouseHoldSize,
		handleHealthCondition,
		handleZipCode,
		handleType,
		Type,
		FullName,
		Gender,
		BirthDay,
		Height,
		Weight,
		ZipCode,
		Phone,
		Email,
		Smoker,
		Qualify,
		HouseHoldIncome,
		HouseHoldSize,
		HealthCondition,
	} = useGlobalContext();
	return (
		<>
			<Navbar />
			<SideBar />
			<Submenu />
			<section className="contact-page">
				<article className="contact-form">
					<h2 className="health-form">Health Insurance Quotes</h2>
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
								<Input
									type="text"
									name="Income"
									value={HouseHoldIncome}
									className="input"
									placeholder="Household Income"
									onChange={handleHouseHoldIncome}
									required
								/>
							</Col>
							<Col md={6} id="form">
								<select
									id="input"
									type="select"
									name="HouseHoldSize"
									className="inputs"
									value={HouseHoldSize}
									placeholder="Household Size"
									onChange={handleHouseHoldSize}
									required="required"
								>
									<option value="" disabled selected hidden>
										Household Size
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="2">4</option>
									<option value="3">5</option>
								</select>
							</Col>
						</Row>
						<Row form id="form">
							<Col md={6} id="form">
								<select
									id="input"
									type="select"
									name="Qualify"
									className="input"
									placeholder="Household Size"
									value={Qualify}
									onChange={handleQualify}
									required="required"
								>
									<option value="" disabled selected hidden>
										Do you qualify for?
									</option>
									<option value="Group Insurance">Group Insurance</option>
									<option value="Medicaid/Medicare">Medicaid/Medicare</option>
									<option value="None of the above">None of the above</option>
								</select>
							</Col>
							<Col md={6} id="form">
								<select
									id="input"
									type="select"
									name="HealthCondition"
									className="input"
									value={HealthCondition}
									onChange={handleHealthCondition}
									required="required"
								>
									<option value="" disabled selected hidden>
										Health Conditions
									</option>
									<option value="None">None</option>
									<option value="Heart">Heart</option>
									<option value="Cancer">Cancer</option>
									<option value="Diabetes">Diabetes</option>
									<option value="Aids/Hiv">Aids/Hiv</option>
									<option value="Substance Abuse">Substance Abuse </option>
									<option value="Pregnant">Pregnant</option>
									<option value="Major Condition">Major Conditions</option>
									<option value="Minor Condition">Minor Conditions</option>
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
									name="Type"
									className="input"
									placeholder="Household Size"
									value={Type}
									onChange={handleType}
									required="required"
								>
									<option value="" disabled selected hidden>
										Type
									</option>
									<option value="Health">Health</option>
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
						<Row form id="form">
							<Col md={4}>
								<Input
									type="text"
									name="Height"
									className="input"
									placeholder="Height"
									value={Height}
									onChange={handleHeight}
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
									value={Smoker}
									onChange={handleSmoker}
									required="required"
								>
									<option value="" disabled selected hidden>
										Smoker
									</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</Col>
							<Col md={4}>
								<Input
									type="text"
									name="Weight"
									className="input"
									placeholder="Weight"
									value={Weight}
									onChange={handleWeight}
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

export default Health;
