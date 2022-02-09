import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import PageHeader from '../modules/block-builder/PageHeader'

import FooterBlock from '../modules/block-builder/FooterBlock'
import ReactCarousel from '../modules/block-builder/ReactCarousel'
import ShareButtons from '../modules/block-builder/ShareButtons'
import MainWrapper from '../modules/block-builder/MainWrapper'

const IndexPage = ({ data }) => {
	console.log(
		data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback.srcSet
	)
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Página de Erro`,
				bgImage:
					data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback,
			}}
		>
			<HeaderBlock title="header-block" />
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Acesse abaixo os jogos e divirta-se com os nossos personagens."
			/>
			<MainWrapper>
				<h1>
					Você não deveria estar aqui, por favor, volte para a{' '}
					<Link to="/">página inicial clicando aqui</Link>.
				</h1>
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
		imagenzinha: file(relativePath: { eq: "jogodamemoria-btn.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 104
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
