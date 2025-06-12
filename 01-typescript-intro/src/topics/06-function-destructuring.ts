export interface Product {
    description: string;
    price: number;

};
const phone: Product = {
    description: ' Nokia A1 ',
    price: 150.0,
};
const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
};

interface taxCalculationOptions {
    tax: number;
    products: Product[];
};
export function taxCalculation(options: taxCalculationOptions): number[] {
    let total = 0;
    options.products.forEach(product => {
        total += product.price;
    })
    return [total, total * options.tax];
};


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total , taxTotal]= taxCalculation({
    products: shoppingCart,
    tax: tax,
});
