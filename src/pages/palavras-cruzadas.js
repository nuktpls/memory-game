import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
// import CloseButton from '../../../../static/images/close-button.svg'

import MainWrapper from '../modules/block-builder/MainWrapper'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import FooterBlock from '../modules/block-builder/FooterBlock'
import PageHeader from '../modules/block-builder/PageHeader'
import Layout from '../modules/layout'
import Crossword from '@jaredreisinger/react-crossword'
import { ThemeProvider } from '@jaredreisinger/react-crossword'
import { Link } from 'gatsby'
// import ArrowRightIcon from '../../../../static/images/icon-arrow-right.svg'
import { AiOutlineLeft } from 'react-icons/ai'

function DialogMigrate({
	children,
	disableBackdropClick,
	disableEscapeKeyDown,
	onClose,
	...rest
}) {
	const handleClose = (event, reason) => {
		if (disableBackdropClick && reason === 'backdropClick') {
			return false
		}

		if (disableEscapeKeyDown && reason === 'escapeKeyDown') {
			return false
		}

		if (typeof onClose === 'function') {
			onClose()
		}
	}
	return (
		<Dialog onClose={handleClose} {...rest}>
			{children}
		</Dialog>
	)
}

const PalavrasCruzadasPage = ({ data }) => {
	const [showModal, setShowModal] = useState(false)
	const [open, setOpen] = useState(true)
	const handleRestart = () => {
		setShowModal(false)
	}
	const dataCross = {
		across: {
			1: {
				clue: 'Sobrenome da Família de XMatematxs',
				answer: 'VAGABUNDO',
				row: 1,
				col: 0,
			},
			2: {
				clue: 'A primeira letra do algoritmo sagrado',
				answer: 'NÜ',
				row: 6,
				col: 4,
			},
			3: {
				clue: 'Ela também é a Ninja da Luz',
				answer: 'LUA',
				row: 9,
				col: 8,
			},
			4: { clue: 'O Planeta B faz parte', answer: 'RGB', row: 9, col: 0 },
		},
		down: {
			1: {
				clue: "A primeira Deusa dos @'s",
				answer: '@GOSHDEV',
				row: 0,
				col: 2,
			},
			2: { clue: 'Irmão do protagonista', answer: 'MENOR', row: 5, col: 0 },
			3: {
				clue: 'Chefe da Família militar',
				answer: 'BOISONORO',
				row: 1,
				col: 4,
			},
			4: {
				clue: 'Chefe da Família governante',
				answer: 'DITADORA',
				row: 1,
				col: 7,
			},
			5: {
				clue: 'Sobrenome da Presidenta',
				answer: 'FACISTA',
				row: 3,
				col: 10,
			},
		},
	}
	// as calculated in Crossword...
	const cellSize = 1
	const cellPadding = 0.105
	const cellInner = cellSize - cellPadding * 2
	const cellHalf = cellSize / 2
	const fontSize = cellInner * 0.5

	const themeContext = {
		cellBackground: 'rgba(20,20,20)',
		cellBorder: 'rgb(0,255,255)',
		textColor: 'rgb(255,255,255)',
		numberColor: 'rgba(255,0,204, 1)',
		focusBackground: 'rgb(0,155,255)',
		highlightBackground: 'rgb(255,0,204)',
	}

	function handleClick() {
		alert('GOT CLICK!')
	}
	const stateShowModal = showModal ? 'block' : 'none'
	useEffect(() => {
		document.querySelector('.clues').style.display = stateShowModal
		console.log(showModal)
	})
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Palavras Cruzadas`,
				bgImage:
					data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback,
			}}
		>
			<HeaderBlock
				title="header-block"
				opt={{
					logoHeader: (
						<Layout
							type="BLOCK_IMAGE"
							opt={{ queryCard: data.logotipoJogoMemoria }}
						/>
					),
				}}
			/>
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph=""
			/>
			<MainWrapper>
				<button onClick={() => setShowModal(!showModal)} className="tips-btn">
					{showModal ? 'Fechar' : 'Abrir'} Dicas
				</button>

				<div
					className="second-row-for-now"
					style={{ position: 'absolute', marginTop: '-50px' }}
				>
					<Link className="circle-shadow" to="/">
						<AiOutlineLeft />
					</Link>
				</div>
				<div className="crossword-wrapper">
					<ThemeProvider theme={themeContext}>
						<Crossword data={dataCross} />
					</ThemeProvider>
				</div>
			</MainWrapper>
			<FooterBlock
				title="Main Footer"
				social={{
					instagram: data.site.siteMetadata.social.instagram,
					facebook: data.site.siteMetadata.social.facebook,
					twitter: data.site.siteMetadata.social.twitter,
					youtube: data.site.siteMetadata.social.youtube,
				}}
			/>
		</Layout>
	)
}
export default PalavrasCruzadasPage

export const queryCruzadas = graphql`
	query imgsCruzadas {
		site {
			siteMetadata {
				social {
					instagram
					facebook
					twitter
					youtube
				}
			}
		}
		bgroom: file(relativePath: { eq: "bg-app-room.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 301
					placeholder: NONE
					quality: 100
				)
			}
		}
		logotipoJogoMemoria: file(relativePath: { eq: "logo-eugenia-3-0.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
