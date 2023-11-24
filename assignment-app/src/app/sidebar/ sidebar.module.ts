// // sidebar.module.ts
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar.component';

// @NgModule({
//   declarations: [SidebarComponent],
//   imports: [CommonModule, SidebarModule],
//   exports: [SidebarComponent], // Export the component if you want to use it elsewhere
// })
// export class AppSidebarModule {}
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [/* your components here */],
  imports: [SidebarComponent, /* other modules here */],
})
export class SidebarModul {}
