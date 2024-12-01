import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { preventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { memberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { adminGuard } from './_guards/admin.guard';
import { BooksComponent } from './books/books.component';
import { MediaComponent } from './media/media.component';
import { QuranComponent } from './quran/quran.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { ActivityComponent } from './activity/activity.component';
import { QuranParawiseComponent } from './quran/quran-parawise/quran-parawise.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'books', component: BooksComponent},
    {path: 'books-details', component: BooksDetailsComponent},
    {path: 'media', component: MediaComponent},
    {path: 'quran', component: QuranComponent},
    {path: 'quran-parawise', component: QuranParawiseComponent},

    {path: 'activity', component: ActivityComponent},

    {path: 'contact', component: ContactComponent},
    {path: 'register', component: RegisterComponent},




    {
        path: '',
        runGuardsAndResolvers: 'always',
        // canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberListComponent},

            {path: 'members/:username', component: MemberDetailComponent, 
                resolve: {member: memberDetailedResolver}},
            {path: 'member/edit', component: MemberEditComponent, 
                canDeactivate: [preventUnsavedChangesGuard]},
            {path: 'admin', component: AdminPanelComponent, canActivate: [adminGuard]}
        ]
    },
    {path: 'errors', component: TestErrorsComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
