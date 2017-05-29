import {
	APP_LOADDING
} from './mutation-types.js'


export default {
	// 全局lodding
	[APP_LOADDING](state, loading) {
		state.appLodding = loading;
	}
}
