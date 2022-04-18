import { AppRoute } from '../classes/AppRoute';
export let appRoutes:AppRoute[]= [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
    name:'index',
    label:'index'
  },
  {
    path: 'home',
    name:'home',
    label:'Home',
    loadChildren:()=>import('../pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'messages',
    name:'messages',
    label:'Messages',
    loadChildren:()=>import('../pages/messages/messages.module').then(m=>m.MessagesModule)
  },{
    path:'library',
    name:'library',
    label:'Library',
    loadChildren:()=>import('../pages/library/library.module').then(m=>m.LibraryModule)
  },
  {
    path:'**',
    name:'not-found',
    label:'Not Found',
    redirectTo:''
  }
]


