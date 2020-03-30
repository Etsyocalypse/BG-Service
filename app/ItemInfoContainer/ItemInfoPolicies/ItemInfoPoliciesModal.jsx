import React from 'react';

class ItemInfoPoliciesModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      policyModalOpen: false,
    }
  }
  render(){
    return (
      <div>
        <button
          className="item-info-policies-modal-button btn btn-showMore"
          data-toggle="modal"
          data-target="#polociesModal"
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "13px",
            fontWeight: "bold"
          }}
        >
          View shop policies
        </button>
        <div className="modal" id="polociesModal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Shop polocies for:
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
          {`Exchanges: ${this.props.exchanges}`}
          {`Returns: ${this.props.returns}`}
          {`Refunds: ${this.props.refunds}`}
          {`Payments: ${this.props.paymentsAccepted}`}
          {this.props.customPolicies.map((policy, index) => (
            <div key={`policy${index}`} className="item-info-policy-details">
              <div>{policy.heading}</div>
              <div>{policy.description}</div>
            </div>
            ))}
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
};

export default ItemInfoPoliciesModal;