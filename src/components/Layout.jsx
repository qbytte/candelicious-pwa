const Layout = ({ children }) => {
  return (
    <div className="bg-light_rose">
      <div>
        Nav
      </div>
      <div className="container mx-auto">
        {children}
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default Layout