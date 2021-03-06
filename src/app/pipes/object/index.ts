import { KeysPipe } from './keys';
import { ValuesPipe } from './values';
import { PairsPipe } from './pairs';
import { PickPipe } from './pick';
import { OmitPipe } from './omit';
import { InvertPipe } from './invert';
import { InvertByPipe } from './invert-by';
import { NgModule } from '@angular/core';

const OBJECT_PIPES = [
  KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe,
  OmitPipe
];

@NgModule({
  declarations: OBJECT_PIPES,
  imports: [],
  exports: OBJECT_PIPES
})
export class NgObjectPipesModule {}

export * from './keys';
export * from './values';
export * from './pairs';
export * from './pick';
export * from './omit';
export * from './invert';
export * from './invert-by';
