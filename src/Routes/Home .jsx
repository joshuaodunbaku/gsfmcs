import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { CgProfile } from "react-icons/cg";
import IMAGES from "../assets/Images";

const Home = () => {
	return (
		<>
			<Showcase>
				<div className="container text-center w-50">
					<h1 className="display-3 mb-5">
						Bringing to you{" "}
						<span className="text-warning fw-bold">NEXT LEVEL</span> in Facility
						Management{" "}
					</h1>
					<p className="h1 fw-light">
						Professional House Cleaning Services That Make Your Life Easier
					</p>
				</div>
			</Showcase>

			<div className="container mt-5">
				<h1 className="display-5 mb-4">WHAT WE DO WE DO BEST!</h1>
				<div className="row">
					<div className="col-4">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"}/>
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
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"}/>
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
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column gap-4">
								<div>
									<CgProfile size={"40"}/>
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
       
      <div style={{backgroundImage: IMAGES.image2}}>
        <div className="container"><p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio asperiores adipisci, nobis beatae quod iste, doloremque et laborum sunt recusandae ducimus sint saepe cum tenetur sit officia non excepturi.</p></div>
      </div>
		</>
	);
};

export default Home;
