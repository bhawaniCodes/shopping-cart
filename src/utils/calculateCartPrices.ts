const applicableTaxPercent = 18;
const discountPercent = 25;
export const calculateCartPrices = (cartItems: object) => {
    let subTotal = Object.values(cartItems).reduce((total, item: any) => {
        return total + (item.price * item.quantity)
    }, 0);
    subTotal = parseFloat(trimTillTwoDecimal(subTotal));
    // 18/100 => .18
    const tax = parseFloat(trimTillTwoDecimal(subTotal * (.18)));
    const discountApplied = parseFloat(trimTillTwoDecimal(subTotal * (.25)));
    const totalAmount = parseFloat(trimTillTwoDecimal(subTotal + tax - discountApplied));

    return {
        subTotal, tax, discountApplied, totalAmount, applicableTaxPercent, discountPercent
    }
}

const trimTillTwoDecimal = (value: number) => {
    return value.toFixed(2);
}