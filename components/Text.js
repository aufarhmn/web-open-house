import clsx from 'clsx';

/**
 * @typedef {Object} TextProps
 * @property {React.ComponentType<SvgIconProps>} [StartIcon]
 * @property {React.ComponentType<SvgIconProps>} [EndIcon]
 * @property {string} [value]
 * @property {string} [startClassName]
 * @property {string} [endClassName]
 */

/**
 * @param {TextProps} props
 */
const Text = ({
	StartIcon,
	EndIcon,
	value = '',
	startClassName = '',
	endClassName = ''
}) => {
	return (
		<>
			{StartIcon ? (
				<StartIcon className={clsx('mr-3.5 min-w-fit', startClassName)} />
			) : null}
			{value}
			{EndIcon ? (
				<EndIcon className={clsx('ml-1 min-w-fit', endClassName)} />
			) : null}
		</>
	);
};

export default Text;
