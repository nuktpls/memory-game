import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Player = ({ playlist }) => {
	const [playingNow, setPlayingNow] = useState(0)

	function changePlayingNow(param) {
		setPlayingNow(param)
	}
	const handleClickPrevious = () => {
		changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
		// console.log(playingNow)
	}
	const handleClickNext = () => {
		changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
		// console.log(playingNow)
	}

	return (
		<AudioPlayer
			autoPlay
			// src={playlist[playingNow].src}
			src={playlist[playingNow].src}
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
