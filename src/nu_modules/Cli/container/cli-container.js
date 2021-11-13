const meow = require('meow')
const debug = require('../../PimpMyCli/container/debug')
const firstRun = require('first-run')
require('./keyEvents-container')
const {
	sceneFirstRun,
	sceneChooser,
	sceneWelcome,
	sceneChapter,
	sceneCharacter
} = require('./initCli-container')
const {helpText} = require('../components/helpText')
const {options} = require('../config/meow-tabs')

const helper = meow(helpText, options)

let args = process.argv.slice(2)
let welcome = {has: false, info: null}
let capitulo = {has: false, info: null}

let allFlags = [
	'welcome',
	'--capitulo',
	'--c',
	'capitulo',
	'capítulo',
	'chapter',
	'character',
	'help',
	'versao',
	'zumba',
	'qtdRow',
	'next',
	'rangeBegin',
	'latest',
	'first',
	'page',
	'clear',
	'clearAll',
	'character',
	'name',
	'gender',
	'age',
	'version',
	'birth',
	'birthplace',
	'debug'
]
function isWelcome(command) {
	return command.flag === 'x' // listar flags em um array mapear e returnyy === flag
}
args = Object.keys(args || {}).map(flagNum => {
	// allFlags.filter(value => {
	// 	// args.find(isWelcome).info.flag
	// 	console.log(value)
	// 	// if (value === args.find(isWelcome).info.flag) {
	// 	// 	console.log('oooooo')
	// 	// 	return {flagNum, flag: args[flagNum]}
	// 	// }
	// })
	console.log(args[flagNum].split('='))

	function isThis(params) {
		return params === args[flagNum]
	}
	// stringToSplit.split(separator)
	const zenaaide = allFlags.filter(isThis)

	if (zenaaide.length > 0) {
		return console.log({flagNum: flagNum, flag: args[flagNum], flagValue: '0'})
	}
})
args = args.filter(function (element) {
	return element !== undefined
})
console.log(args)

// function isFlag(command) {
// 	allFlags.map(ourFlag=>{

// 	})
// 	return command.flag === 'welcome' // listar flags em um array mapear e returnyy === flag
// }
// const hasFlag = args.filter()

// args = Object.keys(args || {}).map(flagNum => {
// 	return {flagNum, flag: args[flagNum]}
// })

// function isCapitulo(command) {
// 	return command.flag === 'capitulo' || command.flag === 'capítulo' || command.flag === 'chapter' // listar flags em um array mapear e returnyy === flag
// }
// function isCharacter(command) {
// 	return command.flag === 'character' || command.flag === 'capítulo' || command.flag === 'chapter' // listar flags em um array mapear e returnyy === flag
// }

// function isHelp(command) {
// 	return command.flag === 'help' || command.flag === 'capítulo' || command.flag === 'chapter' // listar flags em um array mapear e returnyy === flag
// }

// function isVersao(command) {
// 	return command.flag === 'versao' || command.flag === 'capítulo' || command.flag === 'chapter' // listar flags em um array mapear e returnyy === flag
// }

// function isDebug(command) {
// 	return command.flag === 'debug' || command.flag === 'capítulo' || command.flag === 'chapter' // listar flags em um array mapear e returnyy === flag
// }

// const hasWelcome = args.find(isWelcome)
// const hasCapitulo = args.find(isCapitulo)
// const hasCharacter = args.find(isCharacter)
// const hasHelp = args.find(isHelp)
// const hasVersao = args.find(isVersao)
// const hasDebug = args.find(isDebug)

// if (hasWelcome) {
// 	welcome.has = true
// 	welcome.info = hasWelcome
// }

// if (hasCapitulo) {
// 	capitulo.has = true
// 	capitulo.info = hasCapitulo
// }

// if (hasCharacter) {
// 	character.has = true
// 	character.info = hasCharacter
// }

// if (hasHelp) {
// 	help.has = true
// 	help.info = hasHelp
// }

// if (hasVersao) {
// 	versao.has = true
// 	versao.info = hasVersao
// }

// if (hasDebug) {
// 	debug.has = true
// 	debug.info = hasDebug
// }

// capitulo
// character
// help
// versão
// debug
console.log(capitulo)

process.exit()

// const welcome = args.find(isWelcome) ? true : false

helper.flags.chapter = helper.flags.chapter || helper.flags.capítulo
helper.flags.capítulo = helper.flags.capítulo || helper.flags.chapter
const zumba = helper.flags.zumba
// const capitulo = helper.flags.capítulo || helper.flags.chapter
const qtdRow = helper.flags.qtdRow
const next = helper.flags.next
const rangeBegin = helper.flags.rangeBegin
const latest = helper.flags.latest
const first = helper.flags.first
const page = helper.flags.page
const clear = helper.flags.clear
const clearAll = helper.flags.clearAll
const character = helper.flags.character
const characterName = helper.flags.name
const characterGender = helper.flags.gender
const characterAge = helper.flags.age
const characterVersion = helper.flags.version
const characterBirth = helper.flags.birth
const characterBirthplace = helper.flags.birthplace

async function goAsync() {
	// if (hardInjection) {
	// 	sceneWelcome(true, helper.flags)
	// }
	// firstRun.clear()

	// { name: 'cerejas', quantity: 5 }

	// console.log()

	if (!welcome && !capitulo && !character) {
		!firstRun() ? sceneChooser(zumba) : firstRun.clear()
	}

	if (firstRun()) {
		return sceneFirstRun(clear)
	}

	if (welcome) {
		return sceneWelcome(clear, helper.flags)
	}

	if (capitulo) {
		return sceneChapter(capitulo, page, qtdRow, first, next, rangeBegin, latest)
	}

	if (character) {
		return sceneCharacter(
			character,
			characterName,
			characterGender,
			characterAge,
			characterVersion,
			characterBirth,
			characterBirthplace
		)
	}
	// if (zumba) {
	// 	sceneChooser(zumba)
	// 	// console.log('choise')
	// }
	// console.log(helper.flags)
	helper.input.includes('help') && helper.showHelp(0)
	helper.input.includes('versão') && helper.showVersion(0)
	helper.flags.debug && debug(helper.flags.debug, helper.flags, helper.input)
}
module.exports = {
	helper,
	goAsync,
	clearAll
}
