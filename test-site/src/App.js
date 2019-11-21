import React, { useState } from 'react'
import './App.css'
import TimeInput from '../../index'

const ExampleBlock = ({ label, Input }) => {
	const [value, setValue] = useState('20:30')

	return (
		<div style={{ marginBottom: '2em' }}>
			<h2>{label} time input</h2>

			<label style={{ display: 'block' }}>
				<span style={{ marginRight: '0.5em' }}>{label} time input</span>
				<Input
					currentValue={value}
					setValue={setValue}
					className="exampleClass"
				/>
			</label>

			<p>
				<button onClick={() => setValue('07:15')}>
					Set {label} time to 7:15 AM
				</button>
				<button onClick={() => setValue('15:45')}>
					Set {label} time to 3:45 PM
				</button>
			</p>

			<p>
				{label} returned value: "{value}"
			</p>
		</div>
	)
}

function App() {
	let [addedLater, setAddedLater] = useState(false)
	setTimeout(() => setAddedLater(true), 2000)
	return (
		<div className="App">
			<h1>React Time Input Polyfill</h1>

			<ExampleBlock
				label="Non-forced polyfill"
				Input={({ currentValue, setValue, className }) => (
					<TimeInput
						value={currentValue}
						onChange={({ value }) => setValue(value)}
						className={className}
					/>
				)}
			/>

			<ExampleBlock
				label="Forced polyfill"
				Input={({ currentValue, setValue, className }) => (
					<TimeInput
						value={currentValue}
						onChange={({ value }) => setValue(value)}
						forcePolyfill={true}
						className={className}
					/>
				)}
			/>

			<ExampleBlock
				label="Non-polyfill"
				Input={({ currentValue, setValue, className }) => (
					<input
						type="time"
						value={currentValue}
						onChange={e => setValue(e.target.value)}
						className={className}
					/>
				)}
			/>

			{addedLater && (
				<ExampleBlock
					label="Delayed forced polyfill"
					Input={({ currentValue, setValue, className }) => (
						<TimeInput
							value={currentValue}
							onChange={({ value }) => setValue(value)}
							forcePolyfill={true}
							className={className}
						/>
					)}
				/>
			)}
		</div>
	)
}

export default App
