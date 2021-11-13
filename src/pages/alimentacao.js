import React from 'react'
import { graphql } from 'gatsby'
import FooterBlock from '../modules/block-builder/FooterBlock'
import Layout from '../modules/layout'

const AlimentacaoPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoaa }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoba }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoca }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoda }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoea }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaofa }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoga }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoha }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoab }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaobb }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaocb }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaodb }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoeb }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaofb }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaogb }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaohb }} />
			),
		},
	]
	return (
		<Layout type="BODY" opt={{ titleSeo: `Alimentação` }}>
			<Layout
				type="ROW"
				opt={{
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout
					type="HEADER"
					opt={{
						logoHeader: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.logotipoImg }}
							/>
						),
					}}
				/>
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Alimentação',
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
			</Layout>
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
export default AlimentacaoPage

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
		alimentacaoaa: file(relativePath: { eq: "alimentacao-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaoab: file(relativePath: { eq: "alimentacao-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}

		alimentacaoba: file(relativePath: { eq: "alimentacao-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaobb: file(relativePath: { eq: "alimentacao-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoca: file(relativePath: { eq: "alimentacao-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaocb: file(relativePath: { eq: "alimentacao-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoda: file(relativePath: { eq: "alimentacao-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		alimentacaodb: file(relativePath: { eq: "alimentacao-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		alimentacaoea: file(relativePath: { eq: "alimentacao-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaoeb: file(relativePath: { eq: "alimentacao-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaofa: file(relativePath: { eq: "alimentacao-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaofb: file(relativePath: { eq: "alimentacao-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		alimentacaoga: file(relativePath: { eq: "alimentacao-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaogb: file(relativePath: { eq: "alimentacao-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoha: file(relativePath: { eq: "alimentacao-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaohb: file(relativePath: { eq: "alimentacao-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVerseAlimentacao: file(relativePath: { eq: "card-alimentacao.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
			}
		}
	}
`
