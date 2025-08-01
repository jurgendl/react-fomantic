import './App.scss'
import {useEffect, useRef, useState} from "react";
import {FomanticCheckbox} from "./components/FomanticCheckbox.tsx";

export function CheckboxDemoAlt() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isChecked1, setIsChecked1] = useState(false);
	const [isChecked3, setIsChecked3] = useState(false);

	useEffect(() => {
		console.log('isChecked1 ' + isChecked1);
	}, [isChecked1]);

	useEffect(() => {
		console.log('isChecked3 ' + isChecked3);
	}, [isChecked3]);

	return (
		<>
			<form ref={formRef}>
				<FomanticCheckbox id="terms1" name="terms1" componentId="terms-wrapper1" label="label" variant="toggle"
								  checked={isChecked1} onChange={setIsChecked1} formRef={formRef} />
				<br />
				<button onClick={(evt) => {
					evt.preventDefault();
					setIsChecked1(true);
				}}>Check
				</button>
				<button onClick={(evt) => {
					evt.preventDefault();
					setIsChecked1(false);
				}}>Uncheck
				</button>
				<br />
				<FomanticCheckbox label="label" checked={true} disabled={true} />
				<br />
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
			<br />
			<FomanticCheckbox id="terms3" name="terms3" componentId="terms-wrapper3" label="label" variant="toggle"
							  checked={isChecked3} onChange={setIsChecked3} />
		</>
	)
}

