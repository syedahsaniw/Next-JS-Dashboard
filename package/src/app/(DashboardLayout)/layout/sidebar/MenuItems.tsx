import { IconWallet } from "@tabler/icons-react";
import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconEdit,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

interface MenuItem {
  navlabel?: boolean;
  subheader?: string;
  id?: string;
  title?: string;
  icon?: React.ElementType;
  href?: string;
}

const Menuitems: MenuItem[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Product",
  },
  {
    id: uniqueId(),
    title: "Product",
    icon: IconEdit,
    href: "/product",
  },
  {
    navlabel: true,
    subheader: "Wallet",
  },
  {
    id: uniqueId(),
    title: "Wallet",
    icon: IconWallet,
    href: "/wallet",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
