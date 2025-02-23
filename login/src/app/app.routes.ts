import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'activity',
        loadChildren: () => import('./activity/users/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full'
    }
];
