import React from 'react';
import { Link } from "react-router-dom";
import p2p from "./../../../assets/img/p2p.jpg"
import area from "./../../../assets/img/area.jpg"
import beacons from "./../../../assets/img/beacons.jpg"
import planner from "./../../../assets/img/planner.jpg"

function ListCard() {
    return (
        <section className="container p-0">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src={area} className="img-fluid " alt="area" />
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Area</h4>
                            <p className="p-0 m-0">
                            Create interactive area predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/proppy/area">Area Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src={p2p} className="img-fluid " alt="p2p" />
                        </figure>
                        <div className="col-12 p-3">
                            <h4>P2P</h4>
                            <p className="p-0 m-0">
                            Create interactive Point-to-Point predictions.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/proppy/p2p">P2P Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src={beacons} className="img-fluid " alt="beacons" />
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Beacons</h4>
                            <p className="p-0 m-0">
                            Predict propagation from NCDXF/IARU Beacons.
                            </p>
                            <div className="col-12 pt-5 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/proppy/beacons">Beacons Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-3 p-2">
                    <div className="col-12 row m-0 card ">
                        <figure className="col-12 m-0 p-0">
                            <img src={planner} className="img-fluid " alt="planner" />
                        </figure>
                        <div className="col-12 p-3">
                            <h4>Planner</h4>
                            <p className="p-0 m-0">
                            Create publication quality Point-to-Point predictions for multiple circuits.
                            </p>
                            <div className="col-12 pt-4 row justify-content-center align-items-center">
                                <Link className="col-9 row m-0 p-2 btn btn-primary text-white" to="/proppy/planner">Planner Productions</Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default ListCard;