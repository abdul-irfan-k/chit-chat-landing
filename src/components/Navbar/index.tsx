import React from "react";

const Navbar = () => {
  return (
    <div className="fixed  gap-6 p-6 flex items-center bottom-10 left-[50%] translate-x-[-50%] rounded-[16px] bg-[#0D0D0D]">
      <NavItem label="home" />
      <NavItem label="demo" />
      <NavItem label="features" />
      <NavItem label="technology" />
      <NavItem label="get started" />
    </div>
  );
};

export default Navbar;

const NavItem = ({ isActive, label }: { label: string; isActive: boolean }) => {
  return (
    <div className="px-6 py-3 rounded-[16px] border-[1px] text-white">
      {label}
    </div>
  );
};
