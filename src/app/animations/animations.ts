import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export class Animations {
  public static POP_OUT = animate(200, keyframes([
    style({ transform: 'scale(1.3)', offset: 0 }),
    style({ transform: 'scale(1.1)', color: 'green', offset: 0.1 }),
    style({ transform: 'scale(1)', color: 'black', offset: 1.0 })
  ]));
}
