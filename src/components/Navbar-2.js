import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function CustomLinkExample() {
	return (
		<nav className="nav-wrapper">
			<div className="container">
				<Link to="/" className="brand-logo">Shopping</Link>
				<ul className="right">
					<li><OldSchoolMenuLink
						activeOnlyWhenExact={true}
						to="/"
						label="Home"
					/></li>
					<li><OldSchoolMenuLink to="/about" label="About"/></li>
					<li><OldSchoolMenuLink to="/AkGallery" label="AkGallery"/></li>
					<li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
				</ul>
			</div>
		</nav>

	)
}

function OldSchoolMenuLink({label, to, activeOnlyWhenExact}) {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact
	});

	return (
		<div className={match ? "active" : ""}>

			<Link to={to}>{label}</Link>
		</div>
	);
}

