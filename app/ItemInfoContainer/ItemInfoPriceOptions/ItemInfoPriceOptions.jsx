import React from 'react';
import ItemInfoOptionDropdown from './ItemInfoOptionDropdown.jsx';

class ItemInfoPriceOptions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      priceString: this.props.pricedOptions[0] || this.props.singlePrice || "0.00", // priceAdder, with plus sign if lowAdd/highAdd populated
      lowAdd: 0,
      highAdd: 0,
      priceAdder: 0,
    };
    // this.handleDropdownPrice = handleDropdownPrice.bind(this);
  }
  
  handleDropdownPrice(selectedPrice, lowPrice, highPrice){
    // this.setState()
    // if no option selected, add low price to state.lowAdd and high price to state.highAdd
    // if option is selected, add price to state.priceAdder
  }
  

  render(){return (
    <div className='item-info-price-options'>

      {/* price */}
      <div className="d-flex align-items-center">
        <h3 style={{marginBottom: 0}} className="mr-2">${this.state.priceString}</h3>
        <p style={{marginBottom: 0}}><del>{this.props.singlePrice*1.5}</del></p>
      </div>      {/* price options */}
      <div>
        {/* {console.log(this.props)} */}
        {this.props.pricedOptions.map((optionGroup, index)=>
          <ItemInfoOptionDropdown 
            key={`optionGroup${index}`}
            optionGroup={optionGroup}
            // onChange={this.handleDropdownPrice}
            />
          )}
      </div>
      {/* no cost options */}
      <div>
        {this.props.unpricedOptions.map((optionGroup, index)=>
          <ItemInfoOptionDropdown 
          key={`optionGroup${index}`}
          optionGroup={optionGroup}
          // onChange={this.handleDropdownPrice}
          />
          )}
      </div>
      {/* custom options */}
      {(() => {
        if(typeof this.props.customOptions==='object'){
          return (
            <div>
              <label>
                {this.props.customOptions.label}
                <div>
                  {this.props.customOptions.note}
                </div>
                <textarea cols={40} rows={1} placeholder={this.props.customOptions.default} />
              </label>
            </div>
          )
        } else {
          return (
            <div></div>
          )
        }
      })()}

      {/* quantity */}
      <div className="form-group">
        <label>Quantity</label>
        <select className='item-info-quantity form-control'>
            {[1,2,3,4,5,6,7,8,9,10].map(val=>
              <option key={val}>{val}</option>
              )}

        </select>
      </div>
    </div>
  )}
};

export default ItemInfoPriceOptions;