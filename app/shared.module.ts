import { NgModule } from '@angular/core';

import { HideDirective } from './hidiDiractive';

@NgModule({
    declarations: [
        HideDirective
    ],
    exports: [
        HideDirective
    ]
})
export class SharedModule{}