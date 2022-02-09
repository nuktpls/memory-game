import React from 'react'
import Layout from '../layout'
import { RiWhatsappFill, RiEyeFill } from 'react-icons/ri'
const FooterBlock = ({ social }) => {
	return (
		<Layout
			type="ROW"
			opt={{
				isBoxed: true,
				classes: 'footer-gray',
				alignTo: 'center',
				bgColor: '#121212',
			}}
		>
			<Layout type="FOOTER" opt={{ social: social }}>
				<p>Copyright 2022, todos os direitos reservados.</p>
				<p>Milton Bolonha - O autor</p>
				<p>
					É vedada a publicação do conteúdo deste site, no todo ou em parte, sem
					prévia autorização por escrito do autor.
				</p>
				<p>Solicite autorização pelo e-mail: </p>
				<p>
					<span>
						<a href="mailto:miltonbolonha@gmail.com" className="footer-link">
							miltonbolonha@gmail.com
						</a>
					</span>
				</p>
			</Layout>
		</Layout>
	)
}

export default FooterBlock
