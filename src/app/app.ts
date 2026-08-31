import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingActions } from './shared/floating-actions';
import { Footer } from './shared/footer';
import { Header } from './shared/header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer, FloatingActions],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
