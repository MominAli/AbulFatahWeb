import { Routes } from '@angular/router';

/* admin module */

import { MemberListComponent } from '../app/admin/pages/members/member-list/member-list.component';
import { MemberDetailComponent } from '../app/admin/pages/members/member-detail/member-detail.component';
import { RegisterComponent } from '../app/admin/pages/register/register.component';
import { MemberEditComponent } from '../app/admin/pages/members/member-edit/member-edit.component';
import { memberDetailedResolver } from '../app/core/guards/_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from '../app/admin/pages/admin-panel/admin-panel.component';

/* customer module */

import { HomeComponent } from '../app/customer/pages/home/home.component';
import { ActivityComponent } from '../app/customer/pages/activity/activity.component';
import { QuranDetailsComponent } from '../app/customer/pages/quran/quran-details/quran-details.component';
import { AboutComponent } from '../app/customer/pages/about/about.component';
import { FeedbackComponent } from '../app/customer/pages/feedback/feedback.component';
import { DonationComponent } from '../app/customer/pages/donation/donation.component';
import { BiograhpyComponent } from '../app/customer/pages/biograhpy/biograhpy.component';
import { MediaComponent } from '../app/customer/pages/media/media.component';
import { QuranComponent } from '../app/customer/pages/quran/quran.component';
import { ContactComponent } from '../app/customer/pages/contact/contact.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SubBookComponent } from './sub-book/sub-book.component';

/* shared module */

import { TestErrorsComponent } from '../app/shared/components/errors/test-errors/test-errors.component';
import { NotFoundComponent } from '../app/shared/components/errors/not-found/not-found.component';
import { ServerErrorComponent } from '../app/shared/components/errors/server-error/server-error.component';

/* core module */

import { authGuard } from '../app/core/guards/_guards/auth.guard';
import { preventUnsavedChangesGuard } from '../app/core/guards/_guards/prevent-unsaved-changes.guard';
import { adminGuard } from '../app/core/guards/_guards/admin.guard';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'media', component: MediaComponent },

    { path: 'quran', component: QuranComponent },
    { path: 'quran-details', component: QuranDetailsComponent },

    { path: 'book', component: BookComponent },
    { path: 'sub-book/:id', component: SubBookComponent },
    { path: 'book-details/:id', component: BookDetailsComponent },

    { path: 'activity', component: ActivityComponent },
    { path: 'aboutus', component: AboutComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'donation', component: DonationComponent },
    { path: 'biograhpy', component: BiograhpyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        // canActivate: [authGuard],
        children: [
            { path: 'members', component: MemberListComponent },

            {
                path: 'members/:username', component: MemberDetailComponent,
                resolve: { member: memberDetailedResolver }
            },
            {
                path: 'member/edit', component: MemberEditComponent,
                canDeactivate: [preventUnsavedChangesGuard]
            },
            { path: 'admin', component: AdminPanelComponent, canActivate: [adminGuard] }
        ]
    },
    { path: 'errors', component: TestErrorsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'server-error', component: ServerErrorComponent },
    { path: '**', component: HomeComponent, pathMatch: 'full' },
];
