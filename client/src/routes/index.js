import { Home, Following, Profile, Upload } from '~/pages'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: null},
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}