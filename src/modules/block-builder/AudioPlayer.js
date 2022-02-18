import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { usePlaylistQuery } from './configs/playlistQueryConfig'

// const playlist = [
// 	{
// 		name: 'Agora Está Tudo Bem',
// 		src: data.musicOne.publicURL,
// 	},
// 	{
// 		name: "As Crianças CTO's",
// 		src: data.musicTwo.publicURL,
// 	},
// 	{
// 		name: 'Corre No Peito',
// 		src: data.musicThree.publicURL,
// 	},
// 	{
// 		name: 'Geração 87',
// 		src: data.musicFour.publicURL,
// 	},
// 	{
// 		name: 'Herói Vagabundo',
// 		src: data.musicFive.publicURL,
// 	},
// 	{
// 		name: 'Menor  Vagabundo',
// 		src: data.musicSix.publicURL,
// 	},
// 	{
// 		name: 'O Sangue',
// 		src: data.musicSeven.publicURL,
// 	},
// 	{
// 		name: 'Pagode do Esquadrão',
// 		src: data.musicEight.publicURL,
// 	},
// 	{
// 		name: 'Quando Perdi As Lágrimas',
// 		src: data.musicNine.publicURL,
// 	},
// 	{
// 		name: 'Que Dia Ruim!',
// 		src: data.musicTen.publicURL,
// 	},
// 	{
// 		name: 'Rugido do Mar',
// 		src: data.musicEleven.publicURL,
// 	},
// 	{
// 		name: 'Show do Esquadrão',
// 		src: data.musicTwelve.publicURL,
// 	},
// ]

const Player = ({}) => {
	const [playingNow, setPlayingNow] = useState(0)
	const playlistQuery = usePlaylistQuery()
	const playlist = playlistQuery.allFile.edges
	// console.log(playlist.allFile.edges)

	function changePlayingNow(param) {
		setPlayingNow(param)
	}
	const handleClickPrevious = () => {
		changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
		console.log(playingNow)
	}
	const handleClickNext = () => {
		changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
		console.log(playingNow)
	}
	console.log(playlist[playingNow].node)

	return (
		<AudioPlayer
			autoPlay
			// src={playlist[playingNow].src}
			src={playlist[playingNow].node.publicURL}
			// onPlay={(e) => console.log('onPlay')}
			showSkipControls={true}
			showJumpControls={false}
			onClickPrevious={handleClickPrevious}
			autoPlayAfterSrcChange={true}
			onClickNext={handleClickNext}
			layout="horizontal-reverse"
		/>
	)
}

export default Player

// const playlist = [
// 	{
// 		name: 'Agora Está Tudo Bem',
// 		src: data.musicOne.publicURL,
// 	},
// 	{
// 		name: "As Crianças CTO's",
// 		src: data.musicTwo.publicURL,
// 	},
// 	{
// 		name: 'Corre No Peito',
// 		src: data.musicThree.publicURL,
// 	},
// 	{
// 		name: 'Geração 87',
// 		src: data.musicFour.publicURL,
// 	},
// 	{
// 		name: 'Herói Vagabundo',
// 		src: data.musicFive.publicURL,
// 	},
// 	{
// 		name: 'Menor  Vagabundo',
// 		src: data.musicSix.publicURL,
// 	},
// 	{
// 		name: 'O Sangue',
// 		src: data.musicSeven.publicURL,
// 	},
// 	{
// 		name: 'Pagode do Esquadrão',
// 		src: data.musicEight.publicURL,
// 	},
// 	{
// 		name: 'Quando Perdi As Lágrimas',
// 		src: data.musicNine.publicURL,
// 	},
// 	{
// 		name: 'Que Dia Ruim!',
// 		src: data.musicTen.publicURL,
// 	},
// 	{
// 		name: 'Rugido do Mar',
// 		src: data.musicEleven.publicURL,
// 	},
// 	{
// 		name: 'Show do Esquadrão',
// 		src: data.musicTwelve.publicURL,
// 	},
// ]

// const Player = ({}) => {
// 	returnconsole.log(usePlaylistQuery)

// 	const [playingNow, setPlayingNow] = useState(0)

// 	function changePlayingNow(param) {
// 		setPlayingNow(param)
// 	}
// 	const handleClickPrevious = () => {
// 		changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
// 		// console.log(playingNow)
// 	}
// 	const handleClickNext = () => {
// 		changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
// 		// console.log(playingNow)
// 	}

// 	return (
// 		<AudioPlayer
// 			autoPlay
// 			// src={playlist[playingNow].src}
// 			// src={playlist[playingNow].src}
// 			// onPlay={(e) => console.log('onPlay')}
// 			showSkipControls={true}
// 			showJumpControls={false}
// 			onClickPrevious={handleClickPrevious}
// 			autoPlayAfterSrcChange={true}
// 			onClickNext={handleClickNext}
// 			layout="horizontal-reverse"
// 		/>
// 	)
// }

// export default Player
