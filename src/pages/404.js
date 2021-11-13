import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../modules/layout'

const IndexPage = ({ data }) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: `404 - Erro` }}>
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
				<div className="index-first-row">
					<Layout
						type="BLOCK_IMAGE"
						opt={{ queryCard: data.logotipoJogoMemoria }}
					/>
					<p className="index-paragraph">Erro 404</p>
					<br />
				</div>
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
export default IndexPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 115
					placeholder: NONE
					quality: 100
				)
			}
		}
		logotipoJogoMemoria: file(
			relativePath: { eq: "logotipo-jogodamemoria.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
