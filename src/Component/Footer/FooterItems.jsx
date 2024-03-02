import FooterElements from "./FooterElements";
import styles from "./FooterItems.module.css";
import footerLogo from "../../assets/logo.png";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMoreTime } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";

function FooterItems() {
  const footerData = [
    {
      footerLogo: footerLogo,
      para: "Proin velit augue, rutrum sed fringilla ac, congue id lorem. Sed feugiat sed nisl sed ultrices. ",
    },
    {
      companyHead: "Company",
      companyLists: ["About Us", "Our Team", "Services", "Pricicng"],
    },
    {
      solutionHead: "Solutions",
      solutionLists: [
        "IT Management",
        "Cloud Services",
        "Data Center",
        "Software Development",
      ],
    },
    {
      contactHead: "Contact Info",
      infoIcons: [
        <LuMapPin key="LuMapPin" />,
        <MdOutlineMoreTime key="MdOutlineMoreTime" />,
        <LuPhoneCall key="LuPhoneCall" />,
        <MdOutlineAttachEmail key="MdOutlineAttachEmail" />,
      ],
      infoLists: [
        "99, Roving St, Big City",
        "08:00 - 17:00 PM",
        "+123-4356-456",
        "hello@awesomeSites.com",
      ],
    },
  ];

  return (
    <div className={styles.FooterItemsClass}>
      <FooterElements footerData={footerData} />
    </div>
  );
}

export default FooterItems;
