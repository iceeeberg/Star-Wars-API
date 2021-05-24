import React, { useState } from 'react';

const Input = ({ search }) => {
	const [ input, setInput ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		search(input);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
    <div className="d-flex">
				<input
					className="form-control mr-1"
					type="text"
					name="character"
					placeholder="Search Character..."
					onChange={(e) => setInput(e.target.value)}
				/>
					<button 
            className="btn btn-primary mb-2" 
            type="submit" 
            name="submit">
						Search
					</button>
      </div>
			</form>
		</div>
	);
};

export default Input;
