import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../modules/layout'

const AtividadePage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeaa }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeba }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeca }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeda }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeea }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadefa }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadega }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeha }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeab }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadebb }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadecb }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadedb }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadeeb }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadefb }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadegb }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividadehb }} />
			),
		},
	]
	return (
		<Layout type="BODY" opt={{ titleSeo: `Atividade Física` }}>
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
						title: 'Atividade Física',
						cardVerse: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.cardVerseatividade }}
							/>
						),
						firstElementsArray,
						secondElementsArray,
					}}
				/>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					isBoxed: true,
					classes: 'footer-gray',
					alignTo: 'center',
					bgColor: '#2f2f2f',
				}}
			>
				<Layout type="FOOTER" />
			</Layout>
		</Layout>
	)
}
export default AtividadePage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
			}
		}
		atividadeaa: file(relativePath: { eq: "atividade-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		atividadeab: file(relativePath: { eq: "atividade-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		atividadeba: file(relativePath: { eq: "atividade-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		atividadebb: file(relativePath: { eq: "atividade-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		atividadeca: file(relativePath: { eq: "atividade-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		atividadecb: file(relativePath: { eq: "atividade-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		atividadeda: file(relativePath: { eq: "atividade-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		atividadedb: file(relativePath: { eq: "atividade-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadeea: file(relativePath: { eq: "atividade-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadeeb: file(relativePath: { eq: "atividade-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		atividadefa: file(relativePath: { eq: "atividade-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadefb: file(relativePath: { eq: "atividade-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadega: file(relativePath: { eq: "atividade-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadegb: file(relativePath: { eq: "atividade-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		atividadeha: file(relativePath: { eq: "atividade-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		atividadehb: file(relativePath: { eq: "atividade-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVerseatividade: file(relativePath: { eq: "card-atividade.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
	}
`
