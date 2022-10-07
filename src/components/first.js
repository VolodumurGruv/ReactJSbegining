import { useEffect, useState } from "react";

function Checkout(props) {
	// useEffect(props.flushCartHandler());

	return (
		<div className="page-body">
			<div className="page-element">
				<div className="checkout-page">
					<h2>Successful!</h2>

					{/* <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} /> */}
				</div>
			</div>
		</div>
	);
}

export default Checkout;
