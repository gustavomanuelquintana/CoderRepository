import React from 'react';


function FinallyBuy(){
    return (
        <div className=" divTest">
                <div class="col-sm-12 totalItem">
                  <h6>Finalización Compra</h6>
                </div>
                <hr />
                <div className="col-sm-12">
                  <form>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={order.email}
                        onChange={(e) =>
                          setEmail({ [e.target.name]: e.target.value })
                        }
                        class="form-control"
                        placeholder="Ingrese su E-mail"
                        required
                      ></input>
                      <label>Nombre y Apellido</label>
                      <input
                        name="name"
                        type="text"
                        value={order.name}
                        class="form-control"
                        placeholder="Ingrese su Nombre"
                        onChange={(e) =>
                          setName({ [e.target.name]: e.target.value })
                        }
                        required
                      ></input>
                      <label>Dirección</label>
                      <input
                        name="address"
                        type="text"
                        value={order.adress}
                        placeholder="Ingrese su Dirección"
                        class="form-control"
                        onChange={(e) =>
                          setAddress({ [e.target.name]: e.target.value })
                        }
                        required
                      ></input>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="col-sm-12 buttonDetailCart">
                  <Row>
                    <Col sm="12 buttonsForm">
                      <div className="col-sm-6">
                        <button
                          onClick={createOrder}
                          className="btn btn-success"
                          type="submit"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="col-sm-6 ">
                        <button
                          onClick={() => setOrder({ showCheckout: false })}
                          className="btn btn-dark"
                          type="submit"
                        >
                          Cancelar
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
    )
}

export default FinallyBuy;