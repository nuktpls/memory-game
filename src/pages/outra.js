import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

const TratamentoPage = ({ data }) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: `Outra` }}>
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
				<h2>oi</h2>
				<Layout type="BLOCK_IGNITE_SCIENCE" />
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
		outra01a: file(relativePath: { eq: "tratamento-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra01b: file(relativePath: { eq: "tratamento-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra02a: file(relativePath: { eq: "tratamento-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra02b: file(relativePath: { eq: "tratamento-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra03a: file(relativePath: { eq: "tratamento-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra03b: file(relativePath: { eq: "tratamento-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra04a: file(relativePath: { eq: "tratamento-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra04b: file(relativePath: { eq: "tratamento-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra05a: file(relativePath: { eq: "tratamento-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra05b: file(relativePath: { eq: "tratamento-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra06a: file(relativePath: { eq: "tratamento-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra06b: file(relativePath: { eq: "tratamento-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra07a: file(relativePath: { eq: "tratamento-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra07b: file(relativePath: { eq: "tratamento-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra08a: file(relativePath: { eq: "tratamento-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		outra08b: file(relativePath: { eq: "tratamento-08-b.png" }) {
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
