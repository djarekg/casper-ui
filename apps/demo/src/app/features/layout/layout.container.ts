import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  styleUrl: './layout.container.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, RouterOutlet],
})
export default class LayoutContainer {
  readonly opened = signal(false);
}
