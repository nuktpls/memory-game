import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import PageHeader from '../modules/block-builder/PageHeader'
import ButtonsMain from '../modules/block-builder/ButtonsMain'
import FooterBlock from '../modules/block-builder/FooterBlock'
import ReactCarousel from '../modules/block-builder/ReactCarousel'
import ShareButtons from '../modules/block-builder/ShareButtons'
const IndexPage = ({ data }) => {
	console.log(data)
	return (
		<Layout type="BODY" opt={{ titleSeo: `Jogo da Memória` }}>
			<HeaderBlock title="header-block" logotipoImg={data.logotipoImg} />
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Acesse abaixo os jogos da memória e aprenda tópicos relacionados à Diabetes."
			/>
			<ButtonsMain title="Botões Main" />
			<ShareButtons
				title={data.site.siteMetadata.title}
				siteUrl={data.site.siteMetadata.siteUrl}
			/>
			<ReactCarousel
				data={{
					astrazeneca: data.astrazeneca,
					bayer: data.bayer,
					bd: data.bd,
					novartis: data.novartis,
					nordisk: data.nordisk,
					roche: data.roche,
					sanofi: data.sanofi,
				}}
			/>
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

		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 115
					placeholder: NONE
					quality: 100
				)
			}
		}
		logotipoJogoMemoria: file(
			relativePath: { eq: "logotipo-jogodamemoria.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
		astrazeneca: file(
			relativePath: { eq: "astrazeneca-diabetes-logotipo.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 50, placeholder: NONE)
			}
		}
		bayer: file(relativePath: { eq: "bayer-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, placeholder: NONE)
			}
		}
		bd: file(relativePath: { eq: "bd-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 50, placeholder: NONE)
			}
		}
		boehringer: file(relativePath: { eq: "boehringer-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 90
					placeholder: NONE
					quality: 100
				)
			}
		}
		novartis: file(relativePath: { eq: "novartis-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 20
					placeholder: NONE
					quality: 100
				)
			}
		}
		nordisk: file(relativePath: { eq: "novo-nordisk-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 45
					placeholder: NONE
					quality: 100
				)
			}
		}
		roche: file(relativePath: { eq: "roche-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 35
					placeholder: NONE
					quality: 100
				)
			}
		}
		sanofi: file(relativePath: { eq: "sanofi-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 55
					placeholder: NONE
					quality: 100
				)
				fluid {
					base64
					src
					srcSet
					srcSetWebp
					srcWebp
					tracedSVG
					sizes
				}
			}
		}
		imagenzinha: file(relativePath: { eq: "sanofi-logotipo.jpg" }) {
			childrenImageSharp {
				fluid {
					base64
					src
					srcSet
					srcSetWebp
					srcWebp
					tracedSVG
					sizes
				}
			}
		}
	}
`
