import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderDetailsModal from "../../../user/components/orders/OrderModal";

const Table = ({ orders }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { isSuccess } = useSelector((state) => state.AdminReducer.updateOrder);

  const handleReviewAction = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setSelectedOrder(null);
      setModalOpen(false);
      window.location.reload();
    }
  }, [isSuccess]);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Order By</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Delivered On</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            let orderStatus =
              order.order_status === "0" && !isSuccess ? (
                <button
                  className="btn btn-success"
                  onClick={() => handleReviewAction(order)}
                >
                  Review & Take Action
                </button>
              ) : (
                "Order Delivered"
              );

            return (
              <tr key={order?.invoice_number}>
                <td>{order?.invoice_number}</td>
                <td>{order?.product_name}</td>
                <td>{order?.user_name}</td>
                <td>{`${order?.shop_address}, ${order?.city}, ${order.pincode}`}</td>
                <td>{order?.contact_num}</td>
                <td>{orderStatus}</td>
                <td>{order?.delivered_on}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Table;
