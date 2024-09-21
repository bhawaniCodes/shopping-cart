
export const BillDetail = (props: any) => {
    const { subTotal, tax, discountApplied, totalAmount, applicableTaxPercent, discountPercent } = props.allPrices;
    return (
        <div className="overflow-hidden bg-gray-50 border-gray-400 border-2 shadow-xl sm:w-5/6 w-full m-auto sm:mt-2 mt-5 p-2">
            <div className="text-left text-gray-800 font-semibold text-2xl my-3">
                Bill Details
            </div>
            <div className="flex justify-between font-semibold text-sm mt-1">
                <span> Sub Total</span>
                <span>${subTotal}</span>
            </div>
            <div className="flex justify-between font-semibold text-sm mt-1">
                <span> Tax({applicableTaxPercent}%)</span>
                <span>+ ${tax}</span>
            </div>
            <div className="flex justify-between font-semibold text-sm mt-1">
                <span> Discount applied({discountPercent}%)</span>
                <span>- ${discountApplied}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-base mb-2">
                <span> Total Amount</span>
                <span>${totalAmount}</span>
            </div>
        </div>
    )
}