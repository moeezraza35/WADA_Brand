export default function Notification(){
	return (
	<div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="notification" aria-labelledby="offcanvasScrollingLabel">
		<div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                <i className='bx bxs-bell'></i>
                Notifications
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <p className="border border-1 p-3">
                <strong>Liked Photo</strong>
                Some people have liked your post uploaded
            </p>
            <p className="border border-1 p-3">
                <strong>Get Order</strong>
                Some people have placed an order on your store
            </p>
            <p className="border border-1 p-3">
                <strong>Order Placed</strong>
                Your order has been placed
            </p>
        </div>
	</div>
	);
}