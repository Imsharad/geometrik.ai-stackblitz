import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    { name: "Basic", price: "$9.99/month", features: ["Access to all courses", "Community support"] },
    { name: "Pro", price: "$19.99/month", features: ["Access to all courses", "Priority support", "Downloadable resources"] },
    { name: "Enterprise", price: "Custom", features: ["All Pro features", "Custom course creation", "Dedicated account manager"] },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}