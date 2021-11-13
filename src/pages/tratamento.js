import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

const TratamentoPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento08b }} />
			),
		},
	]
	return (
		<Layout type="BODY" opt={{ titleSeo: `Tratamento` }}>
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
						title: 'Tratamento',
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
export default TratamentoPage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
			}
		}
		tratamento01a: file(relativePath: { eq: "tratamento-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento01b: file(relativePath: { eq: "tratamento-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento02a: file(relativePath: { eq: "tratamento-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento02b: file(relativePath: { eq: "tratamento-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento03a: file(relativePath: { eq: "tratamento-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento03b: file(relativePath: { eq: "tratamento-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento04a: file(relativePath: { eq: "tratamento-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento04b: file(relativePath: { eq: "tratamento-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento05a: file(relativePath: { eq: "tratamento-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento05b: file(relativePath: { eq: "tratamento-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento06a: file(relativePath: { eq: "tratamento-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento06b: file(relativePath: { eq: "tratamento-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento07a: file(relativePath: { eq: "tratamento-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento07b: file(relativePath: { eq: "tratamento-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento08a: file(relativePath: { eq: "tratamento-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		tratamento08b: file(relativePath: { eq: "tratamento-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVerse: file(relativePath: { eq: "card-tratamento.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
	}
`
