import { useMemo } from 'react';
import Text from '../components/Text';
import clsx from 'clsx';

/**
 * @typedef {Object} ButtonProps
 * @property {React.ComponentType<SvgIconProps>} [StartIcon]
 * @property {string} [text]
 * @property {React.ComponentType<SvgIconProps>} [EndIcon]
 * @property {string} [color]
 * @property {string} [size]
 * @property {('primary' | 'secondary')} [type] - type button
 * @property {React.MouseEventHandler<HTMLButtonElement>} [onClick]
 * @property {string} [className]
 */

/**
 * @param {ButtonProps} props
 */

// Contoh Penggunaan
// <Button 
//     text="Kembalii" 
//     color="blue" 
//     size="sm" 
//     type="primary" 
// > 
// </Button>

export default function Button({
	StartIcon,
	text = 'Button',
	EndIcon,
	color = 'blue',
	size = 'sm',
	type = 'primary',
	onClick = () => {},
	className
}) {
	const btnColor = useMemo(() => {
		if (type === 'primary')
			return `bg-${color}-500 text-white hover:ring-[3px] hover:ring-${color}-200 hover:bg-${color}-400 active:bg-${color}-700`;
		if (type === 'secondary')
			return `bg-transparent text-${color}-500 ring-${color}-500 ring-[3px] ring-inset hover:bg-${color}-400 hover:text-white hover:ring-transparent active:bg-${color}-700 active:ring-[3px] active:ring-${color}-700`;
	}, [color, type]);

	const fontSize = useMemo(() => {
		return {
			xsm: `text-sm px-5 py-1.5 gap-2.5`,
			sm: `text-md px-6 py-2.5 gap-2.5`,
			md: `text-lg px-6 py-3 gap-3.5`,
			lg: `text-xl px-7 py-4 gap-4`
		}[size];
	}, [size]);

	return (
		<button
			onClick={onClick}
			className={clsx(
				'transition rounded-2xl font-bold ease-in-out duration-300',
				size === 'sm' && type === 'secondary' ? 'font-bold' : '',
				btnColor,
				fontSize,
				className
			)}
		>
			<Text
				StartIcon={StartIcon}
				value={text}
				EndIcon={EndIcon}
				startClassName={clsx(
					'-mr-[4.1px]',
					size === 'sm'
						? 'w-7 h-7'
						: size === 'md'
						? 'w-8 h-8'
						: size === 'lg'
						? 'w-9 h-9'
						: ''
				)}
				endClassName={clsx(
					'-ml-[4.1px]',
					size === 'sm'
						? 'w-7 h-7'
						: size === 'md'
						? 'w-8 h-8'
						: size === 'lg'
						? 'w-9 h-9'
						: ''
				)}
			/>
		</button>
	);
}
