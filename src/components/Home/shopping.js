import React from 'react';
import {
    Row, Col, ButtonDropdown, Card, CardBody, CardImg,
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
        price: null,
        name: '',
        id: null,
        edit: false,
        page: 0,
        currentPage: 1,
        postsPerPage: 9,
        currentData: null,
        cardLength: 0,
        topProduct: Collection.hats.items.filter(
            item => item.toprating === true
        ),
        active1: 'active',
        active2: '',
        active3: '',
        active4: '',
        validateTitle: false,
        validatePrice: false,
    }

    componentDidMount() {
        this.paginationHandler();
    }

    // Pagination Handler function
    paginationHandler = () => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        if (this.state.filterData) {
            this.setState({ cardLength: this.state.filterData.length });
            const currentPosts = this.state.filterData.slice(indexOfFirstPost, indexOfLastPost);
            this.setState({ currentData: currentPosts, })
        } else {
            this.setState({ cardLength: this.state.cardData.length })
            const currentPosts = this.state.cardData.slice(indexOfFirstPost, indexOfLastPost);
            this.setState({ currentData: currentPosts, })
        }
    }

    // Category dropdown toggle button 
    toggle = () => {
        this.setState((prevState) => {
            return { dropdownOpen: !prevState.dropdownOpen }
        });
    }

    // Text input Handler
    inputHandler = (name, value) => {
        this.setState(
            { [name]: value }, () => {
                // validation
                if (name === 'name') {
                    if (this.state.name.trim().length === 0) {
                        this.setState({ validateTitle: true })
                    }
                    else {
                        this.setState({ validateTitle: false })
                    }
                }
                else if (name === 'price') {
                    if (this.state.price === null) {
                        this.setState({ validatePrice: true })
                    }
                    else {
                        this.setState({ validatePrice: false })
                    }
                }
            }
        );
    }

    // Selecting page Number in footer 
    paginate = (pageNumbers) => {
        this.setState({ currentPage: pageNumbers }, () => {
            this.paginationHandler();
        })
    }

    // Add and Edit Popup Modal toggle
    popupModal = () => {
        this.setState({
            open: !this.state.open, edit: false
        });
    }

    // top rating toggle function
    checkToggle = () => {
        this.setState({ toprating: !this.state.toprating })
    }

    // Sorting Item by price and Filter by price of range
    sortingByPrice = (price) => {

        if (price === 'low') {

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

    // Top Product filter
    topProductFilter = (type) => {
        this.setState({
            topProduct: type.filter(
                item => item.toprating === true
            )
        })
    }
    // sidebar, Cards on Click, selecting Items type such as Hats, Sneakers etc..
    selectProductType = (type) => {
        this.setState({ filterData: null })
        if (type === 'hats')
            this.setState({
                cardData: Collection.hats.items, currentPage: 1, active1: 'active',
                active2: '', active3: '', active4: ''
            }, () => {
                this.topProductFilter(this.state.cardData);
                this.paginationHandler();
            });
        else if (type === 'sneakers')
            this.setState({
                cardData: Collection.sneakers.items, currentPage: 1,
                active1: '',
                active2: 'active', active3: '', active4: ''
            }, () => {
                this.topProductFilter(this.state.cardData);
                this.paginationHandler();
            });
        else if (type === 'jackets')
            this.setState({
                cardData: Collection.jackets.items, currentPage: 1,
                active1: '',
                active2: '', active3: 'active', active4: ''
            }, () => {
                this.topProductFilter(this.state.cardData);
                this.paginationHandler();
            });
        else if (type === 'mens')
            this.setState({
                cardData: Collection.mens.items, currentPage: 1,
                active1: '',
                active2: '', active3: '', active4: 'active'
            }, () => {
                this.topProductFilter(this.state.cardData);
                this.paginationHandler();
            })

    }

    // Add and Edit, both time calling this function 
    saveHandler = () => {

        if (this.state.edit) {
            // Edit functionality
            if (this.state.category === 'hats') {

                Collection.hats.items.filter(data => {
                    if (data.id === this.state.id) {
                        if (this.state.name) data.name = this.state.name;
                        if (this.state.price) data.price = this.state.price;
                        if (this.state.uploadedImage) data.imageUrl = this.state.uploadedImage;
                        data.toprating = this.state.toprating;
                        data.category = this.state.category;
                    }
                    return data;
                })
                this.topProductFilter(Collection.hats.items);
            }
            else if (this.state.category === 'sneakers') {
                Collection.sneakers.items.filter(data => {
                    if (data.id === this.state.id) {
                        if (this.state.name) data.name = this.state.name;
                        if (this.state.price) data.price = this.state.price;
                        if (this.state.uploadedImage) data.imageUrl = this.state.uploadedImage;
                        data.toprating = this.state.toprating;
                        data.category = this.state.category;
                    }
                    return data;
                })
                this.topProductFilter(Collection.sneakers.items);
            }
            else if (this.state.category === 'jackets') {
                Collection.jackets.items.filter(data => {
                    if (data.id === this.state.id) {
                        if (this.state.name) data.name = this.state.name;
                        if (this.state.price) data.price = this.state.price;
                        if (this.state.uploadedImage) data.imageUrl = this.state.uploadedImage;
                        data.toprating = this.state.toprating;
                        data.category = this.state.category;
                    }
                    return data;
                })
                this.topProductFilter(Collection.jackets.items);
            }
            else if (this.state.category === 'mens') {
                Collection.mens.items.filter(data => {
                    if (data.id === this.state.id) {
                        if (this.state.name) data.name = this.state.name;
                        if (this.state.price) data.price = this.state.price;
                        if (this.state.uploadedImage) data.imageUrl = this.state.uploadedImage;
                        data.toprating = this.state.toprating;
                        data.category = this.state.category;
                    }
                    return data;
                })
                this.topProductFilter(Collection.mens.items);
            }
            this.paginationHandler();
        }
        else {
            // Add Functionality
            if (this.state.category === 'hats') {
                let data = {
                    id: Collection.hats.items[Collection.hats.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage,
                    category: this.state.category
                }
                Collection.hats.items.push(data);
                this.topProductFilter(Collection.hats.items);
            }
            else if (this.state.category === 'sneakers') {
                let data = {
                    id: Collection.sneakers.items[Collection.sneakers.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage,
                    category: this.state.category
                }
                Collection.sneakers.items.push(data);
                this.topProductFilter(Collection.sneakers.items);
            }
            else if (this.state.category === 'jackets') {
                let data = {
                    id: Collection.jackets.items[Collection.jackets.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage,
                    category: this.state.category
                }
                Collection.jackets.items.push(data);
                this.topProductFilter(Collection.jackets.items);
            }
            else if (this.state.category === 'mens') {
                let data = {
                    id: Collection.mens.items[Collection.mens.items.length - 1].id + 1,
                    name: this.state.name,
                    price: this.state.price,
                    toprating: this.state.toprating,
                    imageUrl: this.state.uploadedImage,
                    category: this.state.category
                }
                Collection.mens.items.push(data);
                this.topProductFilter(Collection.mens.items);
            }
            this.paginationHandler();

        }

        this.popupModal();
        this.setState({ name: '', price: 0, toprating: false, edit: false })
    }

    // Click on Card, editHandler function calling
    editHandler = (value) => {
        this.popupModal();

        this.setState({
            id: value.id, name: value.name, uploadedImage: value.imageUrl,
            price: value.price, toprating: value.toprating, category: value.category, edit: true
        })
    }

    // Click on Upload button, uploadImg function calling
    // pre-condition: if same image, twice time wants continous upload , only first time call the function
    // But alternate time working properly
    uploadImg = (val) => {
        if (val) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(val); // set src to blob url
            this.setState({ uploadedImage: img.src })
        }
    }

    render() {

        const openClass = `modal ${this.state.open ? "show-modal" : ""}`;

        return (
            <div className="whole-table">
                <Row>
                    <Col className="col-md-2 col-sm-2"><span><h2>Product</h2></span></Col>
                    <Col className="col-md-2 col-sm-2 ml-auto add-prod-btn" >
                        <button className="add"
                            onClick={() => this.popupModal()}>Add Product</button></Col>

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
                                    error={true}
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
                                <input type="checkbox"
                                    checked={this.state.toprating}
                                    onClick={() => this.checkToggle()} />
                            </span>
                            <span className="font-style">
                                Upload Product Image
                            </span>
                            <span className="bottom-padding">
                                <input type="file" id="img" name="img" accept="image/*"
                                    // value={this.state.imageName}
                                    onChange={(event) => this.uploadImg(event.target.files[0])} />
                            </span>
                            <span style={{ textAlign: 'center' }}>
                                <button className="cancel" onClick={this.popupModal}>CANCEL</button>&nbsp;&nbsp;&nbsp;
                                <button className="save" onClick={this.saveHandler}>
                                    {this.state.edit ? 'EDIT' : 'SAVE'}
                                </button>
                            </span>
                        </div>
                    </div>
                </Row>

                <Row>
                    <Col className="col-md-2 col-sm-2"><span> CATEGORIES</span></Col>
                    {/* DropdownMenu, sort by price */}
                    <Col className="col-md-2 col-sm-2 ml-auto add-prod-btn" >
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
                {/* Side bar, category of Items */}
                <Row>
                    <Col className="col-md-3 col-sm-3">
                        <div >
                            <Card style={{ background: 'lightgray' }}>
                                <CardBody>
                                    <span className={`pointer ${this.state.active1}`} onClick={() => this.selectProductType('hats')}>Hats</span><hr />
                                    <span className={`pointer ${this.state.active2}`} onClick={() => this.selectProductType('sneakers')}>Sneakers</span><hr />
                                    <span className={`pointer ${this.state.active3}`} onClick={() => this.selectProductType('jackets')}>Jackets</span><hr />
                                    <span className={`pointer ${this.state.active4}`} onClick={() => this.selectProductType('mens')}>Men</span>
                                </CardBody>
                            </Card>
                        </div><br />
                        <div>
                            {/* Filter functionality in sidebar */}

                            <div class="slidecontainer">
                                <label>Filter By Price</label>
                                <input type="range" min="1" max="599" value={this.state.range}
                                    style={{ width: '100%' }}
                                    onChange={(event) => this.inputHandler('range', event.target.value)}
                                />
                            </div>
                            <button className="filter" onClick={() => this.sortingByPrice('price')} >
                                Filter</button>
                            <label><span>Price: ${this.state.range}- $599 </span></label>
                        </div><br />
                        <div>
                            <label> TOP PRODUCTS </label>
                            <div >
                                {this.state.topProduct ?
                                    this.state.topProduct.map((val) => {
                                        return (
                                            <Card className="top-prod">
                                                <CardBody className="text-center">
                                                    <Row>
                                                        <Col >
                                                            <CardImg style={{ maxHeight: 50, maxWidth: 50, marginRight: 34 }}
                                                                src={val.imageUrl} alt="Card image cap" />
                                                        </Col>

                                                        <div style={{
                                                            position: 'relative',
                                                            textAlign: 'initial'
                                                        }}>
                                                            <span className="fontweight">{val.name}</span><br />
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
                    <Col className="col-md-9 col-sm-9 ml-auto img-card-pos" >
                        <div className="parent">
                            {this.state.filterData ?
                                this.state.currentData.map((val) => {
                                    return (
                                        <Card onClick={() => this.editHandler(val)}
                                            style={{ maxWidth: 250, maxHeight: 500, margin: '3.5%', cursor: 'pointer', marginTop: '10px' }} >
                                            <CardImg top style={{ height: '75%' }}
                                                src={val.imageUrl} alt="Card image cap" />
                                            <CardBody className="text-center" >
                                                <span className="fontweight">{val.name}</span><br />
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
                                            style={{ maxWidth: 250, maxHeight: 500, margin: '3.5%', cursor: 'pointer', marginTop: '10px' }}>
                                            <CardImg top style={{ height: '75%' }}
                                                src={val.imageUrl} alt="Card image cap" />
                                            <CardBody className="text-center">
                                                <span className="fontweight">{val.name}</span><br />
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