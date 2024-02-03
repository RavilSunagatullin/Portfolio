import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faHeart, faPaperPlane, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { createI18n, useI18n } from 'vue-i18n'
import App from './App.vue'
import { defaultLocal, languages } from './i18n'
import router from './router/router.js'
import './style.sass'

const messages = Object.assign(languages)
const localeStorageLang = localStorage.getItem('lang')

const i18n = createI18n({
	legacy: false,
	locale: localeStorageLang || defaultLocal,
	fallbackLocale: 'en',
	messages
})

const pinia = createPinia()

library.add([faSun, faPaperPlane, faCheck, faHeart])

createApp(App, {
	setup() {
		const { t } = useI18n()
		return { t }
	}
})
	.use(i18n)
	.use(pinia)
	.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')
