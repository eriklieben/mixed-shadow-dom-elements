import { useShadowDOM } from 'aurelia';
import * as monaco from 'monaco-editor';

@useShadowDOM(null)
export class NoShadowDomEditor {
  public container: HTMLDivElement;

  public attached() {
    monaco.editor.create(this.container, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}',
        'export class Foo {',
        '  public Bar: number = 3;',
        '}'
      ].join('\n'),
      language: 'typescript',
      theme: 'vs-dark',
      automaticLayout: true,
      lineNumbersMinChars: 3,
      mouseWheelZoom: true,
    });
  }
}
