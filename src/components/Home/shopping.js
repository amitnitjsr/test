import React from 'react';
import {
    Row, Button, Col, ButtonDropdown, Card, CardBody, CardImg,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Collection from '../../Data/collection';
import Pagination from '../Pagination/Pagination';
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
        uploadedImage: null,
        imageName: null,
        price: 0,
        name: '',
        edit: false,
        page: 0,
        currentPage: 1,
        postsPerPage: 4,
        currentData: null,
        cardLength: 0,
        topProduct: Collection.hats.items.filter(
            item => item.rating === 5
        )
    }

    componentDidMount() {
        this.paginationHandler();
    }

    paginationHandler = () => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        if (this.state.filterData) {
            this.setState({ cardLength: this.state.filterData.length });
            // console.log('this.state.filterData.length', this.state.filterData.length)
            // console.log('indexOfFirstPost', indexOfFirstPost, indexOfLastPost)
            const currentPosts = this.state.filterData.slice(indexOfFirstPost, indexOfLastPost);
            this.setState({ currentData: currentPosts, })
            // console.log('filterData', currentPosts)
        } else {
            this.setState({ cardLength: this.state.cardData.length })
            // console.log('this.state.cardData.length', this.state.cardData.length)
            // console.log('indexOfFirstPost', indexOfFirstPost, indexOfLastPost)
            const currentPosts = this.state.cardData.slice(indexOfFirstPost, indexOfLastPost);
            this.setState({ currentData: currentPosts, })
            // console.log('current', currentPosts)
        }

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

    paginate = (pageNumbers) => {

        this.setState({ currentPage: pageNumbers }, () => {
            this.paginationHandler();
        })
    }

    popupModal = () => {
        this.setState({
            open: !this.state.open, edit: false
        });
    }

    checkToggle = () => {
        this.setState({ toprating: !this.state.toprating })
    }

    sortingByPrice = (price) => {

        if (price === 'low') {
            // console.log('current', this.state.currentData)
            if (this.state.filterData) {
                this.state.filterData.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
            else {
                this.state.cardData.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
            this.setState({ currentPage: 1 });
            this.paginationHandler();
        }
        else if (price === 'high') {
            if (this.state.filterData) {
                this.state.filterData.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            }
            else {
                this.state.cardData.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            }
            this.setState({ currentPage: 1 });
            this.paginationHandler();
        }
        else if (price === 'default') {
            if (this.state.filterData) {
                this.state.filterData.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
            }
            else {
                this.state.cardData.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
            }
            this.setState({ currentPage: 1 });
            this.paginationHandler();
        }
        else if (price === 'price') {
            let d = this.state.cardData.filter(f => ((f.price) <= this.state.range))
            this.setState({ filterData: d, currentPage: 1 }, () => {
                this.paginationHandler();
            })
        }
    }

    selectProductType = (type) => {
        this.setState({ filterData: null })
        if (type === 'hats')
            this.setState({ cardData: Collection.hats.items, currentPage: 1 }, () => {
                this.paginationHandler();
            });
        else if (type === 'sneakers')
            this.setState({ cardData: Collection.sneakers.items, currentPage: 1 }, () => {
                this.paginationHandler();
            });
        else if (type === 'jackets')
            this.setState({ cardData: Collection.jackets.items, currentPage: 1 }, () => {
                this.paginationHandler();
            });
        else if (type === 'mens')
            this.setState({ cardData: Collection.mens.items, currentPage: 1 }, () => {
                this.paginationHandler();
            })
    }

    saveHandler = () => {
        // console.log('saveHandler', this.state.category, this.state.name, this.state.price,
        //     this.state.uploadedImage, this.state.uploadedImage.name, this.state.toprating
        // );
        const reader = new FileReader();
        reader.readAsDataURL(this.state.uploadedImage)

        if (this.state.edit) {

        }
        else {
            if (this.state.category === 'hats') {
                let data = {
                    id: Collection.hats.items[Collection.hats.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage.name,
                }
                Collection.hats.items.push(data);
            }
            else if (this.state.category === 'sneakers') {
                let data = {
                    id: Collection.sneakers.items[Collection.sneakers.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage.name,
                }
                Collection.sneakers.items.push(data);
            }
            else if (this.state.category === 'jackets') {
                let data = {
                    id: Collection.jackets.items[Collection.jackets.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage.name,
                }
                Collection.jackets.items.push(data);
            }
            else if (this.state.category === 'mens') {
                let data = {
                    id: Collection.mens.items[Collection.mens.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage.name,
                }
                Collection.mens.items.push(data);
            }
        }

        this.popupModal();
        this.setState({ name: '', price: 0, toprating: false, imageName: null, edit: false })
    }

    editHandler = (value) => {
        this.popupModal();
        // console.log('editHandler', value);
        this.setState({ name: value.name, imageName: value.imageUrl, price: value.price, edit: true })

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
                            <span style={{ textAlign: 'center' }}>
                                <h3> {this.state.edit ? 'Edit Product' : 'Add Product'}</h3>
                            </span><br />
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
                                <input className="input-width" placeholder={'Enter product title'}
                                    value={this.state.name}
                                    onChange={(e) => this.inputHandler('name', e.target.value)} />
                            </span>
                            <span className="font-style">
                                Price
                            </span>
                            <span className="bottom-padding">
                                <input type="number" min="1" max="599" className="input-width"
                                    value={this.state.price}
                                    onChange={(e) => this.inputHandler('price', e.target.value)}
                                    placeholder={'Enter price'} />
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
                                <input type="file" id="img" name="img" accept="image/*"
                                    // value={this.state.imageName}
                                    onChange={(event) => this.inputHandler('uploadedImage', event.target.files[0])} />
                            </span>
                            <span style={{ textAlign: 'center' }}>
                                <button className="cancel" onClick={this.popupModal}>Cancel</button>&nbsp;&nbsp;&nbsp;
                                <button className="save" onClick={this.saveHandler}>
                                    {this.state.edit ? 'Edit' : 'Save'}
                                </button>
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
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span><br />
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
                    {/* //Card Render tab */}
                    <Col>
                        <div className="parent">
                            {this.state.filterData ?
                                this.state.currentData.map((val) => {
                                    return (
                                        <Card onClick={() => this.editHandler(val)}
                                            style={{ maxWidth: 250, maxHeight: 500, margin: '0.6%', cursor: 'pointer' }}>
                                            <CardImg top style={{ height: '75%' }}
                                                src={val.imageUrl} alt="Card image cap" />
                                            <CardBody className="text-center" >
                                                <span>{val.name}</span><br />
                                                <span>${val.price}</span>
                                            </CardBody>
                                        </Card>
                                    );
                                })
                                :
                                this.state.currentData &&
                                this.state.currentData.map((val) => {
                                    return (
                                        <Card onClick={() => this.editHandler(val)}
                                            style={{ maxWidth: 250, maxHeight: 500, margin: '0.6%', cursor: 'pointer' }}>
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
                <Row>
                    <div class="pagination">
                        {/* <span className="a">&laquo;</span>
                        <span className="a active" >1</span>
                        <span className="a" >2</span>
                        <span className="a">3</span>
                        <span className="a">&raquo;</span> */}

                        <Pagination
                            postsPerPage={this.state.postsPerPage}
                            totalPosts={this.state.cardLength}
                            paginate={this.paginate}
                        />

                    </div>
                </Row>
            </div >
        );
    }
}
export default Shopping;