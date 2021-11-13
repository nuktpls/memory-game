import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../modules/layout'

const PrevencaoPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.prevencao08b }} />
			),
		},
	]
	return (
		<Layout type="BODY" opt={{ titleSeo: `Prevenção` }}>
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
						title: 'Prevenção',
						cardVerse: (
							<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardVerse }} />
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
export default PrevencaoPage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
			}
		}
		prevencao01a: file(relativePath: { eq: "prevencao-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao01b: file(relativePath: { eq: "prevencao-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao02a: file(relativePath: { eq: "prevencao-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao02b: file(relativePath: { eq: "prevencao-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao03a: file(relativePath: { eq: "prevencao-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao03b: file(relativePath: { eq: "prevencao-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao04a: file(relativePath: { eq: "prevencao-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao04b: file(relativePath: { eq: "prevencao-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao05a: file(relativePath: { eq: "prevencao-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao05b: file(relativePath: { eq: "prevencao-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao06a: file(relativePath: { eq: "prevencao-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao06b: file(relativePath: { eq: "prevencao-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao07a: file(relativePath: { eq: "prevencao-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao07b: file(relativePath: { eq: "prevencao-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao08a: file(relativePath: { eq: "prevencao-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		prevencao08b: file(relativePath: { eq: "prevencao-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVerse: file(relativePath: { eq: "card-prevencao.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
	}
`
