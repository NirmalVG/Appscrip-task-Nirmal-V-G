import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import ProductList from "@/components/ProductList/ProductList";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data, "data");
  return (
    <main>
      <Container fluid>
        <HomeBanner />
        <ProductList props={data} />
      </Container>
    </main>
  );
}
