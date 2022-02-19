import React from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const FullScreenContainer = ({ children }) => {
	const handle = useFullScreenHandle()
	return (
		<>
			<FullScreen handle={handle}>
				<div className="wrapperFullscreen">
					<div className="warnFullscreen">
						Aperte Esc para sair, viu ! <br />
						Pare o Vídeo antes, controles estão sendo feitos.
					</div>
					{children}
				</div>
			</FullScreen>{' '}
		</>
	)
}

export default FullScreenContainer
