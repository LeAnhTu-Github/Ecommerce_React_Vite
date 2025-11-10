import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Learn more about our mission and values
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>What drives us every day</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We are committed to providing the best shopping experience for our customers.
            Our mission is to make online shopping easy, convenient, and enjoyable.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
          <CardDescription>The principles we stand by</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Customer satisfaction is our top priority</li>
            <li>Quality products at competitive prices</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer service</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default About

