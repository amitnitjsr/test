import React from 'react';
import {
    Row, Button, Col, ButtonDropdown, Card, CardBody, CardImg,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Collection from '../Data/collection';
import './shopping.css';

const categories = [{ label: 'hats', value: 'hats' }, { label: 'sneakers', value: 'sneakers' },
{ label: 'jackets', value: 'jackets' }, { label: 'mens', value: 'mens' }]
class Shopping extends React.Component {
    state = {
        dropdownOpen: false,
        range: 30,
        cardData: Collection.hats.items,
        filterData: null,
        open: false,
        category: 'hats',
        toprating: false,
        topProduct: Collection.hats.items.filter(
            item => item.rating === 5
        )
    }
    toggle = () => {
        this.setState((prevState) => {
            return { dropdownOpen: !prevState.dropdownOpen }
        })
    }
    inputHandler = (name, value) => {
        this.setState(
            { [name]: value }
        );
    }
    popupModal = () => {
        this.setState({
            open: !this.state.open
        });
    }
    checkToggle = () => {
        this.setState({ toprating: !this.state.toprating })
    }

    sortingByPrice = (price) => {

        if (price === 'low') {
            if (this.state.filterData)
                this.state.filterData.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            else
                this.state.cardData.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
        }
        else if (price === 'high') {
            if (this.state.filterData)
                this.state.filterData.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            else
                this.state.cardData.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
        }
        else if (price === 'default') {
            if (this.state.filterData)
                this.state.filterData.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
            else
                this.state.cardData.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

        }
        else if (price === 'price') {
            let d = this.state.cardData.filter(f => ((f.price) <= this.state.range))
            this.setState({ filterData: d })
        }

    }
    selectProductType = (type) => {

        this.setState({ filterData: null })
        if (type === 'hats')
            this.setState({ cardData: Collection.hats.items });
        else if (type === 'sneakers')
            this.setState({ cardData: Collection.sneakers.items });
        else if (type === 'jackets')
            this.setState({ cardData: Collection.jackets.items });
        else if (type === 'mens')
            this.setState({ cardData: Collection.mens.items })

    }
    render() {

        const openClass = `modal ${this.state.open ? "show-modal" : ""}`;
        console.log('Data', this.state.cardData);


        return (
            <div style={{ marginLeft: '2%' }}>

                <Row>
                    <Col className="col-md-2 col-sm-2"><span><h2>Product</h2></span></Col>
                    <Col className="col-md-2 col-sm-2 ml-auto"><Button className="button-color"
                        onClick={() => this.popupModal()}>Add Product</Button></Col>

                    {/* HTML POPUP MODAL */}
                    <div className={openClass}>
                        <div className="modal-content">
                            <span className="close-button" onClick={this.popupModal}>
                                X
                            </span>
                            <span style={{ textAlign: 'center' }}><h3>Add Product</h3></span><br />
                            <span className="font-style">Product Category</span>
                            <span className="bottom-padding">
                                <select className="input-width" onClick={(event) => this.inputHandler('category', event.target.value)}
                                >
                                    {categories.map((val) => {
                                        let selected = this.state.category === val.value ? true : false;
                                        return (
                                            <option key={val.value}
                                                selected={selected}
                                            >
                                                {val.value}
                                            </option>
                                        )
                                    }
                                    )}
                                </select>
                            </span>
                            <span className="font-style">
                                Product Title
                            </span>
                            <span className="bottom-padding">
                                <input className="input-width" placeholder={'Enter product title'} />
                            </span>
                            <span className="font-style">
                                Price
                            </span>
                            <span className="bottom-padding">
                                <input type="number" min="1" max="599" className="input-width" placeholder={'Enter price'} />
                            </span>
                            <span className="font-style">
                                Top Product
                            </span>
                            <span className="bottom-padding">
                                <input type="checkbox" value={this.state.toprating}
                                    onClick={() => this.checkToggle()} />
                            </span>
                            <span className="font-style">
                                Upload Product Image
                            </span>
                            <span className="bottom-padding">
                                <input type="file" id="img" name="img" accept="image/*" />
                            </span>
                            <span style={{ textAlign: 'center' }}>
                                <button className="cancel">Cancel</button>&nbsp;&nbsp;&nbsp;
                                <button className="save">Save</button>
                            </span>
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
                                <DropdownItem onClick={() => this.sortingByPrice('default')}>Default sorting</DropdownItem>
                                <DropdownItem onClick={() => this.sortingByPrice('high')}>Price High to low</DropdownItem>
                                <DropdownItem onClick={() => this.sortingByPrice('low')}>Price Low to High</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-sm-2">
                        <div >
                            <Card style={{ background: 'lightgray' }}>
                                <CardBody>
                                    <span className="pointer" onClick={() => this.selectProductType('hats')}>Hats</span><hr />
                                    <span className="pointer" onClick={() => this.selectProductType('sneakers')}>Sneakers</span><hr />
                                    <span className="pointer" onClick={() => this.selectProductType('jackets')}>Jackets</span><hr />
                                    <span className="pointer" onClick={() => this.selectProductType('mens')}>Men</span>
                                </CardBody>
                            </Card>
                        </div><br />
                        <div>
                            <div class="slidecontainer">
                                <label>Filter By Price</label>
                                <input type="range" min="1" max="599" value={this.state.range}
                                    style={{ width: '100%' }}
                                    onChange={(event) => this.inputHandler('range', event.target.value)}
                                />
                            </div>
                            <Button onClick={() => this.sortingByPrice('price')} className="button-color1">Filter</Button>&nbsp;&nbsp;
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
                            {this.state.filterData ?
                                this.state.filterData.map((val) => {
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
                                :
                                this.state.cardData.map((val) => {
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
                            }

                        </div>

                    </Col>
                </Row>

            </div >
        );
    }
}
export default Shopping;