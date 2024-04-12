import { Link, useLocation } from "react-router-dom";

import "./style.css";

import { useState } from "react";
// const NavBar = () => {
//   const location = useLocation();
//   const { pathname } = location;
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [isProductDropdownVisible, setProductDropdownVisible] = useState(false);
//   const [isSupDropdownVisible, setSupDropdownVisible] = useState(false);
//   const [isSupplierDropdownVisible, setSupplierDropdownVisible] =
//     useState(false);
//   const [isMaterialDropdownVisible, setMaterialDropdownVisible] =
//     useState(false);

//   const handleMouseEnter = () => {
//     setDropdownVisible(true);
//     console.log("mouseEnter");
//   };

//   const handleMouseLeave = () => {
//     setDropdownVisible(false);
//     setSupplierDropdownVisible(false);
//     console.log("mouseLeave");
//   };
//   const handleProductMouseEnter = () => {
//     setProductDropdownVisible(true);
//     setSupplierDropdownVisible(false);
//     console.log("mouseEnter");
//   };

//   const handleProductMouseLeave = () => {
//     setProductDropdownVisible(false);
//     setSupplierDropdownVisible(false);
//     console.log("mouseLeave 1");
//   };
//   const handleSupplierMouseEnter = () => {
//     setSupplierDropdownVisible(true);
//     console.log("mouseEnter 1");
//   };

//   const handleSupplierMouseLeave = () => {
//     setSupplierDropdownVisible(false);
//     console.log("mouseLeave 2");
//   };
//   const handleMaterialMouseEnter = () => {
//     setMaterialDropdownVisible(true);
//     console.log("mouseEnter 2");
//   };

//   const handleMaterialMouseLeave = () => {
//     setMaterialDropdownVisible(false);
//     // console.log("mouseLeave");
//   };
//   const handleSupMouseEnter = () => {
//     setSupDropdownVisible(true);
//     console.log("mouseEnter");
//   };

//   const handleSupMouseLeave = () => {
//     setSupDropdownVisible(false);
//     // console.log("mouseLeave");
//   };
//   const DropdownMenu = () => {
//     return (
//       <div className="dropdown-menu rounded-md absolute top-36">
//         <ul className="flex flex-col items-center w-32 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//           <li>B2B</li>
//           <li>B2C</li>
//         </ul>
//       </div>
//     );
//   };
//   const SupplierDropdownMenu = () => {
//     return (
//       <div className="dropdown-menu rounded-md absolute top-36">
//         <ul
//           className="flex flex-col w-36 text-[#37475C] font-normal divide-y divide-[#B3B3B3] items-center"
//           onMouseLeave={handleSupplierMouseLeave}
//         >
//           <li>Overview </li>
//           <li>Category</li>
//           <li
//             className="flex flex-row"
//             onMouseEnter={handleMaterialMouseEnter}
//             onMouseLeave={handleMaterialMouseLeave}
//           >
//             Material{" "}
//             <div className="ml-4 text-[#37475C] font-bold text-xl mb-1">
//               {">"}
//               {isMaterialDropdownVisible && (
//                 <div className="dropdown-menu ml-12 rounded-md absolute top-36">
//                   <ul className="flex flex-col items-center w-40 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//                     <li>M6BAC013</li>
//                     <li>M8BXT863</li>
//                     <li className="flex flex-row">M12KXP10</li>
//                     <li className="flex flex-row">M17CAT03</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </li>
//           <li
//             className="flex flex-row"
//             onMouseEnter={handleSupMouseEnter}
//             onMouseLeave={handleSupMouseLeave}
//           >
//             Supplier{" "}
//             <div className="ml-4 text-[#37475C] font-bold text-xl mb-1">
//               {">"}
//               {isSupDropdownVisible && (
//                 <div className="flex flex-row dropdown-menu ml-12 rounded-md absolute top-44">
//                   <ul className="flex flex-col items-center w-40 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//                     <li>Tier 1</li>
//                     <li>Tier 2</li>
//                     <li>Tier 3</li>
//                     <li>Tier 4</li>
//                     <li>Tier 5</li>
//                   </ul>
//                   <ul className="flex flex-col items-center w-40 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//                     <li>P62CT167</li>
//                     <li>P62CT236</li>
//                     <li>P62CT667</li>
//                     <li>P62CT472</li>
//                     <li>P62CT897</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </li>
//         </ul>
//       </div>
//     );
//   };
//   const ProductDropdownMenu = () => {
//     return (
//       <div className="flex flex-row dropdown-menu rounded-md absolute top-36">
//         <ul className="w-36 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//         </ul>
//         <ul className="w-36 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//         </ul>
//         <ul className="w-36 text-[#37475C] font-normal divide-y divide-[#B3B3B3]">
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//           <li>PA8231US</li>
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <>
//       <ul className="flex items-center">
//         <li>
//           <Link
//             className={`ml-6 ${
//               pathname === "/" ? "text-[#37475C] text-xl font-bold" : ""
//             }`}
//             to="/"
//             onMouseEnter={handleSupplierMouseLeave}
//           >
//             Eneterprise
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`ml-6 ${
//               pathname === "/dashboard" ? "text-[#37475C] text-xl font-bold" : ""
//             }`}
//             to="/dashboard"
//           >
//             <div
//               className="menu -mt-6"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="relative">Business</div>
//               {isDropdownVisible && <DropdownMenu />}
//             </div>
//           </Link>
//         </li>

//         <li>
//           <Link
//             className={`ml-6 ${
//               pathname === "/product" ? "text-[#37475C] text-xl font-bold" : ""
//             }`}
//             to="/product"
//           >
//             <div
//               className="menu -mt-6"
//               onMouseEnter={handleProductMouseEnter}
//               onMouseLeave={handleProductMouseLeave}
//             >
//               <div className="relative">Product</div>
//               {isProductDropdownVisible && <ProductDropdownMenu />}
//             </div>
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`ml-6 ${
//               pathname === "/supplier" ? "text-[#37475C] text-xl font-bold" : ""
//             }`}
//             to="/supplier"
//           >
//             <div
//               className="menu -mt-6"
//               onMouseEnter={handleSupplierMouseEnter}
//               onMouseLeave={handleSupplierMouseLeave}
//             >
//               <div className="relative">Supplier Chain</div>
//               {isSupplierDropdownVisible && <SupplierDropdownMenu />}
//             </div>
//           </Link>
//         </li>
//       </ul>
//     </>
//   );
// };

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Enterprise</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
          <ul className="submenu">
            <li>
              <Link to="/business/overview">B2B</Link>
            </li>
            <li>
              <Link to="/business/services">B2C</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/product">Product</Link>

          <ul className="submenu">
            <li>
              <div className="megaMenu">
                <ul>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                  <li>
                    <Link to="/supplier-chain/vendors">PA8231US</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/supplier-chain">Supplier Chain</Link>
          <ul className="submenu">
            <li>
              <Link to="/supplier-chain/vendors">Overview</Link>
            </li>
            <li>
              <Link to="/supplier-chain/logistics">Category</Link>
            </li>
            <li>
              <Link to="/supplier-chain/nested-submenu">Material</Link>
              <ul className="nested-submenu">
                <li>
                  <Link to="/supplier-chain/nested-submenu/item1">
                    M6BAC013
                  </Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">
                    M8BXT863
                  </Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">
                    M12KXP10
                  </Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">
                    M17CAT03
                  </Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">
                    M47MTJ19
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/supplier-chain/nested-submenu">Supplier</Link>
              <ul className="nested-submenu">
                <li>
                  <Link to="/supplier-chain/nested-submenu/item1">Tier 1</Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">Tier 2</Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">Tier 3</Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">Tier 4</Link>
                </li>
                <li>
                  <Link to="/supplier-chain/nested-submenu/item2">Tier 5</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
