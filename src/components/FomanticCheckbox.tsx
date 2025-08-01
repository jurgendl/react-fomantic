import {type RefObject, useEffect, useRef} from 'react';

type FomanticCheckboxProps = {
	id?: string;
	name?: string;
	componentId?: string;
	label: string;
	checked: boolean; // required for fully controlled
	onChange?: (checked: boolean) => void;
	variant?: 'slider' | 'toggle';
	disabled?: boolean;
	initialChecked?: boolean;               // for form reset support
	formRef?: RefObject<HTMLFormElement | null>; // to listen for reset event
};

export function FomanticCheckbox(
	{
		id,
		name,
		componentId,
		label,
		checked,
		onChange,
		variant,
		disabled = false,
		initialChecked = false,
		formRef,
	}: FomanticCheckboxProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	// Initialize Fomantic UI checkbox once
	useEffect(() => {
		if (window && (window as any).$ && divRef.current) {
			((window as any).$(`#${componentId}`) as any).checkbox({
				onChange: () => {
					if (inputRef.current) {
						if (onChange) {
							onChange(inputRef.current.checked);
						}
					}
				}
			});
		}
	}, []);

	// Sync checked prop to input element
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.checked = checked;
		}
	}, [checked]);

	// Handle form reset
	useEffect(() => {
		if (!formRef?.current) return;
		const formElement = formRef.current;
		const handleReset = () => {
			if (onChange) {
				onChange(initialChecked); // restore initial state
			}
		};
		formElement.addEventListener('reset', handleReset);
		return () => formElement.removeEventListener('reset', handleReset);
	}, [formRef, initialChecked, onChange]);

	return (
		<div
			ref={divRef}
			className={`ui checkbox ${variant ? `${variant}` : ''} ${disabled ? 'disabled' : ''}`}
			id={componentId}
		>
			<input
				ref={inputRef}
				id={id}
				type="checkbox"
				tabIndex={0}
				className="hidden"
				checked={checked}
				onChange={() => {
				}} // prevent React warning; Fomantic handles change
				disabled={disabled}
				name={name}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
}
