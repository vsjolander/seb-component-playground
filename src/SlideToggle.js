import * as React from 'react';

const ViewSlideToggle = () => (
    <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1>Slide Toggle</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>
                  <span role="img">🍦</span> Current Vanilla
                </h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="sdv-field-switch-wrap">
                    <input
                      type="checkbox"
                      aria-label="Field label"
                      id="sdv-cb1"
                    />
                    <label htmlFor="sdv-cb1">Field label</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="sdv-field-switch-wrap">
                    <input type="checkbox" aria-label="" id="sdv-cb2" />
                    <label htmlFor="sdv-cb2"> </label>
                  </div>
                </div>
                <table className="sdv-table">
                  <thead>
                    <tr>
                      <th className="sdv-table__primary-col">E-mail setting</th>
                      <th className="sdv-table__numeric-col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Send me critical e-mails regarding my accounts</td>
                      <td className="sdv-table__numeric-col">
                        <div className="sdv-field-switch-wrap">
                          <input type="checkbox" aria-label="" id="sdv-cb5" />
                          <label htmlFor="sdv-cb5"> </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Send me e-mail regarding new SEB products and services
                      </td>
                      <td className="sdv-table__numeric-col">
                        <div className="sdv-field-switch-wrap">
                          <input type="checkbox" aria-label="" id="sdv-cb6" />
                          <label htmlFor="sdv-cb6"></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>
                  <span role="img">🥾</span> Current Bootstrap
                </h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="custom-control custom-slide-toggle">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck478623"
                    />
                    <label className="custom-control-label" htmlFor="customCheck478623">
                      Field label
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-slide-toggle">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck456789"
                    />
                    <label className="custom-control-label" htmlFor="customCheck456789">
                      {" "}
                    </label>
                  </div>
                </div>
                <table className="sdv-table">
                  <thead>
                    <tr>
                      <th className="sdv-table__primary-col">E-mail setting</th>
                      <th className="sdv-table__numeric-col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Send me critical e-mails regarding my accounts</td>
                      <td className="sdv-table__numeric-col">
                        <div className="custom-control custom-slide-toggle">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck12345455"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck12345455"
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Send me e-mail regarding new SEB products and services
                      </td>
                      <td className="sdv-table__numeric-col">
                        <div className="custom-control custom-slide-toggle">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck12345"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck12345"
                          ></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>
                  <span role="img">🔍</span> Discovery
                </h3>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <div className="sdv-field-switch-wrap--suggestion v3 v3--green">
                      <input
                        type="checkbox"
                        aria-label="Field label"
                        id="sdv-FGHDJSALK"
                      />
                      <label htmlFor="sdv-FGHDJSALK">Green</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="sdv-field-switch-wrap--suggestion v3 v3--black">
                      <input
                        type="checkbox"
                        aria-label=""
                        id="sdv-4F56DA4"
                      />
                      <label htmlFor="sdv-4F56DA4">Black</label>
                    </div>
                  </div>
                </form>
                <table className="sdv-table">
                  <thead>
                    <tr>
                      <th className="sdv-table__primary-col">E-mail setting</th>
                      <th className="sdv-table__numeric-col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Send me critical e-mails regarding my accounts</td>
                      <td className="sdv-table__numeric-col">
                        <div className="sdv-field-switch-wrap--suggestion v3">
                          <input
                            type="checkbox"
                            aria-label=""
                            id="sdv-F4DS56AF4AS56"
                          />
                          <label htmlFor="sdv-F4DS56AF4AS56"></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Send me e-mail regarding new SEB products and services
                      </td>
                      <td className="sdv-table__numeric-col">
                        <div className="sdv-field-switch-wrap--suggestion v3">
                          <input
                            type="checkbox"
                            aria-label=""
                            id="sdv-F4D5SA5F6SDA"
                          />
                          <label htmlFor="sdv-F4D5SA5F6SDA"></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
)

export default ViewSlideToggle;