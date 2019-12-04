import React from 'react';

class JsonScript extends React.Component {
  render() {
    var { children, ...other } = this.props;
    return (
      <script
        {...other}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(this.props.children),
        }}
      />
    );
  }
}

export default JsonScript;
