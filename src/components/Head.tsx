// Loosely based on https://github.com/matthewmueller/preact-head
import { Component } from "preact";

let mounted: Head[] = [];

export default class Head extends Component {
  static rewind() {
    const state = mounted.map((mount) => mount.props.children ?? []).flat();
    mounted = [];
    return state;
  }

  override componentWillMount() {
    mounted.push(this);
  }

  override componentWillUnmount() {
    const i = mounted.indexOf(this);
    if (~i) mounted.splice(i, 1);
  }

  render() {
    return null;
  }
}
