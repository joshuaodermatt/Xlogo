Blockly.defineBlocksWithJsonArray([
  {
    "type": "alert",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "alert_message",
        "text": "alert"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['alert'] = function(block) {
  var text_alert_message = block.getFieldValue('alert_message');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'alert(\'hallo\');\n';
  return code;
};
