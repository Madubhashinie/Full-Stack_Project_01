import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  const name = "Tharushi";
  const cartCount = 2;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4 w-[500px]">
        <Card className="border-2">
          <CardHeader>
            <Badge className="w-fit">New</Badge>
            <CardTitle>Product Name</CardTitle>
            <CardDescription>Product Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Product Content</p>
          </CardContent>
          <CardFooter>            
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;