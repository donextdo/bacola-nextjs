const CheckoutSidebar = ({item, setOrderItem, orderItem}:any) => {
 let subtotal = (item.count) * (item.price)

 const orderObj = {
    productId:item._id,
    orderquantity: item.count,
   
   
};
setOrderItem([...orderItem,orderObj])

    return (
        <tr>
            <td className=" py-3 text-[13px] w-[50%]">{item.title} <span className="font-semibold">× {item.count || 0}</span> </td>
            <td className=" py-3 text-[15px] text-right">${subtotal}</td>
        </tr>
    );
}

export default CheckoutSidebar;