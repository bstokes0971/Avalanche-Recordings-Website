import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-center gap-8 mb-0 pb-6">
      <Link to="/" className="text-sm text-gray-900 hover:line-through transition-all">
        home
      </Link>
      <Link to="/music" className="text-sm text-gray-900 hover:line-through transition-all">
        music
      </Link>
      <Link to="/visuals" className="text-sm text-gray-900 hover:line-through transition-all">
        visuals
      </Link>
      <Link to="/shop" className="text-sm text-gray-900 hover:line-through transition-all">
        shop
      </Link>
      <Link to="/contact" className="text-sm text-gray-900 hover:line-through transition-all">
        contact
      </Link>
    </nav>
  );
}