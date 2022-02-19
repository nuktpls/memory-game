import React from 'react'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

const PlayerContainer = ({ url }) => {
	return (
		<ReactPlayer
			url={url}
			type="video/mp4"
			// config={{
			// 	youtube: {
			// 		playerVars: { showinfo: 0, modestbranding: 0 },
			// 	},
			// }}
			title="Vídeo Promocional - Introdução 1 - Edu4Dev"
			// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			// frameBorder="0"
			// webkitallowfullscreen="false"
			// mozallowfullscreen="false"
			light={false}
			// playIcon
			// rel="0"
			// showinfo="0"
			// modestbranding="0"
			// width="100%"
			// height="100%"
			loop={true}
			controls={true}
			// style={{
			// 	position: 'absolute',
			// 	top: 0,
			// 	left: 0,
			// 	width: '100%',
			// 	height: '100%',
			// 	zIndex: 1,
			// }}
		/>
	)
}

export default PlayerContainer

export const queryVideo = graphql`
	query heroVideo {
		promoVideoUrl: file(name: { eq: "promo-edu4dev" }) {
			publicURL
		}
	}
`
