import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule

} from '@angular/material';
@NgModule({
    imports:
    [
MatToolbarModule,
MatButtonModule,
MatInputModule,
MatIconModule
    ],
    exports:[
MatToolbarModule,
MatInputModule,
MatButtonModule,
MatIconModule
    ]
})
export class MaterialModule
{

}
