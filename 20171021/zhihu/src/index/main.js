import 'vux/dist/styles/reset.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

import App from './app.vue';
let app = Vue.extend(App);
let router = new VueRouter({
    hashbang: true
});

router.map({
    '/list': {
        component: require('./list'),
        tabIndex: 0,
        isIndex: true,
        subRoutes: {
            '/detail/:id': {
                component: require('./detail'),
                isIndex: false
            }
        }
    },
    '/find': {
        component: require('./find'),
        tabIndex: 1,
        isIndex: true,
        subRoutes: {
            '/':{
                component: require('./recommend'),
                isIndex: true
            },
            '/recommend': {
                component: require('./recommend'),
                isIndex: true
            },
            '/round': {
                component: require('./round'),
                isIndex: true
            },
            '/hot': {
                component: require('./hot'),
                isIndex: true
            },
            '/collect': {
                component: require('./collect'),
                isIndex: true
            }
        } 
    },
    '/more': {
        component: require('./more'),
        tabIndex: 4,
        isIndex: true
    }
});

router.redirect({
    '/': "/list",
    '/find': "/find/recommend"
});

router.beforeEach((transition) => {
    if (transition.to.isIndex === true) router.app.isIndex = true;
    else router.app.isIndex = false;
    if (transition.to.tabIndex != undefined) router.app.tabIndex = transition.to.tabIndex;
    transition.next();
});

router.start(app, '#app');