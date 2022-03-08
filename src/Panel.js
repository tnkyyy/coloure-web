import React from 'react';
import './Panel.css';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  determineTextColor(bgColor, lightColor, darkColor) {
    var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
  }

  render() {
    let textColor = this.determineTextColor(
      this.props.color,
      '#ffffff',
      '#000000'
    );
    return (
      <div className="panel" style={{ backgroundColor: this.props.color }}>
        <p className='panelText' style={{ color: textColor }}>{this.props.color}</p>
      </div>
    );
  }
}
