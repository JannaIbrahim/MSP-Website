import React, { Component } from "react";
import PopUp from "./popUp";
import "./DashboardBestMembersPage.css";
// start import icons
import { FiSearch } from "react-icons/fi";
import { RiLayout2Line } from "react-icons/ri";
import { IoMdNotifications, IoMdAddCircle } from "react-icons/io";
import { FaUserAlt, FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// End import icons

class BestMembers extends Component {
	render() {
		return (

			<div className="containerr">
				<header className="head">
					<h1 className="title_text "> Best Members</h1>

					<div className="div_input  col-3 ">
						<input type="text" className="search_txt" placeholder="Search..." />
						<a className="search_btn">

							<h1 className="sicn">
								<FiSearch className="scn" />
							</h1>
						</a>
					</div>

					<div className="div_icon col-3">
						<a href="#">

							<RiLayout2Line className="icn" />
						</a>
						<a href="#">

							<IoMdNotifications className="icn" />
						</a>
						<a href="#">
							<FaUserAlt className="icn" />
						</a>
					</div>

				</header>

				{/* <!------------------start fieldset----------------> */}

				<fieldset className="field">
					{/* <!------------------start legend--------------------> */}
					<legend className="legen">
						<h2 className="head2">Best Members</h2>
						<div className="legen-icon-box">
							<a href="#">
								
								<IoMdAddCircle className="icna" />
							</a>
							<input
								className="legen-icon-txt"
								type="text"
								name=""
								placeholder="Add Best Member"
							/>
						</div>
					</legend>
					{/* <!------------------end legend--------------------> */}
					{/* <!------------------start table-------------------> */}

					<table className="table-data">
						{/* <!------------------first row--------------------> */}
						<tr className="firstrow">
							<td className="data">Name</td>
							<td className="data">Commity</td>
							<td className="data">Sub Commity</td>
							<td className="data">Month</td>
							<td className="data">Edit\Delete</td>
						</tr>
						{/* <!------------------seacond row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>
							<td className="data icons">
								
								<button className="edde_but">
									<a href="#">
										
										<FaRegEdit className="icnd" />
									</a>
								</button>
                &nbsp;
								<button className="edde_but">
									
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------third row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>

							<td className="data icons">
								
								<button className="edde_but">
									<a href="#">
										
										<FaRegEdit className="icnd" />
									</a>
								</button>
                &nbsp;
								<button className="edde_but">
									
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------forth row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>
							<td className="data icons">
								
								<button className="edde_but">
									<a href="#">
										
										<FaRegEdit className="icnd" />
									</a>
								</button>
                &nbsp;
								<button className="edde_but">
									
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------fifth row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>
							<td className="data icons">
								
								<button className="edde_but">
									<a href="#">
										
										<FaRegEdit className="icnd" />
									</a>
								</button>
                &nbsp;
								<button className="edde_but">
									
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------sixth row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>
							<td className="data icons">
								
								<button className="edde_but">
									<a href="#">
										
										<FaRegEdit className="icnd" />
									</a>
								</button>
                &nbsp;
								<button className="edde_but">
									
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------seventh row--------------------> */}
						<tr>
							<td className="data">Mohamed Ahmed</td>
							<td className="data">Developers</td>
							<td className="data">web</td>
							<td className="data">june</td>
							<td className="data icons">
								{" "}
								<button className="edde_but">
									<a href="#">
										{" "}
										<FaRegEdit className="icnd" />
									</a>
								</button>{" "}
                &nbsp;{" "}
								<button className="edde_but">
									{" "}
									<a href="#">
										{" "}
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
						{/* <!------------------eighth row--------------------> */}
						<tr>
							<td className="lastrow">Mohamed Ahmed</td>
							<td className="lastrow">Developers</td>
							<td className="lastrow">web</td>
							<td className="lastrow">june</td>
							<td className="lastrow icons">
								{" "}
								<button className="edde_but">
									<a href="#">
										{" "}
										<FaRegEdit className="icnd" />
									</a>
								</button>{" "}
                &nbsp;{" "}
								<button className="edde_but">
									{" "}
									<a href="#">
										
										<AiFillDelete onClick={this.pop} className="icnd" />
									</a>
								</button>
							</td>
						</tr>
					</table>
					{/* <!------------------end table--------------------> */}
				</fieldset>
			</div>
		);
	}
}

export default BestMembers;
