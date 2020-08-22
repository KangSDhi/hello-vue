import Vue from 'vue'
import Router from 'vue-router'
import Skill from './components/Skill.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skill',
            component: Skill
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})