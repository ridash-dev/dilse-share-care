
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-dilse-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-xl font-heading font-semibold text-dilse-600">DilSeDonate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-dilse-600 animate-hover font-medium">
              Home
            </Link>
            <Link to="/donate" className="text-gray-700 hover:text-dilse-600 animate-hover font-medium">
              Donate
            </Link>
            <Link to="/organizations" className="text-gray-700 hover:text-dilse-600 animate-hover font-medium">
              Organizations
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-dilse-600 animate-hover font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-dilse-600 animate-hover font-medium">
              Contact
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-dilse-500 text-dilse-600 hover:bg-dilse-50">
                    <User className="h-4 w-4 mr-2" />
                    <span>Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-500 focus:text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="border-dilse-500 text-dilse-600 hover:bg-dilse-50">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-dilse-500 hover:bg-dilse-600">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-dilse-200 rounded-md p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/donate"
                className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                to="/organizations"
                className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Organizations
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-dilse-600 px-4 py-2 rounded-md hover:bg-dilse-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-500 hover:text-red-600 flex items-center px-4 py-2 rounded-md hover:bg-red-50 text-left"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex space-x-2 px-4">
                  <Link to="/login" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-dilse-500 text-dilse-600 hover:bg-dilse-50">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-dilse-500 hover:bg-dilse-600">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
