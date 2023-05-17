import { registerMicroApps, start } from 'qiankun';

const lifeCycles = {
    beforeLoad: (app: any) => {
        console.log("before load app.name====>>>>>", app)
        return Promise.resolve(app)
    },
    beforeMount: (app: any) => {
        console.log("before mount app.name====>>>>>", app)
        return Promise.resolve(app)
    },
    afterMount: (app: any) => {
        console.log("after mount app.name====>>>>>", app)
        return Promise.resolve(app)
    }
}

const register = () => {
    registerMicroApps([
        {
            name: 'vueApp',
            entry: '//localhost:8080',
            container: '#custelement',
            activeRule: '/app-vue',
            props: {
                state: 'props-app-vue',
            },
        },
        {
            name: 'reactApp',
            entry: '//localhost:3000',
            container: '#custelement',
            activeRule: '/app-react',
            props: {
                state: 'props-app-react',
            },
        },
        {
            name: 'angularApp',
            entry: '//localhost:4200',
            container: '#custelement',
            activeRule: '/app-angular',
            props: {
                state: 'props-app-angular',
            },
        }
    ], lifeCycles);
}

export default {
    register,
    start,
}