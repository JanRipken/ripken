/** @format */

import Router from 'vue-router';
import Main from '../routes/Main';
import Projects from '../routes/Projects';
import Gear from '../routes/Gear';
import Contact from '../routes/Contact';
import Resume from '../routes/Resume';

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects,
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
        },
        {
            path: '/gear',
            name: 'Gear',
            component: Gear,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '*',
            component: Main,
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});
