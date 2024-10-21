import React from "react";

const NotFound: React.FC = () => (
	<div className={`text-center p-8 min-h-screen flex justify-center mx-auto items-center `}>
		<div className="container">
			<h1 className="text-lg text-red-500 lg:text-3xl font-bold">404 - Page Not Found</h1>
			<p className="text-sm font-medium text-gray-800/60 lg:text-base">The page you are looking for does not exist.</p>
		</div>
	</div>
);

export default NotFound;
