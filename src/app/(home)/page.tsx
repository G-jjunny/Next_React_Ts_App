import Container from "@/components/Container";
import getProducts, { ProductParams } from "../actions/getProducts";
import EmptyState from "@/components/EmptyState";

interface HomeProps {
  searchParams: ProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  console.log(products);
  return (
    <Container>
      {/* Category */}
      {products?.data.length !== 0 ? <EmptyState /> : <></>}
    </Container>
  );
}
