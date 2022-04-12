import React, { useEffect } from 'react';
export default class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }
  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gih-costa123/"
            style={{ minWidth: '320px', height: '580px' }}
          />
        </div>
      </div>
    );
  }
}

export const CalendlyFunctional = ({ minWidth = '320px', height = '580px', url }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url ? `https://calendly.com/${url}` : "https://calendly.com/elienaisoares"}
      style={{ minWidth, height }}
    />
  );
};
