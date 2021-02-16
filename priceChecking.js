class Program {
	priceDict = {};
	incorrect = 0;

	constructor(products, productPrice) {
		console.log(products, productPrice);
		// for (let i = 0; i < products.length; i++) {
		// 	this.priceDict[products[i]] = productPrice[i];
		// }
		products.map((item, index) => {
			this.priceDict[item] = productPrice[index];
		});
	}
	priceCheck(productSold, soldPrice) {
		console.log(productSold, soldPrice);

		// for (let i = 0; i < productSold.length; i++) {
		// 	if (productSold[i] in this.priceDict) {
		// 		if (this.priceDict[productSold[i]] !== soldPrice[i]) {
		// 			this.incorrect++;
		// 		}
		// 	} else {
		// 		this.incorrect++;
		// 	}
		// }
		productSold.map((item, i) => {
			if (item in this.priceDict) {
				if (this.priceDict[item] !== soldPrice[i]) {
					this.incorrect++;
				}
			} else {
				this.incorrect++;
			}
		});

		return this.incorrect;
	}
}

let products = [ 'eggs', 'milk', 'cheese' ];
let productPrice = [ 2.89, 3.29, 5.79 ];
let productSold = [ 'eggs', 'eggs', 'milk', 'cheese', 'test', 'aaaa' ];
let soldPrice = [ 2.19, 2.99, 3.29, 5.79, 43.3 ];

let price = new Program(products, productPrice);

let ret = price.priceCheck(productSold, soldPrice);
console.log(ret);
console.log('priceDict:>>', price.priceDict);
console.log('incorrect:>>', price.incorrect);
console.log('test');
