export default function Notification(){
	return (
	<>
		<div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                <i class='bx bxs-bell'></i>
                Notifications
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p class="border border-1 p-3">
                <strong>Liked Photo</strong>
                Some people have liked your post uploaded
            </p>
            <p class="border border-1 p-3">
                <strong>Get Order</strong>
                Some people have placed an order on your store
            </p>
            <p class="border border-1 p-3">
                <strong>Order Placed</strong>
                Your order has been placed
            </p>
        </div>
	</>
	);
}