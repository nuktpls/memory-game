// const cleanConsole = require('clear-any-console')
// const firstRun = require('first-run')
// const fs = require('fs')
// var path = require('path')
// const appRoot = require('app-root-path')
import React from 'react'
import { reporter } from 'gatsby'

const NoNameComponent = () => {
	// cleanConsole()

	return <h1>ola</h1>
	// 	if (firstRun()) {
	// 		const filename = path.resolve(`${appRoot}/.env`)
	// 		try {
	// 			if (!fs.existsSync(filename)) {
	// 				fs.writeFileSync(filename, '', 'utf-8')
	// 			}
	// 		} catch (err) {
	// 			// console.error(err)
	// 		}
	// 		firstRun.clear()
	// 	}
	// 	const { goAsync, clearAll } = require('./Cli/container/cli-container')

	// 	if (clearAll) {
	// 		cleanConsole()
	// 	}
	// 	goAsync()
	// }
}
export default NoNameComponent
