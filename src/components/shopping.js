import React from 'react';
import {
    Row, Button, Col, ButtonDropdown, Card, CardBody, CardImg,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Collection from '../Data/collection';
import './shopping.css';

class Shopping extends React.Component {
    state = {
        dropdownOpen: false,
        range: 30,
        cardData: Collection,
        open: false,
        topProduct: Collection.hats.items.filter(
            item => item.rating === 5
        )
    }
    toggle = () => {
        console.log('toggle')
        this.setState((prevState) => {
            return { dropdownOpen: !prevState.dropdownOpen }
        })
    }
    inputHandler = (event) => {
        this.setState(
            { range: event.target.value }
        )
    }
    popupModal = () => {
        console.log('popupModal', this.state.open)
        this.setState((prevState) => {
            return { open: !prevState.open }
        })
    }
    render() {

        const openClass = `modal ${this.state.open ? "show-modal" : ""}`;
        console.log('Data', this.state.cardData, this.state.topProduct, openClass)
        return (
            <div style={{ marginLeft: '2%' }}>
                <Row>
                    <Col className="col-md-2 col-sm-2"><span><h2>Product</h2></span></Col>
                    <Col className="col-md-2 col-sm-2 ml-auto"><Button className="button-color">Add Product</Button></Col>
                    {/* <button class="trigger" onClick={() => this.popupModal()}>Click here to trigger the modal!</button> */}
                    <div>
                        <button className="trigger" onClick={this.popupModal}>
                            Open
                    </button>
                        <div className={openClass}>
                            <div className="modal-content">
                                <span className="close-button" onClick={this.popupModal}>
                                    ×
                            </span>
                                <h1>Hello, I am a modal!</h1><hr />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col className="col-md-2 col-sm-2"><span> CATEGORIES</span></Col>
                    <Col className="col-md-2 col-sm-2 ml-auto">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}
                        >
                            <DropdownToggle style={{ background: "transparent", color: "black" }} caret>
                                Default sorting
                             </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-sm-2">
                        <div >
                            <Card style={{ background: 'lightgray' }}>
                                <CardBody>
                                    <span className="pointer">Books</span><hr />
                                    <span className="pointer">Hoodies/T-shirts</span><hr />
                                    <span className="pointer">Bags</span><hr />
                                    <span className="pointer">Misc</span>
                                </CardBody>
                            </Card>
                        </div><br />
                        <div>
                            <div class="slidecontainer">
                                <label>Filter By Price</label>
                                <input type="range" min="1" max="599" value={this.state.range}
                                    style={{ width: '100%' }}
                                    onChange={(event) => this.inputHandler(event)}
                                />
                            </div>
                            <Button className="button-color1">Filter</Button>&nbsp;&nbsp;
                            <label><span>Price: ${this.state.range}- $599 </span></label>
                        </div><br />
                        <div>
                            <label> TOP PRODUCTS </label>
                            <div >
                                {this.state.topProduct ?
                                    this.state.topProduct.map((val) => {
                                        return (
                                            <Card style={{ maxWidth: '100%', maxHeight: 300, margin: '0.6%' }}>
                                                <CardBody className="text-center">
                                                    <Row>
                                                        <Col>
                                                            <CardImg style={{ maxHeight: 50, maxWidth: 50, marginRight: 34 }}
                                                                src={val.imageUrl} alt="Card image cap" />
                                                        </Col>
                                                        <div style={{
                                                            position: 'relative',
                                                            textAlign: 'initial'
                                                        }}>
                                                            <span>{val.name}</span><br />

                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span><br />

                                                            <span>${val.price}</span>
                                                        </div>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        );
                                    })
                                    : null}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="parent">
                            {this.state.cardData ?
                                this.state.cardData.hats.items.map((val) => {
                                    return (
                                        <Card style={{ maxWidth: 250, maxHeight: 500, margin: '0.6%' }}>
                                            <CardImg top style={{ height: '75%' }}
                                                src={val.imageUrl} alt="Card image cap" />
                                            <CardBody className="text-center">
                                                <span>{val.name}</span><br />
                                                <span>${val.price}</span>
                                            </CardBody>
                                        </Card>
                                    );
                                })
                                : null}

                        </div>

                    </Col>
                </Row>

            </div >
        );
    }
}
export default Shopping;