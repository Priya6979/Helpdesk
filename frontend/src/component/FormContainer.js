import React from 'react';
import '../styles/FormContainer.css';

const FormContainer = () => {
	return (
		<div className="wrapper-container">
			<div className="header-form">
				<h1>Create New Ticket</h1>
			</div>
			<form>
				<div className="form-content">
					<div className="form-top-content">
						<div className="top-lf-form">
							<div className="txt-input">
								<label className="label">Ticket No.</label>
								<input
									type="number"
									className="input-field"
								/>
							</div>
							<div className="txt-input">
								<label className="label">Date</label>
								<input
									type="number"
									className="input-field"
								/>
							</div>
						</div>
						<div className="top-rg-form">
							<div className="txt-input">
								<label className="label">Name</label>
								<input
									type="number"
									className="input-field"
								/>
							</div>
							<div className="txt-input">
								<label className="label">Department</label>
								<input
									type="number"
									className="input-field"
								/>
							</div>
						</div>
					</div>

					<div className="cen">
						<label className="label">Subject</label>
						<input
							type="text"
							className="input-field subject"
						></input>
					</div>

					<div className="form-bot-content">
						<div className="left-bot">
							<label>Category</label>
							<input
								type="number"
								className="input-field"
							/>
							<label>Type</label>
							<input
								type="number"
								className="input-field"
							/>
							<label>Priority</label>
							<input
								type="number"
								className="input-field"
							/>
						</div>
						<div className="right-bot">
							<label>Department</label>
							<textarea className="input-field"></textarea>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormContainer;
