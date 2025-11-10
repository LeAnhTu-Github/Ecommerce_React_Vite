import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Ecommerce
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

