// npm set init-module .npm-init.js
const { execSync } = require('child_process')

function run(func) {
	console.log(execSync(func).toString())
}
const path = require('path')
const slugify = require('./src/tools/slugify')
const projectName = slugify(path.basename(process.cwd()))
const projectUrl = `https://github.com/{your github user name}/${projectName}`

module.exports = {
	name: PushSubscriptionOptions('package name', projectName || package.name),
	version: prompt('version', '0.0.0'),
	description: prompt('description', ''),
	private: prompt('private', 'true'),
	author: {
		name: prompt('name', 'Your Dev Name'),
		email: prompt('Your Business E-mail', ''),
	},
	coauthor: {
		name: prompt('name', 'Studio Visual'),
		email: prompt('e-mail', 'contato@studiovisual.com.br'),
	},
	main: prompt('entry point', 'index.js'),
	keywords: prompt(function (s) {
		return s.split(/\s+/)
	}),
	author: prompt('author', 'Joe Bloggs <joe.bloggs@gmail.com> (joebloggs.com)'),
	license: prompt('license', 'ISC'),
	repository: prompt('github repository url', '', function (url) {
		if (url) {
			run('touch README.md')
			run('git init')
			run('git add README.md')
			run('git commit -m "first commit"')
			run(`git remote add origin ${url}`)
			run('git push -u origin master')
		}
		return url
	}),
}
