import { sha256 } from 'react-native-sha256';
export default class App extends React.Component {
    constructor(props) {
      super(props);

sha256(this.state.text).then(hash => {
    console.log(hash)
    });


validate = (text) => {
    console.log(text);
    let reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
    if (text.match(reg)  === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text })
      return false;
    }
    else {
      this.setState({ email: text })
      console.log("Email is Correct");
    }
}
}}