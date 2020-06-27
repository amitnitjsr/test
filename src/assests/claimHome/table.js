import React, { Component } from "react";
import { Panel, PanelGroup } from "react-bootstrap";
import { render } from "react-dom";
// import './index.css';

const data = [{
    id: 1, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 2, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 3, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 4, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 5, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`}
];
class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey: "1"
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
        return (
            <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={(activeKey) => this.handleSelect(activeKey)}
            >
                {data.map((val) => {
                    return (
                        <Panel eventKey={val.id.toString()}>
                            <Panel.Heading>
                                <Panel.Title toggle>{val.heading}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>{val.content}</Panel.Body>
                        </Panel>
                    )
                })}


            </PanelGroup>
        );
    }
}

// render(<App />, document.getElementById("root"));

export default App;
