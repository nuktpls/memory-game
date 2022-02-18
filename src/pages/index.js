import React, { useState } from 'react'
// import NoNameComponent from '../nu_modules'

import { graphql, Link } from 'gatsby'

import Player from '../modules/block-builder/AudioPlayer'
// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'

// import { BiShoppingBag } from 'react-icons/bi'
// import { CgReadme } from 'react-icons/cg'
// import { GiBurningBook, GiPunchBlast, GiGamepadCross } from 'react-icons/gi'
// import { RiContactsBookFill } from 'react-icons/ri'
// import { BsBookmarkCheck } from 'react-icons/bs'
// import { GoBook } from 'react-icons/go'
import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import PageHeader from '../modules/block-builder/PageHeader'
// import ButtonsMain from '../modules/block-builder/ButtonsMain'
import FooterBlock from '../modules/block-builder/FooterBlock'
// import ReactCarousel from '../modules/block-builder/ReactCarousel'
import ShareButtons from '../modules/block-builder/ShareButtons'
import MainWrapper from '../modules/block-builder/MainWrapper'

const IndexPage = ({ data }) => {
	const [playingNow, setPlayingNow] = useState(0)
	const playlist = [
		{
			name: 'Agora Está Tudo Bem',
			src: data.musicOne.publicURL,
		},
		{
			name: "As Crianças CTO's",
			src: data.musicTwo.publicURL,
		},
		{
			name: 'Corre No Peito',
			src: data.musicThree.publicURL,
		},
		{
			name: 'Geração 87',
			src: data.musicFour.publicURL,
		},
		{
			name: 'Herói Vagabundo',
			src: data.musicFive.publicURL,
		},
		{
			name: 'Menor  Vagabundo',
			src: data.musicSix.publicURL,
		},
		{
			name: 'O Sangue',
			src: data.musicSeven.publicURL,
		},
		{
			name: 'Pagode do Esquadrão',
			src: data.musicEight.publicURL,
		},
		{
			name: 'Quando Perdi As Lágrimas',
			src: data.musicNine.publicURL,
		},
		{
			name: 'Que Dia Ruim!',
			src: data.musicTen.publicURL,
		},
		{
			name: 'Rugido do Mar',
			src: data.musicEleven.publicURL,
		},
		{
			name: 'Show do Esquadrão',
			src: data.musicTwelve.publicURL,
		},
	]

	function changePlayingNow(param) {
		setPlayingNow(param)
	}
	const handleClickPrevious = (params) => {
		changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
		// console.log(playingNow)
	}
	const handleClickNext = (params) => {
		changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
		// console.log(playingNow)
	}

	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Jogo da Memória`,
				bgImage:
					data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback,
			}}
		>
			<HeaderBlock
				title="header-block"
				// logotipoImg={data.logotipoImg}
			/>
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Acesse abaixo os jogos e divirta-se com os nossos personagens."
			/>
			{/* <ButtonsMain title="Botões Main" /> */}
			<MainWrapper>
				<Layout type="ROW" opt={{ alignTo: 'center', classes: 'main-btn' }}>
					<Link to="/jogo-da-memoria">
						<Layout
							type="BLOCK_IMAGE"
							opt={{ queryCard: data.imagenzinha, classes: 'btn-home-fix' }}
						/>
					</Link>
					<Link to="/palavras-cruzadas">
						<Layout
							type="BLOCK_IMAGE"
							opt={{ queryCard: data.palavracruzada, classes: 'btn-home-fix' }}
						/>
					</Link>
				</Layout>
			</MainWrapper>

			<ShareButtons
				title={data.site.siteMetadata.title}
				siteUrl={data.site.siteMetadata.siteUrl}
			/>
			{/* <ReactCarousel
				data={{
					astrazeneca: data.astrazeneca,
					bayer: data.bayer,
					bd: data.bd,
					novartis: data.novartis,
					nordisk: data.nordisk,
					roche: data.roche,
					sanofi: data.sanofi,
				}}
			/> */}

			{/* <div style={{ margin: '0 auto', color: 'white' }}>
				<GiBurningBook />
				<GiPunchBlast />
				<GiGamepadCross />
				<RiContactsBookFill />
				<BsBookmarkCheck />
				<GoBook />
			</div> */}
			<FooterBlock
				title="Main Footer"
				social={{
					instagram: data.site.siteMetadata.social.instagram,
					facebook: data.site.siteMetadata.social.facebook,
					twitter: data.site.siteMetadata.social.twitter,
					youtube: data.site.siteMetadata.social.youtube,
				}}
			/>
			{/* <NoNameComponent /> */}

			{/*
				blog posts
infographics
videos
social media posts
Subscription

Sponsorship
Partnership

Advertising
In-app purchase
audiobook
videos
abertra
 */}
			<Layout type="ROW" opt={{ isBoxed: true, classes: 'audioplayer' }}>
				<Player playlist={playlist} />
				{/* <AudioPlayer
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
				/> */}
			</Layout>
		</Layout>
	)
}
export default IndexPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
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
				gatsbyImageData(width: 301, placeholder: NONE, quality: 100)
			}
		}

		logotipoJogoMemoria: file(relativePath: { eq: "logo-eugenia-3-0.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 224, placeholder: NONE, quality: 100)
			}
		}

		imagenzinha: file(relativePath: { eq: "jogodamemoria-btn.png" }) {
			childrenImageSharp {
				gatsbyImageData(height: 104, placeholder: NONE, quality: 100)
			}
		}

		palavracruzada: file(relativePath: { eq: "palavrascruzadas-btn.png" }) {
			childrenImageSharp {
				gatsbyImageData(height: 104, placeholder: NONE, quality: 100)
			}
		}

		musicOne: file(relativePath: { eq: "agora-esta-tudo-bem.mp3" }) {
			publicURL
		}

		musicTwo: file(relativePath: { eq: "as-criancas-ctos.mp3" }) {
			publicURL
		}

		musicThree: file(relativePath: { eq: "corre-peito.mp3" }) {
			publicURL
		}

		musicFour: file(relativePath: { eq: "geracao-87.mp3" }) {
			publicURL
		}

		musicFive: file(relativePath: { eq: "heroi-vagabundo.mp3" }) {
			publicURL
		}

		musicSix: file(relativePath: { eq: "menor-vagabundo.mp3" }) {
			publicURL
		}

		musicSeven: file(relativePath: { eq: "o-sangue.mp3" }) {
			publicURL
		}

		musicEight: file(relativePath: { eq: "pagode-esquadrao.mp3" }) {
			publicURL
		}

		musicNine: file(relativePath: { eq: "quando-perdi-lagrimas.mp3" }) {
			publicURL
		}

		musicTen: file(relativePath: { eq: "que-dia-ruim.mp3" }) {
			publicURL
		}

		musicEleven: file(relativePath: { eq: "rugido-mar.mp3" }) {
			publicURL
		}

		musicTwelve: file(relativePath: { eq: "show-esquadrao.mp3" }) {
			publicURL
		}
	}
`
//
// O Autor
// O Livro
// Capítulos
// Personagens
// Famílias
// Armas e Golpes
// Glossário
// Jogos

// o livro
// GiBabyFace
// guildas GiAllSeeingEye
// acontecimentos GiArrowsShield
// GiBrazil
// armas golpes e poderes GiPistolGun
// o autor RiContactsBookLine
// capitulos  BsBookmarkCheckFill
