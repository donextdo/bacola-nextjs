// import Tooltip from '@mui/material/Tooltip';


const CheckoutSidebar = ({ item }: any) => {
    let discountprice;
    discountprice = item.price * (item.discount / 100)
    let newprice = item.price - discountprice

    let subtotal = (item.count) * (newprice)

    const MAX_LENGTH = 20; // Maximum number of characters to display

    let displayName = item.title;
    if (item.title.length > MAX_LENGTH) {
        displayName = item.title.substring(0, MAX_LENGTH) + '...';
    }
    return (
        <tr>
            <td className=" py-3 text-[13px] w-[50%]">
                {/* <Tooltip title={item.title} followCursor> */}

                    <div>
                        {item.title} <span className="font-semibold">× {item.count || 0}</span>
                    </div>
                {/* </Tooltip> */}
                </td>
            <td className=" py-3 text-[15px] text-right">Rs {subtotal.toFixed(2)}</td>
        </tr>
    );
}

export default CheckoutSidebar;