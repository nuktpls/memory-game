import React from 'react'
import BodyContainer from './BodyContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import RowContainer from './RowContainer'
import BlockImageContainer from './BlockImageContainer'
import PlayerContainer from './PlayerContainer'

// import BlockShareContainer from './BlockShareContainer'
import ScienceContainer from './ScienceContainer'
// import MainContainer from './MainContainer'
import MemoryGameContainer from './MemoryGameContainer'
const LayoutResolver = ({
	children,
	opt,
	type,
	// querySelector,
	sectionTitle,
	setLocation,
	logo,
	url,
}) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer children={children} opt={opt} />
			case 'FOOTER':
				return <FooterContainer children={children} opt={opt} />
			case 'BLOCK_IMAGE':
				return <BlockImageContainer opt={opt} />
			// case 'FULLSCREEN':
			// 	return <FullScreenContainer opt={opt} children={children} />
			case 'VIDEOPLAYER':
				return <PlayerContainer opt={opt} children={children} url={url} />
			// case 'BLOCK_SHARE':
			// return <BlockShareContainer opt={opt} />
			case 'HEADER':
				return <HeaderContainer heroData={opt} logo={logo} opt={opt} />
			case 'BLOCK_IGNITE_SCIENCE':
				return <ScienceContainer heroData={opt} logo={logo} opt={opt} />
			case 'ROW':
				return (
					<RowContainer
						opt={opt}
						children={children}
						// querySelector={querySelector}
						sectionTitle={sectionTitle}
						setLocation={setLocation}
					/>
				)
			// case 'MAIN':
			// return <MainContainer opt={opt} />
			case 'MEMORYGAME':
				return <MemoryGameContainer opt={opt} />
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default LayoutResolver
