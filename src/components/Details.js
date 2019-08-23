import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
          <ProductConsumer>
              {value => {
                  const {id,title,company,img,price,inCart,info} = value.detailProduct;
                  return (
                    <div className="container">
                        {/* Title */}
                            <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                    {/* end Title */}
                                    {/* Product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} alt="Product" className="img-fluid"/>    
                                    </div>
                                    {/* product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h3>Model By : {title}</h3>
                                        <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">{company}</span>
                                        </h5>
                                        <h4 className="text-blue mt-2">
                                            <strong>
                                                Price : <span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3">
                                            Some Info About Product :
                                        </p>
                                        <p className="text-muted leadx">
                                            {info}
                                        </p>
                                    
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back To Product</ButtonContainer>
                                        </Link>
                                    
                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                          {inCart ? "inCart" : "Add to Cart" }
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  )
              }}
          </ProductConsumer>  
        );
    }
}
