import React from 'react'
import { graphql } from 'gatsby'
import { GiBurningBook, GiPunchBlast, GiGamepadCross } from 'react-icons/gi'
import { RiContactsBookFill } from 'react-icons/ri'
import { BsBookmarkCheck } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import PageHeader from '../modules/block-builder/PageHeader'
import FooterBlock from '../modules/block-builder/FooterBlock'
// import ReactCarousel from '../modules/block-builder/ReactCarousel'
import MainWrapper from '../modules/block-builder/MainWrapper'

const IndexPage = ({ data }) => {
	console.log(
		data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback.srcSet
	)
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Jogo da Memória`,
				bgImage:
					data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback,
			}}
		>
			<HeaderBlock title="header-block" />
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Escritor de best-sellers, o autor lança sua nova."
			/>

			<MainWrapper>
				<div style={{ margin: '0 auto', color: 'white', fontSize: '38px' }}>
					<RiContactsBookFill />
				</div>
				<h1>Personagens Multiverso RÖÖM</h1>
				<p></p>
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
				gatsbyImageData(width: 301, placeholder: NONE, quality: 100)
			}
		}
		logotipoJogoMemoria: file(relativePath: { eq: "logo-eugenia-3-0.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 224, placeholder: NONE, quality: 100)
			}
		}
	}
`
