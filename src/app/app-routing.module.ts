import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-update/:id_user',
    loadChildren: () => import('./user-list/user-update/user-update.module').then( m => m.UserUpdateModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('./user-list/user-create/user-create.module').then( m => m.UserCreateModule)
  },
  {
    path: 'user-perfil/:id_user',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
