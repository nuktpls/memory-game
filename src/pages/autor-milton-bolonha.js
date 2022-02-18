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
				<h1>Milton Bolonha</h1>
				<p>
					Milton Bolonha lança o seu mais novo livro Eugenia 3.0: As Crianças
					CTO’s – Volume I, que se tornou best-seller na semana de estreia pela
					Amazon Kindle. O livro conta uma aventura eletrizante repleta de
					tecnologia e física moderna.
					<br />
					O autor aos 19 anos descobriu vocação em servir em projetos de
					voluntariado os quais dedicou dois anos da sua vida voltados
					exclusivamente para ajudar pessoas carentes do estado da Paraíba.
					<br />
					É poeta, filósofo, filantropo, compositor, produtor musical, editor
					audiovisual, editor literário e vocalista. Trabalha desde 2006 como
					engenheiro de software, desenvolvedor de aplicativos, web sítios e
					designer.
					<br />
					Com o seu livro de estreia (Inteligências e Ordens: Descubra Quem É
					Você) se tornou bestseller pela Amazon em sua categoria principal
					(Mormonismo, Filosofia e Religião). É também o autor brasileiro mais
					lido da categoria.
					<br />
					Em carreira internacional foi top rated profile por três anos pela
					UpWork, perfil que mantem ativo e público. Trabalhou por anos para uma
					empresa de Denver, Colorado e prestou serviço para uma renomada casa
					de arte em Los Angeles, California.
					<br />
					Atualmente atua como advogado de tecnologia open-source (código-livre)
					com o seu boilerplate e todo o ambiente de tecnologia e pedagogia
					chamado NÜktpls.
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
