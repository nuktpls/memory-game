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
				<h1>Eugenia 3.0: As Crianças CTO's</h1>
				<p>
					No mundo distópico conhecido como Brasil beta, um distraído garoto se
					vê no meio de uma disputa pelo poder do versionamento de realidades. O
					jovem rapaz tenta fugir dos perigos de se viver uma vida nas comunas
					do Brasil beta.
					<br />
					Aqueles que eram chamados de deficientes agora são os aumentados e são
					explorados como força laboral pelo governo da Ditadora Facista, que
					fez uma aliança com o poderoso Boi Sonoro para eliminar todos os
					Vagabundos do Brasil beta.
					<br />
					Enquanto isso, o Esquadrão Vagabundo luta para impor a sua versão de
					realidade no próximo salto.
				</p>
				<p>
					ASIN B09RCJBN18
					<br />
					Editora BOOK4DEV; 1ª edição (26 janeiro 2022)
					<br />
					Idioma Português
					<br />
					Número de páginas 128
				</p>
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
