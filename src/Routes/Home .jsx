import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { CgProfile } from "react-icons/cg";
import IMAGES from "../assets/Images";
import "../Components/Styles/HomeStyle.css";
import { Button } from "react-bootstrap";

const Home = () => {
	return (
		<>
			<Showcase>
				<div className="container text-center w-50">
					<h1 className="display-4 mb-3 fw-normal">
						Bringing to you{" "}
						<span className="text-warning fw-bold">NEXT LEVEL</span> in Facility
						Management{" "}
					</h1>
					<p className="h2 fw-light rubik-doodle-shadow-regular italisize">
						Professional House Cleaning Services That Make Your Life Easier
					</p>
				</div>
			</Showcase>
			{/*  */}
			<div className="container my-5">
				<h1 className="display-5 mb-4">WHAT WE DO WE DO BEST!</h1>
				<div className="row">
					<div className="col-4">
						<div className="p-5 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"} />
								</div>
								<h3>A header here</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vitae, quaerat quia, at consequuntur distinctio dicta, a
									soluta ducimus ut officiis quisquam sapiente debitis cum
									asperiores est. Iure possimus quae eos?
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="p-5 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"} />
								</div>
								<h3>A header here</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vitae, quaerat quia, at consequuntur distinctio dicta, a
									soluta ducimus ut officiis quisquam sapiente debitis cum
									asperiores est. Iure possimus quae eos?
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="p-5 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"} />
								</div>
								<h3>A header here</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vitae, quaerat quia, at consequuntur distinctio dicta, a
									soluta ducimus ut officiis quisquam sapiente debitis cum
									asperiores est. Iure possimus quae eos?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<div
				id="aboutUs"
				className="d-flex flex-column align-items-center justify-content-center text-light"
			>
				<div className="container py-5">
					<div className="row py-3">
						<div className="col-12 col-md-5 order-1 order-md-0 text-center">
							<div className="p-2">
								<img
									className="rounded-4"
									src={IMAGES.image2}
									alt=""
									height={"500px"}
									// width={"340px"}
									style={{
										width: "340px",
										maxWidth: "100%",
									}}
								/>
							</div>
						</div>
						<div className="col-12 col-md-7 order-0 order-md-1 d-flex flex-column align-items-center justify-content-center">
							<div className="p-2">
								<h2 className="display-4">Professional and Reliable</h2>
								<div>
									<p>
										We're here to help and would love to hear from. You can
										reach us easily through our website contact form, by eamail,
										or by phone
									</p>
									<p>
										Contact us today - we look forward to connecting with you!
									</p>
								</div>
								<div>
									<Button variant="dark" size="lg" className="rounded-pill">
										View Services
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
