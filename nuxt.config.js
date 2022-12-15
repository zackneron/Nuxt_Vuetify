import colors from 'vuetify/es5/util/colors'

let contextPath = process.env.NUXT_CONTEXT_PATH || '/'
if (!contextPath.endsWith('/')) {
    contextPath += '/'
}

const apiContextPath = process.env.API_CONTEXT_PATH || undefined

let useAxiosProxy = true
if (process.env.NODE_ENV === 'production') {
    useAxiosProxy = false
}

export default {
    ssr: false,
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    modern: 'client',
    srcDir: 'src',
    generate: {
        dir: './dist',
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - ClaimsWithdrawal',
        title: 'ClaimsWithdrawal',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Sanlam Claims Withdrawal' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: contextPath + 'favicon.png' }],
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
    publicRuntimeConfig: {
        contextPath,
        apiContextPath,
    },
    router: {
        base: contextPath,
    },
    axios: {
        baseURL: apiContextPath,
        proxy: useAxiosProxy,
    },
    proxy: {
        '/api': {
            target: 'https://localhost:44342',
            secure: false,
        },
    },
    styleResources: {
        scss: ['~/styles/*.scss'],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vuelidate', '~/plugins/sc-components', '~/plugins/axios', '~/plugins/vue-query'],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/proxy',
        '@nuxtjs/composition-api/module',
        'pinia/nuxt',
    ],
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['@tanstack/match-sorter-utils', '@tanstack/vue-query', '@lukemorales/query-key-factory'],
        extend(config, { isClient }) {
            config.devtool = isClient ? 'source-map' : 'inline-source-map'
            if (config.mode !== 'development') {
                config.output.publicPath = '_nuxt/' // this is a hack because webseal rewrites <script src="
            }
        },
    },
}
