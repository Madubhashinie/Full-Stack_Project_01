import { Link } from "react-router-dom";
function CheckoutPage() {
  return (
    <main className="px-8"> 
        <h2 className="text-4xl font-bold">Checkout Page</h2>
        <div>
        <Link to="/shop/payment">Proceed Payment</Link>
        </div>
    </main>
   
  );
}
export default CheckoutPage;