const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

