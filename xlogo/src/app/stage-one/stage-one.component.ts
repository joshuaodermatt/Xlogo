import { Component, OnInit } from '@angular/core';


declare var Blockly: any;

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.scss']
})

export class StageOneComponent implements OnInit {

  workspace: any;

  constructor() { }

  ngOnInit(): void {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });
  }

}
