import {
	APP_LOADDING
} from './mutation-types.js'


export default {

	async loaddingChange(context) {
		debugger
		context.commit(APP_LOADDING, lodding)
	}
}