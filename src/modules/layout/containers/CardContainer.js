import React from 'react'
import classnames from 'classnames'
// import CardVerse from '../../../../static/assets/images/teste-glicemia.svg'

const CardContainer = ({
	onClick,
	card,
	index,
	isInactive,
	isFlipped,
	isDisabled,
	cardVerse,
}) => {
	const handleClick = () => {
		!isFlipped && !isDisabled && onClick(index)
	}
	return (
		<>
			<div
				className={classnames('card', {
					'is-flipped': isInactive ? true : isFlipped,
					'is-inactive': isInactive,
				})}
				onClick={isInactive ? null : handleClick}
			>
				<div className="card-face card-font-face">{cardVerse}</div>
				<div className="card-face card-back-face">{card.image}</div>
			</div>
		</>
	)
}

export default CardContainer
