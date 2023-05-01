const CheckoutSidebar = ({item}:any) => {
    let discountprice;
    discountprice = item.price * (item.discount/100)
  let newprice=item.price-discountprice

 let subtotal = (item.count) * (newprice)


    return (
        <tr>
            <td className=" py-3 text-[13px] w-[50%]">{item.title} <span className="font-semibold">× {item.count || 0}</span> </td>
            <td className=" py-3 text-[15px] text-right">${subtotal.toFixed(2)}</td>
        </tr>
    );
}

export default CheckoutSidebar;