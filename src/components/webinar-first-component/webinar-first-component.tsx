import { Component, Host, h, Prop, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'webinar-first-component',
  styleUrl: 'webinar-first-component.scss',
  shadow: true,
})
export class WebinarFirstComponent {

  @Prop() name = 'Nome';

  @Event() buttonClicked: EventEmitter<string>;

  @State() store = {};

  @Element() element: HTMLElement;

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentDidRender() {
    console.log('componentDidRender')
    this.element.shadowRoot.querySelector('label').style.color = 'red';
  }


  buttonClickHandle() {
    this.buttonClicked.emit('Emiti o Evento de Click')
    this.store = {};
  }

  render() {
    return (
      <Host>
        <Hello name={ this.name }></Hello>
        <br />
        <label>{this.name}</label>
        {/* <slot></slot> */}
      </Host>
    );
  }

}

const Hello = props => <h1>Hello, { props.name }!</h1>;