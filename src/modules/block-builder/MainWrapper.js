import React from 'react'
import Layout from '../layout'

const MainWrapper = ({ children, title, opt }) => {
	return (
		<Layout
			type="ROW"
			opt={{
				isBoxed: true,
				classes:
					opt && opt.classes
						? opt.classes + ' main-wrapper container-transparency'
						: 'main-wrapper container-transparency',
				alignTo: 'left',
				title: title,
			}}
		>
			{children}
		</Layout>
	)
}

export default MainWrapper
