import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'activity',
        loadChildren: () => import('./activity/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full'
    }
];
