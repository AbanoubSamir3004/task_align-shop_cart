import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from '@modules/main.module';
import { TestComponent } from './test.component';

const routes: Routes = [{ path: '', component: TestComponent }];

@NgModule({
  imports: [MainModule, RouterModule.forChild(routes)],
  declarations: [TestComponent],
})
export class TestModule {}
