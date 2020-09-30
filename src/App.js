import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
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
                <h3><span role="img">🍦</span> Current Vanilla</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div class="sdv-field-switch-wrap">
                    <input
                      type="checkbox"
                      aria-label="Field label"
                      id="sdv-cb1"
                    />
                    <label for="sdv-cb1">Field label</label>
                  </div>
                </div>
                <div className="form-group">
                  <div class="sdv-field-switch-wrap">
                    <input type="checkbox" aria-label="" id="sdv-cb2" />
                    <label for="sdv-cb2"> </label>
                  </div>
                </div>
                <table class="sdv-table">
                  <thead>
                    <tr>
                      <th class="sdv-table__primary-col">E-mail setting</th>
                      <th class="sdv-table__numeric-col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Send me critical e-mails regarding my accounts</td>
                      <td className="sdv-table__numeric-col">
                        <div class="sdv-field-switch-wrap">
                          <input type="checkbox" aria-label="" id="sdv-cb5" />
                          <label for="sdv-cb5"> </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Send me e-mail regarding new SEB products and services
                      </td>
                      <td className="sdv-table__numeric-col">
                        <div class="sdv-field-switch-wrap">
                          <input type="checkbox" aria-label="" id="sdv-cb6" />
                          <label for="sdv-cb6"></label>
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
                <h3><span role="img">🥾</span> Current Bootstrap</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div class="custom-control custom-slide-toggle">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck478623"
                    />
                    <label class="custom-control-label" for="customCheck478623">
                      Field label
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div class="custom-control custom-slide-toggle">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck456789"
                    />
                    <label class="custom-control-label" for="customCheck456789">
                      {" "}
                    </label>
                  </div>
                </div>
                <table class="sdv-table">
                  <thead>
                    <tr>
                      <th class="sdv-table__primary-col">E-mail setting</th>
                      <th class="sdv-table__numeric-col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Send me critical e-mails regarding my accounts</td>
                      <td className="sdv-table__numeric-col">
                        <div class="custom-control custom-slide-toggle">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck12345455"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck12345455"
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Send me e-mail regarding new SEB products and services
                      </td>
                      <td className="sdv-table__numeric-col">
                        <div class="custom-control custom-slide-toggle">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck12345"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck12345"
                          ></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3><span role="img">1️⃣</span> Suggestions Version 1</h3>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div class="form-group">
                        <div class="sdv-field-switch-wrap--suggestion">
                          <input
                            type="checkbox"
                            aria-label="Field label"
                            id="sdv-cb1321"
                          />
                          <label for="sdv-cb1321">Field label</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="sdv-field-switch-wrap--suggestion">
                          <input type="checkbox" aria-label="" id="sdv-cb256" />
                          <label for="sdv-cb256"></label>
                        </div>
                      </div>
                    </form>
                    <table class="sdv-table">
                      <thead>
                        <tr>
                          <th class="sdv-table__primary-col">E-mail setting</th>
                          <th class="sdv-table__numeric-col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Send me critical e-mails regarding my accounts
                          </td>
                          <td className="sdv-table__numeric-col">
                            <div class="sdv-field-switch-wrap--suggestion">
                              <input
                                type="checkbox"
                                aria-label=""
                                id="sdv-cb5456465"
                              />
                              <label for="sdv-cb5456465"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Send me e-mail regarding new SEB products and
                            services
                          </td>
                          <td className="sdv-table__numeric-col">
                            <div class="sdv-field-switch-wrap--suggestion">
                              <input
                                type="checkbox"
                                aria-label=""
                                id="sdv-cb678452"
                              />
                              <label for="sdv-cb678452"></label>
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
                    <h3><span role="img">2️⃣</span> Suggestions Version 2</h3>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div class="form-group">
                        <div class="sdv-field-switch-wrap--suggestion v2">
                          <input
                            type="checkbox"
                            aria-label="Field label"
                            id="sdv-cb132177899"
                          />
                          <label for="sdv-cb132177899">Field label</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="sdv-field-switch-wrap--suggestion v2">
                          <input type="checkbox" aria-label="" id="sdv-cb25645646" />
                          <label for="sdv-cb25645646"></label>
                        </div>
                      </div>
                    </form>
                    <table class="sdv-table">
                      <thead>
                        <tr>
                          <th class="sdv-table__primary-col">E-mail setting</th>
                          <th class="sdv-table__numeric-col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Send me critical e-mails regarding my accounts
                          </td>
                          <td className="sdv-table__numeric-col">
                            <div class="sdv-field-switch-wrap--suggestion v2">
                              <input
                                type="checkbox"
                                aria-label=""
                                id="sdv-cb545646578974"
                              />
                              <label for="sdv-cb545646578974"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Send me e-mail regarding new SEB products and
                            services
                          </td>
                          <td className="sdv-table__numeric-col">
                            <div class="sdv-field-switch-wrap--suggestion v2">
                              <input
                                type="checkbox"
                                aria-label=""
                                id="sdv-cb67845278979"
                              />
                              <label for="sdv-cb67845278979"></label>
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
        </div>
      </div>
    </div>
  );
}

export default App;
