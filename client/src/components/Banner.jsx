export default function Banner({ image }) {
	return (
		<div className="relative header__container section__container">
			<div className="z-30 header__content">
				<h4 className="text-gray-700 text-lg uppercase">UP TO 20% Discount on</h4>
				<h1 className="font-bold text-4xl text-gray-900">Cannibis Products</h1>
				<p className="mt-4 text-gray-600">
					Discover the latest CBD trends and express your unique taste
				</p>
				<button className="bg-blue-500 mt-6 px-4 py-2 rounded text-white btn">
					<a href="/shop">EXPLORE NOW</a>
				</button>
			</div>
			<div className="top-0 right-0 absolute w-1/2 header__image">
				<img
					src={image}
					alt="banner image"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
