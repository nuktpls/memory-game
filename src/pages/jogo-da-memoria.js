import React from 'react'
import { graphql } from 'gatsby'
import MainWrapper from '../modules/block-builder/MainWrapper'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import FooterBlock from '../modules/block-builder/FooterBlock'
import PageHeader from '../modules/block-builder/PageHeader'
import Layout from '../modules/layout'

const MemoriaPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardaa }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardba }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardca }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardda }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardab }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardbb }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardcb }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.carddb }} />,
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardaa }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardba }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardca }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardda }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardab }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardbb }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardcb }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.carddb }} />,
		},
	]
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
				// opt={{
				// 	logoHeader: (
				// 		<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.logotipoImg }} />
				// 	),
				// }}
			/>
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Acesse abaixo os jogos da memória e aprenda tópicos relacionados à Diabetes."
			/>
			<MainWrapper>
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Jogo da Memória',
						cardVerse: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.cardVerseAlimentacao }}
							/>
						),
						firstElementsArray,
						secondElementsArray,
					}}
				/>
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
export default MemoriaPage

export const queryAlimentacao = graphql`
	query imgsAlimentacao {
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
		cardaa: file(relativePath: { eq: "carta01A.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		cardab: file(relativePath: { eq: "carta01B.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}

		cardba: file(relativePath: { eq: "carta02A.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		cardbb: file(relativePath: { eq: "carta02B.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		cardca: file(relativePath: { eq: "carta03A.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		cardcb: file(relativePath: { eq: "carta03B.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		cardda: file(relativePath: { eq: "carta04A.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		carddb: file(relativePath: { eq: "carta04B.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		cardVerseAlimentacao: file(relativePath: { eq: "carta01.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
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
