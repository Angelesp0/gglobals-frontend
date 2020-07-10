import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:  'login',
    loadChildren:  './pages/auth/login/login.module#LoginPageModule'
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
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'company-update/:id_company',
    loadChildren: () => import('./pages/company/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pages/pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  {
    path: 'documents/:id_user',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'companydocuments/:id_company',
    loadChildren: () => import('./pages/company/companydocuments/companydocuments.module').then( m => m.CompanydocumentsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'a-services',
    loadChildren: () => import('./pages/admin/a-services/a-services.module').then( m => m.AServicesPageModule)
  },
  {
    path: 'service-update/:id_service',
    loadChildren: () => import('./pages/admin/a-services/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/admin/a-services/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'user-services/:id_user',
    loadChildren: () => import('./pages/user-services/user-services.module').then( m => m.UserServicesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
