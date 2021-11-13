import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

const BemEstarPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestaraa }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarba }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarca }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarda }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarea }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarfa }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarga }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarha }} />,
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarab }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarbb }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarcb }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestardb }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestareb }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarfb }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestargb }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestarhb }} />,
		},
	]
	return (
		<Layout type="BODY" opt={{ titleSeo: `Bem-estar` }}>
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
						title: 'Bem-estar',
						cardVerse: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.cardVersebemestar }}
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
export default BemEstarPage

export const querybemestar = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 115, placeholder: NONE)
			}
		}
		bemestaraa: file(relativePath: { eq: "bem-estar-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		bemestarab: file(relativePath: { eq: "bem-estar-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}

		bemestarba: file(relativePath: { eq: "bem-estar-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		bemestarbb: file(relativePath: { eq: "bem-estar-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		bemestarca: file(relativePath: { eq: "bem-estar-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		bemestarcb: file(relativePath: { eq: "bem-estar-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		bemestarda: file(relativePath: { eq: "bem-estar-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		bemestardb: file(relativePath: { eq: "bem-estar-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		bemestarea: file(relativePath: { eq: "bem-estar-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		bemestareb: file(relativePath: { eq: "bem-estar-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		bemestarfa: file(relativePath: { eq: "bem-estar-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		bemestarfb: file(relativePath: { eq: "bem-estar-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		bemestarga: file(relativePath: { eq: "bem-estar-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		bemestargb: file(relativePath: { eq: "bem-estar-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		bemestarha: file(relativePath: { eq: "bem-estar-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		bemestarhb: file(relativePath: { eq: "bem-estar-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVersebemestar: file(relativePath: { eq: "card-bem-estar.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
	}
`
