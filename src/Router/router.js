

import {createRouter, createWebHistory} from 'vue-router';




const routes = 
[

    {
        path: "/",
        redirect:"/audio-page"
    },


]



const router = createRouter(
{
    history: createWebHistory(),
    routes
});

export default router