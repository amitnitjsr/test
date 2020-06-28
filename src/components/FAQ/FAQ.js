import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import './FAQ.css';

const data = [{
    id: 1, heading: 'How can I add an alternate number to recieve SMS notification?.',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 2, heading: 'How do I inform Chola before I get hospitalized',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 3, heading: 'What are the documents required for filling cashless claim',
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
nesciunt sapiente ea proident.`},
{
    id: 6, heading: 'What is coverage amount.?',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 7, heading: 'What are the minimum and maximum policy duration?',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 8, heading: 'Is a medical checkup necessary before buying a policy?',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
{
    id: 9, heading: 'Are Ayurvedic treatment expenses covered under Individual Healthcare Policy?',
    content: `Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.`},
]

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            activeKey: 0,
            searchData: data,
            searchInput: '',
        };
    }

    handleSelect = (activeKey) => {
        if (this.state.activeKey === activeKey) {
            this.setState({ activeKey: 0 });
        }
        else {
            this.setState({ activeKey });
        }
    }

    toggle1 = (index) => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
        this.setState(
            { block: !this.state.block, id: index }
        )
    };

    inputHandler = (event) => {
        this.setState({ searchInput: event.target.value }, () => {
            if (this.state.searchInput.length === 0) {
                this.setState({ searchData: data })
            }
        })
    }

    searchHandler = () => {
        if (this.state.searchInput.length > 0) {
            // eslint-disable-next-line
            const newData = data.filter(data => {
                if (data.heading.toLowerCase().includes(this.state.searchInput.toLowerCase()) || data.content
                    .toLowerCase()
                    .includes(this.state.searchInput.toLowerCase()))
                    return data
            })
            this.setState({ searchData: newData })
        }
        else {
            this.setState({ searchData: data })
        }
    }

    render() {
        return (
            <div className="faQ-content">
                <div className="par">We're here to help!</div><br />

                {/* search button */}
                <div>
                    <span>
                        <input type='text' value={this.state.searchInput}
                            placeholder='Search for a keyword or phrase' onChange={(event) => this.inputHandler(event)} />
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        <button className="search-btn" onClick={() => this.searchHandler()}>SEARCH</button>
                    </span>
                </div><br />

                {/* tableRow Data */}
                {this.state.searchData && this.state.searchData.map((val) => {
                    return (
                        <div>
                            <div style={{ margin: '5px' }}>
                                <button className="collapsible" onClick={() => this.handleSelect(val.id)}>
                                    {this.state.activeKey === val.id ?
                                        <i className="zmdi zmdi-minus-circle-outline zmdi-hc-lg" style={{ margin: '5px' }}></i> :
                                        <i className="zmdi zmdi-plus-circle-o zmdi-hc-lg" style={{ margin: '5px' }}></i>}
                                    {val.heading}
                                    <Collapse isOpen={this.state.activeKey === val.id}>
                                        <br />
                                        <div style={{ marginLeft: '25px', color: 'gray' }} >
                                            {val.content}
                                        </div>
                                    </Collapse>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FAQ;