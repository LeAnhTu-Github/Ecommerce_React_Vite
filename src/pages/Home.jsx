import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Ecommerce</h1>
        <p className="text-xl text-muted-foreground">
          Your one-stop shop for everything you need
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Description of feature 1</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
            <CardDescription>Description of feature 2</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
            <CardDescription>Description of feature 3</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home

