import Container from "@/components/Container";
import getProducts, { ProductParams } from "../actions/getProducts";
import EmptyState from "@/components/EmptyState";
import ProductCard from "@/components/ProductCard";
import getCurrentUser from "../actions/getCurrentUser";
import FloatingButton from "@/components/FloatingButton";
import { FaPlus } from "react-icons/fa";

interface HomeProps {
  searchParams: ProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  console.log(products);
  return (
    <Container>
      {/* Category */}
      {products?.data.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className=" grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 ">
            {products.data.map((product) => (
              <ProductCard
                key={product.id}
                currentUser={currentUser}
                data={product}
              />
            ))}
          </div>
        </>
      )}
      <FloatingButton href="/products/upload">
        <FaPlus />
      </FloatingButton>
    </Container>
  );
}
