import { AppRoute } from '../classes/AppRoute';
import {MessageCircle} from 'angular-feather/icons';
export let appRoutes:AppRoute[]= [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
    name:'index',
    label:'index',
  },
  {
    path: 'home',
    name:'home',
    label:'Home',
    icon:'home',
    loadChildren:()=>import('../pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'messages',
    name:'messages',
    label:'Messages',
    icon:'message-square',
    loadChildren:()=>import('../pages/messages/messages.module').then(m=>m.MessagesModule)
  },{
    path:'library',
    name:'library',
    label:'Library',
    icon:'folder',
    loadChildren:()=>import('../pages/library/library.module').then(m=>m.LibraryModule)
  },
  {
    path:'**',
    name:'not-found',
    label:'Not Found',
    redirectTo:''
  }
]


