import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const materialComponents = [MatButtonModule, MatCheckboxModule];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}
