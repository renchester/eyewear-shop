import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();

  return <div>werfwer Hello from {productId}</div>;
}
export default ProductPage;
